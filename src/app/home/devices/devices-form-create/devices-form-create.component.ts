import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../../../models/category';
import { Device } from '../../../models/device';
import { CategoriesService } from '../../categories/categories.service';

@Component({
  selector: 'app-devices-form-create',
  templateUrl: './devices-form-create.component.html',
  styleUrls: ['./devices-form-create.component.scss']
})
export class DevicesFormCreateComponent implements OnInit {

  categories: Category[] = [];
  deviceForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DevicesFormCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Device,
    private categoriesService: CategoriesService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(data: Device): void {
    console.log(data)
    data.category = this.categories.filter(element => element.id === data.categoryId)[0]
    this.dialogRef.close(data);
  }

  ngOnInit(): void {
    this.deviceForm = this.formBuilder.group({
      color: ['', Validators.required],
      partNumber: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
    this.categoriesService
    .getCategories()
    .subscribe(categories => {
        this.categories = this.categories.concat(categories);
    });
  }

}
