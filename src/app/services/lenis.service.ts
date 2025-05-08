import { inject, Injectable } from '@angular/core';
import { GsapService } from './gsap.service';
import Lenis from 'lenis';

@Injectable({
  providedIn: 'root'
})
export class LenisService {
  gsap = inject(GsapService);
  instance!: Lenis;

  constructor() {}

  initLenis(wrapper: HTMLElement, content: HTMLElement) {
    if (typeof window === 'undefined') {
      return;
    }
    this.instance = new Lenis({
      wrapper: wrapper,
      content: content,
      smoothWheel: true,
    });
    this.instance.on('scroll', this.gsap.scrollTrigger.update);

    this.gsap.instance.ticker.add((time) => {
      this.instance.raf(time * 500);
    });

    this.gsap.instance.ticker.lagSmoothing(0);
  }
}
