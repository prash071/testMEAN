var app = angular.module('flapperNews',[]);

app.controller('MainCtrl',[
	'$scope',
	function($scope){
		$scope.test='Hello world!!';
		$scope.posts=[
		{title:'post 1', up:12},
		{title:'post 2', up:2},
		{title:'post 3', up:15},
		{title:'post 4', up:4},
		{title:'post 55', up:13}
		];
	$scope.addPost= function  () {
		$scope.posts.push({title:'new post by user', up:0});
	};

	$scope.addPostByUser=function(){
		if (!$scope.title||$scope.title===''){return;}
		$scope.posts.push({title:$scope.title,up:0});
		$scope.title='';
	}



	}]);