import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../product/product.mock';

@Component({
  selector: 'app-product-deatil',
  templateUrl: './product-deatil.component.html',
  styleUrls: ['./product-deatil.component.css'],
})
export class ProductDeatilComponent implements OnInit {

  product?: Product;
  products: Product[] = productsList;
  loading: boolean = true;
  valor_color: string = '';


  constructor(private _route: ActivatedRoute) {}
  ngOnInit(): void {
   setTimeout(() => {
    this._route.params.subscribe((params) => {
      this.product = this.products.find(product => product.id == params['productId']);
      this.valor_color = this.product?.price as number > 5 ? 'red' : '';
      this.loading = false;
    });
   }, 1500);
  }
}
