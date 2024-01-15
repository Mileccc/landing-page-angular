import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = '';

  constructor(private _httpClient: HttpClient) {

    this.baseURL = 'https://fakestoreapi.com/products';

   }

  public getAllProducts(): Observable<IProduct[]> {            // Devuelve un observable de productos
    
    return this._httpClient.get<IProduct[]>(this.baseURL);
  }

  public getProductById(id: number): Observable<IProduct> { // Devuelve un observable de un producto
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  public getAllCategories(): Observable<Category[]> {          // Devuelve un observable de categorias
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`);
  }

  public newProduct(product: IProduct): Observable<IProduct> { // Crea un nuevo producto
    return this._httpClient.post<IProduct>(this.baseURL, product);
  }

  public updateProduct(id: number, product: IProduct): Observable<IProduct> { // Actualiza un producto
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<IProduct> { // Elimina un producto
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }

}
