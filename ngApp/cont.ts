// namespace MyApp.Controllers {
//
//   export class HomeController {
//     constructor(public $state: ng.ui.IStateService) { }
//   }
//   angular.module('MyApp').controller('HomeController', HomeController);
//
//     export class Page1Controller {
//         public message = 'Hello from Page1!!!';
//     }
//
//     export class Page2Controller {
//         public message = 'Hello from Page2!!!';
//
//         doSomething() {
//             this.$state.go('Page1');
//         }
//
//         constructor(private $state: ng.ui.IStateService) { }
//     }
//     export class Page3Controller{
//       public message = 'Hello from page3';
//     }
// }

// namespace MyApp.Controllers {
//
//     let products = [
//         { id: 1, name: 'Milk', price: 5.00 },
//         { id: 2, name: 'Cheese', price: 17.00 },
//         { id: 3, name: 'Apples', price: 3.40 }
//     ];
//
//     export class ProductListController {
//        public products = products;
//
//        public goToProduct(product) {
//          this.$state.go('Details', { id: product.id });
//        }
//
//        constructor(private $state: ng.ui.IStateService) { }
//    }
//
//
//    export class ProductDetailsController {
//        public product;
//
//        constructor($stateParams: ng.ui.IStateParamsService) {
//            this.product = products.filter((p) => p.id == $stateParams['id'])[0];
//        }
//    }
//
// }
