import { Component, OnInit } from '@angular/core';
import { EventModel } from '../models/event';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: EventModel[] = [];

  filter: string = '';

  hasMore: boolean = true;
  currentPage: number = 1;
  search = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router
    ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.search = params['search'];
      if(this.activatedRoute.snapshot.data['events']['status'] === "success") {
        this.events = this.activatedRoute.snapshot.data['events']['data'];
      }
    });
  }

  redirectSearch(search: string): void {
    this.router.navigate(['/results', {search: search}]) 
  }

}
