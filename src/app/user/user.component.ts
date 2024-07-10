import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


const ramdonIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selecterUser = DUMMY_USERS[ramdonIndex]

  get imagePath() {
    return 'assets/users/' + this.selecterUser.avatar
  }

  onSelectUser() {
    const ramdonIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selecterUser = DUMMY_USERS[ramdonIndex]
  }
}
