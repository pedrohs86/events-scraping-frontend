import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EventModel } from '../../models/event';
@Component({
  selector: 'ap-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnChanges {

  @Input() event: EventModel|undefined;
  constructor() { }

  eventFix: EventModel = {
    date: '',
    local: '',
    name: '',
    categoria: '',
    url: ''
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['event'] && this.event !== undefined) {
      this.eventFix = this.event;
    }
  }
}