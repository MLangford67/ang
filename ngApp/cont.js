var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var MovieServices = (function () {
            function MovieServices($resource) {
                this.MovieResource = $resource('/api/movies');
            }
            MovieServices.prototype.listMovies = function () {
                return this.MovieResource.query();
            };
            return MovieServices;
        }());
        Services.MovieServices = MovieServices;
        angular.module('MyApp').service('movieService', Services.MovieService);
        var AccountService = (function () {
            function AccountService() {
            }
            AccountService.prototype.isLoggedIn = function () {
                return false;
            };
            return AccountService;
        }());
        Services.AccountService = AccountService;
        angular.module('MyApp').service('accountService', AccountService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
