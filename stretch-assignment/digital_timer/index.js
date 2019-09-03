let intervalId = window.setInterval(runTimer, 10);

let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');

msTens.textContent = 0;
msHundreds.textContent = 0;
secondOnes.textContent = 0;
secondTens.textContent = 0;

function incrementCounter (counter) {
    if (Number(counter.textContent) < 9) {
        counter.textContent = Number(counter.textContent) + 1;
    } else {
        counter.textContent = 0;
    }
}

function runTimer () {
    incrementCounter(msTens);
    if  (
            Number(msTens.textContent) === 0
        ) {
            incrementCounter(msHundreds);
        }
    if  (
            Number(msHundreds.textContent) === 0 
            && Number(msTens.textContent) === 0
        ) {
            incrementCounter(secondOnes);
        }
    if  (
            Number(secondOnes.textContent) === 0 
            && Number(msHundreds.textContent) === 0
            && Number(msTens.textContent) === 0
        ) {
            incrementCounter(secondTens);
        }
    if  (
            Number(secondTens.textContent) === 1 
            && Number(secondOnes.textContent) === 0 
            && Number(msHundreds.textContent) === 0
            && Number(msTens.textContent) === 0
        ) {
            clearInterval(intervalId);
            document.querySelectorAll('.digit').forEach(
                item => item.style.color = 'red'
            )
        }
}