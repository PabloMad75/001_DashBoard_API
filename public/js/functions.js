const urlIndicadorApi = "https://mindicador.cl/api/";

// Función para obtener los datos de la API y completar el <select> HTML
export async function getDataAndPopulateSelect() {
  try {
    // Obtén una referencia al elemento del spinner
    const spinner = document.querySelector(".spinner");
    // Muestra el spinner
    spinner.style.display = "block";
    // Llamada a la funcion getData que trae la info de la API
    const data = await getData();
    const selectElement = document.getElementById("select__data");
    // Oculta el spinner
    spinner.style.display = "none";

    // Filtrar las propiedades del objeto que cumplan con el formato esperado
    const filteredData = Object.values(data).filter((item) => {
      return item.codigo && item.nombre;
    });
    // Crear las opciones para el <select> HTML utilizando los datos filtrados
    filteredData.forEach((item) => {
      const optionElement = document.createElement("option");
      optionElement.value = item.codigo;
      optionElement.text = item.nombre;
      selectElement.appendChild(optionElement);
    });
  } catch (error) {
    console.error("Error al obtener los datos de la API:", error);
  }
}

// Función que se conecta a la API y trae los datos
export async function getData(key = "") {
  try {
    const response = await axios.get(urlIndicadorApi + key);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error al obtener los datos de la API:", error);
    throw error;
  }
}

const grafico = document.getElementById("canvas");

let graficoFinanciero;

// Función que crea el grafico
export const createGrafico = (data, dataInfo, unidadMedida) => {
  //Modificar el formato de fecha en los datos

  if (graficoFinanciero) {
    graficoFinanciero.destroy();
  }

  graficoFinanciero = new Chart(grafico, {
    type: "line",
    data: {
      labels: data.map((item) => item.fecha),
      datasets: [
        {
          label: "Valor de " + dataInfo + " expresado en " + unidadMedida,
          data: data.map((item) => item.valor),
          pointStyle: "circle",
          pointRadius: 6,
          pointHoverRadius: 10,
          backgroundColor: "rgba(255, 170, 42)",
          borderColor: "rgba(199, 0, 57, 0.6)",
          //pointBackgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de fondo del círculo
          //pointBorderColor: 'rgba(255, 99, 132, 1)', // Color del borde del círculo
        },
      ],
    },
  });
};

// Función para cambiar el formato de fecha de 'yyyy-mm-dd' a 'dd/mm/yyyy'
export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Modifica el formato de la fecha
export function formatDataSerie(data) {
  const newData = data.map((item) => ({
    fecha: formatDate(item.fecha),
    valor: item.valor,
  }));
  return newData;
}
