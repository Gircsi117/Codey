var app = angular.module("CodyApp", []);

app.run(function ($rootScope) {
    
})

app.controller("menuCtrl", function ($scope) {
    $scope.nev = "Cody";
    $scope.eszkozok = [
        {name:"Cél meghatározása", url:"#"},
        {name:"Étkezési napló", url:"#"},
        {name:"Grafikonok", url:"#"},
        {name:"Kalória táblázat", url:"#"},
        {name:"Saját ételek", url:"#"},
        {name:"Beállítások", url:"#"}
    ];
    $scope.info = [
        {name:"Blog", url:"#"},
        {name:"GYIK", url:"gyik.html"},
        {name:"Kalóriaszámlálásról", url:"#"},
        {name:"Rólunk", url:"#"}
    ];
});

app.directive("menu", ()=>{
    return{
        template: `
            <header>
                <h1>{{ page }}</h1>
            </header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark alma" ng-controller="menuCtrl">
                <div class="container-fluid">
                    <a class="navbar-brand" href="./login.html">{{ nev }}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav pt-2 pt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link ps-2 p-lg-2" href="./index.html">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle ps-2 p-lg-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Eszküzök
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li ng-repeat="item in eszkozok"><a class="dropdown-item" href="{{item.url}}">{{item.name}}</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle ps-2 p-lg-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Információ
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li ng-repeat="item in info"><a class="dropdown-item" href="{{item.url}}">{{item.name}}</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `
    }
});

app.directive("ownFooter", ()=>{
    return{
        template: `
            <footer>
                <h2> Directive Footer </h2>
            </footer>
        `
    }
})