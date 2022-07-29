import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { ProductListService } from '../service/product-list.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})

export class ConfirmationComponent implements OnInit {
  cust  = new Customer();
  fullName: string = this.cust.fullName;


  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {

  }
}
