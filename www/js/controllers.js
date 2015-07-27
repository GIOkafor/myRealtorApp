angular.module('controllers', ['ionic', 'services'])

//discover page controller
.controller('DiscoverCtrl', function($scope, User, Listings){
	Listings.getNextListings()
		.then(function () {
			$scope.results = Listings.listings;
		})

	$scope.results = [
		/*{
			"image": "http://i.ebayimg.com/00/s/NTMzWDgwMA==/z/qxEAAOSwv0tVQTuX/$_2.JPG",
			"title": "Brand New, 2 Bed, 2 Bath suites,Bloor, Annex, Yorkville, Toronto",
			"price": "$2,750.00",
			"description":"Please call Shaun - 416 456 6717 for viewing. Spacious Bright Heritage Victorian Annex Home, Few steps from Madison & Bloor, Building fully restored in 2014/2015, Never Lived in 2-bed 2-bath, modern…",
			"posted": "30 minutes ago"	
		},
		
		{
			"image":"http://i.ebayimg.com/00/s/NDI3WDY0MA==/z/JhUAAOSwDNdVnPOd/$_2.JPG",
			"title":"Gorgeous 2 bd/2 bth in Leaside!",
			"price": "$2,200.00",
			"description":"Gorgeous 2 bedroom/2 bathroom apartment in Leaside. Larger master with ensuite, renovated, open concept kitchen with granite counters and stainless steel appliances, natural gas fireplace, tons of…",
			"posted": "41 minutes ago"		
		},
		{
			"image":"http://i.ebayimg.com/00/s/NjAwWDQ1MA==/z/HkoAAOSwgQ9VmfnR/$_2.JPG" ,
			"title": "New condo at Yonge and sheppard for rent",
			"price": "$1,700.00",
			"description":"New condo available for renting from 19 August 2015, at least one yr lease. Student/ professional preferred.",
			"posted": "44 minutes ago"	
		},
		{
			"image": "http://i.ebayimg.com/00/s/NTMzWDgwMA==/z/qxEAAOSwv0tVQTuX/$_2.JPG",
			"title": "Brand New, 2 Bed, 2 Bath suites,Bloor, Annex, Yorkville, Toronto",
			"price": "$2,750.00",
			"description":"Please call Shaun - 416 456 6717 for viewing. Spacious Bright Heritage Victorian Annex Home, Few steps from Madison & Bloor, Building fully restored in 2014/2015, Never Lived in 2-bed 2-bath, modern…",
			"posted": "30 minutes ago"	
		},
		
		{
			"image":"http://i.ebayimg.com/00/s/NDI3WDY0MA==/z/JhUAAOSwDNdVnPOd/$_2.JPG",
			"title":"Gorgeous 2 bd/2 bth in Leaside!",
			"price": "$2,200.00",
			"description":"Gorgeous 2 bedroom/2 bathroom apartment in Leaside. Larger master with ensuite, renovated, open concept kitchen with granite counters and stainless steel appliances, natural gas fireplace, tons of…",
			"posted": "41 minutes ago"		
		},
		{
			"image":"http://i.ebayimg.com/00/s/NjAwWDQ1MA==/z/HkoAAOSwgQ9VmfnR/$_2.JPG" ,
			"title": "New condo at Yonge and sheppard for rent",
			"price": "$1,700.00",
			"description":"New condo available for renting from 19 August 2015, at least one yr lease. Student/ professional preferred.",
			"posted": "44 minutes ago"	
		}
		*/
	];

	$scope.addToWatchlist = function (result) {
		User.addToWatchlist(result);
	}
})

//tabscrl
.controller('TabsCtrl', function($scope) {
	
})

//favoritesCtrl change to watchlistCtrl
.controller('FavoritesCtrl', function($scope, User) {
	$scope.watchlist = User.watchlist;

	$scope.removeListing = function (result, index) {
		User.removeFromWatchlist(result, index);
	}
})

//listing detail controller
.controller('ListingCtrl', function ($scope, Listings) {
	$scope.getListing = function (index) {
		$scope.listing = Listings.getListing(index);
	}
})
;