import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../product.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  constructor() { }

  getProducts(){
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').pipe(
      map(products =>
        products.map(product => ({
          ...product,
          images: product.images.map(image =>
            this.cleanAndParseImageUrl(image)
          )
        }))
      )
    );
  }

  getOne(id: string){
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`).pipe(
      map(product => ({
        ...product,
        images: product.images.map(image =>
          this.cleanAndParseImageUrl(image)
        )
      }))
    );
  }

  private cleanAndParseImageUrl(image: string): string {
    let cleanedImage = image.replace(/^\["?|"?]$/g, '');
    try {
      cleanedImage = JSON.parse(cleanedImage);
    } catch (error) {
      //
    }
    return cleanedImage;
  }

}
