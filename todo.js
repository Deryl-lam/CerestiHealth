var uid = 1;


function TaskController($scope) {

    // Date pattern is YYYY-MM-DD or YYYY/MM/DD
    $scope.datePattern=/^(199\d|[2-9]\d{3})[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/i;
    $scope.errorMsg="";

    //var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;  

    $scope.tasks = [
        {id:0, 'TaskName': 'Clean house', 'Description': 'Need to clean toilets', 'DueDate':'2014/03/15', 'Completed': 'false'},
    ];
    
    $scope.newTask = function(isValid) {
     
        if (isValid)
        {
            $scope.newtask.id = uid++;
            $scope.tasks.push($scope.newtask);
            $scope.newtask = {}; 
            $scope.errorMsg = "";           
        }
        else
        {
            $scope.errorMsg  = "Invalid Input.  Task is not created.";            
        }
    }

	
    $scope.saveTask = function(isValid) {
        
        if (isValid)
        {
            for(i in $scope.tasks) {
                if($scope.tasks[i].id == $scope.newtask.id) {
                    $scope.tasks[i] = $scope.newtask;
                }
            }
           $scope.errorMsg = "";                                              
        }
        else
        {
            $scope.errorMsg  = "Invalid Input!  Task is not updated!";        
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
        
		// reset the error message
		$scope.errorMsg = ""; 
    }
    
     $scope.deleteTasks = function() {
        
        for(i in $scope.tasks) {
			$scope.tasks.splice(i,1);
			$scope.newtask = {};
        }
		// remove the last one
		$scope.tasks.splice(0,1);
		$scope.newtask = {};
		
		// remove
		$scope.errorMsg = ""; 
        
    }
       
    $scope.edit = function(id) {
        for(i in $scope.tasks) {
            if($scope.tasks[i].id == id) {
                $scope.newtask = angular.copy($scope.tasks[i]);
            }
        }
		
		$scope.errorMsg = ""; 
    }
}