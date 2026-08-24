import { Component, signal } from '@angular/core';
import { Section1 } from './sections/section-1/section-1';
import { Section2 } from './sections/section-2/section-2';
import { Section3 } from './sections/section-3/section-3';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Section1, Section2, Section3],
})
export class App {}
