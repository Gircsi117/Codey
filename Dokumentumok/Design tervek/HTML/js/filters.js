app.filter("blog_status", ()=>{
    return (x)=>{   
        return (x == "true") ? ("green") : ("red")
    }
})

app.filter("count", ()=>{
    return (x)=>{
        var szam = 0;
        x.forEach(element => {
            szam++;
        });
        return szam
    }
})