import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';
import { PaintingserviceService } from '../services/paintingservice.service';

@Component({
  selector: 'app-paintings',
  imports: [CommonModule],
  templateUrl: './paintings.component.html',
  styleUrl: './paintings.component.css',
})
export class PaintingsComponent implements OnInit {
  products!: Product[];
  filteredProducts!: Product[];
  sortOrder: string = '';
  sortLabel: string = 'Select All';
  constructor(private productService: PaintingserviceService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (product: Product[]) => {
        console.log('Products loaded:', product);
        this.products = product;
        this.filteredProducts = product.slice(); 
      },
      error: (err) => {
        console.error('Failed to load products:', err);
        this.products = [];
        this.filteredProducts = [];
      }
    });
  }

  search(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().startsWith(searchTerm)
    );
  }

  sortByPrice(order: 'asc' | 'desc' | 'default'): void {
    if (order === 'asc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
      this.sortLabel = 'Low to High';
    } else if(order == 'desc'){
      this.filteredProducts.sort((a, b) => b.price - a.price);
      this.sortLabel = 'High to Low';
    }else
    {
      this.filteredProducts = this.products.slice();
      this.sortLabel ='Select All';
    }
  }

}
