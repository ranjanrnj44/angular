import { Component, OnInit } from '@angular/core';

//import the cart service and to inject add it to the constructor
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  //give a property to make use of the method from the cart service.ts
  shippingCosts:any;

  constructor(private CartService: CartService) { }

  ngOnInit() {
    this.shippingCosts = this.CartService.getShippingPrice();
  }

}
