import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<h1>Hello, Carlos! </h1>',
  styleUrls: ['./app.component.css'],
  standalone: true,

 /*  standalone: true,
 imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' */
})
export class AppComponent {
  title = 'meu-projeto-angular';
}
