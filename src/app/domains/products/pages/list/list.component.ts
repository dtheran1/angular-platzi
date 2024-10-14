import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CommonModule } from '@angular/common';
import { Category, Product } from '@shared/model/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/model/services/cart.service';
import { ProductService } from '@shared/model/services/product.service';
import { CategoryService } from '@shared/model/services/category.service';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() category_id?: string;

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  constructor() {}

  ngOnInit() {
    this.getCategoryList();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProducts(this.category_id).subscribe({
      next: products => {
        this.products.set(products);
      },
      error: error => console.log(error)
    })
  }

  getCategoryList() {
    this.categoryService.getAll().subscribe({
      next: categories => {
        this.categories.set(categories);
      },
      error: error => console.log(error)
    })
  }

  fromChild(product: Product) {
    this.cartService.addToCart(product);
  }
}
