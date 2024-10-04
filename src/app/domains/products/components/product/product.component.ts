import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/model/product.model';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [UpperCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product;
  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('Add to cart');
    this.addToCart.emit(this.product);
  }

}


