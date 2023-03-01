import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() searchEmit: EventEmitter<string> = new EventEmitter();
  @Input() hiddenButton: Boolean = false;
  @Input() maxHeight: string = 'unset'
  
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onSearch(event: any, search: any): void {
    this.searchEmit.emit(search.searchText);
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchText: [''],
    });
  }

  enterSubmit(event: any) {
    this.searchEmit.emit(this.searchForm.get('searchText')?.value);
  }

}