document.getElementById('form').addEventListener('submit', 
    
    function(e) {
        e.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if(num1 > num2) {
     document.getElementById('res').innerHTML = num1 + ' es mayor que ' + num2;
    } else if(num1 < num2) {
     document.getElementById('res').innerHTML = num2 + ' es mayor que ' + num1;
   } else {
    document.getElementById('res').innerHTML = 'Los numeros son iguales';
    }
});