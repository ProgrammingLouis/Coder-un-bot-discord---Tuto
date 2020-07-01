// ** le "if" et le "else"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

// Syntax :
// if (condition)
//    statement1 //si condition true
// [else
//    statement2] //si condition false

// "[]" veut dire que le else est optionnel

// on créer une variable nommée bool de type boolean
// qui peut être égale à true ou false
let bool = true

// pour afficher le type de la variable bool
console.log('type de la variable bool')
console.log(typeof bool)

console.log('example 1')
if (bool/*condition*/) {
    /*statement1*/
    console.log('condition true')
} else {
    /*statement2*/
    console.log('condition false')
}

console.log('example 2')
// le code suivant est équivalent au code précedant (l.19 à 25)
if (bool) console.log('condition true')
else console.log('condition false')