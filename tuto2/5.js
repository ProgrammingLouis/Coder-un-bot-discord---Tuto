let x = 5

//** le && est le ET logique
console.log('example 1: le &&')
if (4 < x && x < 8) {
    console.log('ok') // si 4 < x < 8 qu'on ne peut pas écrire en js
} else {
    console.log('non')
}

//** le || est le OU logique
console.log('example 2: le ||')
if (x == 5 || x == 6) {
    console.log('ok') // si x égal 5 ou 6
} else {
    console.log('non')
}

//** le ! est le NON logique
console.log('example 3: le !')
if (!(x == 5)) {
    console.log('ok') // si x n'est pas égal à 5
} else {
    console.log('non')
}

//! regarder https://www.w3schools.com/js/js_comparisons.asp pour les autres operateurs logiques
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators pour tout les operateurs
// ** On peut utiliser le debugging pour les tester https://medium.com/young-coder/basic-debugging-in-visual-studio-code-b9a5d193fe7b