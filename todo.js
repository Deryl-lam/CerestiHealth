var uid = 1;


function TaskController($scope) {
    
    $scope.tasks = [
        {id:0, 'Description': 'Task 1', 'DueDate':'2014-04-05', 'Completed': 'true'},
        {id:1, 'Description': 'Task 2', 'DueDate':'2014-07-08', 'Completed': 'false'}
    ];
    
    $scope.newTask = function() {
     
        $scope.newtask.id = uid++;
        $scope.tasks.push($scope.newtask);
        $scope.newtask = {};
    }

	
    $scope.saveTask = function() {
            
		 for(i in $scope.tasks) {
				if($scope.tasks[i].id == $scope.newtask.id) {
					$scope.tasks[i] = $scope.newtask;
				}
		 }                
        $scope.newtask = {};
    }

    
    $scope.delete = function(id) {
        
        for(i in $scope.tasks) {
            if($scope.tasks[i].id == id) {
                $scope.tasks.splice(i,1);
                $scope.newtask = {};
            }
        }
        
    }
    
     $scope.deleteTasks = function() {
        
        for(i in $scope.tasks) {
			$scope.tasks.splice(i,1);
			$scope.newtask = {};
        }
		// remove the last one
		$scope.tasks.splice(0,1);
		$scope.newtask = {};
        
    }
       
    $scope.edit = function(id) {
        for(i in $scope.tasks) {
            if($scope.tasks[i].id == id) {
                $scope.newtask = angular.copy($scope.tasks[i]);
            }
        }
    }
}