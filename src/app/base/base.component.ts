import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';


@Component({
  selector: 'app-base',
  imports: [CommonModule,ChartComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css',
})
export class BaseComponent {
   predictedHbA1c:string = '5.6'; // Example value, replace with actual prediction logic

}
