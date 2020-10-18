import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'Black Lives Matter',
      url: 'https://is.gd/tnK31A',
    },
    {
      title: 'At the F1',
      url: 'https://is.gd/Q0S1aM',
    },
    {
      title: 'At home',
      url: 'https://is.gd/LYXAtR',
    },
    {
      title: 'Working from home',
      url: 'https://is.gd/OFeNAF',
    },
    {
      title: 'Desert',
      url: 'https://is.gd/WN1pI9',
    },
    {
      title: 'Hong Kong City',
      url: 'https://is.gd/tSPlwG',
    },
    {
      title: 'At the beach',
      url: 'https://is.gd/Ix5QJd',
    },
  ];
}
