import { getDataAndPopulateSelect, getData, createGrafico, formatDataSerie } from "./functions.js";

const btnConsult = document.getElementById("btnconsult");
const canvas = document.getElementById("canvas");
let informacionFinanciera = [];

// Llama a la función para obtener los datos y completar el <select> HTML
getDataAndPopulateSelect();
getData().then((data)=>{
  console.log(data)
});

btnConsult.addEventListener("click", function (event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del envío del formulario
  const selectElement = document.getElementById("select__data");
  const selectedValue = selectElement.value;
  if (!selectedValue == "") {
    // Llamo a la funcion getData con un parametro obtenido del combo select
    getData(selectedValue)
      .then((data) => {
        // Realiza las operaciones que necesites con los datos obtenidos
        console.log(data);
        informacionFinanciera = formatDataSerie(data.serie);
        createGrafico(informacionFinanciera.reverse(),data.nombre,data.unidad_medida);
        console.log(informacionFinanciera);
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    return;
  }
});



