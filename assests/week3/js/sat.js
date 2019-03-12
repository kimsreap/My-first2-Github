//for (let i = 100; i > 0; i --)
 //   if (i % 3 === 0) {
     //   console.log(i)
  //  }




//const greeting = () => {
    //console.log('Hello')
//}

// document.querySelector('#myDiv').addEventListener('click', function (event){
    // console.log(event.target.id)
   // console.log(document.querySelector('#textInput').value)
   // document.querySelector('#textInput').value = ''

  // let btnElem = document.createElement('button')
  // btnElem.textContent = 'Click Me'
  // btnElem.className = 'Hotdog'
  // document.querySelector('#btnDiv').append('btnElem')
  // console.log(document.querySelector('.Hotdog'))
 // })

// decide which elem you're grabbing
// add event listener
// write your callback function
// write the code you want executed when the event listener fires
// if the event is dinamically added //

// const letters = ['A', '', '', '', '', '', '', '', '', '', '', '','', '', '', '', '', '','', '', '', '', '', '', '', 'z' ]



// Lexical Scope


//let dog = {
   // name: 'Beef'
//}



// 03 05 2019//

let goalNum
let currNum
let wins = 0
let losses = 0
let isDone = false


const init = _ => {
    // set isDone false for game
    //clear btn div
    currNum = 0
    // new random number to approach //
    goalNum = Math.floor(Math.random()* 100) + 1
    // reset goalNum and currNum display to initial state //
    document.querySelector('#goalNum').textContent = 'Goal Number:'

    document.querySelector('#currNum').textContent = '0'

    for (let i = 0; i < 3; i++) {

        let btnElem = document = '???'

        btnElem.setAttribute('data-value', Math.floor(Math.random()*20) + 1)

        document.querySelector('#buttons').append(btnElem)
    }
}

document.addEventListener('click', e => {
    if (e.target.className === 'numBtn') {
        currNum += parseInt(e.target.dataset.value)
        document.querySelector('#currNum').textContent = 
        'Current Value : ${currNum}'
        if 
    }
})

init()
