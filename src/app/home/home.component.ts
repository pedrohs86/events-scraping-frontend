import { Component, OnInit } from '@angular/core';
import { EventModel } from '../models/event';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: EventModel[] = [{
    date: new Date(),
    local: 'Manaus',
    name: 'teste1',
    categoria: 'teste',
  }, {
    date: new Date(),
    local: 'SP',
    name: 'teste2',
    categoria: 'teste',
  }];
  
  constructor() { }

  ngOnInit(): void {
  }

}
