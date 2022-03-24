const express = require("express");
const port = 3030;
const app = express();

app.get("/", (req,res) =>{
    const content =` <h1>Esta es nuestra api </h1>`
    res.send(content);
})

app.listen( port,(err) =>{
    err ? console.log("no se pudo inicializar el sv") : console.log(`sv corriendo en http://localhost:${port}`);
})


