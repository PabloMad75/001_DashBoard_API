import { getDataAndPopulateSelect, getData, createGrafico } from "./functions.js";

const btnConsult = document.getElementById("btnconsult");
const canvas = document.getElementById("canvas");
let informacionFinanciera, dataFecha = [];
let unidadMedida;

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
        console.log(data);
        unidadMedida=data.unidad_medida;
        informacionFinanciera = data.serie;
        createGrafico(informacionFinanciera.reverse(),selectedValue,unidadMedida);
        console.log(informacionFinanciera);
        console.log('unidad de medida:'+unidadMedida);
        // Realiza las operaciones que necesites con los datos obtenidos
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    return;
  }
});

