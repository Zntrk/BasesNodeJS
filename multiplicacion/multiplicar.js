const fs = require('fs');

var data = 'worked';

let multiplicar = (base, limite) => {
    temp = ''
    for (i = 0; i < limite; i++) {
        temp += `tabla - ${base} = ${base} * ${i} = ${base*i}\n`

    }
    return temp
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (isNaN(base)) {
            reject('No es un numero');
            return;
        }
        data = multiplicar(base, limite);
        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla${base}`);
        });
    });
}

let listarTabla = (base, limite) => {
    data = multiplicar(base, limite);
    console.log(data);
}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}














//ok