const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

const colors = require('colors');


let comando = argv._[0]
switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('========Por Hacer=========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==========================='.green);
        }

        break;

    case 'listarFiltrado':
        let listadoFiltrado = porHacer.getListadoFiltrado(argv.completado);
        //console.log(listadoFiltrado);
        console.log(`====Listado Tareas Estado Completado ${argv.completado}====`.green);
        for (let tarea of listadoFiltrado) {

            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==========================='.green);
        }

        break;
    case 'actualizar':

        let tareaActualizada = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(tareaActualizada);
        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido');
}