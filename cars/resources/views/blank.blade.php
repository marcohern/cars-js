<!DOCTYPE html>
<html lang="en" ng-app="gapCars">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="{{ URL::Asset('lib/bootstrap/dist/css/bootstrap.min.css') }}">
		<link rel="stylesheet" href="{{ URL::Asset('css/styles.css') }}">
		<title>Cars</title>
	</head>
	<body ng-controller="rootCtrl">

		<div class="container" id="nav">
			<nav class="navbar navbar-default">
				<div class="container-fluid">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-items" aria-expanded="false">
	        				<span class="sr-only">Toggle navigation</span>
	        				<span class="icon-bar"></span>
	        				<span class="icon-bar"></span>
	        				<span class="icon-bar"></span>
	      				</button>
	      				<a class="navbar-brand" href="#">GAPCars</a>
	      			</div>
					<div class="collapse navbar-collapse" id="menu-items">
						<ul class="nav navbar-nav">
							<li><a href="#!/">Cars</a></li>

						</ul>
						<form class="navbar-form navbar-right">
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Search" ng-model="searchText">
							</div>
							<button type="submit" class="btn btn-default" ng-click="onSearch()"><span class="glyphicon glyphicon-search"></span></button>
						</form>
				    </div><!-- /.navbar-collapse -->
				</div>
			</nav>
		</div>
		<div class="container" id="body" ng-view>
		</div>

		<div id="loader" ng-show="isLoading">
			<div id="loader-anim">
				<img src="/img/squares.svg" alt="Loading" />
			</div>
		</div>


		<!--core-->
		<script type="text/javascript" src="{{ URL::Asset('lib/jquery/dist/jquery.min.js') }}"></script>
		<script type="text/javascript" src="{{ URL::Asset('lib/bootstrap/dist/js/bootstrap.min.js') }}"></script>
		<script type="text/javascript" src="{{ URL::Asset('lib/angular/angular.min.js') }}"></script>
		<script type="text/javascript" src="{{ URL::Asset('lib/angular-route/angular-route.min.js') }}"></script>

		<!--app-->
		<script type="text/javascript" src="{{ URL::Asset('js/gapCars.module.js') }}"></script>
		<script type="text/javascript" src="{{ URL::Asset('js/gapCars.config.js') }}"></script>

		<script type="text/javascript" src="{{ URL::Asset('js/services/gapcars.js') }}"></script>

		<script type="text/javascript" src="{{ URL::Asset('js/controllers/rootCtrl.js') }}"></script>
		<script type="text/javascript" src="{{ URL::Asset('js/controllers/indexCtrl.js') }}"></script>
		<script type="text/javascript" src="{{ URL::Asset('js/controllers/detailsCtrl.js') }}"></script>
		<script type="text/javascript" src="{{ URL::Asset('js/controllers/compareCtrl.js') }}"></script>
	</body>
</html>