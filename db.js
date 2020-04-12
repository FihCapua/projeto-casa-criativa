const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./db")

db.serialize(function (){
    //Criar a tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS ideas(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         title TEXT,
    //         category TEXT,
    //         description TEXT,
    //         link TEXT 
    //     );
    // `)

        //Inserir dados na tabela
        // const query = `
        // INSERT INTO ideas(
        //     image,
        //     title,
        //     category,
        //     description,
        //     link
        // ) VALUES (?,?,?,?,?);
        // `
        // const values = [
        // "https://www.flaticon.com/premium-icon/icons/svg/644/644617.svg",
        // "Cursos de Programação",
        // "Estudo",
        // "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat illo porro iusto nemo voluptatibus",
        // "https://rocketseat.com.br"
        // ]

        // db.run(query, values, function(err) {
        // if (err) return console.log(err)

        // console.log(this)
        // }) 
        
            //Consultar dados na tabela
            // db.all(`SELECT * FROM ideas`, function(err, rows){
            //     if (err) return console.log(err)

            //     console.log(rows)
            // })

                //Deletar dado da tabela
                // db.run(`DELETE FROM ideas WHERE id = ?`, [12], function(err){
                //     if (err) return console.log(err)

                //     console.log("DELETED", this)
                // }) 
})

module.exports = db