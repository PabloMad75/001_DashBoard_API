axios.get('https://mindicador.cl/api')
  .then(response => {
    // El código dentro de esta función se ejecutará cuando se reciba una respuesta exitosa de la API
    console.log(response.data);
  })
  .catch(error => {
    // El código dentro de esta función se ejecutará si hay algún error en la llamada a la API
    console.error(error);
  });
