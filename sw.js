'use strict';
const APP_VERSION='2026.10.20-7813a3ffa89a';
const CACHE_PREFIX='suluq-exam-documents:'+self.registration.scope+':';
const CACHE_NAME=CACHE_PREFIX+APP_VERSION;
const APP_FILES=[
  "assets/fonts/almarai-arabic-400-normal.woff2",
  "assets/fonts/almarai-arabic-700-normal.woff2",
  "assets/fonts/almarai-arabic-800-normal.woff2",
  "assets/fonts/almarai-latin-400-normal.woff2",
  "assets/fonts/almarai-latin-700-normal.woff2",
  "assets/fonts/almarai-latin-800-normal.woff2",
  "assets/fonts/amiri-arabic-400-italic.woff2",
  "assets/fonts/amiri-arabic-400-normal.woff2",
  "assets/fonts/amiri-arabic-700-italic.woff2",
  "assets/fonts/amiri-arabic-700-normal.woff2",
  "assets/fonts/amiri-latin-400-italic.woff2",
  "assets/fonts/amiri-latin-400-normal.woff2",
  "assets/fonts/amiri-latin-700-italic.woff2",
  "assets/fonts/amiri-latin-700-normal.woff2",
  "assets/fonts/amiri-latin-ext-400-italic.woff2",
  "assets/fonts/amiri-latin-ext-400-normal.woff2",
  "assets/fonts/amiri-latin-ext-700-italic.woff2",
  "assets/fonts/amiri-latin-ext-700-normal.woff2",
  "assets/fonts/aref-ruqaa-arabic-400-normal.woff2",
  "assets/fonts/aref-ruqaa-arabic-700-normal.woff2",
  "assets/fonts/aref-ruqaa-latin-400-normal.woff2",
  "assets/fonts/aref-ruqaa-latin-700-normal.woff2",
  "assets/fonts/aref-ruqaa-latin-ext-400-normal.woff2",
  "assets/fonts/aref-ruqaa-latin-ext-700-normal.woff2",
  "assets/fonts/cairo-arabic-300-normal.woff2",
  "assets/fonts/cairo-arabic-400-normal.woff2",
  "assets/fonts/cairo-arabic-500-normal.woff2",
  "assets/fonts/cairo-arabic-600-normal.woff2",
  "assets/fonts/cairo-arabic-700-normal.woff2",
  "assets/fonts/cairo-arabic-800-normal.woff2",
  "assets/fonts/cairo-latin-300-normal.woff2",
  "assets/fonts/cairo-latin-400-normal.woff2",
  "assets/fonts/cairo-latin-500-normal.woff2",
  "assets/fonts/cairo-latin-600-normal.woff2",
  "assets/fonts/cairo-latin-700-normal.woff2",
  "assets/fonts/cairo-latin-800-normal.woff2",
  "assets/fonts/cairo-latin-ext-300-normal.woff2",
  "assets/fonts/cairo-latin-ext-400-normal.woff2",
  "assets/fonts/cairo-latin-ext-500-normal.woff2",
  "assets/fonts/cairo-latin-ext-600-normal.woff2",
  "assets/fonts/cairo-latin-ext-700-normal.woff2",
  "assets/fonts/cairo-latin-ext-800-normal.woff2",
  "assets/fonts/fonts.css",
  "assets/fonts/ibm-plex-sans-arabic-arabic-400-normal.woff2",
  "assets/fonts/ibm-plex-sans-arabic-arabic-500-normal.woff2",
  "assets/fonts/ibm-plex-sans-arabic-arabic-600-normal.woff2",
  "assets/fonts/ibm-plex-sans-arabic-arabic-700-normal.woff2",
  "assets/fonts/ibm-plex-sans-arabic-cyrillic-ext-400-normal.woff2",
  "assets/fonts/ibm-plex-sans-arabic-cyrillic-ext-500-normal.woff2",
  "assets/fonts/ibm-plex-sans-arabic-cyrillic-ext-600-normal.woff2",
  "assets/fonts/ibm-plex-sans-arabic-cyrillic-ext-700-normal.woff2",
  "assets/fonts/ibm-plex-sans-arabic-latin-400-normal.woff2",
  "assets/fonts/ibm-plex-sans-arabic-latin-500-normal.woff2",
  "assets/fonts/ibm-plex-sans-arabic-latin-600-normal.woff2",
  "assets/fonts/ibm-plex-sans-arabic-latin-700-normal.woff2",
  "assets/fonts/ibm-plex-sans-arabic-latin-ext-400-normal.woff2",
  "assets/fonts/ibm-plex-sans-arabic-latin-ext-500-normal.woff2",
  "assets/fonts/ibm-plex-sans-arabic-latin-ext-600-normal.woff2",
  "assets/fonts/ibm-plex-sans-arabic-latin-ext-700-normal.woff2",
  "assets/fonts/noto-naskh-arabic-arabic-400-normal.woff2",
  "assets/fonts/noto-naskh-arabic-arabic-600-normal.woff2",
  "assets/fonts/noto-naskh-arabic-arabic-700-normal.woff2",
  "assets/fonts/noto-naskh-arabic-latin-400-normal.woff2",
  "assets/fonts/noto-naskh-arabic-latin-600-normal.woff2",
  "assets/fonts/noto-naskh-arabic-latin-700-normal.woff2",
  "assets/fonts/noto-naskh-arabic-latin-ext-400-normal.woff2",
  "assets/fonts/noto-naskh-arabic-latin-ext-600-normal.woff2",
  "assets/fonts/noto-naskh-arabic-latin-ext-700-normal.woff2",
  "assets/fonts/noto-naskh-arabic-math-400-normal.woff2",
  "assets/fonts/noto-naskh-arabic-math-600-normal.woff2",
  "assets/fonts/noto-naskh-arabic-math-700-normal.woff2",
  "assets/fonts/noto-naskh-arabic-symbols-400-normal.woff2",
  "assets/fonts/noto-naskh-arabic-symbols-600-normal.woff2",
  "assets/fonts/noto-naskh-arabic-symbols-700-normal.woff2",
  "assets/fonts/tajawal-arabic-400-normal.woff2",
  "assets/fonts/tajawal-arabic-500-normal.woff2",
  "assets/fonts/tajawal-arabic-700-normal.woff2",
  "assets/fonts/tajawal-latin-400-normal.woff2",
  "assets/fonts/tajawal-latin-500-normal.woff2",
  "assets/fonts/tajawal-latin-700-normal.woff2",
  "assets/icons/apple-touch-icon.png",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/icons/maskable-512.png",
  "assets/vendor/fontawesome.min.css",
  "assets/vendor/qrcode.min.js",
  "assets/vendor/xlsx.full.min.js",
  "assets/webfonts/fa-brands-400.ttf",
  "assets/webfonts/fa-brands-400.woff2",
  "assets/webfonts/fa-regular-400.ttf",
  "assets/webfonts/fa-regular-400.woff2",
  "assets/webfonts/fa-solid-900.ttf",
  "assets/webfonts/fa-solid-900.woff2",
  "assets/webfonts/fa-v4compatibility.ttf",
  "assets/webfonts/fa-v4compatibility.woff2",
  "index.html",
  "manifest.webmanifest"
];
const APP_ROOT=new URL('./',self.registration.scope);
const INDEX_URL=new URL('index.html',APP_ROOT).href;
const STATIC_URLS=new Set(APP_FILES.map(path=>new URL(path,APP_ROOT).href));
async function validateAssetResponse(path,response){
  if(!response.ok||response.type==='opaque')throw new Error('Missing app resource: '+path);
  const type=(response.headers.get('content-type')||'').toLowerCase();
  if(!path.endsWith('.html')&&type.includes('text/html'))throw new Error('Unexpected HTML response: '+path);
  return response;
}
self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    try{
      await Promise.all(APP_FILES.map(async path=>{
        const url=new URL(path,APP_ROOT).href;
        const response=await fetch(new Request(url,{cache:'reload',credentials:'same-origin'}));
        await validateAssetResponse(path,response);await cache.put(url,response);
      }));
    }catch(error){await caches.delete(CACHE_NAME);throw error;}
  })());
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    for(const key of await caches.keys())if(key.startsWith(CACHE_PREFIX)&&key!==CACHE_NAME)await caches.delete(key);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  const request=event.request,url=new URL(request.url);
  if(request.method!=='GET'||url.origin!==APP_ROOT.origin)return;
  const canonical=url.origin+url.pathname;
  const isIndex=url.pathname===APP_ROOT.pathname||canonical===INDEX_URL;
  if(request.mode==='navigate'&&isIndex){
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE_NAME),stored=await cache.match(INDEX_URL);
      if(stored)return stored;
      return fetch(request);
    })());return;
  }
  if(STATIC_URLS.has(canonical))event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME),stored=await cache.match(canonical);
    if(stored)return stored;
    const response=await fetch(request);await validateAssetResponse(url.pathname,response);await cache.put(canonical,response.clone());return response;
  })());
});
self.addEventListener('message',event=>{
  if(event.data?.type==='APPLY_UPDATE'){event.waitUntil(self.skipWaiting());return;}
  if(event.data?.type==='GET_APP_STATUS'&&event.ports?.[0])event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    const present=await Promise.all([...STATIC_URLS].map(url=>cache.match(url)));
    event.ports[0].postMessage({type:'APP_STATUS',version:APP_VERSION,offlineReady:present.every(Boolean)});
  })());
});
