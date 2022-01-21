document.getElementById("waterRange").addEventListener("change", ()=>{
    //console.log($("#waterRange").val());
    $("#water-text").html(`Víz mennyiség: ${$("#waterRange").val()}dl`)
})