/*=====================================================
    APARTA SHOWER
    GIFTS.JS
    PARTE 1
======================================================*/

/*=====================================================
                    CONFIGURACIÓN
======================================================*/

const APP_CONFIG = {

    appName: "Aparta Shower",

    version: "1.0.0",

    moneda: "COP",

    maxSearchResults: 50,

    ordenarPor: "categoria"

};

/*=====================================================
                    CATEGORÍAS
======================================================*/

const CATEGORIAS = {

    COCINA: "Cocina",

    COMEDOR: "Comedor",

    HABITACION: "Habitación",

    BANO: "Baño",

    SALA: "Sala",

    LAVANDERIA: "Lavandería",

    DINERO: "Lluvia de Sobres",

    SORPRESA: "Sorpresas"

};

/*=====================================================
                    REGALOS
======================================================*/

const gifts = [

    {
        id: 1,
        nombre: "Arrocera",
        categoria: CATEGORIAS.COCINA,
        icono: "🍚",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 2,
        nombre: "Sanduchera",
        categoria: CATEGORIAS.COCINA,
        icono: "🥪",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 3,
        nombre: "Picadora",
        categoria: CATEGORIAS.COCINA,
        icono: "🔪",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 4,
        nombre: "Licuadora",
        categoria: CATEGORIAS.COCINA,
        icono: "🥤",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 5,
        nombre: "Exprimidora",
        categoria: CATEGORIAS.COCINA,
        icono: "🍊",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 6,
        nombre: "Olla Express",
        categoria: CATEGORIAS.COCINA,
        icono: "🍲",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 7,
        nombre: "Vajilla",
        categoria: CATEGORIAS.COMEDOR,
        icono: "🍽️",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 8,
        nombre: "Cubiertos",
        categoria: CATEGORIAS.COMEDOR,
        icono: "🍴",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 9,
        nombre: "Juego de Vasos",
        categoria: CATEGORIAS.COMEDOR,
        icono: "🥛",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 10,
        nombre: "Juego de Sartenes",
        categoria: CATEGORIAS.COCINA,
        icono: "🍳",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 11,
        nombre: "Juego de Ollas",
        categoria: CATEGORIAS.COCINA,
        icono: "🥘",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 12,
        nombre: "Tablas para Picar y Juego de Cuchillos",
        categoria: CATEGORIAS.COCINA,
        icono: "🪵",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 13,
        nombre: "Cafetera",
        categoria: CATEGORIAS.COCINA,
        icono: "☕",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 14,
        nombre: "Juego de Sábanas + Almohadas",
        categoria: CATEGORIAS.HABITACION,
        icono: "🛏️",
        cantidad: 3,
        reservados: 0,
        disponible: true
    },

    {
        id: 15,
        nombre: "Organizador de Cocina",
        categoria: CATEGORIAS.COCINA,
        icono: "🗄️",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 16,
        nombre: "Escurridor de Platos",
        categoria: CATEGORIAS.COCINA,
        icono: "🧺",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 17,
        nombre: "Cubrelecho",
        categoria: CATEGORIAS.HABITACION,
        icono: "🛌",
        cantidad: 2,
        reservados: 0,
        disponible: true
    },

    {
        id: 18,
        nombre: "Juego de Toallas",
        categoria: CATEGORIAS.BANO,
        icono: "🛁",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 19,
        nombre: "Kit de Aseo para Apartamento",
        categoria: CATEGORIAS.LAVANDERIA,
        icono: "🧹",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 20,
        nombre: "Sorpresa Cocina",
        categoria: CATEGORIAS.SORPRESA,
        icono: "🎁",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 21,
        nombre: "Sorpresa Baño",
        categoria: CATEGORIAS.SORPRESA,
        icono: "🎁",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 22,
        nombre: "Sorpresa Sala",
        categoria: CATEGORIAS.SORPRESA,
        icono: "🎁",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 23,
        nombre: "Sorpresa Habitación",
        categoria: CATEGORIAS.SORPRESA,
        icono: "🎁",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 24,
        nombre: "Sorpresa Zona de Ropa",
        categoria: CATEGORIAS.SORPRESA,
        icono: "🎁",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 25,
        nombre: "Lluvia de Sobres",
        categoria: CATEGORIAS.DINERO,
        icono: "💌",
        cantidad: 5,
        reservados: 0,
        disponible: true
    },

    {
        id: 26,
        nombre: "Refractarias de Vidrio",
        categoria: CATEGORIAS.COCINA,
        icono: "🍱",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 27,
        nombre: "Bandejas",
        categoria: CATEGORIAS.COCINA,
        icono: "🍽️",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 28,
        nombre: "Kit para Ensaladas",
        categoria: CATEGORIAS.COCINA,
        icono: "🥗",
        cantidad: 1,
        reservados: 0,
        disponible: true
    },

    {
        id: 29,
        nombre: "Difusor de Aceites Esenciales",
        categoria: CATEGORIAS.SALA,
        icono: "🕯️",
        cantidad: 1,
        reservados: 0,
        disponible: true
    }

];

/*=====================================================
                VARIABLES GLOBALES
======================================================*/


let regalosFiltrados = [...gifts];

// Antes se inicializaba en app.js (ya eliminado). Sin esto,
// leer "regaloSeleccionado" antes de la primera selección
// lanzaba un ReferenceError en vez de simplemente ser null.
window.regaloSeleccionado = null;

/*=====================================================
                FIN PARTE 1
======================================================*/
/*=====================================================
    APARTA SHOWER
    GIFTS.JS
    PARTE 2
======================================================*/

/*=====================================================
            OBTENER TODOS LOS REGALOS
======================================================*/

function obtenerRegalos() {

    return regalosFiltrados;

}

/*=====================================================
            BUSCAR REGALO POR ID
======================================================*/

function obtenerRegaloPorId(id) {

    return gifts.find(regalo => regalo.id === Number(id));

}

/*=====================================================
            BUSCAR POR NOMBRE
======================================================*/

function buscarRegalos(texto) {

    if (!texto || texto.trim() === "") {

        regalosFiltrados = [...gifts];

        return regalosFiltrados;

    }

    const busqueda = texto.toLowerCase().trim();

    regalosFiltrados = gifts.filter(regalo =>
        regalo.nombre.toLowerCase().includes(busqueda)
    );

    return regalosFiltrados;

}

/*=====================================================
            FILTRAR POR CATEGORÍA
======================================================*/

function filtrarPorCategoria(categoria) {

    if (!categoria || categoria === "Todas") {

        regalosFiltrados = [...gifts];

        return regalosFiltrados;

    }

    regalosFiltrados = gifts.filter(regalo =>
        regalo.categoria === categoria
    );

    return regalosFiltrados;

}

/*=====================================================
            ORDENAR ALFABÉTICAMENTE
======================================================*/

function ordenarPorNombre() {

    regalosFiltrados.sort((a, b) =>
        a.nombre.localeCompare(b.nombre, "es")
    );

    return regalosFiltrados;

}

/*=====================================================
            ORDENAR POR CATEGORÍA
======================================================*/

function ordenarPorCategoria() {

    regalosFiltrados.sort((a, b) => {

        if (a.categoria === b.categoria) {

            return a.nombre.localeCompare(b.nombre, "es");

        }

        return a.categoria.localeCompare(b.categoria, "es");

    });

    return regalosFiltrados;

}

/*=====================================================
            DISPONIBLES
======================================================*/

function unidadesDisponibles(regalo) {

    return regalo.cantidad - regalo.reservados;

}

/*=====================================================
            ¿ESTÁ DISPONIBLE?
======================================================*/

function estaDisponible(regalo) {

    return unidadesDisponibles(regalo) > 0;

}

/*=====================================================
            ACTUALIZAR ESTADO
======================================================*/

function actualizarEstadoGift(regalo) {

    regalo.disponible = estaDisponible(regalo);

    return regalo;

}

/*=====================================================
            ACTUALIZAR TODOS
======================================================*/

function actualizarEstados() {

    gifts.forEach(regalo => {

        actualizarEstadoGift(regalo);

    });

}

/*=====================================================
            TEXTO DEL ESTADO
======================================================*/

function obtenerEstado(regalo) {

    const disponibles = unidadesDisponibles(regalo);

    if (disponibles <= 0) {

        return "Agotado";

    }

    if (disponibles === 1 && regalo.cantidad > 1) {

        return "Última unidad";

    }

    return "Disponible";

}

/*=====================================================
            COLOR DEL ESTADO
======================================================*/

function obtenerClaseEstado(regalo) {

    const disponibles = unidadesDisponibles(regalo);

    if (disponibles <= 0) {

        return "agotado";

    }

    if (disponibles === 1 && regalo.cantidad > 1) {

        return "ultima";

    }

    return "disponible";

}

/*=====================================================
            CONTADORES
======================================================*/

function totalRegalos() {

    return gifts.length;

}

function totalDisponibles() {

    return gifts.filter(regalo =>
        regalo.disponible
    ).length;

}

function totalReservados() {

    return gifts.filter(regalo =>
        !regalo.disponible
    ).length;

}

/*=====================================================
            ESTADÍSTICAS
======================================================*/

function obtenerEstadisticas() {

    actualizarEstados();

    return {

        total: totalRegalos(),

        disponibles: totalDisponibles(),

        agotados: totalReservados(),

        reservas: gifts.reduce((total, regalo) => {

            return total + regalo.reservados;

        }, 0)

    };

}

/*=====================================================
            DEBUG
======================================================*/

console.log("===================================");

console.log(APP_CONFIG.appName);

console.log("Versión:", APP_CONFIG.version);

console.log("Regalos cargados:", gifts.length);

console.log(obtenerEstadisticas());

console.log("===================================");

/*=====================================================
            FIN PARTE 2
======================================================*/
/*=====================================================
    APARTA SHOWER
    GIFTS.JS
    PARTE 3
======================================================*/

/*=====================================================
            OBTENER COLOR DEL BADGE
======================================================*/

function obtenerColorBadge(regalo) {

    const disponibles = unidadesDisponibles(regalo);

    if (disponibles <= 0) {

        return "badge-danger";

    }

    if (disponibles === 1 && regalo.cantidad > 1) {

        return "badge-warning";

    }

    return "badge-success";

}

/*=====================================================
            CREAR TARJETA
======================================================*/

console.log("GIFTS.JS");
function crearTarjetaRegalo(regalo) {

    const disponibles = unidadesDisponibles(regalo);

    const estado = obtenerEstado(regalo);

    const colorEstado = obtenerClaseEstado(regalo);

    const badge = obtenerColorBadge(regalo);

    return `

        <div class="gift-item ${colorEstado}" data-id="${regalo.id}">

            <div class="gift-header">

                <div class="gift-icon">

                    ${regalo.icono}

                </div>

            </div>

            <div class="gift-body">

                <h3>

                    ${regalo.nombre}

                </h3>

                <span class="gift-category">

                    ${regalo.categoria}

                </span>

                <div class="gift-status">

                    <span class="badge ${badge}">

                        ${estado}

                    </span>

                </div>

                <div class="gift-stock">

                    Disponibles:

                    <strong>

                        ${disponibles}

                    </strong>

                    de

                    <strong>

                        ${regalo.cantidad}

                    </strong>

                </div>

            </div>

            <div class="gift-footer">

                ${
                    regalo.disponible
                        ? `
                            <button
                                class="btn-primary reservar-btn"
                                data-id="${regalo.id}">

                                Reservar

                            </button>
                        `
                        : `
                            <button
                                class="btn-secondary"
                                disabled>

                                Agotado

                            </button>
                        `
                }

            </div>

        </div>

    `;

}

/*=====================================================
            RENDERIZAR REGALOS
======================================================*/

function renderizarRegalosGift(lista = gifts) {

    actualizarEstados();

    const container = document.getElementById("giftContainer");

    if (!container) return;

    if (lista.length === 0) {

        container.innerHTML = `

            <div class="empty-result">

                <h2>

                    😔

                </h2>

                <p>

                    No encontramos regalos.

                </p>

            </div>

        `;

        return;

    }

    container.innerHTML = lista
        .map(regalo => crearTarjetaRegalo(regalo))
        .join("");

    activarBotonesReserva();

}

/*=====================================================
            RENDERIZAR POR BÚSQUEDA
======================================================*/

function renderizarBusqueda(texto) {

    const resultados = buscarRegalos(texto);

    renderizarRegalosGift(resultados);

}

/*=====================================================
            RENDERIZAR CATEGORÍA
======================================================*/

function renderizarCategoria(categoria) {

    const resultados = filtrarPorCategoria(categoria);

    renderizarRegalosGift(resultados);

}

/*=====================================================
            RECARGAR
======================================================*/

function refrescarRegalos() {

    actualizarEstados();

    renderizarRegalosGift(regalosFiltrados);

}

/*=====================================================
            CARGA INICIAL
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    actualizarEstados();

    renderizarRegalosGift();

});
/*=====================================================
    APARTA SHOWER
    GIFTS.JS
    PARTE 4
======================================================*/

/*=====================================================
            ACTIVAR BOTONES
======================================================*/

function activarBotonesReserva() {

    const botones = document.querySelectorAll(".reservar-btn");

    botones.forEach(boton => {

        boton.addEventListener("click", seleccionarRegaloGift);

    });

}

/*=====================================================
            SELECCIONAR REGALO
======================================================*/

function seleccionarRegaloGift(evento) {

    const id = Number(evento.target.dataset.id);

    const regalo = obtenerRegaloPorId(id);

    if (!regalo) {

        return;

    }

    if (!estaDisponible(regalo)) {

        mostrarError(
            "Este regalo ya fue reservado."
        );

        return;

    }

    window.regaloSeleccionado = regalo;

    document
        .querySelectorAll(".gift-item")
        .forEach(card => {

            card.classList.remove("selected");

        });

    evento.target
        .closest(".gift-item")
        .classList.add("selected");

    mostrarSeleccion(regalo);

}

/*=====================================================
            MOSTRAR REGALO
======================================================*/

function mostrarSeleccion(regalo) {

    console.log("Regalo seleccionado:");

    console.table(regalo);

    if (typeof mostrarRegaloSeleccionado === "function") {

        mostrarRegaloSeleccionado(regalo);

    }

}

/*=====================================================
            VALIDAR FORMULARIO
======================================================*/

function validarFormulario() {

    if (!window.regaloSeleccionado) {

        mostrarError(
            "Selecciona un regalo."
        );

        return false;

    }

    return true;

}

/*=====================================================
            RESERVAR
======================================================*/

async function reservarRegalo() {

    if (!validarFormulario()) {

        return;

    }

    const regalo = window.regaloSeleccionado;

    if (!estaDisponible(regalo)) {

        mostrarError(
            "Otro invitado reservó este regalo."
        );

        return;

    }

    const boton = document.querySelector(
        '#giftForm button[type="submit"]'
    );

    if (boton) {

        boton.disabled = true;

    }

    mostrarCargando(true);

    // Reserva 100% anónima: no se lee ni se guarda nombre,
    // celular ni correo de nadie. Solo se identifica QUÉ
    // regalo se está reservando.
    const infoRegalo = {

        id: regalo.id,

        nombre: regalo.nombre,

        cantidad: regalo.cantidad

    };

    try {

        if (!window.FirebaseDB) {

            throw new Error(
                "No hay conexión con la base de datos."
            );

        }

        // guardarReserva usa una transacción atómica:
        // si otro invitado reserva al mismo tiempo, uno
        // de los dos recibirá el error de "ya reservado"
        // en vez de duplicar la reserva.
        await FirebaseDB.guardarReserva(infoRegalo);

        if (window.EmailService) {

            try {

                await EmailService.enviarCorreoReserva({
                    regalo: infoRegalo,
                    fecha: new Date().toISOString()
                });

            } catch (errorCorreo) {

                // La reserva ya quedó guardada en Firestore;
                // que falle el correo no debe hacer creer al
                // invitado que su reserva no se guardó.
                console.error(
                    "La reserva se guardó pero el correo falló:",
                    errorCorreo
                );

            }

        }

        regalo.reservados++;

        refrescarRegalos();

        limpiarFormularioGift();

        mostrarExito();

        dispararConfeti();

    } catch (error) {

        console.error(error);

        mostrarError(
            error.message ||
            "No fue posible realizar la reserva."
        );

    } finally {

        mostrarCargando(false);

        if (boton) {

            boton.disabled = false;

        }

    }

}

/*=====================================================
            LIMPIAR
======================================================*/

function limpiarFormularioGift() {

    document
        .getElementById("giftForm")
        .reset();

    window.regaloSeleccionado = null;

}

/*=====================================================
            MODALES
======================================================*/

function mostrarModal(id) {

    const modal = document.getElementById(id);

    if (modal) {

        modal.classList.add("active");

    }

}

function ocultarModal(id) {

    const modal = document.getElementById(id);

    if (modal) {

        modal.classList.remove("active");

    }

}

function mostrarCargando(mostrar) {

    if (mostrar) {

        mostrarModal("loadingModal");

    } else {

        ocultarModal("loadingModal");

    }

}

function mostrarError(mensaje) {

    const parrafo = document.querySelector(
        "#errorModal .modal-content p"
    );

    if (parrafo) {

        parrafo.textContent = mensaje;

    }

    mostrarModal("errorModal");

}

function mostrarExito() {

    mostrarModal("successModal");

}

function dispararConfeti() {

    if (typeof confetti === "function") {

        confetti({

            particleCount: 120,

            spread: 90,

            origin: { y: 0.6 }

        });

    }

}

/*=====================================================
            CERRAR MODALES / BOTONES
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const cerrarExito = document.getElementById("closeSuccess");

    const cerrarError = document.getElementById("closeError");

    if (cerrarExito) {

        cerrarExito.addEventListener("click", () => {

            ocultarModal("successModal");

        });

    }

    if (cerrarError) {

        cerrarError.addEventListener("click", () => {

            ocultarModal("errorModal");

        });

    }

    const btnScrollTop = document.getElementById("scrollTop");

    if (btnScrollTop) {

        window.addEventListener("scroll", () => {

            btnScrollTop.classList.toggle(
                "visible",
                window.scrollY > 400
            );

        });

        btnScrollTop.addEventListener("click", () => {

            window.scrollTo({ top: 0, behavior: "smooth" });

        });

    }

    const inputBusqueda = document.getElementById("searchGift");

    if (inputBusqueda) {

        inputBusqueda.addEventListener("input", () => {

            renderizarBusqueda(inputBusqueda.value);

        });

    }

});

/*=====================================================
            EVENTO FORMULARIO
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const formulario =
        document.getElementById("giftForm");

    if (!formulario) {

        return;

    }

    formulario.addEventListener("submit", evento => {

        evento.preventDefault();

        reservarRegalo();

    });

});

/*=====================================================
            FIN PARTE 4
======================================================*/