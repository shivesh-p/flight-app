import { Routes } from '@angular/router';
import { FlightListComponent } from './flights/components/flight-list/flight-list.component';
import { FlightsPageComponent } from './flights/pages/flights/flights-page/flights-page.component';
import { SearchFormComponent } from './shared/search-form/search-form.component';

export const routes: Routes = [
    { path: 'search', component: SearchFormComponent },
    { path: 'list', component: FlightListComponent },
    { path: 'flights', component: FlightsPageComponent },
];
