import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../service/product-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  imgs: Object[] = [];
  name: string[] = [];
  cost: number[] = [];

  constructor(private productItem: ProductListService) { }

  ngOnInit(): void {
  }

}
