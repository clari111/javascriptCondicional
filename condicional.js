/* 20 de octubre*/

/*  1. Crear una funcion que determine el mayor de 2 numeros 
2. Crear una funcion que determine si un numero es positivo, negativo o cero
3. Crear una funcion que determine si un numero esta entre los valores 25 y 255
*/



{
    if (( num >= 25) && (num <= 255))
{ return 'Esta en el rango de valores'
    
} else {
    return ' No esta en el rango de valores'

}
}


function mayor (a, b)
{
    if (a >= b)
    {  return a
    } else {
        return b
    }
}

function positivoNegativocero (a)
{
    if ( a > 0)
    {
        return positivo
    }else if( a == 0){
        return cero
    } else {
        return negativo
    }
}