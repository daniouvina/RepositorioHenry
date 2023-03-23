
//Para habilitar consola, tipear node

function sumaTres(x) { //funcion normal

    return x + 3;
}

function funcionconsolelog(nombre){ //funcion normal

    console.log(nombre); //muestra valor del argumento nombre
    return nombre; // muestra el valor que retorna la funcion
}

var funcionconsolelog = function (nombre) { //guardar funcion en una variable

    console.log(nombre); //muestra valor del argumento nombre
    return nombre; // muestra el valor que retorna la funcion
}

/*Precedencia de valores, de derecha a izquierda, tomando este ultimo, el resultado.

var a = 1;
var b = 2;
var c = a = b;
console.log (c);
*/
