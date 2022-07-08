import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/model/services/cart.service';
import { ProductRepositoryService } from 'src/app/model/services/repositories/product-repository.service';

@Component({
  selector: 'app-products-showcase',
  templateUrl: './products-showcase.component.html',
  styleUrls: ['./products-showcase.component.css']
})
export class ProductsShowcaseComponent implements OnInit {

  private products:Product[] = [];
  filteredProducts:Product[] = this.products;

  constructor(
    private productRepository:ProductRepositoryService,
    private cart:CartService
  ) {}

  ngOnInit(): void {
    this.productRepository.getProducts().subscribe(
      (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      }
    );
  }

  addToCart(product:Product) {
    this.cart.addProduct(product);
  }

  filterByPrice(maxPrice:number) {
    this.filteredProducts = this.products.filter(
      (product) => product.price <= maxPrice
    )
  }

  filterByCategory(category:string) {
    if(category) {
      this.filteredProducts = this.products.filter(
        (product) => product.category == category
      )
    } else {
      this.filteredProducts = this.products;
    }
  }

  getCategories() {
    let categories:string[] = [];

    for(let prod of this.products) {
      if(!categories.includes(prod.category)) {
        categories.push(prod.category);
      }
    }

    return categories;
  }

}
