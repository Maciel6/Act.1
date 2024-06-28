const mongoose=require('mongoose') //instanciar
const url_bd = 'mongodb://localhost:27017/Libreria' //url mongodbcompass and name of the  database
mongoose.connect(url_bd) 
//Promesa(.then/catch)
.then (()=>{ 
 console.log('Sistema en linea')   
})
.catch((err)=>{
    console.log('El sistema no inicio correctamente')
})

const Libros=new mongoose.Schema(
    {name:{
    type:String
    },
    Author:{
    type:String
    },
    Cost:{
    type:Number
    },
    Years:{
    type:Number
    },
    Editorial:{
    type:String
    },
    Volum:{
    type:Number
    },
    Num_Pag:{
    type:Number
    },
    })

    //create colection
    const modelo_Libros=new mongoose.model('Libreria',Libros)
    //create data
    modelo_Libros.create(
        {
            name:"Mobidick",
            Author:"Guillermo del Toro",
            Cost: 1890,
            Years: 7,
            Editorial: "The strange world",
            Volum: 5,
            Num_Pag: 506
        }
    )