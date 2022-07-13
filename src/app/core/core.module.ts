import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ModelModule } from '../model/model.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsShowcaseComponent } from './products-showcase/products-showcase.component';
import { RouterModule } from '@angular/router';
import { AdministrationModule } from '../administration/administration.module';
import { AuthenticationModule } from '../authentication/authentication.module';



@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ProductsShowcaseComponent
  ],
  imports: [
    AdministrationModule,
    AuthenticationModule,
    CommonModule,
    ModelModule,
    RouterModule
  ],
  exports: [HomeComponent]
})
export class CoreModule { }
