String.prototype.reverse = function () {
    var invertida = '';
    for(var i= this.length - 1; i>=0; i-- ){
      invertida = invertida + this.charAt(i)
    }
    return invertida; 
}


var cadena = 'hola'

var long = cadena.reverse()

console.log(long)