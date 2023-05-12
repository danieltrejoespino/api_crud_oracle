const express= require('express');
const app= express();
// const port=3000;
const port = normalizePort(process.env.PORT || '3000');
const ip='192.168.1.18';
const path= require('path');
const routes=require('./src/routes/index.routes') //rutas
//  req request peticion cliente
//  res response respuesta del servidor
function normalizePort(val) {
    const port = parseInt(val, 10);  
    if (isNaN(port)) {
      return val;
    }  
    if (port >= 0) {
      return port;
    }  
    return false;
  }  

app.set('view engine', 'ejs'); //motor de plantillas  
app.set('views',path.join(__dirname,'src/views')) //configurando carpeta para las vistas
app.use(routes)
app.use(express.static(path.join(__dirname,'/public')))



app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index_404.html'))
})

app.listen(port,ip,()=>{
    console.log(`Servidor corriendo ${port}`);
    console.log(__dirname);
})