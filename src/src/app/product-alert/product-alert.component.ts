import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
  
  //this is from parent(product-list) to child (this component), make sure to import at top
  @Input() product:any;

  /* this is from child(this component) to parent (product-list), make sure to import at top
     also it comes with the instance of the EventEmitter that is to emit the output on click
  */
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}