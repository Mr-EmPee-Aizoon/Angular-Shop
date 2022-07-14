import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { UserService } from 'src/app/model/security/user.service';

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
    private userService:UserService
  ) {

  }

  get user() {
    return this.userService.getUser();
  }

  addToCart() {
    this.buying = false;
    this.buyEvent.emit(this.product);
  }

  editProduct() {
    this.router.navigateByUrl("/home/administration/productForm/" + this.product.id)
  }

}
