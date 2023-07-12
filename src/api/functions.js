const urlIndicadorApi = 'https://mindicador.cl/api/';

// Función para obtener los datos de la API y completar el <select> HTML
export async function getDataAndPopulateSelect() {
  try {
    // Llamada a la funcion getData que trae la info de la API
    const data = await getData();
    const selectElement = document.getElementById('select__data');

    // Filtrar las propiedades del objeto que cumplan con el formato esperado
    const filteredData = Object.values(data).filter(item => {
      return item.codigo && item.nombre;
    });

    // Crear las opciones para el <select> HTML utilizando los datos filtrados
    filteredData.forEach(item => {
      const optionElement = document.createElement('option');
      optionElement.value = item.codigo;
      optionElement.text = item.nombre;
      selectElement.appendChild(optionElement);
    });
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
  }
}

// Función que se conecta a la API y trae los datos
export async function getData(key = '') {
  try {
    const response = await axios.get(urlIndicadorApi+key);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
    throw error;
  }
};

const grafico = document.getElementById('canvas');

let graficoFinanciero;

export const createGrafico = (data, dataInfo, unidadMedida) => {
  if (graficoFinanciero) {
    graficoFinanciero.destroy();
  }

  graficoFinanciero = new Chart(grafico, {
    type: 'line',
    data: {
      labels: data.map((item) => item.fecha),
      datasets: [
        {
          label: 'Valor de '+dataInfo+' expresado en '+unidadMedida,
          data: data.map((item) => item.valor),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
        },
      ],
    },
  });
};
