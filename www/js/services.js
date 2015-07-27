angular.module('services', ['ionic.utils'])
	.factory('User', function () {
		//change this to watchlist later for tracking listings and mass mailing them to set up appointments
		var o = {
			watchlist: []
		}

		o.addToWatchlist = function (result) {
			if(!result) return false;

			//add to watchlist
			o.watchlist.unshift(result);
		}

		o.removeFromWatchlist = function (result, index) {
			if(!result) return false;

			//remove from watchlist
			o.watchlist.splice(index, 1);
		}

		return o;
	})

	.factory('Listings', function ($http, SERVER) {
		var o = {
			listings: []
		};

		o.getNextListings = function () {
			return $http({
				method: 'GET',
				url: SERVER.url 
			}).success(function(data){
				//merge data into queue
				o.listings = o.listings.concat(data.results)
			});
		}

		//get single listing
		o.getListing = function (index) {
			return o.listings[index]
		}

		return o;
	})
	;