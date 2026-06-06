'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dec1b5759d827295c369be3826f8e4ec",
".git/config": "165b60b6fd207e51c863b645214bc1ee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d196d862a8af164c60e445d18c20f38c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d3a71855b8e9d3bbe47fd023ec447e02",
".git/logs/refs/heads/main": "706687a3138ace9baaca9c5dd6ef2090",
".git/logs/refs/remotes/origin/main": "fc888772dd2b3a73ab27994fd53ab7f4",
".git/objects/0a/c0355de7a1c535fdfb01b2cb6a6389e7b8f0e0": "d228da4410f79b398f653213594599dc",
".git/objects/0a/cdca51513ef6a4fcda4c57d0cb5cc3d49a1619": "a39b5b4ad71f677d4dc37f620b141acc",
".git/objects/0b/57da45e859c4e0acc4fac325abc80dee9f31fe": "7db901f30961c04556af70bb575853eb",
".git/objects/16/7c5df03db38cb9a92fd8e0f3b65c7c9ce2bca7": "5bd77aa4e489cab0e884e86249eb4430",
".git/objects/17/a4616c5aa5b70e160f5054fe137d41f3d2dd97": "8aa3d45cada028d983c7908dc113a647",
".git/objects/18/8d4d1ae2d533913667b42f8467ad2e10689805": "670a85263b61a472f0d9553048189c76",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1f/74264c04c2adb6242088c84f1bdd97ed1cee97": "01d880f547ec138098cdd0dd98b51a54",
".git/objects/2d/b309a1e099e2ce965877b2d499c0fb9e987e3d": "ba8f9b730a0f093b3974b98a4be7bdfb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/af303e762c167ee118e394243f5efed5206099": "c0f60e577b8de0d62855b9c683a30a42",
".git/objects/51/09f02fe37b9805f2d7c07f5c5e1da566ee5825": "8662820925e3af47c17751851a425e9c",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/a63f653b8b01d1a56456faedcfd7053d66e623": "01297dc3239327b4d2387374b514e64a",
".git/objects/59/24884c8be8f9c5e0571fe7fef417e275772183": "464f82c50e347e95c3245ec77167b2b0",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/488d035f4e6995c556652fdd1d467f5d75faca": "84d1bf22130f1ecf94568966eb89f855",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/53e1ff48c2e326ba88d20c40fc6b11f716841d": "e4a19de71799ce4b94f94fc4bd4f595e",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/79/c45beee57f05feeca9a0186006f84b214510d7": "4e53e81386efb8e9393ec8dc8272e014",
".git/objects/79/f9c06e3c5ff7bc1e05f26b0a43b239003792a8": "6871ec763bf44b2985fa1f0ad7d1aee9",
".git/objects/7e/259caf5e4f3fcfccac7ff61d06521a4eceeb7c": "07d9183bb20d53f05caf6a63c0d64404",
".git/objects/81/f8b96427a7cfdf63c3eb215a99de17b7c99713": "075a38b9d3b13309071f482a0c7aa426",
".git/objects/84/d0ce783d6aa136b03e56030f2931ab7d2b0fb6": "d8a56adfbd39bdaa50d281e6f9c69901",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/7fe042c9ca95635bf1e1074b2ebf122e5644d4": "a6179fa13e2ca37b8330d8684ae1df43",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/27aed6d7560c811b8e951492f7d80f2242ff74": "8489a8f631bf4c40f53c8636074737cb",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/ee3d0e74c943c4cad80abbe7f595ff1848149b": "4e3e1341c6cb60fa9410d72800792116",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a3/7e7bbd74e2ee1695a146de830de37d6f889076": "653c9c019ff91ae6b4d9f5d420c3d482",
".git/objects/a3/d1c41f3c1a8223f46510ba0426ef92e3cc48a5": "e96dd12d99f7b2cf64e821908eb0f646",
".git/objects/a6/5f86e4e3a49dc8e1ffdea8ba877c85865ecf4c": "0799aa5e53b69204a8958c5fce77e6ce",
".git/objects/a7/2772ac821300956fbe8f7f9118ad0cf48d03e8": "07296917cef861551db81e701b38b0e7",
".git/objects/aa/e004096ad0f9867f5b2bc075dfe3ceb2044897": "c9d3711fd54211daf9308bacdbf7fa13",
".git/objects/b1/2a0bf0cdc635b5c27bd01f6a0a2d5dc990d841": "361b3e94be1fef1d254fb4a86df23394",
".git/objects/b1/6857293882f78aa28f72c962174a4e8acaa6dd": "687b2ea52c60318ca56d48b5f4d08a9d",
".git/objects/b6/96b7ba62f09d83965f6461378213b5e1b93e20": "3de8b85b58a382ed4a0b0d37edb98b64",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2f9ec69ea3ab19a8833d0621b228f7b80bcfaa": "ade9d98d5c23a391276a38f8a0dbcb0c",
".git/objects/b8/857e1dd348eb1bb91c20fd9f35f12eb1556627": "ad0647aff125bc278ea97ace0e76975f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/40c2dd1a5d24ccbe840a8f82c34fda72f570e4": "c7fce9a2cc4bcdb11db2f21d9f272162",
".git/objects/c2/2a0380196a9219f1758abaf4f88bbf03904cd8": "e8ca8461ee4b6b6edf1d2cc834c40e83",
".git/objects/c4/16d504f7abc136e135230ff011f9ae4c5dc992": "bcf0d5f9d4cd83768e88bfd7b4ff0a8f",
".git/objects/c5/5b543071a0273c6ef28dfee556c8a175a1e8f1": "165e52ee6280833e8f0142ad42a2115c",
".git/objects/c6/1fdf53671d24bf8f859649d1af91f4b4878716": "a44080410a91dad0598b779b01b9ab7b",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/1d243e07ff4586e96ef99072c811d058ec5c89": "37afc550e96ad7720da83450b0e013b9",
".git/objects/d0/c24a9611e209454278a8f53f5a2c10c7e4f22b": "e084098e26923d2c58a86f74d114bcc9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/9f12fcb2920c044935ff0454ef195093d1a205": "0a223c07d1132ea5537bc138154b9689",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/1c4c29903cccb2e21f67578f6bfa0443c9cc47": "50b8c85a329dc0a66be42295610a1f64",
".git/objects/f1/b033332a1fe30ef30e62df076a59b7536357fc": "81da43f0f0971e4955bdbf15840568d0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/ab8e5460b8ec5cd4b8e85e5f8bf7214ca160f6": "dfda229bc87cc2b089848574cd783834",
".git/objects/f8/053af7640eb71bff744756624cda256e8177ec": "3e834b8e179c0c22a17b8658e3ec2f7d",
".git/refs/heads/main": "404a063ae689a3b8d8a590cb3506ed1a",
".git/refs/remotes/origin/main": "404a063ae689a3b8d8a590cb3506ed1a",
"assets/AssetManifest.bin": "6660d6d7536b3ce9dfd641bee8992786",
"assets/AssetManifest.bin.json": "ac1137b78368ea61175e9ae2341ec91e",
"assets/AssetManifest.json": "db3b54ddc31d7e74ae110dfeb06e02a3",
"assets/assets/images/admitting_board_clinic.png": "f7322d31a5ab2aa9817d4ebd0d34e3ff",
"assets/assets/images/admitting_board_hospital.png": "59d6ce7f2a65e3be50339ea5dd369648",
"assets/assets/images/audit_board.png": "0d3d5ffa7036b7f34ad4179dd59d8a03",
"assets/assets/images/compliance_board.png": "038752b863ccc21e3a0ad7007305fdc7",
"assets/assets/images/contract_board.png": "a1b976254abb0956734ade731c7297bb",
"assets/assets/images/cyber_security_board.png": "db3706aba06ba513f8e30305c784b30c",
"assets/assets/images/dispatch_board.png": "f1e8079f23ba581a233a6930cef5ae47",
"assets/assets/images/doctor_board.png": "c4adfef55195e89972e2ca046a1502e5",
"assets/assets/images/employee_board.png": "cc7c2349042c31a1f6722a08ca0f3342",
"assets/assets/images/finance_board.png": "d02844de197efdf303aae08da601da7e",
"assets/assets/images/landing_page.png": "aa396a00102a6fe3e0a52c2ec25af6a5",
"assets/assets/images/nurse_board_clinic.png": "da9f9fea54454c8fb583f61696dd8a5d",
"assets/assets/images/patient_board.png": "becc9e79e5654afa84e3514c0d09bd33",
"assets/assets/images/payroll_board.png": "93d0a80b02ddf6cd894b3f212f30ffc3",
"assets/assets/images/truck_driver_board.png": "6c0d1348ab0fa5e2a2afb260daf735a4",
"assets/assets/images/vendor_board.png": "ca37f23a1502f6b01e6f75acd87e8bae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "695009330464b07ef591107ae5b94572",
"assets/NOTICES": "7f673730900047942f728fe9f06d3f75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "7fc592da9f20d387d07df6f089e13f6a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e661d9f12467582d88d0b3d8b23d1193",
"/": "e661d9f12467582d88d0b3d8b23d1193",
"main.dart.js": "a8b67203661b241e73606e65cf9f3f4b",
"manifest.json": "8a633c59d55485749203f8076cc8cf2d",
"version.json": "c2bbfce181399e8e78b314c425e5662b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
