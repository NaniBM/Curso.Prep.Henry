String.prototype.reverse = function () {
    var stringInvertida = '';
    for(var i = this.length - 1; i >= 0; i--){
      stringInvertida = stringInvertida + this[i]
      console.log(stringInvertida)
    }

    return stringInvertida
}

var nueva = 'hola estan?'

var invertida = nueva.reverse()
console.log(invertida)