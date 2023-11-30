import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',

})
export class SharedService {
  private _searchCriteriaForm: FormGroup = new FormGroup({});
  public get searchCriteriaForm(): FormGroup {
    return this._searchCriteriaForm;
  }
  public set searchCriteriaForm(value: FormGroup) {
    this._searchCriteriaForm = value;
  }
  createSearchCriteriaForm() {
    this._searchCriteriaForm = new FormGroup({
      company: new FormControl(''),

      aircraftType: new FormControl(''),
      flightType: new FormControl(''),
      travelType: new FormControl(''),

      departureLocation: new FormControl(''),
      arrivalLocation: new FormControl(''),

      departureDateMin: new FormControl(''),
      departureTimeMin: new FormControl(''),
      departureDateMax: new FormControl(''),
      departureTimeMax: new FormControl(''),

      arrivalDateMin: new FormControl(''),
      arrivalDateMax: new FormControl(''),
      arrivalTimeMax: new FormControl(''),
      arrivalTimeMin: new FormControl(''),


      flightDurationMin: new FormControl(''),
      flightDurationMax: new FormControl(''),

      backTimeMin: new FormControl(''),
      backDateMin: new FormControl(''),
      backDateMax: new FormControl(''),
      backTimeMax: new FormControl(''),

      connectionDurationMin: new FormControl(''),
      connectionDurationMax: new FormControl(''),

      fareMin: new FormControl(''),
      fareMax: new FormControl('')
    })
  }
  constructor() { }

}
