//criando e configurando o servidor c/ express
const express =  require("express")
const server = express()
const db = require("./db.js")

//inclusão de informações no front
// const ideas = [
//     {
//         img:"https://www.flaticon.com/premium-icon/icons/svg/644/644617.svg",
//         title:"Cursos de Programação",
//         category:"Estudo",
//         description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat illo porro iusto nemo voluptatibus",
//         url:"https://rocketseat.com.br"
//     },
// ]

//configurando arqs estáticos
server.use(express.static("public"))

//habilitar uso do req.body
server.use(express.urlencoded({ extended: true}))

//configurando o nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

//criando uma rota
server.get("/", function (req, res){

    db.all(`SELECT * FROM ideas`, function(err, rows){
        if (err){ 
            console.log(err)
            return res.send("Erro no banco de dados")
        }    

            const reverseIdeas = [...rows].reverse()

                let lastIdeas = []
                for (let idea of reverseIdeas){
                    if(lastIdeas.length < 4 ) {
                        lastIdeas.push(idea)
                    }
                }
        
            return res.render("index.html", { ideas: lastIdeas })
    })

})

//criando segunda rota
server.get("/ideas", function (req, res){
    db.all(`SELECT * FROM ideas`, function(err, rows){
        if (err){ 
            console.log(err)
            return res.send("Erro no banco de dados")
        }   

        const reverseIdeas = [...rows].reverse()

        return res.render("ideias.html", {ideas: reverseIdeas})
    })   
})

server.post("/", function (req, res){
    //Inserir dados na tabela
        const query = `
        INSERT INTO ideas(
            image,
            title,
            category,
            description,
            link
        ) VALUES (?,?,?,?,?);
        `
        const values = [
            req.body.image,
            req.body.title,
            req.body.category,
            req.body.description,
            req.body.link
        ]

        db.run(query, values, function(err) {
            if (err){ 
                console.log(err)
                return res.send("Erro no banco de dados")
            }  

            return res.redirect("/ideas")
        }) 
})

//servidor ligado
server.listen(3000)