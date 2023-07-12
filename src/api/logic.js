const btnConsult = document.getElementById("btnconsult");
btnConsult.addEventListener("click", function (event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del envío del formulario
  const selectElement = document.getElementById("select__data");
  const selectedValue = selectElement.value;
  if (!selectedValue == "") {
    console.log(selectedValue);
  } else {
    return;
  }
  // Realiza las operaciones que necesites con el valor seleccionado
});

// axios.get('https://mindicador.cl/api')
//   .then(response => {
//     const data = response.data;
//     const dolarValue = data.dolar.valor;
//     const ctx = document.getElementById('myChart').getContext('2d');
//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: ['Dólar'],
//         datasets: [{
//           label: 'Valor',
//           data: [dolarValue],
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   })
//   .catch(error => {
//     // console.error('Error al obtener los datos de la API:', error);
//   });



axios
  .get("https://mindicador.cl/api/")
  .then((response) => {
    // El código dentro de esta función se ejecutará cuando se reciba una respuesta exitosa de la API
    console.log(response.data);
  })
  .catch((error) => {
    // El código dentro de esta función se ejecutará si hay algún error en la llamada a la API
    console.error(error);
  });
