import { Injectable } from '@angular/core';

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

  constructor() { }

  goToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

interface Section {
  icon: string;
  name: string;
  id: string;
}
