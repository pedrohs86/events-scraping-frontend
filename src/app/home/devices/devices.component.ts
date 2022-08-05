import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Device } from '../../models/device';
import { DevicesFormCreateComponent } from './devices-form-create/devices-form-create.component';
import { DevicesService } from './devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices: Device[] = [];
  displayedColumns: string[] = ['id', 'color', 'partNumber', 'category','delete'];

  @ViewChild(MatTable)
  table!: MatTable<Device>;

  constructor(
    public dialog: MatDialog,
    private devicesService: DevicesService,
  ) { }

  ngOnInit(): void {
    this.devicesService
        .getDevices()
        .subscribe(devices => {
            console.log(devices)
            this.devices = this.devices.concat(devices);
            this.table.renderRows();
        });
  }

  delete(id: number) {
    this.devicesService
      .deleteDevice(id).subscribe(result=>{
        window.alert('Success')
        this.devices = this.devices.filter(category=> category.id !== id);
        this.table.renderRows();
      },
      error => {
        window.alert(error.error.message)
      }
      )
  }

  save(device: Device) {
    this.devicesService.postDevice(device).subscribe(result=>{
      window.alert('Success')
      result.category = device.category;
      this.devices.push(result)
      this.table.renderRows();
    },
    error => {
      window.alert(error.error.message)
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DevicesFormCreateComponent, {
      width: '250px',
      data: {id: undefined, color: '', partNumber: '', categoryId: ''},
    });

    dialogRef.afterClosed().subscribe((result: Device) => {
      if(!!result) {
        console.log(result)
        const newDevice = {
                            id: undefined,
                            color: result.color,
                            partNumber: result.partNumber,
                            categoryId: result.categoryId,
                            category: result.category
                          };
        this.save(newDevice)
      }
    });
  }
}
