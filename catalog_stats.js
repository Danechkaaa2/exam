document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('catalogChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Классика', 'Модерн', 'Минимализм', 'Лофт'],
        datasets: [{
          label: 'Количество моделей',
          data: [4, 4, 4, 4],
          backgroundColor: 'rgba(255, 215, 0, 0.6)',
          borderColor: 'rgba(255, 215, 0, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: '#FFD700'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#FFD700'
            }
          },
          y: {
            ticks: {
              color: '#FFD700'
            }
          }
        }
      }
    });
  }
});
