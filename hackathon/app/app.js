var hackathonApp = angular.module('hackathon', ['ui.router']);

hackathonApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/homePage');
    
    $stateProvider.state('homePage', {
    	    url: '/homePage',
    		templateUrl: 'templates/homePage.html',
            controller: 'indexController'
            
            
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('landingPage', {
             url: '/landingPage',
            templateUrl: 'templates/landingPage.html',
            controller: 'landingController'
            

        });
        
});


