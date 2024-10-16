
import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../model/product.model';
import { CartService } from '../../model/services/cart.service';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLinkWithHref, RouterLinkActive],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  private cartService = inject(CartService);

  cart = this.cartService.cart;
  total = this.cartService.total;

  isOpen = signal<boolean>(true);

  toogleCart() {
    this.isOpen.update(prevState => !prevState);
  }
}
