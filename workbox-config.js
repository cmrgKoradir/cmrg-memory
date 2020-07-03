module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    '**/*.{json,ico,html,png,js,txt,css}'
  ],
  swDest: 'build/sw.js',

  runtimeCaching : [
    {
      urlPattern: /.*comerge\.net\/.*/, //all requests to comerge need be kept up-to-date in case new folks get hired
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'cmrg-assets'
      }
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/, //any request that ends with .png, .jpg, .jpeg or .svg are kind of expected to stay the same
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
    },
    }
  ]
};