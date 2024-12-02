import { dictionary } from './dictionary.js';

const inputWord = document.getElementById('input-word');
const buttonTranslate = document.getElementById('translatebtn');
const answer = document.getElementById('answer');
const categoryRadios = document.querySelectorAll('input[name="categorie"]');
const respuesta = document.getElementById('answer2');


buttonTranslate.addEventListener('click', () => {
    const word = inputWord.value.trim();
    const selectedIdiom = document.querySelector('input[name="idiom"]:checked').value;

    if (word) {
        const translation = translateWord(word, selectedIdiom);
        answer.value = translation; 
    } else {
        answer.value = 'Por favor, ingresa una palabra';
    }
});



function translateWord(word, language) {
    
    for (let category in dictionary.categories) {
        const words = dictionary.categories[category];

        
        const foundWord = words.find(entry => 
            language === 'ingles' ? entry.spanish.toLowerCase() === word.toLowerCase() :
            entry.english.toLowerCase() === word.toLowerCase()
        );

        
        if (foundWord) {
            return language === 'ingles' ? foundWord.english : foundWord.spanish;
        }
    }

    return 'No encontrado';
}






// const person2 = ['Edwin','Rozo', 37]
// console.log(person2)


// // Destructuring
// const { name, lastname } = person1

// const [value1, value3] = person2

// const fichaAdso = [
//   { name: 'Eusebio', rol: 'Backend' },
//   { name: 'Sofia', rol: 'Backend' },
//   { name: 'Andres', rol: 'Backend' },
//   { name: 'Andrea', rol: 'Backend' }  
// ]

// const names = fichaAdso.filter(item => item.name.charAt(0) === 'A')
// console.log(names)

//console.log(Object.keys(person1))
//console.log(Object.values(person1))
//console.log(Object.entries(person1))

//for (const key in object) {
//  if (Object.prototype.hasOwnProperty.call(object, key)) {
//    const element = object[key];
//    
//  }
//}

//for (const element of object) {
  
//}

