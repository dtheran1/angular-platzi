import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/model/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/model/services/cart.service';
import { ProductService } from '@shared/model/services/product.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  constructor() {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: products => {
        // let aux = products.map(product => {
        //     product.images = product.images.map(image => image.replace(/^\["|"\]$/g, ''));
        //     return product;
        // });
        // console.log("🚀 ~ ListComponent ~ aux ~ aux:", aux)

        console.log("🚀 ~ ListComponent ~ this.productService.getProducts ~ products:", products)
        this.products.set(products);
      },
      error: error => console.log(error)
    })
  }

  fromChild(product: Product) {
    this.cartService.addToCart(product);
  }
}
