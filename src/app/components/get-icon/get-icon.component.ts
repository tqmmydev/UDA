import { isPlatformServer } from '@angular/common';
import { Component, inject, Input, PLATFORM_ID } from '@angular/core';
import { NgIcon, provideNgIconLoader } from '@ng-icons/core';

@Component({
  selector: 'get-icon',
  imports: [NgIcon],
  providers: [
    provideNgIconLoader(name => {
      if (isPlatformServer(inject(PLATFORM_ID))) {
        return '';
      } else {
        return fetch(`/icons/${name}.svg`).then(response => response.text());
      }
    })
  ],
  templateUrl: './get-icon.component.html',
  styleUrl: './get-icon.component.css'
})
export class GetIconComponent {
  /**
   * The name of the icon, must be present in /icons/{name}.svg
   */
  @Input({ required: true }) name: string = '';
  /**
   * CSS class to add to the svg container
   */
  @Input() iconClass: string = '';
}
