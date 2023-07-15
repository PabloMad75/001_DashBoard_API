import  { getDataAndPopulateSelect, getData, createGrafico, formatDataSerie } from './functions.js'

const btnConsult = document.getElementById("btnconsult");
const canvas = document.getElementById("canvas");
let informacionFinanciera = [];

getDataAndPopulateSelect();

getData().then((data) => {
  console.log(data);
});

btnConsult.addEventListener("click", function (event) {
  event.preventDefault();
  const selectElement = document.getElementById("select__data");
  const selectedValue = selectElement.value;

  if (!selectedValue == "") {
    getData(selectedValue)
      .then((data) => {
        console.log(data);
        informacionFinanciera = formatDataSerie(data.serie);
        createGrafico(informacionFinanciera.reverse(), data.nombre, data.unidad_medida);
        console.log(informacionFinanciera);
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    return;
  }
});
