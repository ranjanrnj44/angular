import { Component, OnInit } from '@angular/core';

//import the products and the ActivatedRoute
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';

//using service, (pass it to the constructor THIS IS THE WAY TO INJECT)
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  //place the (products) newly defined property name(PRODUCT = products) here
  product:any;

  //pass the ActivatedRouter as an constructor, this is the way to do, below define the method(logic)
  constructor(private route: ActivatedRoute, private CartService: CartService) { }

  //here subscribe to the route and fetch the product based on the product list
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }

  //defining the login
  addToCart(product:any){
    window.alert("Your product have been added to the cart");
    this.CartService.addToCart(product);
  }
  

}
