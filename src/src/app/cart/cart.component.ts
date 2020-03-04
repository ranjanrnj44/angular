import { Component, OnInit } from '@angular/core';

//add the service configuration here
import { CartService } from '../cart.service';

/*import formBuilder here and add them in the constructor as an arguments to use &
 define property outside constructor and in the constructor declare formGroup and give
 its control as instance
*/
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  //define the item property to store the products in the cart
  items:any;

  /*define the property checkout form to store the form model, and make-sure we 
  are importing the FormBuilder in-order to use the ReactiveForms*/
  checkoutForm:any;

  //inject the cart service here to use the services
  //inject formBuilder here to use the reactive form and define method down onSubmit(cus_data)
  constructor(private CartService: CartService,
              private formBuilder: FormBuilder) { 
                this.checkoutForm = this.formBuilder.group({
                  'name' : '',
                  'email' : '',
                  'mobile' : ''
                })
              }

  ngOnInit() {
    /*getItem function here, here we are not defining by click, it is
      displayed once added in product details*/
    this.items = this.CartService.getItem();
  }
  
  onSubmit(cus_data:any){
    console.log('Your order has been submitted', cus_data);
    this.items = this.CartService.clearCart();
    this.checkoutForm.reset();
  }
  
}
