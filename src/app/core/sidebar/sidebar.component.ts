import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryRepositoryService } from 'src/app/model/services/repositories/category-repository.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() filterByPrice = new EventEmitter();
  @Output() filterByCategory = new EventEmitter();

  defaultFilterPrice = "1000";
  filterPrice = this.defaultFilterPrice;
  
  selectedCategory?:number;
  categories:Category[] = [];

  constructor(
    private categoryRepo:CategoryRepositoryService
  ) {

  }

  ngOnInit(): void {
    this.categoryRepo.getCategories().subscribe(
      (categories) => {
        this.categories = categories;
      }
    )
  }

  doPriceFilter() {
    this.selectedCategory = undefined;
    
    this.filterByPrice.emit(Number(this.filterPrice));
  }

  doCategoryFilter(category?:Category) {  
    this.filterPrice = this.defaultFilterPrice;
    
    this.selectedCategory = category?.id;
    this.filterByCategory.emit(category)
  }

}
