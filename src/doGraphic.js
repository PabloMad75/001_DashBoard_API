const grafico = document.getElementById('grafico');

let graficoFinanciero;

export const createGrafico = (data) => {
  if (graficoFinanciero) {
    graficoFinanciero.destroy();
  }

  graficoFinanciero = new Chart(grafico, {
    type: 'line',
    data: {
      labels: data.map((item) => item.fecha),
      datasets: [
        {
          label: 'Valor',
          data: data.map((item) => item.valor),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
        },
      ],
    },
  });
};