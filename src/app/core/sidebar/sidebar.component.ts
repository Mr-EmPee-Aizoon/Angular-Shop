import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { range } from 'rxjs';
import { ProductRepositoryService } from 'src/app/model/services/repositories/product-repository.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  defaultFilterPrice = "1000";
  filterPrice = this.defaultFilterPrice;
  
  selectedCategory = "";
  @Input() categories!:string[];

  @Output() filterByPrice = new EventEmitter();
  @Output() filterByCategory = new EventEmitter();

  doPriceFilter() {
    this.selectedCategory = "";
    
    this.filterByPrice.emit(Number(this.filterPrice));
  }

  doCategoryFilter(category:string) {  
    this.filterPrice = this.defaultFilterPrice;
    
    this.selectedCategory = category;
    this.filterByCategory.emit(category)
  }

}
