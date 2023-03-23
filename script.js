
let inputE1 = document.getElementById('display');
let resetBtnE1 = document.getElementById('reset-btn');
let resultE1 = document.getElementById('result');
document.getElementById('equate').addEventListener('click', function () {

    resultE1.classList.remove('hidden');
    resultE1.value = inputE1.value;
})
document.getElementById('delete-btn').addEventListener('click', function () {
    let input_string = document.getElementById('display').value;
    inputE1.value = input_string.slice(0, input_string.length - 1);
    // another process
    // inputE1.value = input_string.slice(0, -1);
    // console.log(input_string, typeof (input_string));
})
resetBtnE1.addEventListener('click', function () {
    document.querySelector('.fa-rotate-right').classList.remove('fa-rotate-270');
    document.querySelector('.fa-rotate-right').classList.add('fa-rotate-360');
    setTimeout(() => {
        document.querySelector('.fa-rotate-right').classList.remove('fa-rotate-360');
        document.querySelector('.fa-rotate-right').classList.add('fa-rotate-270');
    }, 100);
    inputE1.value = '';
    resultE1.value = '';
})
let percentE1 = document.getElementById('percent');
percentE1.addEventListener('click', function () {
    let num = parseFloat(inputE1.value);
    console.log(num, typeof (num));
    num = num / 100;
    inputE1.value = '=' + num;
})
document.getElementById('equate').addEventListener('click', function () {
    inputE1.value = '=' + eval(resultE1.value);
})
