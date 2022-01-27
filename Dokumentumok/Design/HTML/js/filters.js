app.filter("blog_status", ()=>{
    return (x)=>{   
        return (x == "true") ? ("green") : ("red")
    }
})