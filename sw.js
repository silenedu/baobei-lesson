/* 家庭备课宝典 · Service Worker
 * 策略：导航/HTML 网络优先（保证课件更新即时生效），静态资源缓存优先并后台更新。
 */
const CACHE = "flb-v6";
const SHELL = [
  ".", "index.html", "manifest.webmanifest",
  "css/style.css", "js/app.js", "js/data.js",
  "js/hanzi-strokes.js", "js/oracle.js", "js/hanzi-writer.min.js",
  "icons/icon.svg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // HTML / 导航：网络优先，失败回退缓存
  if (req.mode === "navigate" || req.headers.get("accept").includes("text/html")) {
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then((r) => r || caches.match("index.html")))
    );
    return;
  }

  // 静态资源：缓存优先 + 后台刷新
  e.respondWith(
    caches.match(req).then((cached) => {
      const net = fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }).catch(() => cached);
      return cached || net;
    })
  );
});
