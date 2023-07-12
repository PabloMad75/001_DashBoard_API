const urlIndicadorApi = 'https://mindicador.cl/api/';
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

axios
  .get(urlIndicadorApi)
  .then((response) => {
    // El código dentro de esta función se ejecutará cuando se reciba una respuesta exitosa de la API
    console.log(response.data);
  })
  .catch((error) => {
    // El código dentro de esta función se ejecutará si hay algún error en la llamada a la API
    console.error(error);
  });
