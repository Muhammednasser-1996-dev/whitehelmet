import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  // standalone: true,
  // imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  data: any;

  options: any;

  ngOnInit() {
    this.data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          borderColor: '#828ca0',
          borderWidth: 1,
          fill: false,
          tension: 0.4,
          data: [40, 55, 65, 45, 43, 54, 66]
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: '#828ca0',
          data: [22, 19, 8, 25, 11, 20, 30],
          borderColor: '#828ca0',
          borderWidth: 1
        },
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            color: '#828ca0'
          }
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#828ca0'
          },
        },
        y: {
          ticks: {
            color: '#828ca0'
          },
          grid: {
            color: '#828ca0'
          }
        }
      }
    };
  }
}
