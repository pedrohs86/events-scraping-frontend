import { Component, OnInit } from '@angular/core';
import { EventModel } from '../models/event';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: EventModel[] = [];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  redirectSearch(search: string): void {
    this.router.navigate(['/results', {search: search}]) 
  }

}
