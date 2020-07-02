importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js');

workbox.setConfig({modulePathPrefix: 'workbox-v5.1.3/'})

//cache all the static files
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const cmrgCache = {
    cacheName: 'cmrg-assets'
}