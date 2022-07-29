import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductListService } from '../service/product-list.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  products: Product[] = [];

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.products = this.productListService.getProductList();
  }

}
