import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './administration/product-form/product-form.component';
import { HomeComponent } from './core/home/home.component';
import { ProductsShowcaseComponent } from './core/products-showcase/products-showcase.component';

const routes: Routes = [
  {path: "home", component: HomeComponent,
  children: [
    {path: "productForm", component: ProductFormComponent},
    {path: "productForm/:prodID", component: ProductFormComponent},
    {path: "**", component: ProductsShowcaseComponent}
  ]},
  {path: "**", redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
