var campos = [
   document.querySelector('#data'),
   document.querySelector('#quantidade'),
   document.querySelector('#valor')
]

document.querySelector('.form').addEventListener('submit', function (event) {

   event.preventDefault();

   var tabela = document.querySelector('table tbody');
   var tr = document.createElement('tr');

   campos.forEach(function (campo) {
      var td = document.createElement('td');
      td.textContent = campo.value;
      tr.appendChild(td);
   })

   tdVolume = document.createElement('td');
   tdVolume.textContent = campos[1].value * campos[2].value;
   tr.appendChild(tdVolume);

   tabela.appendChild(tr);

   campos[0].value = '';
   campos[1].value = '';
   campos[2].value = '';

   campos[0].focus();

})
