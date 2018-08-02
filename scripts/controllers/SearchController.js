var app = angular.module('app');

app.controller('SearchController', ['$scope', 'news', '$routeParams', '$location', '$window', '$rootScope', '$route', function($scope, news, $routeParams, $location, $window, $rootScope, $route) {
    news.success(function(data) {
        $scope.searchQuery = "";
        $scope.search = function() {
            $scope.searchResults = [];
            var news = data;
            var results = $scope.searchResults;

            news.forEach(function (n) {
                var searchString = $scope.searchQuery.toLowerCase();
                var article = n.article[$scope.activeLang.title].toLowerCase();

                if (article.indexOf(searchString) > -1) {
                    var contains = false;
                    results.forEach(function(result) {
                        if (result.id == n.id) {
                            contains = true;
                            return;
                        }
                    });

                    if (!contains) {
                        $scope.searchResults.push(n);
                    }
                }
            });

            if ($location.$$path == '/search') {
                $route.reload();
            } else {
                var view = $location.$$path == '/' ? $location.$$absUrl + 'search' : $location.$$absUrl.replace($location.$$path, '/search');
                $window.location.assign(view);
            }

            $rootScope.searchResults = $scope.searchResults;
            $rootScope.searchQuery = $scope.searchQuery;
        };
    });
}]);