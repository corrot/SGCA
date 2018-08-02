var app = angular.module('app');

app.controller('SearchGetController', ['$scope', 'news', '$routeParams', '$location', '$window', '$rootScope', function($scope, news, $routeParams, $location, $window, $rootScope) {
    $scope.searchResults = $rootScope.searchResults;
    $('#modal-search').modal('hide');
    $("#search-input").val('');
}]);