
(function(){

    'use strict';

    angular.module('lunchChecker', [])
    
    .controller('lunchController', function($scope){
        $scope.items = '';
        $scope.message = '';
        $scope.checkBoxColor = 'info';

        $scope.check = function(){
            var checking = checkItems($scope.items);
            $scope.message = checking

            if($scope.message == 'Enjoy!'){
                $scope.checkBoxColor = 'success'
            } else if($scope.message == 'Too much boss!'){
                $scope.checkBoxColor = 'danger'
            }else if($scope.message == 'Put something to check'){
                $scope.checkBoxColor = 'primary'
            }
            return checking;
        }   
    });


    function checkItems(items){
        var splitedItems = items.split(',');
        
        if(splitedItems.length == 3){
            var message = 'Enjoy!'
        }
        else if(splitedItems.length >= 4 ){
            var message = 'Too much boss!'
        } else{
            var message = 'Put something to check'
        }
        return message;
    }






})();