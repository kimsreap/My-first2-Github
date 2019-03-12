// var num1 
// var num2
// var op
// var isOp





// let num1
// let num2
// let op
// let isOp

let num1,
    num2,
    op,
    isOp
    isEval


const init = _ => {
    num1 = 0
    num2 = 0
    op = ' '
    isOp = false
    isEval = false
    document.querySelector('#result').innerHTML = ''

}
const numHandler = num => {
    if(isOp){
        num2 += num
    } else {
        num1 += num
    }
}
const opHandler = op => {
    if (!isOp && num1 !== '') {
        op = operator 
        isOp = true
    }
}
const evaluate = _ => {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    switch (op) {
        case '+':
            break
        case '-':
            break
        case '*':
            break
        case '/':
            break
        default : break
    }
}

document.addEventListener('click', ({target}) => {
    switch (target.className){
        case 'number':
            numHandler(target.dataset.num)
            break
        case 'operator':
            opHandler(target.dataset.op)
            break
        case 'clear':
            init(target.dataset.)
            break
        case 'equal':
            evaluate(target.dataset.Eval)
            break
        default: break
    // }
    // if (e.target.className === 'number') {
        // console.log('number')
    // } else if (e.target.className === 'operator'){
        // console.log('operator') 
    // } else if (e.target.id === 'equal'){
        // console.log('equal')
    // } else if (e.target.id === 'clear') {
        // console.log('clear')
    }
})




// console.log(num1)
// console.log(num2)
// console.log(op)
// console.log(isOp)
