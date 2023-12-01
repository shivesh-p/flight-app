import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../../../../portal/footer/footer.component';
import { LeftSideComponent } from '../../../../portal/left-side/left-side.component';
import { SearchFormComponent } from '../../../../shared/search-form/search-form.component';
import { FlightListComponent } from '../../../components/flight-list/flight-list.component';

@Component({
  selector: 'app-flights-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchFormComponent,
    FlightListComponent,
    LeftSideComponent,
    MatIconModule,
    MatButtonModule,
    FooterComponent
  ],
  templateUrl: './flights-page.component.html',
  styleUrl: './flights-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightsPageComponent implements OnInit {
  toggleExpand: boolean = true;
  constructor() { }
  ngOnInit(): void {

  }
  expandToggle() {
    this.toggleExpand = !this.toggleExpand;
  }
}
