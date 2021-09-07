import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { AuthService } from '../usuarios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
 title: string = 'App Angular';

 constructor(public authService: AuthService, private router: Router) {}

 logout(): void {
   let username = this.authService.usuario.username;
   this.authService.logout();
   swal('Logout', `Hola ${username}, has cerrado sesion con exito!`, 'success');
   this.router.navigate(['/login']);
 }
}
