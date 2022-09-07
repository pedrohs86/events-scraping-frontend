import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventModel } from '../../models/event';
import { SearchService } from './search-form.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  events: EventModel[] = [];
  searchForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
  ) { }

  onSearch(search: any): void {
    console.log(search)
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      category: [''],
    });
  }
}
