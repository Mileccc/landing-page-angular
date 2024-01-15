import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-deatil',
  templateUrl: './product-deatil.component.html',
  styleUrls: ['./product-deatil.component.css'],
})
export class ProductDeatilComponent implements OnInit {
  product?: IProduct;
  products: IProduct[] = [];
  loading: boolean = true;
  valor_color: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) {}
  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getProductById(Number(params['productId'])).subscribe({
          next: (data: IProduct) => {
            this.product = data;
            this.valor_color = (this.product?.price as number) > 200 ? 'red' : '';
            this.loading = false;
          },
          error: (error: any) => {
            console.log(error);
            this.loading = false;
          },
        });
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
