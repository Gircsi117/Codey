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
                                Eszközök
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
                            <li class="nav-item log-out">
                                <a class="nav-link ps-2 p-lg-2" href="#">Log out</a>
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
            <footer class="row p-2 m-0">
                <div class="col-12 col-md-6 d-flex align-items-center">
                    <ul class="m-0">
                        <li>E-mail: valami@valmi.hu</li>
                        <li>Tell: +36408245489</li>
                        <li>Telephely: 6500 Baja. Katona Koppány u. 69</li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <h1>Köszönjük a látogatást!</h1>
                </div>
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
            tartalom: "@",
            datum: "@",
            szerkeszto: "@",
            status: "@"
        },
        template: `
            <div class="m-1 p-4 gray">
                <div class="row p-0 m-0">
                    <h2 class="d-block p-0" style="width: calc(100% - 100px)">{{cim}}</h2>
                    <button style="width: 100px" class="{{status}}">Status</button>
                </div>
                <h6>Made by: {{szerkeszto}}</h6>
                <hr>
                <div class="blog-content">
                    <p>{{tartalom}}</p>
                </div>
                <h6 class="col-12 text-end">{{datum}}</h6>
            </div>
        `
    }
})