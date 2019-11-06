//importacion simple
//const multi = require('./multiplicacion/multiplicar')


//importacion destructurada
// let { crearArchivo } = require('./multiplicacion/multiplicar');


// let parametro = process.argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => console.log(`archivo creado: ${archivo}`))
//     .catch(e => console.log(e));


// console.log(process.argv);
// console.log(process.argv[2]);


//---------

const { crearArchivo, listarTabla } = require('./multiplicacion/multiplicar');

const { argv } = require('./config/yargs');

// const argv = require('yargs')
//     .command('crear', 'Crea un archivo con la tabla de multiplicar', {
//         base: {
//             demand: true, //obligatorio
//             alias: 'b',
//             description: 'La base de multiplicar'
//         },
//         limite: {
//             alias: 'l',
//             default: 10,
//             description: 'Limite de la tabla'
//         }
//     })
//     .command('listar', 'imprime la lista', {
//         base: {
//             demand: true, //obligatorio
//             alias: 'b',
//             description: 'La base de multiplicar'
//         },
//         limite: {
//             alias: 'l',
//             default: 10,
//             description: 'Limite de la tabla'
//         }
//     })
//     .help()
//     .argv

let argv2 = process.argv;


let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        console.log('crear');
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
        console.log('listar');
        break;
    default:
        console.log('Comando no valido');
}

console.log(comando);
//console.log(argv);
//console.log(argv2);




//buscar npm colors


//ok