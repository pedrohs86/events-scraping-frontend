import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent {

  name = new FormControl('', [Validators.required, Validators.maxLength(128)]);

  constructor(
    public dialogRef: MatDialogRef<CategoriesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
