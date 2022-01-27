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
        {
            cim: "Első",
            tartalom:"Lorem ipsum dolor sit amet. Ab placeat maiores est aspernatur veritatis non animi enim qui harum labore quo consequatur alias ut voluptas voluptatem. Aut quaerat voluptas est magnam internos ad itaque quam rem recusandae dolores et consequatur maiores. Eos repellendus quia ea accusantium dolore et saepe enim aut cumque maxime. Qui possimus repellat ut maiores consequatur a suscipit eius nam iste quod sed iusto quae. Ex minus recusandae non eligendi facere cum itaque quia ut sint voluptas et dolores neque ab perferendis voluptas eum excepturi voluptatum. Et enim quam eos eligendi molestiae qui nesciunt officia et voluptas rerum. Non autem fugit eum repudiandae amet ut accusantium harum? Quo error dolor qui unde obcaecati ab eligendi repellat optio rerum?",
            datum:"2022.01.27 10:11",
            szerkeszto:"Erik",
            status:"true"
        },
        {
            cim: "Második",
            tartalom:"Lorem ipsum dolor sit amet. Non quia omnis ea velit consectetur et veniam esse cum molestias quia. Rem placeat quia aut perferendis voluptas est tempore velit hic deleniti nulla aut nulla optio quo quidem internos. Sit voluptatem dolore non rerum alias vel itaque aperiam et enim corporis quo obcaecati molestiae aut rerum error eos asperiores accusantium. Sit consequatur ipsum ut asperiores laborum non animi sunt rem itaque necessitatibus non cumque velit eos modi tempora. Ut dolore minus aut autem velit sed quaerat voluptatum quo consequuntur nihil. Quo consequatur galisum est aspernatur esse qui repellendus repudiandae! Et nihil velit et voluptas molestiae id dolorem dolore aut ullam pariatur. Est numquam minima eos aliquam quaerat aut deserunt galisum non dolor quasi non quae vero eum excepturi perferendis et omnis aliquid. Et officia voluptatem non rerum officiis in nihil dicta est voluptate quisquam in impedit neque. In iste nesciunt eum odit quia et mollitia numquam et quia rerum et dolor quos et voluptate officiis non quia alias. Aut adipisci corporis est dignissimos tempora et dolore quo nulla error. Qui omnis consectetur in dolorum maiores a cumque libero eum deleniti esse a rerum cupiditate. Et commodi velit a error totam et laudantium rerum aut voluptatem eaque et provident fugiat sed minus eveniet ut similique animi. Et cumque beatae sit soluta consequatur quo minus consequatur sit fugiat asperiores vel placeat officiis.",
            datum:"2022.01.27 10:11",
            szerkeszto:"Csaba",
            status:"true"
        },
        {
            cim: "Harmadik",
            tartalom:"Lorem ipsum dolor sit amet. At temporibus optio ad sint iusto et velit autem et optio voluptates sed eligendi rerum a illum nobis. Qui ipsum inventore At exercitationem sunt aut neque debitis est quia quis est molestiae quibusdam sed excepturi nesciunt? Ex distinctio facilis in nihil molestiae vel provident natus! Aut consequatur dolore aut repudiandae atque quo mollitia nisi sit officiis corporis et dolor internos aut similique nemo. At velit repellat ut odit recusandae At debitis omnis in voluptate dolor ea quia inventore. Et debitis voluptatem id quam nobis 33 consequatur assumenda et vero quia. Ab totam odit ad velit iste ex modi voluptatum et eius recusandae vel omnis unde hic minus consequatur. Ad aliquam sequi et quos eaque a autem quam. Est reiciendis quia sit rerum illum qui magnam quos eos enim voluptatem sed odit nihil aut doloribus voluptatem. Ut omnis enim qui temporibus beatae ut perspiciatis quisquam. 33 galisum facere in quae dolorem hic recusandae vero et nesciunt iste aut nulla facere! Et esse numquam in tempore iste qui illum eligendi non harum excepturi eos quia autem. Ex minus perspiciatis est eligendi animi eum dolorem quos in dolore facere qui placeat iste eos omnis quia ut consequatur ducimus? Est impedit quasi qui dolor tempora qui voluptates voluptate.",
            datum:"2022.01.27 10:11",
            szerkeszto:"Tamas",
            status:"false"
        },
        {
            cim: "Negyedik",
            tartalom:"Lorem ipsum dolor sit amet. Ab placeat maiores est aspernatur veritatis non animi enim qui harum labore quo consequatur alias ut voluptas voluptatem. Aut quaerat voluptas est magnam internos ad itaque quam rem recusandae dolores et consequatur maiores. Eos repellendus quia ea accusantium dolore et saepe enim aut cumque maxime. Qui possimus repellat ut maiores consequatur a suscipit eius nam iste quod sed iusto quae. Ex minus recusandae non eligendi facere cum itaque quia ut sint voluptas et dolores neque ab perferendis voluptas eum excepturi voluptatum. Et enim quam eos eligendi molestiae qui nesciunt officia et voluptas rerum. Non autem fugit eum repudiandae amet ut accusantium harum? Quo error dolor qui unde obcaecati ab eligendi repellat optio rerum?",
            datum:"2022.01.27 10:11",
            szerkeszto:"Esztebán",
            status:"true"
        },
        {
            cim: "Ötodik",
            tartalom:"Lorem ipsum dolor sit amet. Non quia omnis ea velit consectetur et veniam esse cum molestias quia. Rem placeat quia aut perferendis voluptas est tempore velit hic deleniti nulla aut nulla optio quo quidem internos. Sit voluptatem dolore non rerum alias vel itaque aperiam et enim corporis quo obcaecati molestiae aut rerum error eos asperiores accusantium. Sit consequatur ipsum ut asperiores laborum non animi sunt rem itaque necessitatibus non cumque velit eos modi tempora. Ut dolore minus aut autem velit sed quaerat voluptatum quo consequuntur nihil. Quo consequatur galisum est aspernatur esse qui repellendus repudiandae! Et nihil velit et voluptas molestiae id dolorem dolore aut ullam pariatur. Est numquam minima eos aliquam quaerat aut deserunt galisum non dolor quasi non quae vero eum excepturi perferendis et omnis aliquid. Et officia voluptatem non rerum officiis in nihil dicta est voluptate quisquam in impedit neque. In iste nesciunt eum odit quia et mollitia numquam et quia rerum et dolor quos et voluptate officiis non quia alias. Aut adipisci corporis est dignissimos tempora et dolore quo nulla error. Qui omnis consectetur in dolorum maiores a cumque libero eum deleniti esse a rerum cupiditate. Et commodi velit a error totam et laudantium rerum aut voluptatem eaque et provident fugiat sed minus eveniet ut similique animi. Et cumque beatae sit soluta consequatur quo minus consequatur sit fugiat asperiores vel placeat officiis.",
            datum:"2022.01.27 10:11",
            szerkeszto:"Emese",
            status:"true"
        },
        {
            cim: "Hatodik",
            tartalom:"Lorem ipsum dolor sit amet. At temporibus optio ad sint iusto et velit autem et optio voluptates sed eligendi rerum a illum nobis. Qui ipsum inventore At exercitationem sunt aut neque debitis est quia quis est molestiae quibusdam sed excepturi nesciunt? Ex distinctio facilis in nihil molestiae vel provident natus! Aut consequatur dolore aut repudiandae atque quo mollitia nisi sit officiis corporis et dolor internos aut similique nemo. At velit repellat ut odit recusandae At debitis omnis in voluptate dolor ea quia inventore. Et debitis voluptatem id quam nobis 33 consequatur assumenda et vero quia. Ab totam odit ad velit iste ex modi voluptatum et eius recusandae vel omnis unde hic minus consequatur. Ad aliquam sequi et quos eaque a autem quam. Est reiciendis quia sit rerum illum qui magnam quos eos enim voluptatem sed odit nihil aut doloribus voluptatem. Ut omnis enim qui temporibus beatae ut perspiciatis quisquam. 33 galisum facere in quae dolorem hic recusandae vero et nesciunt iste aut nulla facere! Et esse numquam in tempore iste qui illum eligendi non harum excepturi eos quia autem. Ex minus perspiciatis est eligendi animi eum dolorem quos in dolore facere qui placeat iste eos omnis quia ut consequatur ducimus? Est impedit quasi qui dolor tempora qui voluptates voluptate.",
            datum:"2022.01.27 10:11",
            szerkeszto:"Oszasz",
            status:"false"
        },
    ]
})