/*=====================================================
                FIREBASE.JS
======================================================
    MODELO SIMPLIFICADO (100% anónimo):
    Ya no se guarda nombre, celular ni correo de nadie
    en ningún lado. Solo existe UNA colección,
    "contadores_regalos", con un documento por regalo
    que guarda cuántas unidades han sido reservadas
    (ej. { reservados: 1 }). Ese número es lo único que
    viaja entre el navegador de los invitados y la base
    de datos, así que no hay ningún dato personal que
    proteger ni que se pueda filtrar.
======================================================*/

/*=====================================================
                IMPORTS
======================================================*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {

    getFirestore,

    collection,

    doc,

    getDocs,

    onSnapshot,

    runTransaction

} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

/*=====================================================
                CONFIGURACIÓN
======================================================*/

const firebaseConfig = {

    apiKey: "AIzaSyAQi7_ZteNRV1KkS_RoZFI2Itug2q9Q2Pk",

    authDomain: "apartashower-julieth.firebaseapp.com",

    projectId: "apartashower-julieth",

    storageBucket: "apartashower-julieth.firebasestorage.app",

    messagingSenderId: "77500433763",

    appId: "1:77500433763:web:2b9fb10f68dbc7af65bf56"

};

/*=====================================================
                INICIALIZAR
======================================================*/

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const CONTADORES = "contadores_regalos";

window.FirebaseDB = {

    db,

    CONTADORES

};

/*=====================================================
            RESERVAR (sin datos personales)
======================================================
    Transacción atómica: lee cuántas unidades del
    regalo ya están reservadas y, solo si todavía hay
    cupo (reservadosActuales < cantidadTotal), suma 1.
    Si dos invitados confirman al mismo tiempo, Firestore
    reintenta la transacción para que nunca se pase del
    total disponible.
======================================================*/

async function guardarReservaFirebase(regaloInfo){

    try{

        const contadorRef = doc(

            db,
            CONTADORES,
            String(regaloInfo.id)

        );

        await runTransaction(db, async (transaccion) => {

            const contadorSnap = await transaccion.get(contadorRef);

            const reservadosActuales = contadorSnap.exists()
                ? (contadorSnap.data().reservados || 0)
                : 0;

            const cantidadTotal = regaloInfo.cantidad || 1;

            if(reservadosActuales >= cantidadTotal){

                throw new Error(
                    "Este regalo ya fue reservado."
                );

            }

            transaccion.set(
                contadorRef,
                { reservados: reservadosActuales + 1 },
                { merge: true }
            );

        });

        console.log("Reserva registrada (anónima).");

        return true;

    }
    catch(error){

        console.error(error);

        throw error;

    }

}

/*=====================================================
        LIBERAR UNA UNIDAD DE UN REGALO
======================================================
    Para cuando el organizador necesita corregir una
    reserva manualmente (por ejemplo, si alguien avisó
    que ya no puede traer el regalo). Simplemente resta
    1 al contador, nunca queda en negativo.
======================================================*/

async function liberarRegalo(idRegalo){

    try{

        const contadorRef = doc(

            db,
            CONTADORES,
            String(idRegalo)

        );

        await runTransaction(db, async (transaccion) => {

            const contadorSnap = await transaccion.get(contadorRef);

            const actual = contadorSnap.exists()
                ? (contadorSnap.data().reservados || 0)
                : 0;

            transaccion.set(
                contadorRef,
                { reservados: Math.max(0, actual - 1) },
                { merge: true }
            );

        });

        return true;

    }
    catch(error){

        console.error(error);

        return false;

    }

}

/*=====================================================
            ESCUCHAR CAMBIOS EN VIVO
======================================================*/

function escucharReservas() {

    const contadoresRef = collection(db, CONTADORES);

    onSnapshot(contadoresRef, (snapshot) => {

        const conteos = {};

        snapshot.forEach((doc) => {

            conteos[doc.id] = doc.data().reservados || 0;

        });

        actualizarReservasLocales(conteos);

        console.log("Disponibilidad sincronizada.");

    }, (error) => {

        console.error("Error al escuchar Firestore:", error);

    });

}

/*=====================================================
        ACTUALIZAR TARJETAS EN PANTALLA
======================================================*/

function actualizarReservasLocales(conteos){

    if(typeof gifts === "undefined") return;

    gifts.forEach(regalo => {

        regalo.reservados = conteos[regalo.id] || 0;

    });

    if(typeof actualizarEstados === "function"){

        actualizarEstados();

    }

    if(typeof renderizarRegalosGift === "function"){

        renderizarRegalosGift(
            typeof regalosFiltrados !== "undefined"
                ? regalosFiltrados
                : gifts
        );

    }

}

/*=====================================================
        EXPORTAR FUNCIONES
======================================================*/

window.FirebaseDB.guardarReserva = guardarReservaFirebase;

window.FirebaseDB.liberarRegalo = liberarRegalo;

window.FirebaseDB.escucharReservas = escucharReservas;

/*=====================================================
            ESTADO FIREBASE
======================================================*/

const FirebaseService = {

    conectado: false,

    ultimaActualizacion: null

};

async function verificarFirebase(){

    try{

        await getDocs(collection(db, CONTADORES));

        FirebaseService.conectado = true;

        FirebaseService.ultimaActualizacion = new Date();

        console.log("Firebase conectado.");

        return true;

    }
    catch(error){

        FirebaseService.conectado = false;

        console.error(error);

        return false;

    }

}

function estadoFirebase(){

    return{

        conectado: FirebaseService.conectado,

        ultimaActualizacion: FirebaseService.ultimaActualizacion

    };

}

async function reconectarFirebase(){

    console.log("Reconectando...");

    const conectado = await verificarFirebase();

    if(conectado){

        escucharReservas();

    }

    return conectado;

}

async function iniciarFirebase(){

    console.log("================================");

    console.log("Firebase iniciado");

    console.log("Proyecto: apartashower-julieth");

    console.log("================================");

    await verificarFirebase();

    escucharReservas();

}

window.addEventListener("online", () => {

    reconectarFirebase();

});

window.addEventListener("offline", () => {

    FirebaseService.conectado = false;

    console.warn("Sin conexión.");

});

window.FirebaseDB.estado = estadoFirebase;

window.FirebaseDB.reconectar = reconectarFirebase;

window.FirebaseDB.iniciar = iniciarFirebase;

document.addEventListener("DOMContentLoaded", () => {

    iniciarFirebase();

});

/*=====================================================
                FIN FIREBASE.JS
======================================================*/
