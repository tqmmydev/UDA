import { ElementRef, inject, Injectable, ViewChild } from '@angular/core';
import { GsapService } from './gsap.service';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {
  sections: Section[] = [
    { icon: '', name: 'Intro', id: 'intro' },
    { icon: '', name: 'Sintassi base', id: 'sintassi-base' },
    { icon: '', name: 'Esempio semplice', id: 'esempio-semplice' },
    { icon: '', name: 'Accesso all\'istanza', id: 'accesso-istanza' },
    { icon: '', name: 'Vantaggi', id: 'vantaggi' },
    { icon: '', name: 'Tipi di ereditarietà', id: 'tipi-ereditarietà' },
    { icon: '', name: 'Parola chiave super', id: 'parola-chiave-super' },
    { icon: '', name: 'Modificatori di accesso', id: 'modificatori-di-accesso' },
    { icon: '', name: 'Ereditarietà e overriding', id: 'ereditarietà-e-overriding' },
    { icon: '', name: 'Esempio pratico completo', id: 'esempio-pratico-completo' },
  ];
  gsap = inject(GsapService);
  showedQuiz = false;

  goToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  goToQuiz() {
    this.showedQuiz = !this.showedQuiz;
    if (this.showedQuiz) {
      this.gsap.instance.to('#appElement', {
        translateY: '-50%',
        duration: 1,
        ease: 'expo.inOut'
      });
    } else {
      this.gsap.instance.to('#appElement', {
        translateY: '0%',
        duration: 1,
        ease: 'expo.inOut'
      });;
    }
  }
}

interface Section {
  icon: string;
  name: string;
  id: string;
}
