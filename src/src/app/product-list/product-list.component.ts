import { Component } from '@angular/core';

//import the product.ts to access its functionality
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 
  //give a name for the imported properties which is in top
  products = products;

  //example of property binding, not only uses the string but also the numbers(boolean values)
  // btn = true;
  
  share() {
    window.alert('The product has been shared!');
  }

  //define a method to display the data that comes from the child to parent
  notify_me(){
    window.alert("We'll notify you once the product is available");
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/