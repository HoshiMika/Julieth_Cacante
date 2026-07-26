/*=====================================================
                REVEAL.JS
======================================================
    Efecto sutil de aparición al hacer scroll: cada
    sección (excepto el hero) empieza un poco invisible
    y desplazada, y se asienta en su lugar cuando entra
    en pantalla. Respeta "reduce motion" del sistema
    operativo del visitante.
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const prefiereMenosMovimiento = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const secciones = document.querySelectorAll(
        "section:not(.hero)"
    );

    // Red de seguridad: si algo falla (navegador viejo,
    // IntersectionObserver que nunca dispara, error de
    // JS, etc.), esto garantiza que TODO el contenido
    // se termine mostrando igual, así el efecto no haya
    // funcionado. Nunca debe quedar nada invisible.
    function mostrarTodo() {

        secciones.forEach((seccion) => {

            seccion.classList.add("in-view");

        });

    }

    if (

        prefiereMenosMovimiento ||
        !("IntersectionObserver" in window)

    ) {

        mostrarTodo();

        return;

    }

    try {

        const observador = new IntersectionObserver(

            (entradas) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add("in-view");

                        observador.unobserve(entrada.target);

                    }

                });

            },

            { threshold: 0.15 }

        );

        secciones.forEach((seccion) => {

            seccion.classList.add("reveal");

            observador.observe(seccion);

        });

    } catch (error) {

        console.error(
            "Falló el efecto de scroll, mostrando todo:",
            error
        );

        mostrarTodo();

    }

    // Por si el observer se queda "pegado" en algún
    // navegador raro: a los 4 segundos, se muestra todo
    // sin excepción, haya funcionado el efecto o no.
    setTimeout(mostrarTodo, 4000);

});
