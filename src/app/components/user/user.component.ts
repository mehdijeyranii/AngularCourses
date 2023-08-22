import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() fullName: string = 'Mehdi Jeyrani';

  @Input() users: any[] = [
    { id: 1, name: 'Mehdi' },
    { id: 2, name: 'Sara' },
  ];
}