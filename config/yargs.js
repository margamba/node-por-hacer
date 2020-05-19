/* optimizacion  */

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea',
    type: 'boolean'
}



const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion //esto es lo mismo que decir descripcion: descripcion pero ES6 se puede dejar solo descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('listarFiltrado', 'Lista las tareas por estado  completado', {
        completado
    })
    .help()
    .argv;

//para podr usar argv fuera de esta archivo tengo que exportarlo
module.exports = {
    argv
}