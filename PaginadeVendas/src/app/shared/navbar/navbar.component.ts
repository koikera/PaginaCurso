import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  redirecionarParaURL() {
    window.open("https://pay.kirvano.com/07676181-6c86-40f4-9dbb-52c8d2d703e0", "_blank");
  }

}
