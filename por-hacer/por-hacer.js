const fs = require('fs');

//todas las notas las voy a almacenar en un arreglo

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer); //conviete un objeto a un json

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar', err);
        }
    });
}


const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = [];
    }



}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true; //para decir q la tarea se hizo correctamente 
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true; //para decir q la tarea se hizo correctamente 
    } else {
        return false;
    }

}

const getListadoFiltrado = (completado) => {
    cargarDB();

    let listadoFilt = listadoPorHacer.filter(tarea => tarea.completado === completado);

    return listadoFilt;
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    getListadoFiltrado
}