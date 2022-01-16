/* source : https://lesdocs.fr/slider-javascript/ */

var slide = new Array(
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 1 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 2 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 3 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 4 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 5 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 6 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 7 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 8 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 9 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 10 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 11 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 12 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 13 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 14 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 15 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 16 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 17 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 18 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 19 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 20 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 21 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 22 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 23 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 24 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 25 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 26 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 27 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 28 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 29 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 30 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 31 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 32 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 33 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 34 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 35 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 36 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 37 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 38 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 39 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 40 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 41 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 42 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 43 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 44 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 45 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 46 .png",
"./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 47 .png", "./Data/Metacycle/meta3d_resultats/meta3d_JTK/plot_sujet1/export 48 .png");

var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

