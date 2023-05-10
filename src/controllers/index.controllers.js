const controller={}

const title='hola mundo';

controller.index= (req,res)=>{
    //res.send('conexion exitosa :)')
    res.render('index',{title:title})
}
controller.test= (req,res)=>{
    //res.send('conexion exitosa :)')
    // const data = {
    //     message: 'Hola, mundo!'
    //   };
    const data='{"name": "Juan", "age": 30, "city": "Bogotá"}';
      res.send(JSON.parse(data));
    
}
controller.users= (req,res)=>{
    res.send('PRUEBA DE TRAER DATOS')
}

module.exports = controller