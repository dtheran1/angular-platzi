import { CommonModule } from '@angular/common';
import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  @Input({required: true}) cart:Product[] = [];
  @Input({required: true}) total:number = 0;
  isOpen = signal<boolean>(true);

  totalSignal = signal<number>(0);

  // Mejor solucion
  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if(cart) {
      this.totalSignal.set(this.calTotal());
    }
  }

  toogleCart() {
    this.isOpen.update(prevState => !prevState);
  }

  calTotal() {
    return this.cart.reduce((acc, product) => acc + product.price, 0);
  }

}
