import { Express } from "express";
const app = Express();

app.get('/', (req, res) => 
    res.send("Ol")
)

app.listen(3000, () => 
    console.log(console.log('Servidor iniciado na porta 3000'))
)