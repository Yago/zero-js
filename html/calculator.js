const calculator = document.getElementById('calculator');
const result = document.getElementById('result');

calculator
  .querySelectorAll('input')
  .forEach(input => {
    input.addEventListener('keyup', (e) => {
      result.innerText = Number(calculator[0].value) + Number(calculator[1].value)
    });
  });
