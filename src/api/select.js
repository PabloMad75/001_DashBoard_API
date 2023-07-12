// Función para obtener los datos de la API y completar el <select> HTML
async function getDataAndPopulateSelect() {
  try {
    const response = await axios.get('https://mindicador.cl/api');
    const data = response.data;

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

// Llama a la función para obtener los datos y completar el <select> HTML
getDataAndPopulateSelect();
