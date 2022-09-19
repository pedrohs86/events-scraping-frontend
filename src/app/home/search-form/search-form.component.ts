import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventModel } from '../../models/event';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  events: EventModel[] = [];
  searchForm!: FormGroup;
  @Output() categoria: EventEmitter<string> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onSearch(search: any): void {
    this.categoria.emit(search.category);
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      category: [''],
    });
  }

  clear(event: any) {
      const type = event.pointerType;
      if(type === 'mouse') {
        this.searchForm.get('category')?.setValue('')
      }
    } 

  enterSubmit(event: any) {
    if (event.keyCode === 13) {
      this.categoria.emit(this.searchForm.get('category')?.value);
    }
  }

}