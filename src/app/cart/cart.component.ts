import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  mainComponent = MainComponent;

  constructor() { 

  }

  ngOnInit(): void {
    this.listCart();
  }

  listCart(){
    debugger;
    this.mainComponent.car
  }

}
