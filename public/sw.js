
const CACHE = "proyectamafb-1.1";

const ARCHIVOS = [
  "css/estilos.css",
  "img/icono-256.png",
  "img/icono-1024.png",
  "img/icono-2048.png",
  "js/herramientas-abc.js",
  "js/mi-nav.js",
  "js/util.js",
  "favicon.ico",
  "index.html",
  "encuesta.html",
  "manifest.json",
  "__/firebase/7.15.5/firebase-app.js",
  "__/firebase/7.15.5/firebase-auth.js",
  "__/firebase/7.15.5/firebase-firestore.js",
  "__/firebase/7.15.5/firebase-storage.js",
  "__/firebase/init.js",
  '/'
];
self.addEventListener("install", evt => { console.log("Service Worker instalado."); evt.waitUntil(cargaCache()); });

self.addEventListener("fetch", evt => {
  if (evt.request.method === "GET") {
    evt.respondWith(usaCache(evt));
  }
});

self.addEventListener("activate", () => console.log("Service Worker activo."));

async function cargaCache() {
  console.log("Intentando cargar cache: " + CACHE);
  const cache = await caches.open(CACHE);
  await cache.addAll(ARCHIVOS);
  console.log("Cache cargado: " + CACHE);
}

async function usaCache(evt) {
  const cache = await caches.open(CACHE);
  const response = await cache.match(evt.request, { ignoreSearch: true });
  if (response) {
    return response;
  } else {
    return fetch(evt.request);
  }
}