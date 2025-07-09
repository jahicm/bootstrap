import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-tdf',
  imports: [FormsModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {

  constructor(private userService: UserService) {

  }
  onSubmit(form: any): void {
    let user: User = form.value;
    this.userService.saveUser(user).subscribe({
      next: (user: User) => {
        console.log('User saved successfully:', user);
      },
      error: (err) => {
        console.error('Failed to save user:', err);
      }
    });
  }
}
