document.getElementById("waterRange").addEventListener("change", ()=>{
    //console.log($("#waterRange").val());
    $("#water-text").html(`Víz mennyiség: ${$("#waterRange").val()}dl`)
})

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
        {name:"GYIK", url:"#"},
        {name:"Kalóriaszámlálásról", url:"#"},
        {name:"Rólunk", url:"#"}
    ];
})