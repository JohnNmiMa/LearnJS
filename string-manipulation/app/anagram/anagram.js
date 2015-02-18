angular.module('stringManipulation')
.controller('AnagramCtrl', ['$scope', function($scope) {
    $scope.anagramAnswer = function(str1, str2) {
        if (!str1 || !str2)  return "";

        var y = str1.split("").sort().join(""),
            z = str2.split("").sort().join("");

        return (y === z
            ? str1 + " and " + str2 + " are anagrams!"
            : str1 + " and " + str2 + " are not anagrams!"
        );
    }
}]);
