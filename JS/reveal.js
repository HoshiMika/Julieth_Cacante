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

    if (prefiereMenosMovimiento) {

        return;

    }

    const secciones = document.querySelectorAll(
        "section:not(.hero)"
    );

    if (!("IntersectionObserver" in window)) {

        return;

    }

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

});
