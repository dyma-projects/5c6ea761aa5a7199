import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  private colorArrowLeft = '#FF8A65';
  private colorArrowRight = '#81C784';
  private colorArrowUp = '#29B6F6';
  private colorArrowDown = '#673AB7';

  constructor(private el: ElementRef) {
  }

  @HostListener('window:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.changeColorText(this.colorArrowUp);
    } else if (event.key === 'ArrowDown') {
      this.changeColorText(this.colorArrowDown);
    } else if (event.key === 'ArrowLeft') {
      this.changeColorText(this.colorArrowLeft);
    } else if (event.key === 'ArrowRight') {
      this.changeColorText(this.colorArrowRight);
    }
  }

  private changeColorText(color) {
    this.el.nativeElement.style.color = color;
  }

}
