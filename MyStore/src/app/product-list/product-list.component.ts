import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductListService } from '../service/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string = 'Product List';
  products: Product[] = [];

  constructor(private postListService: ProductListService) { }

  ngOnInit(): void {
    this.products = this.postListService.getProductList();
    }


  addToCart(): void {
  }

  onClick(): void {
  }

}
