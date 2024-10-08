import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../model/product.model';
import { CartService } from '../../model/services/cart.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLinkWithHref],
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
