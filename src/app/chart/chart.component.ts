import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  lineChartType: ChartType = 'line';  // Fix 1
  lineChartLabels: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];  // Fix 2

  lineChartData = {
    labels: this.lineChartLabels,  // optional, as we pass labels separately
    datasets: [
      {
        label: 'Last week',
        data: [7.5, 10, 4.50, 8.5, 18, 10, 7],
        borderColor: '#2f80ed',
        backgroundColor: 'rgba(161, 198, 247, 0.4)',
      },
    ],
  };

  lineChartOptions = {
    responsive: true,
  };
}
