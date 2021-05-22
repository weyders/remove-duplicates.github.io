'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6e72ccfe2b0c5c9a7a525c837994e0bc",
".git/config": "3d8e5efcab1f0884df222f300389227c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "29bf35ddb7f25b6c6cb4f5f07d5c2235",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "20bd0ed251e6993d82e4aa6e287561b7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "34bf5a8cb2520b0c663a6affeb1dd18d",
".git/logs/refs/heads/main": "396c23416d10a8b521953bf401cf8e0b",
".git/logs/refs/remotes/origin/main": "c216b73d3af9aaa83b24c9b7ab2f4932",
".git/objects/00/c4cd28101d364697dd2fb505d582c92894be62": "6d5060e9c5d7b5030ae138822e0afe78",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0e/432a5f94c8c261cddf89a7a723b0853e216933": "1bc6a5178f519b161e4bdf3c38153774",
".git/objects/17/2d2414b34ca10484cadbe5761a2d3efdbf6827": "efbe6edfdb3ca87c590d5bf35c4d635e",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/26/ad9fcdc6b0e01f5548444a599cc2db2abfa908": "a58dadf8d9e4048098aca8959d23d1ab",
".git/objects/2e/d65cab703ae30608df3e703e0a0a42ff560be4": "f1cf190f6c642b84cfc3c94c360f0104",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/3acb6c97e6d6aba7c171e3c87bc87b7c283b32": "515bd1066b857b17b4af7c6404b6b210",
".git/objects/41/d7714b667fd4ef77cc186ac68f5e6fa389a695": "f6a42aa689c794d008b31c98b629aee0",
".git/objects/44/87cff50963ada59015f58b550353588dff5587": "381af889c8feadd2d5f1d1a45f2c7c5b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/61386801b6f58a0c522ee798b9b2a246f39cdc": "74315581e452c2843e831808155a2e70",
".git/objects/54/53d1d9b2a86de21096984191b47e5da5a2f5ac": "82244ed21b60d6f4d75f475a2aaa54a9",
".git/objects/55/99d394e3605ec0370a654fa0c48cd86b3b85a3": "3bc266a3aabfaa805450e981084c2b69",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/5e/d8df8c1d3fb0c59daf08e9acb2b79ef183558f": "c4543158fa34611b8d82eb1bab02bc28",
".git/objects/64/04ac9907d00204d50cbbbb211a70c32f7d08f3": "5b27299651c0dd31d8f5e782687dc77a",
".git/objects/67/c65f2160a77b07ab56ba776533a109ace1151a": "d4f2786bc37abaec7d0f7b6004876387",
".git/objects/76/e594ea44d0129e41bc8966377ba65a25a15d1e": "965c71e294e265627cedf6abc4687977",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d819fc8cd803b94a90788b56157274c68d21a4": "538e640f702305b3d17e2a6b7302d128",
".git/objects/7f/6f82c4f8f210dc06da12bc45abfa2a6103e6e6": "1743db0738b491082842e74fd8689cd2",
".git/objects/80/c10aeeb22fe07ff6be2f9fa56e6e8be24ce971": "0e2d12bc49b20f44fcf453a4d82c95d0",
".git/objects/86/09e152162206862e7c32cedb7fc006df5b2b8d": "a010bd755de688f940fd7bbb4afc1c14",
".git/objects/86/ff1feb2dab52bf0c3504c4d1427164cf5c2299": "9743f9a7efc85fcb7051cbab8e1b2215",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/49f7ffaa10a2d00b59b333dcbd83bdf1d87dd3": "70cec828fb8e4a1adbff7a8717fe2c36",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/7ba6d6bb7bf1a3888c5cb7a8be3ef5fccffc13": "99a917d9d48372a92194bd22eb61e95f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/ad2fff783014246f9d663d40894c9dcd5d4115": "b50605b49851d7a710f5abe483810fbf",
".git/objects/ad/d918fce18a9dccf77da18e5c7c8f77773762c5": "529f02bc1f42b651959169da762ab8d0",
".git/objects/b0/c94a5480a31e356b315fbac388dcfb1971e03c": "c090107a694529185fa795b5d6bddb09",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/dc3d5cf6b8f7213b1e8d2932e1bba609cd2d32": "9fd3fd139cab1c835973bfb18cbe1933",
".git/objects/b9/ca712ce68447ed0ca9c46d8316e0333b5aa752": "13752fea979446c16f4f584fb2c86d35",
".git/objects/ba/1c3a16a9622e2fac9f43ce0803c14ce667bea6": "2ce240fadf004880447d76b559e58e81",
".git/objects/bb/1554ae47e408b09ef1ccdbfd7b88a6d9fec62b": "743ca179489c949f9b2ab5ab555bb8cd",
".git/objects/c8/ea24981c000b1924b4a384e39a3667d42ac84f": "b22f99451d2e67117b800ecabae7e0de",
".git/objects/ca/0fabab19892d934a9d1d29f98d0bd8caa85912": "16e504e577c3d7198f6bada6209057ce",
".git/objects/e4/94391d777f96e6773bb84c77747cf39c843a7a": "b9f1a0ccf0a33c2757d71bb954dc66c2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/1a66943f6f8e3aa86d35d83184fe6dac623aca": "4d22a828d4cfd5aa6e7beafc13056336",
".git/objects/f5/b06582f8f3c7876b0fa1c7e6869515017b6b74": "72ab47dde3dd82cf784d1bb6b6830cb1",
".git/objects/f8/aa7190f43e0f99c272449fd16a372a12bb8a17": "e7c41412920463e3726b1dd4abd9520c",
".git/ORIG_HEAD": "f09512e234b045acf6a02f7fc621b322",
".git/refs/heads/main": "f09512e234b045acf6a02f7fc621b322",
".git/refs/remotes/origin/main": "f09512e234b045acf6a02f7fc621b322",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f68c00b5b375cb4d1781de1ddccd3530",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"css/loading.css": "ddda973979547e1a853b1ef5622cbbdd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "db5a121022e2c873d12d5ebab3a123e1",
"/": "db5a121022e2c873d12d5ebab3a123e1",
"main.dart.js": "6d2cc9ab63d492d29d63d5d5b429fb1f",
"manifest.json": "a56289d9eb8314fe24bdeeb08e3a917b",
"version.json": "9a6440e2c107eb8515785bcd6d271be9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
