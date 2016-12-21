// namespace MyApp{
//   angular.module('MyApp', ['ui.router']).config((
//     $stateProvider: ng.ui.IStateProvider,
//     $urlRouterProvider: ng.ui.IUrlRouterProvider,
//     $locationProvider: ng.ILocationProvider
// )=>{
//   $stateProvider
//   .state('Page1',{
//     url: '/',
//     templateUrl: '/ngApp/page1.html',
//     controller: MyApp.Controllers.HomeController,
//     controllerAs: 'vm'
//   })
//   .state('Page2', {
//            url:'/page2',
//            templateUrl:'/ngApp/page2.html',
//            controller: MyApp.Controllers.Page2Controller,
//            controllerAs: 'vm'
//          })
//          $urlRouterProvider.otherwise('/');
//         $locationProvider.html5Mode(true);
// })
// }

// namespace MyApp {
//
//     angular.module('MyApp', ['ui.router']).config(($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
//         $stateProvider.state('Products', {
//             url: '/',
//             templateUrl: '/ngApp/products.html',
//             controller: MyApp.Controllers.ProductListController,
//             controllerAs: 'controller'
//         }).state('Details', {
//             url: '/ngApp/details/:id',
//             templateUrl: '/ngApp/details.html',
//             controller: MyApp.Controllers.ProductDetailsController,
//             controllerAs: 'controller'
//         });
//         $urlRouterProvider.otherwise('/');
//         $locationProvider.html5Mode(true);
//     });
//
// }

//  namespace MyApp {
//
//     angular.module('MyApp', ['ui.router', 'ngResource']).config((
//         $stateProvider: ng.ui.IStateProvider,
//         $urlRouterProvider: ng.ui.IUrlRouterProvider,
//         $locationProvider: ng.ILocationProvider
//     ) => {
//         // Define routes
//         $stateProvider
//             .state('home', {
//                 url: '/',
//                 templateUrl: '/ngApp/home.html'
//             })
//             .state('secret', {
//                 url: '/secret',
//                 templateUrl: '/ngApp/secret.html',
//                 data: {
//                     requiresAuthentication: true
//                 }
//             })
//             .state('public', {
//                 url: '/public',
//                 templateUrl: '/ngApp/public.html'
//             })
//             .state('login', {
//                 url: '/login',
//                 templateUrl: '/ngApp/login.html'
//             });
//
//
//         // Enable HTML5 navigation
//         $locationProvider.html5Mode(true);
//     });
//
//
// angular.module('MyApp').run((
//         $rootScope: ng.IRootScopeService,
//         $state: ng.ui.IStateService,
//         accountService: MyApp.Services.AccountService
//     ) => {
//             $rootScope.$on('$stateChangeStart', (e, to) => {
//                 // protect non-public views
//                 if (to.data && to.data.requiresAuthentication) {
//                     if (!accountService.isLoggedIn()) {
//                         e.preventDefault();
//                         $state.go('login');
//                     }
//                 }
//             });
//     });
//
//
 // }

 namespace MyApp {

     angular.module('MyApp', ['ui.router', 'ngResource']).config((
         $stateProvider: ng.ui.IStateProvider,
         $urlRouterProvider: ng.ui.IUrlRouterProvider,
         $locationProvider: ng.ILocationProvider
     ) => {
         // Define routes
         $stateProvider
             .state('home', {
                 url: '/',
                 templateUrl: '/ngApp/home.html'
             })
             .state('secret', {
                 url: '/secret',
                 templateUrl: '/ngApp/secret.html',
                 data: {
                     requiresAuthentication: true
                 }
             })
             .state('public', {
                 url: '/public',
                 templateUrl: '/ngApp/public.html'
             })
             .state('login', {
                 url: '/login',
                 templateUrl: '/ngApp/login.html'
             });


         // Enable HTML5 navigation
         $locationProvider.html5Mode(true);
     });

 }
