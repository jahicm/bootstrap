import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  imports: [CommonModule],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css',
})
export class BaseComponent {
  dropdownItems = [
    { label: 'Action', link: '#',value:1 },
    { label: 'Another action', link: '#' ,value:2},
    { label: 'Something else here', link: '#',value:3 },
  ];

  onItemClick(item: any) {
    alert("Item clicked "+item.value);
    
}

}
