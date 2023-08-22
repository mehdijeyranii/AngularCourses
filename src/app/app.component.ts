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
}
