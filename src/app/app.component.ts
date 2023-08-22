import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Welcome to Angualr Courses!';

  //interpolation
  firstName: string = 'Mehdi';
  lastName: string = 'Jeyrani';

  //Property binding
  isActive: boolean = true;
  itemImageUrl: string = '../assets/angular.png';
  alt: string = 'Angular Logo';

  change() {
    this.isActive = !this.isActive;
  }

  fullName: string = 'Sara Derakhshan';

  userParent: any[] = [
    { id: 3, name: 'Habib' },
    { id: 4, name: 'Hossein' },
  ];

  para: string = '<p> Hello Mehdi Jeyrani </p>';
  color: string = 'red';
  closeLabel = true;
  changeColor() {
    this.color = this.isActive ? 'green' : 'red';
  }
}
