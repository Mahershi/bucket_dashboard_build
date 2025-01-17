'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0fbe573ae4df243c7f5f217502577289",
"index.html": "5ae33d0db6b6f22ce6a4f6b647f4868e",
"/": "5ae33d0db6b6f22ce6a4f6b647f4868e",
"main.dart.js": "e9f9a57eaf3ac59f18f9c81bb241877b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/dashboard.yml": "91eb03dda0ea7335671c06c72cc0c0cb",
"manifest.json": "e5a27e49ae6aec3c9dbf34eb28cb2fb1",
".git/ORIG_HEAD": "a14a37832047782b4a686fd37718fbe1",
".git/config": "135fe846e1651c9a4a6128a6d482a917",
".git/objects/50/c1e5cf81d7bd8aee416247ccc612a10521938a": "17335e75b86cf00db1273ded5b8cee1d",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/4f35eab1806cec620de702963a89e71e4f481c": "ef0d5aa76a22ed502026afbb64f380f2",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/dc5a8a285dadfc5a64331702307f737df1cc3e": "7e7adf7737da18dbdf87b945ce2c743f",
".git/objects/0b/a045a0708407ad2227e81e24fa9c88c349781a": "db56c9594407c1f652222fedc24a3955",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/a4/738f0b866a6159960bad9528de5e3d4b84d5f5": "cf2c4046e0eda3c442e51e073aefc16b",
".git/objects/a3/bccc4cd261965ed4a4a59a42d37adaef8878ea": "cc24c735e16b739efd8a5268a13acaf7",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/dc4ba681047178b04855cb15573f022250502e": "8eae61e001fcbba802586c4af9983837",
".git/objects/da/2fab147e6342c36946f3d897dde9d35a81e61d": "7a8f85cba32eaee11a82364034f8631d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/31baeeabbf7ec9c7abef74522da5234618b123": "83308aea1dfcc49314d43f0aa99cf971",
".git/objects/fd/69194f05134dea66a7aa8c72d56165d4eb05bb": "38840780289fadc08055c3dc58c9ac52",
".git/objects/fd/c47eba07866b3f802da00c16c7e4be5a493d88": "1e6ca964aea577c15fed26928f90684a",
".git/objects/e4/bca6d8122a2e0f2d3accd9de7fdfc5781cae25": "65954a0f624692726dd737281aee2430",
".git/objects/4e/8eb63a65feab325aec6996ccaffa982b71bcce": "b066b6f11a208b611652daf545c7ec49",
".git/objects/73/5a4565baad127b0533a2daf02413a376b6c71a": "c1b97a36cab68a3377a6e33abb22daeb",
".git/objects/8f/ee98f6cfc2ae5ba01e022bef583018463804f3": "b48a21809b871bb473f206738e14ddcd",
".git/objects/8a/687288efaf07f9cd247f24053611cf20467ef0": "f3d9a655afecc2cde813b3d90876d492",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/a071e24e734f38b385ef6f794f07430853844a": "705d5d02aceb7b6063f0fc47f1f56525",
".git/objects/10/d97b8293dc0c4999c79a8e4479710c954450c1": "ac8925d6fa547d44ae66dd11d1e356b4",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/43b136fda3f13f1891c4384c5849b41362113f": "1a2a2263b98f81f6cd936a504fd2e17a",
".git/objects/07/b73fb6fc8e095d84a9014dd629ff32f445b8db": "abd5ce87c4b8a11314cd13affc1d7a5b",
".git/objects/00/f95cb038af2698f2d4f9889fea356442602b95": "aac929975eb7c686352ff22674d7be45",
".git/objects/91/51942602d0eb78dccadf8b883a756398fe2f93": "1be42f211a56546aa8a1c2eaf0bf7432",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/dc2b0ac4e2220141a4f98812d4820a26a6d6d1": "c37ceb24cff4ee2b32192f90938d701c",
".git/objects/96/99972a5e83f61475ff5eceacd95c1343c06103": "358e1a7950dc4e7d11d94137bf7a1c8c",
".git/objects/3a/c0fb20caf1fa2860a8cd89af14eaabc0430ac8": "40c3db12c4aa5152786901eabb9c3609",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/08/0af5aba52928a573a8cb730f847d28dd7fff96": "1a99447d9ce5a49e7d0d02e1ac1b6def",
".git/objects/6d/13fdf6f0c20c8b828dc79e768092c4fcab8f7f": "0e2c02b82a3107229598ade262b04577",
".git/objects/06/183b62df69edf4d3dd2fed545b73ddfd24f21d": "28d3ab2da0a29eb37674bdbaa93fb488",
".git/objects/99/b9eb92e172c111d3cf8eb27f74f954d5b1abb9": "91778ad8de1fb2222e5c43bd22557282",
".git/objects/64/85326b95062cdd00f58f565ee02d305a6c1754": "497b833200d5d4afb13469c7f04e08a4",
".git/objects/90/7eead9b2753d440560b537fc5eed10a0d09c8c": "159944d332ec248cbb6b0eebb73cc961",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/af/cd721234e264a9485eb01a9ee75aec22bbacd9": "8a71bee945114c2fe3145ab82fee83e5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/bc8f8717069044c0aea4d8f4fb8f5bf0a05a90": "1aafa3f95c35dfc3a239f90838f09e50",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/7dc1b40c760a03ea50e17800d90feeaf7b2334": "9edd65eafdeab99c189cab272a109391",
".git/objects/cd/38efdd359d17ac4c5c6516bef91367b69b88b4": "dbd4b4e5649b7300e6b7040d5c953af2",
".git/objects/fa/8cbd71dceb41e219c87ce562b62b256283a82c": "58675626a9276ad1941e1f70ec226f37",
".git/objects/ff/20a20a60b43063d8751b5da57670210804453a": "1274c234e0e18c7c0725aeb0fbcd8a8a",
".git/objects/f6/16295f819a7e504bd648cdc380dce063c46a59": "de07b8e2abd2a54c52967f6a190e4470",
".git/objects/f1/9f35996d922f7e1c886794e695a08ed163719e": "6c358751abfeb5dedace2476f1cccbe0",
".git/objects/f1/cb6c1e4a8433e9db6985173759edcc6d0f38b9": "e80f53b03bcc974799258dad24ef98e1",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/976fe14451aa364f4d9142c1d40aa90c318ab3": "f5a38e1073f35f2a305700cdbd14d4b2",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/15/c810c5c878804c6d0d127c0df5580d73d582ee": "a35b6dfeb3cec26432b18c63b47069a1",
".git/objects/12/5d28b786ea3802e176f4d4f0b9be34aee6cf58": "935a6fbfbf3ace9ff8791a343a79b0d9",
".git/objects/12/31331a98008caa59bb6376e1c333a63423ffb9": "73794a15bd6603f9004d81b8cc649d72",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/76/36bc846d248c7cea560adc72f94a7060d401fa": "57181301577d5d7541d4d4b6fa60572f",
".git/objects/82/4043e6f86c714670d4d8e7215ccf3b238ccb09": "1c9b55e2edc933679171955c377791f8",
".git/objects/82/46b41ba0ed7cf3b0526665d7d32e58d7587919": "2b57709e66dacd7364f2d83f227303a2",
".git/objects/47/e1bff0bfb2514222e92de27f4dc98c6086e462": "f89251fd147a9d3fa2bb757eedfe27e9",
".git/objects/7a/2d437058c894d6f7ed08b153c19b38e343c153": "b1d56682d5e856f859215c8032d9b514",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eb695be613c68f3cb6f77b84315faba9",
".git/logs/refs/heads/main": "95f46ad5f41f0a161bf79995b7970eda",
".git/logs/refs/remotes/origin/main": "bc2c20dc3c686b7dc91c051937fd7951",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1c754688d81921becc4cc8ed4598385a",
".git/refs/remotes/origin/main": "1c754688d81921becc4cc8ed4598385a",
".git/index": "a0d968c9d3a8fcb4f5235e212742d6ea",
".git/COMMIT_EDITMSG": "253bcac7dd806bb7cf57dc19f71f2fa0",
".git/FETCH_HEAD": "902b4508bc47557cfbb753423074bc57",
"assets/AssetManifest.json": "02aebf225202901b5097e870bb61f392",
"assets/NOTICES": "3d3294370c1c535732948698dd4b794e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "7d39989132740c906d67d49577dfe6ee",
"assets/fonts/MaterialIcons-Regular.otf": "d0a7f95460780dd4a54eda8cb7bba8d5",
"assets/assets/img/user.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/img/logo.jpeg": "edd1f9f37f05a9476c44968773ad65be",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
