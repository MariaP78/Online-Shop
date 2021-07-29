import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {ProductsData} from "../model/products.data";

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit {

  constructor(private productService: ProductsService) { }
  products: ProductsData[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => this.products = products)}

}
