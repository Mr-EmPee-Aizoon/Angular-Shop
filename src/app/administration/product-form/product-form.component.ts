import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductRepositoryService } from 'src/app/model/services/repositories/product-repository.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  public product!:Product;
  public formGroup = new FormGroup(
    {
      title: new FormControl("", Validators.compose(
        [Validators.required, Validators.maxLength(22)]
      )),
      size: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      price: new FormControl("", Validators.compose(
        [Validators.required, Validators.min(0)]
      )),
      description: new FormControl("",
        [Validators.required, Validators.maxLength(151)]
      )
    }
  );

  constructor(
    private productRepo:ProductRepositoryService,
    private router:Router,
    private route:ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        let prodID = params.get("prodID");
        if(prodID) {
          this.productRepo.getProductByID(Number(prodID)).subscribe(
            (product) => {
              this.product = product;
              this.title?.setValue(product.title);
              this.size?.setValue(product.size);
              this.category?.setValue(product.category);
              this.price?.setValue(String(product.price));
              this.description?.setValue(product.description);
            }
          )
        }
      }
    )
  }

  

  get title() {
    return this.formGroup.get("title");
  }

  get size() {
    return this.formGroup.get("size");
  }

  get price() {
    return this.formGroup.get("price");
  }

  get category() {
    return this.formGroup.get("category");
  }

  get description() {
    return this.formGroup.get("description");
  }

  createProduct() {
    if(this.formGroup.valid) {

      this.productRepo.addProduct(
        new Product(
          0, 
        <string>this.title?.value, 
        <string>this.description?.value, 
        <string>this.size?.value, 
        Number(this.price?.value), 
        <string>this.category?.value,
        "/assets/products/nike.jpeg"
        )
      ).subscribe( (data) => {
        this.router.navigateByUrl("/home");
      });
      
    }
  }

  updateProduct() {
    if(this.formGroup.valid) {
      
      this.product.title = <string>this.title?.value;
      this.product.description = <string>this.description?.value;
      this.product.price = Number(this.price?.value);
      this.product.category = <string>this.category?.value;
      this.product.size = <string>this.size?.value;

      this.productRepo.updateProduct(this.product.id, this.product).subscribe(
        (data) => {
          this.router.navigateByUrl("/home");
        }
      )
    }
  }

  deleteProduct() {
    this.productRepo.removeProduct(this.product.id).subscribe(
      (data) => {
        this.router.navigateByUrl("/home")
      }
    );
  }

}
