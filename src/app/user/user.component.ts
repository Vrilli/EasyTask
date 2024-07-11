import { Component, computed, signal } from '@angular/core';
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
  selecterUser = signal(DUMMY_USERS[ramdonIndex])
  imagePath = computed(() => 'assets/users/' + this.selecterUser().avatar)

  onSelectUser() {
    const ramdonIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selecterUser.set(DUMMY_USERS[ramdonIndex])

  }
}
