import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paintings',
  imports: [CommonModule],
  templateUrl: './paintings.component.html',
  styleUrl: './paintings.component.css',
})
export class PaintingsComponent implements OnInit {
  products!: Product[];

  ngOnInit(): void {
   this.products = [
  { id: 1, name: 'test1', price: 61.50, image_url: 'assets/images/Product_01.jpg' },
  { id: 2, name: 'test2', price: 332.60, image_url: 'assets/images/Product_02.jpg' },
  { id: 3, name: 'test3', price: 303.66, image_url: 'assets/images/Product_03.jpg' },
  { id: 4, name: 'test4', price: 34.88, image_url: 'assets/images/Product_04.jpg' },
  { id: 5, name: 'test5', price: 355.15, image_url: 'assets/images/Product_05.jpg' },
  { id: 6, name: 'test6', price: 356.0, image_url: 'assets/images/Product_06.jpg' },
];

  }
}
