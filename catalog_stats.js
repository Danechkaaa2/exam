document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('catalogChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Классика', 'Модерн', 'Минимализм', 'Лофт'],
      datasets: [{
        label: 'Количество моделей',
        data: [6, 8, 4, 3], // ← Подставь реальные данные
        backgroundColor: ['#F0D18C', '#C8A968', '#A67C52', '#8B5E3C']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      },
      plugins: {
        legend: { display: false },
        title: {
          display: false
        }
      }
    }
  });
});
