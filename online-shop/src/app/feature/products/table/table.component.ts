import { Component, Input } from '@angular/core';
import { ProductsData } from '../model/products.data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() data: ProductsData[] = [];
  constructor() {}
  displayedColumns: string[] = ['id', 'name', 'category', 'price', 'delete'];
}
