const { error } = require("console");
let myslq = require("mysql");


let conexion = myslq.createConnection({
    host: "localhost",
    database: "programación",
    user: "root",
    password: ""
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conexion exitosa");
    }
});