import { Component, OnInit } from '@angular/core';
import { EventModel } from '../models/event';
import { HomeService } from './home.service'

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: EventModel[] = [];

  constructor(
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
  }

  search(categoria: string): void {
      this.homeService.search(categoria).subscribe({
        next: (response) => this.events = response,
        error: (e) => console.error(e),
      })  
  }

}
