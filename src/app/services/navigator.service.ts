import { ElementRef, inject, Injectable, ViewChild } from '@angular/core';
import { GsapService } from './gsap.service';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {
  sections: Section[] = [
    { icon: '', name: 'Intro', id: 'intro' },
    { icon: '', name: 'Perché usarla', id: 'utilizzi' },
    { icon: '', name: 'Terminologia', id: 'terminologia' },
    { icon: '', name: 'Sintassi di extends', id: 'sintassi-extends' },
    { icon: '', name: 'Superclasse Animale', id: 'superclasse-animale' },
    { icon: '', name: 'Sottoclasse Cane', id: 'sottoclasse-cane' },
    { icon: '', name: 'Creare oggetti', id: 'creare-oggetti' },
    { icon: '', name: 'Modificatori di accesso', id: 'modificatori-di-accesso' },
    { icon: '', name: 'Costruttori di super', id: 'costruttori-super' },
    { icon: '', name: 'Metodi e attributi di super', id: 'metodi-attributi-super' },
    { icon: '', name: 'Overriding', id: 'overriding' },
    { icon: '', name: 'Annotazione override', id: 'annotazione-override' },
    { icon: '', name: 'Tipi di ereditarietà', id: 'tipi-ereditarieta' },
    { icon: '', name: 'Gerarchia di Veicolo', id: 'gerarchia-veicolo' },
    { icon: '', name: 'Quando NON usarla', id: 'quando-non-usare' },
    { icon: '', name: 'Riepilogo dei vantaggi', id: 'vantaggi' },
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
      this.gsap.instance.fromTo('#quizContainer', {
        top: '100%'
      }, {
        top: '0%',
        duration: 1,
        ease: 'expo.inOut'
      });
    } else {
      this.gsap.instance.to('#quizContainer', {
        top: '100%',
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
