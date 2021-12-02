import { Component, OnInit } from '@angular/core';
import products from '../../dummy/products.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  productList;
  public static car=[];

  constructor() { }

  ngOnInit(): void {
    this.listProducts()
  }

  listProducts(){
    this.productList = products;
    // console.log(this.productList);
  }

  addToCar(any: any){
    debugger;
    MainComponent.car.push(any);
    //console.log(MainComponent.car);
  }

}
