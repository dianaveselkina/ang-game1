import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circle',
  imports: [CommonModule],
  templateUrl: './circle.html',
  styleUrl: './circle.css'
})
export class Circle {
  
  @Input() visible: boolean = true;
  @Input() styles: { [key: string]: string } = {};
  
    @Input() showErrorMessage: boolean = false;

  @Output() click = new EventEmitter<void>();

  onClick(): void {
    this.click.emit();
  }
}
