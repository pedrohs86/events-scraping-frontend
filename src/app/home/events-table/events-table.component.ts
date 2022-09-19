import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EventModel } from '../../models/event';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit, AfterViewInit {

  _events: EventModel[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input()
  get events(): EventModel[] {
    return this._events;
  }
  set events(value: EventModel[]) {
    this.dataSource = new MatTableDataSource(value);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  displayedColumns: string[] = ['name', 'date', 'local', 'categoria'];
  dataSource!: MatTableDataSource<EventModel>;

  
  
  constructor() { 
    this.dataSource = new MatTableDataSource(this.events);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
      this.dataSource.sort = this.sort
  }

  applyFilter(filter: Event) {
    let filterValue = (filter.target as HTMLInputElement).value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
