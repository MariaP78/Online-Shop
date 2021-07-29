import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import * as data from './mock/products.json';
import {ProductsData} from "./model/products.data";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Observable<ProductsData[]>{
    const products: ProductsData[] = (data as any).default;
    return of(products);
  }
}
