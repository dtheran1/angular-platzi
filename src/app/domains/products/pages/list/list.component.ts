import { Component, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/model/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([])
  fromChild(event: string) {
    console.log('Event from child', event);
  }

  constructor() {
    const initProducts:Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=41',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 140,
        image: 'https://picsum.photos/640/640?r=4',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=41',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 140,
        image: 'https://picsum.photos/640/640?r=4',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=41',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 140,
        image: 'https://picsum.photos/640/640?r=4',
        creationAt: new Date().toISOString()
      },
    ]

    this.products.set(initProducts)
  }


}
