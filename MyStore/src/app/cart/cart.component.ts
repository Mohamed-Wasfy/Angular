import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductListService } from '../service/product-list.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  fullName: string = '';
  address: string = '';
  creditCardNumber: number = 0;
  products: Product[] = [];

  @Output() buyProduct: EventEmitter<any> = new EventEmitter();

  constructor(private productSeviceList: ProductListService) { }

  ngOnInit() {
    this.products = this.productSeviceList.getProductList();
  }

  submitForm() {
    const customer = {
      fullName: this.fullName,
      address: this.address,
      creditCardNumber: this.creditCardNumber
    }

    this.buyProduct.emit(customer);

    this.fullName = '';
    this.address = '';
    this.creditCardNumber = 0;
  }
}
