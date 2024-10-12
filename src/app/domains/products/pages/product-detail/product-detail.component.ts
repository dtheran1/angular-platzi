import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { Product } from '@shared/model/product.model';
import { ProductService } from '@shared/model/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  @Input() id?: string;
  private productService = inject(ProductService);
  cover =signal<string>('');
  product = signal<Product | null>(null);

  ngOnInit() {
    if(this.id) {
      this.productService.getOne(this.id).subscribe(product => {
        this.product.set(product)
        if(product.images.length > 0) {
          this.cover.set(product.images[0]);
        }
      });
    }
  }

  changeCover(image: string) {
    this.cover.set(image);
  }

}
