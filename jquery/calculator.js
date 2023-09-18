const calculator = $('#calculator');
const result = $('#result');

calculator
  .find('input')
  .each(function () {
    $(this).on('keyup', () => {
      result.text(Number(calculator[0][0].value) + Number(calculator[0][1].value));
    });
  });
