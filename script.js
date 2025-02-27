// Datos de ejemplo para la gráfica de tiempo
const datosGrafica = {
    x: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    y: [10, 15, 13, 17, 21, 25],
    type: 'scatter',
    mode: 'lines+markers',
    marker: { color: '#4CAF50' }
};

// Configuración de la gráfica
const layout = {
    title: 'Gráfica de Tiempo',
    xaxis: { title: 'Meses' },
    yaxis: { title: 'Valores' }
};

// Renderizar la gráfica
Plotly.newPlot('grafica-tiempo', [datosGrafica], layout);

// Datos estadísticos de ejemplo
const datosEstadisticos = `
Media: 15.5
Mediana: 15
Desviación Estándar: 5.2
Mínimo: 10
Máximo: 25
`;

// Mostrar datos estadísticos
document.getElementById('datos-estadisticos').textContent = datosEstadisticos;
