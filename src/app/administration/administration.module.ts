import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { ModelModule } from '../model/model.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductFormComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    ModelModule,
    CommonModule
  ]
})
export class AdministrationModule { }
