'use strict';

app.controller('HomeCtrl', function ($scope){

	$scope.mikeWitherspoon = {
		name: 'Mike Witherspoon',
		image: 'images/mike-witherspoon.jpg',
		bio: "Mike is a certified Force.com consultant who loves tackling really hard problems with innovative solutions. After twelve years of improving business processes for a broad client list, Mike likes to say that he's earned one of the most practical MBAs in the world."
	};

	$scope.timYoungblood = {
		name: 'Tim Youngblood',
		image: 'images/tim-youngblood.jpg',
		bio: "Tim has expertise in just about everything that warrants strings of indecipherable capital letters. He’s a technologist, developer, and entrepreneur who began programming at the age of 12."
	};
	
	$scope.brianWalsh = {
		name: 'Brian Walsh',
		image: 'images/brian-walsh.jpg',
		bio: "For the past 14 years, Brian has been building SaaS products across a wide range of enterprise and consumer offerings. He believes you don't have to be the smartest person in the room to solve the most difficult problems; you have to ask the smartest questions."
	};

	$scope.headQuarters + {
		city: 'Chattanooga',
		state: 'TN',
		zip: '30742',
		phone: '(423) 954-7400',
		fax: '(901) 654-7097'
	};

});