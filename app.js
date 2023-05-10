const express= require('express');
const app= express();
const port=3000;
const ip='192.168.1.18';
const path= require('path');
const routes=require('./src/routes/index.routes') //rutas
//  req request peticion cliente
//  res response respuesta del servidor
app.set('view engine', 'pug'); //motor de plantillas
app.set('views',path.join(__dirname,'src/views'))

app.use(routes)
app.use(express.static(path.join(__dirname,'/public')))



app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index_404.html'))
})

app.listen(port,ip,()=>{
    console.log('Servidor corriendo');
    //console.log(__dirname);
})