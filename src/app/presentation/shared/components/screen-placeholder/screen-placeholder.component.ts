import { Component, input } from '@angular/core';

@Component({
  selector: 'app-screen-placeholder',
  templateUrl: './screen-placeholder.component.html',
  styleUrls: ['./screen-placeholder.component.scss'],
  standalone: true,
})
export class ScreenPlaceholderComponent {
  screenName = input.required<string>();

  marginTop = input<'default' | 'compact'>('compact');

  subtitleVariant = input<'full' | 'short'>('short');
}
