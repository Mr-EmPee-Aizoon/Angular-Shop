import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/model/services/cart.service';
import { ProductRepositoryService } from 'src/app/model/services/repositories/product-repository.service';

@Component({
  selector: 'app-products-showcase',
  templateUrl: './products-showcase.component.html',
  styleUrls: ['./products-showcase.component.css']
})
export class ProductsShowcaseComponent implements OnInit {

  products:Product[] = [];

  constructor(
    private productRepository:ProductRepositoryService,
    private cart:CartService
  ) {}

  ngOnInit(): void {
    this.filterByCategory(undefined);
  }

  addToCart(product:Product) {
    this.cart.addProduct(product);
  }

  filterByPrice(maxPrice:number) {
    this.products = this.products.filter(
      (product) => product.price <= maxPrice
    )
  }

  filterByCategory(category?:Category) {
    if(category != undefined) {
      this.productRepository.getProductByCategory(category.id).subscribe(
        (products) => {
          this.products = products;
        }
      )
    } else {
      this.productRepository.getProducts().subscribe(
        (products) => {
          this.products = products;
        }
      )
    }
  }

}
