const cacheName = 'meu-site-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/contato.html',
  '/privacidade.html',
  '/conteudo.html',
  '/produtos.html',
  '/servicos.html',
  '/atividades.html',
  '/blog.html',
  'assets/web/assets/mobirise-icons2/mobirise2.css',
  'assets/bootstrap/css/bootstrap-reboot.min.css',
  'assets/animatecss/animate.css',
  'assets/dropdown/css/style.css',
  'assets/socicon/css/styles.css',
  'assets/mobirise/css/mbr-additional.css',
  'https://use.fontawesome.com/releases/v5.15.1/css/all.css',
  'assets/theme/css/style.css',
  'assets/bootstrap/css/bootstrap.min.css',
  'https://fonts.googleapis.com/css?family=Asap:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&display=swap',
  'assets/bootstrap/css/bootstrap-grid.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
