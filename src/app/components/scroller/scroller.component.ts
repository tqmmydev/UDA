import { AfterViewInit, Component, ElementRef, inject, viewChild, ViewChild } from '@angular/core';
import { GetIconComponent } from '../get-icon/get-icon.component';
import { GsapService } from '../../services/gsap.service';
import { NgIf, NgStyle } from '@angular/common';
import { LenisService } from '../../services/lenis.service';
import { HighlightModule } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { retry } from 'rxjs';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-scroller',
  imports: [
    GetIconComponent,
    HighlightModule,
    HighlightLineNumbers,
    NgIf
  ],
  templateUrl: './scroller.component.html',
  styleUrl: './scroller.component.css'
})
export class ScrollerComponent implements AfterViewInit {
  @ViewChild('scroller') scroller!: ElementRef;
  @ViewChild('title') title!: ElementRef;
  @ViewChild('subtitle') subtitle!: ElementRef;
  @ViewChild('mouse') mouse!: ElementRef;

  gsap = inject(GsapService);
  lenis = inject(LenisService);
  sidebar = SidebarComponent;

  constructor() {}

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.lenis.initLenis(this.scroller.nativeElement, this.scroller.nativeElement.children[0]);
      this.gsap.instance.fromTo(this.title.nativeElement, { opacity: 0, y: '25%' }, { opacity: 1, duration: 1.5, y: '0%', ease: 'expo.out', delay: .5 });
      this.gsap.instance.fromTo(this.subtitle.nativeElement, { opacity: 0, y: '25%' }, { opacity: 1, duration: 1, y: '0%', ease: 'expo.out', delay: .75 });
      this.gsap.instance.fromTo(this.mouse.nativeElement, { opacity: 0 }, { opacity: 1, duration: 2, delay: 1.5, ease: 'sine.in' })
    }
  }

  fetchCode(name: string): string {
    if (typeof window === 'undefined') return '';
    let result: string = '';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/examples/${name}`, false);
    xhr.onload = () => {
      if (xhr.status === 200) {
        result = xhr.responseText;
      }
    };
    xhr.send();
    return result;
  }
}
