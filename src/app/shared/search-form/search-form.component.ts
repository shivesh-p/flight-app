import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaterialTimepickerModule, NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [
    NgStyle,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    NgxMaterialTimepickerModule
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class SearchFormComponent implements OnInit {
  timeTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#3f51b5',
      buttonColor: '#fff'
    },
    dial: {
      dialBackgroundColor: '#b2cd07',
      dialEditableBackgroundColor: '#000'
    },
    clockFace: {
      clockFaceBackgroundColor: '#f1f1f1',
      clockHandColor: '#3f51b5',
      clockFaceTimeInactiveColor: '#000'
    }
  }
  showBackTrip: boolean = false;
  showConnectDur: boolean = false;
  searchFlightForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sharedService.createSearchCriteriaForm();
    this.searchFlightForm = this.sharedService.searchCriteriaForm;
  }
  /**
   *
   */
  constructor(private readonly sharedService: SharedService) {
    // this.searchFlightForm = new FormGroup({
    //   company: new FormControl(''),

    //   aircraftType: new FormControl(''),
    //   flightType: new FormControl(''),
    //   travelType: new FormControl(''),

    //   departureLocation: new FormControl(''),
    //   arrivalLocation: new FormControl(''),

    //   departureDateMin: new FormControl(''),
    //   departureTimeMin: new FormControl(''),
    //   departureDateMax: new FormControl(''),
    //   departureTimeMax: new FormControl(''),

    //   arrivalDateMin: new FormControl(''),
    //   arrivalDateMax: new FormControl(''),
    //   arrivalTimeMax: new FormControl(''),
    //   arrivalTimeMin: new FormControl(''),


    //   flightDurationMin: new FormControl(''),
    //   flightDurationMax: new FormControl(''),

    //   backTimeMin: new FormControl(''),
    //   backDateMin: new FormControl(''),
    //   backDateMax: new FormControl(''),
    //   backTimeMax: new FormControl(''),

    //   connectionDurationMin: new FormControl(''),
    //   connectionDurationMax: new FormControl(''),

    //   fareMin: new FormControl(''),
    //   fareMax: new FormControl('')
    // })

  }
  resetForm(form: FormGroup) {
    form.reset();
  }
  searchFlight() {
    const val = this.searchFlightForm.value;
    console.table(val);
  }

  tripTypeChanged(val: string) {
    if (val == "OneWay") {
      this.showBackTrip = false;
    }
    else {
      this.showBackTrip = true;
    }

  }
  flightTypeChanged(val: string) {
    if (val == "Direct") {
      this.showConnectDur = false;
    }
    else {
      this.showConnectDur = true;
    }
  }
}
