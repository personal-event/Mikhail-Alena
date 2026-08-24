import { Component, DOCUMENT, inject } from '@angular/core';

@Component({
  selector: 'app-section-1',
  imports: [],
  templateUrl: './section-1.html',
  styleUrl: './section-1.scss',
})
export class Section1 {
  private readonly document = inject(DOCUMENT);
  onBtnClick() {
    this.document.documentElement.scrollBy({
      top: (this.document.documentElement.clientHeight * 75) / 100,
      behavior: 'smooth',
    });
  }
}
