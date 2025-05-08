import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

@Injectable({
  providedIn: 'root'
})
export class GsapService {
  instance = gsap;
  scrollTrigger = ScrollTrigger;
  scrollSmoother = ScrollSmoother;

  constructor() {
    this.instance.registerPlugin(this.scrollTrigger);
    this.instance.registerPlugin(this.scrollSmoother);
  }
}
