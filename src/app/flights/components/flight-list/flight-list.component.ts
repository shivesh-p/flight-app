import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { Flight } from '../../../models/flight';

// Use this flightData array for your MatTable

const flightData: Flight[] = [
  {
    idFlight: 1,
    companyName: 'Airline A',
    flightType: 'Domestic',
    travelType: 'One-way',
    departureDate: new Date('2023-12-01'),
    departureTime: new Date('2023-12-01T08:00:00'),
    arrivalDate: new Date('2023-12-01'),
    arrivalTime: new Date('2023-12-01T10:00:00'),
    backDate: new Date('2023-12-02'),
    backTime: new Date('2023-12-02T12:00:00'),
    departureLocation: 'City A',
    arrivalLocation: 'City B',
    flightDuration: new Date('1970-01-01T02:00:00'),
    connectionDuration: new Date('1970-01-01T02:00:00'),
    aircraftType: 'Boeing 737',
  },
  {
    idFlight: 2,
    companyName: 'Airline B',
    flightType: 'International',
    travelType: 'Round-trip',
    departureDate: new Date('2023-12-05'),
    departureTime: new Date('2023-12-05T14:00:00'),
    arrivalDate: new Date('2023-12-06'),
    arrivalTime: new Date('2023-12-06T18:00:00'),
    backDate: new Date('2023-12-12'),
    backTime: new Date('2023-12-12T20:00:00'),
    departureLocation: 'City C',
    arrivalLocation: 'City D',
    flightDuration: new Date('1970-01-01T08:00:00'),
    connectionDuration: new Date('1970-01-01T04:00:00'),
    aircraftType: 'Airbus A380',
  },
  // Add more Flight objects as needed
];


@Component({
  selector: 'app-flight-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule
  ],
  templateUrl: './flight-list.component.html',
  styleUrl: './flight-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FlightListComponent implements OnInit, AfterViewInit {
  flights = new MatTableDataSource<Flight>(flightData);
  sortedData: Flight[];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = [
    // "idFlight",
    'companyName',
    'flightType',
    'travelType',
    'departureDate',
    'departureTime',
    'arrivalDate',
    'arrivalTime',
    'backDate',
    'backTime',
    'departureLocation',
    'arrivalLocation',
    'flightDuration',
    'connectionDuration',
    'aircraftType'
    // ,'select'
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {
    //custom sorting logic then use this as datasource
    // this.sortedData = flightData.slice();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.flights.paginator = this.paginator;
    this.flights.sort = this.sort;
  }
  //custom function for custom sorting logic
  // sortData(sort: Sort) {
  //   const data = flightData.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.sortedData = data;
  //     this.flights = new MatTableDataSource<Flight>(this.sortedData);
  //     return;
  //   }
  //   this.flights = new MatTableDataSource<Flight>(this.sortedData);
  //   return;
  // }
}
