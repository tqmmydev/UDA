import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class GsapService {
  instance = gsap;
  scrollTrigger = ScrollTrigger;

  constructor() {
    this.instance.registerPlugin(this.scrollTrigger);
  }
}
