import { Injectable } from '@angular/core';

/*import here the HttpClient so that it can fetch the data from the
  external source of API
  and pass it to the constructor as an argument*/

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  //define a property with empty array, here is where we'll pass the currently added product
  items:any = [];

  //define the method to add,get,clear the currently addable products
  /* ADD-TO-CART (for adding the product to the cart)*/
  addToCart(product:any){
    return this.items.push(product);
  }
  /* GET-ITEM (for getting the product details with associated quantity) */
  getItem(){
    return this.items;
  }
  /* CLEAR-ITEM (to clear the product, make it empty) */
  clearCart(){
    this.items = [];
    return this.items;
  }
  //in product-detail page add the functionality
  /*
    there, import service,pass into constructor and then perform logic
  */


  /* Write a method to get deal with external API and fetch the data */
  getShippingPrice(){
    return this.http.get('/assets/shipping.json');
  }
}
