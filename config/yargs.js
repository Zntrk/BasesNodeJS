let opt = {
    base: {
        demand: true, //obligatorio
        alias: 'b',
        description: 'La base de multiplicar'
    },
    limite: {
        alias: 'l',
        default: 10,
        description: 'Limite de la tabla'
    }
};

const argv = require('yargs')
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opt)
    .command('listar', 'imprime la lista', opt)
    .help()
    .argv;


module.exports = {
    argv
};