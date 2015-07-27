// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

  .state('home',{
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'DiscoverCtrl'
  })

  //abstract state for tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'TabsCtrl'
  })

  .state('tab.discover',{
    url: '/discover',
    views: {
      'tab-discover': {
        templateUrl: 'templates/discover.html',
        controller: 'DiscoverCtrl'
      }
    }
  })

  .state('tab.listing-detail', {
    url: '/discover/:listingIndex',
    views: {
      'tab-discover': {
        templateUrl: 'templates/listing-detail.html',
        controller: 'ListingCtrl'
      }
    }
  })

  .state('tab.favorites', {
      url: '/favorites',
      views: {
        'tab-favorites': {
          templateUrl: 'templates/favorites.html',
          controller: 'FavoritesCtrl'
        }
      }
    })

  // If none of the above states are matched, use this as the fallback:
  $urlRouterProvider.otherwise('/tab/discover');
})

.constant('SERVER', {
  //local server
  //url: 'http://localhost:3000'

  //api.import server
  url: 'http://api.import.io/store/data/f3644492-122e-47c4-be7a-5c15227a04b3/_query?_user=c3448282-0a91-4f70-bb22-dc8750ab84e0&_apikey=c3448282-0a91-4f70-bb22-dc8750ab84e0%3A4JvZxhSBboaL1arotCuAdabXLc%2BPZfHy0MNvnawvW2bBFCBrAIzL4C4KxGsuRvJ%2B4XufHHdoK5cXqyDtdp7FNQ%3D%3D'
});