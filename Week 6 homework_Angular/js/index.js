// I choose angular!  It's so fun!

angular.module('app',[]);

angular.module('app').controller('goodController', function($scope){
    $scope.title = "Good";
});

angular.module('app').controller('evilController', function($scope){
    $scope.title = "Evil!";
    $scope.description = "Evil is more FUN!";
    $scope.laugh = "MUAHA HA HAH!";
})
