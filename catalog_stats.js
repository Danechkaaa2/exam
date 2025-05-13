document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('catalogChart');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Классика', 'Модерн', 'Минимализм', 'Лофт'],
        datasets: [{
          label: 'Количество моделей',
          data: [5, 3, 4, 2],
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
