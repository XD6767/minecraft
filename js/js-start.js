// let name = 'олег'
// console.log(name);
// name = 'алена'
// console.log(name);

// let box 
// console.log(box);
// box = true
// console.log(box);

// let num = '10'
// let num2 = 25
// console.log(num+num2);
// console.log(typeof(box));

// const fruit = 'яблоко'
// // fruit = 'банан'
// const car = {
//     color: 'red',
//     brand: 'ferrari',
//     countries: ['Russia', 'China', 'USA'],
//     isSportCar: true,
//     ttk: {
//         wheels: 4,
//         engine: 1,
//         doors: 4,
//     },
//     wrumwrum: function () {
//         console.log(`hello! my name is ${this.brand}`);
        
//     }
// }
// console.log(car);

const element = document.createElement('button')
element.innerText = 'нажми на меня'
console.log(element);
document.body.prepend(element)
// const item = document.querySelector('.logo')
// console.log(item);
function showText() {
    console.log('привет');
    
}
element.addEventListener('click', showText)