import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Category } from '../../models/category';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  displayedColumns: string[] = ['id', 'name', 'delete'];

  @ViewChild(MatTable)
  table!: MatTable<Category>;

  constructor(
    public dialog: MatDialog,
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.categoriesService
        .getCategories()
        .subscribe(categories => {
            // console.log(categories)
            this.categories = this.categories.concat(categories);
            this.table.renderRows();
        });
  }

  delete(id: number) {
    this.categoriesService
      .deleteCategory(id).subscribe(result=>{
        window.alert('Success')
        this.categories = this.categories.filter(category=> category.id !== id);
        this.table.renderRows();
      },
      error => {
        window.alert(error.error.message)
      }
      )
  }

  save(category: Category) {
    this.categoriesService.postCategory(category).subscribe(result=>{
      window.alert('Success')
      this.categories.push(result)
      this.table.renderRows();
    },
    error => {
      window.alert(error.error.message)
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CategoriesFormComponent, {
      width: '250px',
      data: {id: undefined, name: ''},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!!result) {
        const newCategory = {id: undefined, name: result};
        this.save(newCategory)
      }
    });
  }

}
