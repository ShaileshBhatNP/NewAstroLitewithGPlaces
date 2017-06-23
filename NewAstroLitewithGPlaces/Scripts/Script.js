/// <reference path="angular.min.js" />

var app = angular.module('Demo', ['ui.bootstrap', 'ngRoute', 'ngSanitize', 'ngMessages', 'EmployeeService', 'OtdDirectives', 'ngAutocomplete', 'ui.bootstrap.modal'])

                 .config(function ($routeProvider, $locationProvider) {
                     $locationProvider.hashPrefix('');//this helped fix a bug with angular 1.6.1 http://stackoverflow.com/questions/41211875/angularjs-1-6-0-latest-now-routes-not-working the routing links were not working but this $locationProvider variable change fixed it.
                     $routeProvider
                     .when('/HomePage', {
                         templateUrl: 'Views/HomePage.html',
                         controller: 'HomePageController'
                     })
                     .when('/HoroScope', {
                         templateUrl: 'Views/HoroScope.html',
                         controller: 'HoroScopeController'
                     })
                     .otherwise({
                         redirectTo: '/HomePage'
                     })
                     $locationProvider.html5Mode(true);
                 })
                 //.controller('HomePageController', function ($scope) {
                 //    $scope.message = 'NithyaPanchanga';
                 //})
   .controller("HomePageController", function ($scope, EmpApi) {
       getEmployees();

       function getEmployees() {
           EmpApi.getEmployees().then(function (response)  //success(function(emps)
           {
               $scope.emps = response.data;//$scope.emps=emps;2
           }, function (error) {
               $scope.status = 'Unable to load emp data:' + error.message;
           })
       } 'EmployeeService'

   })

                 .controller('HoroScopeController', function ($scope) {
                     $scope.courses = ['C#', 'VB.NET', 'SQL Server', 'ASP.NET'];
                     $scope.message = 'NithyaPanchanga';
                 });

app.controller('CarouselDemoCtrl', function CarouselDemoCtrl($scope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    //$scope.image1 = 'Images/image1.jpg';
    //$scope.image2 = 'Images/image3.jpg';
    //$scope.image3 = 'Images/image4.jpg';
    //$scope.image4  = 'Images/image5.jpg';
    $scope.slides = [
      {
          image: 'Images/image7.jpg', text: 'HoroScope'
      },
      {
          image: 'Images/image8.jpg', text: 'MatchMaking'
      },
      {
          image: 'Images/image7.jpg', text: 'Nice image'
      },
      {
          image: 'Images/image8.jpg', text: 'Awesome photograph'
      }
    ];
    //$scope.buttons = [
    //  {
    //      button: ng
    //  },
    //  {
    //      image: 'Images/image3.jpg'
    //  },
    //  {
    //      image: 'Images/image4.jpg'
    //  },
    //  {
    //      image: 'Images/image5.jpg'
    //  }
    //];
})

app.controller('AccordionDemoCtrl', function ($scope, $rootScope) {     //UserService
    $scope.oneAtATime = true;
    $scope.InsideOneAtATime = true;
    $scope.name = $rootScope.name;
    $scope.InsideOne1AtATime = true;
    //$scope.name = UserService.name;
    $scope.groups = [
    {
        title: "Dynamic Group Header - 1",
        content: "Dynamic Group Body - 1",
        open: false
    },
    {
        title: "Dynamic Group Header - 2",
        content: "Dynamic Group Body - 2",
        open: false
    }
    ];


    $scope.staticAccordionsFlag = {
        open: false
    };

    $scope.onParentCollapse = function () {

        //for the ones dynamicly generated 
        angular.forEach($scope.groups, function (element) {
            element.open = false;
        });

        //for the static ones
        $scope.staticAccordionsFlag.open = false;

    }

    $scope.status = {
        isCustomHeaderOpen: false,
        isCustomHeader1Open: false,    //when isCustomHeader1Open becomes 'false' next time,
        isCustomHeader2Open: false,    //if isCustomHeader4Open is 'true' also, isCustomHeader1Open should 'false' the isCustomHeader4Open
        isCustomHeader3Open: false,
        isCustomHeader4Open: false,
        isCustomHeader5Open: false,
        isCustomHeader6Open: false,
        isCustomHeader7Open: false,
        isCustomHeader8Open: false,
        isCustomHeader9Open: false,
        isCustomHeader10Open: false,
        isCustomHeader11Open: false,
        isCustomHeader12Open: false,
        isCustomHeader13Open: false,
        isCustomHeader14Open: false,
        isCustomHeader15Open: false,
        isCustomHeader16Open: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
});
app.controller('CollapseDemoCtrl', function ($scope) {
    $scope.isNavCollapsed = true;
    //$scope.isCollapsed = false;
    //$scope.isCollapsedHorizontal = false;
});

//$(document).ready(function(){
//    $("#horo1").click(function(){
//    var n=2; //total number of inner div in accordion
//    for(i=1;i<=n;i++)
//    {
//       if($("#collapse2Inner"+i).hasClass("in"))
//       {
//            $("#acc2inner"+i).click(); //Click on link of each accordion to close it
//       }
//    }    
//    });
//});


angular.module('Demo').controller('DatepickerPopupDemoCtrl', function ($scope) {
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };
    $scope.inlineOptins = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };


    $scope.toggleMin = function () {
        $scope.inlineOptins.minDate = $scope.inlineOptins.minDate ? null : new Date(); 
        $scope.dateOptions.minDate = $scope.inlineOptins.minDate;
    };
    $scope.toggleMin();

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
    };
    //$scope.format = 'dd/MM/yyyy';
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };
    function getDayClass(data) {
        var date = data.date,
          mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }
        return '';
    }
});

angular.module('Demo').controller('TimepickerDemoCtrl', function ($scope, $log) {
    $scope.timeformats = ['Standard Time', 'Upper Summer', 'Lower Summer', 'Europian'];
    $scope.timeformat = $scope.timeformats[0];
    $scope.mytime = new Date();
    $scope.hstep = 1;
    $scope.mstep = 1;
    $scope.ismeridian = true;
    $scope.toggleMode = function () {
        $scope.ismeridian = !$scope.ismeridian;
    };
});

//angular.module('Demo').controller('TooltipDemoCtrl', function ($scope, $sce) {
//    $scope.placement = {
//        options: [
//          '--Please Select--',
//          'Udupi',
//          'Mangaluru',
//          'Puthur',
//          'Sulya',
//          'Belthangady',
//          'Bantwala',
//          'Uppinangady',
//          'Kumble',
//          'Kasaragodu',
//          'Kundapura',
//          'Karkala',
//          'Mulky'
//        ],
//        selected: '--Please Select--'
//    };
//    $scope.Gender = {
//        options: [
//            '--Please Select--',
//            'Male',
//            'Female'
//        ],
//        selected: '--Please Select--'
//    };
//});

angular.module('Demo').controller('ButtonsCtrl', function ($scope) {
    $scope.radioModel = 'Male';
    $scope.checkModel = {
        left: true,
        middle: false,
        right: false
    };
    $scope.checkResults = [];
});

angular.module('Demo').controller('ModalDemoCtrl', function ($uibModal, $log, $document, $scope, $rootScope) {
    var $ctrl = this;
    $ctrl.items = ['item1', 'item2', 'item3'];

    $ctrl.animationsEnabled = true;

    $ctrl.open = function (size, parentSelector) {
        var parentElem = parentSelector ?
          angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size,
            appendTo: parentElem,
            resolve: {
                items: function () {
                    return $ctrl.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            //$ctrl.name = selectedItem;
            $rootScope.name = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };



    $ctrl.toggleAnimation = function () {
        $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
    };
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.
angular.module('Demo').factory('UserService', function () {
    var userService = {};

    userService.name = "HI Atul";

    userService.ChangeName = function (value) {

        userService.name = value;
    };

    return userService;
});


angular.module('Demo').controller('ModalInstanceCtrl', function ($uibModalInstance, items, $scope) {
    var $ctrl = this;

    $scope.placement = {
        options: [
          //'--Please Select--',
          'Udupi',
          'Mangaluru',
          'Puthur',
          'Sulya',
          'Belthangady',
          'Bantwala',
          'Uppinangady',
          'Kumble',
          'Kasaragodu',
          'Kundapura',
          'Karkala',
          'Mulky'
        ],
        //selected: '--Please Select--'
    };

    $ctrl.ok = function () {
        //if ($ctrl.modalForm.$valid) {
        $uibModalInstance.close($ctrl.name);
        //}
    };
    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('Demo').component('modalComponent', {
    templateUrl: 'myModalContent.html',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: function () {
        var $ctrl = this;

        $ctrl.$onInit = function () {
            $ctrl.items = $ctrl.resolve.items;
            $ctrl.selected = {
                item: $ctrl.items[0]
            };
        };

        $ctrl.ok = function () {
            $ctrl.close({ $value: $ctrl.selected.item });
        };

        $ctrl.cancel = function () {
            $ctrl.dismiss({ $value: 'cancel' });
        };
    }
});


angular.module('Demo').controller('TabsDemoCtrl', function ($scope, $window) {
    $scope.tabs = [
      { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
      { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function () {
        setTimeout(function () {
            $window.alert('You\'ve selected the alert tab!');
        });
    };

    $scope.model = {
        name: 'Tabs'
    };
    $scope.removeTab = function (index) {
        $scope.tabs.splice(index, 1);
    };
});



angular.module('Demo').controller("mainCtrl", function ($scope) {
    $scope.tabs = [{
        title: "one",
        content: '<h1>tab one</h1>'
    }, {
        title: "two",
        content: '<h1>tab two</h1>'
    }, {
        title: "three",
        content: '<h1>tab three</h1>'
    }];
    //var removeTab = function (event, index) {
    //    event.preventDefault();
    //    event.stopPropagation();
    //    $scope.tabs.splice(index, 1);
    //};

    $scope.removeTab = function (index) {
        $scope.tabs.splice(index, 1);
    };
});


//angular.module('Demo').controller('MainCntrl', function ($scope, $modal) {
//    $scope.name = 'World';
//    $scope.data = {};

//    $scope.OpenModal = function (size) {
//        var modalInstance = $modal.open({
//            templateUrl: 'Modal.html',
//            controller: 'ModalInstanceCntrl',
//            windowClass: 'small-size-modal',
//            size: size,
//            scope: $scope
//        });
//    };
//});

//angular.module('Demo').controller('ModalInstanceCntrl', function ($scope, $modalInstance) {
//    $scope.ok = function () {
//        if ($scope.numberForm.$valid) {
//            $modalInstance.close();
//        }
//    };

//    $scope.cancel = function () {
//        $modalInstance.dismiss('cancel');
//    };
//});

//<script>
//$(document).ready(function() {
//    $('#loginForm').formValidation({
//        framework: 'bootstrap',
//        excluded: ':disabled',
//        icon: {
//            valid: 'glyphicon glyphicon-ok',
//            invalid: 'glyphicon glyphicon-remove',
//            validating: 'glyphicon glyphicon-refresh'
//        },
//        fields: {
//            username: {
//                validators: {
//                    notEmpty: {
//                        message: 'The username is required'
//                    }
//                }
//            },
//            password: {
//                validators: {
//                    notEmpty: {
//                        message: 'The password is required'
//                    }
//                }
//            }
//        }
//    });
//});
//</script>


angular.module('Demo').controller("SearchForm", function ($scope)

    /* Controllers */ {
    $scope.location = '';

    $scope.doSearch = function () {
        if ($scope.location === '') {
            alert('Directive did not update the location property in parent controller.');
        } else {
            alert('Yay. Location: ' + $scope.location);
        }
    };
});

/* Directives */
angular.module('OtdDirectives', []).
    directive('googlePlaces', function () {
        return {
            restrict: 'E',
            replace: true,
            // transclude:true,
            scope: { location: '=' },
            template: '<input id="google_places_ac" name="google_places_ac" type="text" class="input-block-level"/>',
            link: function ($scope, elm, attrs) {
                var autocomplete = new google.maps.places.Autocomplete($("#google_places_ac")[0], {});
                google.maps.event.addListener(autocomplete, 'place_changed', function () {
                    var place = autocomplete.getPlace();
                    $scope.location = place.geometry.location.lat() + ',' + place.geometry.location.lng();
                    $scope.$apply();
                });
            }
        }
    });
