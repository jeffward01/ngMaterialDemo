angular.module('sampleApp', ['ngMaterial'])
    .config(function($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
            .defaultIconSet('img/icons/sets/core-icons.svg', 24);


          $mdThemingProvider.theme('default')
               .primaryPalette('nootBase-PrimaryColor')
              .accentPalette('nootBase-AccentColor')
              .warnPalette('nootBase-WarnColor');

    	//Build Palletes
    	var darkPrimaryColor = $mdThemingProvider.extendPalette('blue',{
    	    '800': '1976D2', //Its darker than the lighter one, it should be 800 or 900.
 		   'contrastDefaultColor': 'dark'
		  });

    	var primaryColor = $mdThemingProvider.extendPalette('blue',{  
    		'700': '40c4ff',
    		'contrastDefaultColor': 'light'
    	});

    	var warnColor = $mdThemingProvider.extendPalette('blue',{
    		'600': 'ff5722',
    		'contrastDefaultColor': 'light'
    	});

    	var accentColor = $mdThemingProvider.extendPalette('green',{
    			'400': '8BC34A',
    			'contrastDefaultColor': 'light'
    	});
  $mdThemingProvider.definePalette('nootBase-DarkPrimaryColor', darkPrimaryColor);
  $mdThemingProvider.definePalette('nootBase-PrimaryColor', primaryColor);
  $mdThemingProvider.definePalette('nootBase-AccentColor', accentColor);
  $mdThemingProvider.definePalette('nootBase-WarnColor', warnColor);


    
    });