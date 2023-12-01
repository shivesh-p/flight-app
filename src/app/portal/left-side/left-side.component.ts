import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-left-side',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftSideComponent implements OnInit {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
