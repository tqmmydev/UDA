import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { GetIconComponent } from '../get-icon/get-icon.component';
import { GsapService } from '../../services/gsap.service';
import { NgStyle } from '@angular/common';
import { LenisService } from '../../services/lenis.service';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-scroller',
  imports: [
    GetIconComponent,
    Highlight,
    HighlightLineNumbers,
  ],
  templateUrl: './scroller.component.html',
  styleUrl: './scroller.component.css'
})
export class ScrollerComponent implements AfterViewInit {
  @ViewChild('scroller') scroller!: ElementRef;
  gsap = inject(GsapService);
  lenis = inject(LenisService);

  constructor() {}

  ngAfterViewInit(): void {
      if (typeof document !== 'undefined') {
        this.lenis.initLenis(this.scroller.nativeElement, this.scroller.nativeElement.children[0]);
      }
  }
}
