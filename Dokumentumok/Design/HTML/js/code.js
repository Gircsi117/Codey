var app = angular.module("CodyApp", []);

app.run(function ($rootScope) {
    $rootScope.title = "Codey"
})

app.controller("menuCtrl", function ($scope) {
    $scope.nev = "Codey";
    $scope.eszkozok = [
        {name:"Cél meghatározása", url:"#"},
        {name:"Étkezési napló", url:"#"},
        {name:"Grafikonok", url:"#"},
        {name:"Kalória táblázat", url:"#"},
        {name:"Saját ételek", url:"#"},
        {name:"Beállítások", url:"#"}
    ];
    $scope.info = [
        {name:"Blog", url:"blog.html"},
        {name:"GYIK", url:"gyik.html"},
        {name:"Kalóriaszámlálásról", url:"#"},
        {name:"Rólunk", url:"rolunk.html"}
    ];
});

app.controller("gyikCtrl", ($scope)=>{
    $scope.kerdesek = [
        { kerdes:"Kérdés?", valasz: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."},
        { kerdes:"Kérdés?", valasz: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
    ];
})

app.controller("blogCtrl", ($scope)=>{
    $scope.blogs = [
        {cim: "Első", tartalom:"Ez a tartalom", datum:"2022.01.27 10:11", szerkeszto:"Erik", status:true},
        {cim: "Első", tartalom:"Ez a tartalom", datum:"2022.01.27 10:11", szerkeszto:"Erik", status:true},
        {cim: "Első", tartalom:"Ez a tartalom", datum:"2022.01.27 10:11", szerkeszto:"Erik", status:false},
        {cim: "Első", tartalom:"Ez a tartalom", datum:"2022.01.27 10:11", szerkeszto:"Erik", status:true},
    ]
})

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

app.directive("gyikItem", ()=>{
    return{
        scope:{
            kerdes: "@",
            valasz: "@"
        },
        template: `
            <div class="gyik-item">
                <h2>{{kerdes}}</h2><hr>
                <p>{{valasz}}</p>
            </div>
        `
    }
})

app.directive("nevjegy", ()=>{
    return{
        scope:{
            nev: "@",
            kep:"@",
            leiras: "@"
        },
        template: `
            <div class="gray nevjegy mt-3">
                <img src="img/{{kep}}" alt="{{kep}}" class="col-12">
                <h1>{{nev}}</h1>
                <p>{{leiras}}</p>
            </div>
        `
    }
})

app.directive("blogItem", ()=>{
    return {
        scope:{
            cim: "@",
            tartalom:"@",
            datum:"@",
            szerkeszto:"@",
            status:"@"
        },
        template: `
            <div class="row p-0 m-0">
                <h2 class="d-block" style="width: calc(100% - 100px)">{{cim}}</h2>
                <button style="width: 100px" class="${(true)?("green"):("red")}">{{status}}</button>
            </div>
            <div>

            </div>

        `
    }
})