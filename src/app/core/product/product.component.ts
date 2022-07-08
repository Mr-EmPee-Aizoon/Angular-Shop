import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  buying = false;

  @Input() product!:Product;
  @Output() buyEvent = new EventEmitter<Product>();

  constructor(
    private router:Router,
  ) {

  }

  addToCart() {
    this.buying = false;
    this.buyEvent.emit(this.product);
  }

  editProduct() {
    this.router.navigateByUrl("/home/productForm/" + this.product.id)
  }

}
