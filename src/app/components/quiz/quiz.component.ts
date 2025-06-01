import { Component, AfterViewInit, inject } from '@angular/core';
import { NavigatorService } from '../../services/navigator.service';
import { GetIconComponent } from '../get-icon/get-icon.component';

@Component({
  selector: 'app-quiz',
  imports: [
    GetIconComponent
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  navigator = inject(NavigatorService);
  questions = [
    {
      question: "Cos'è l'ereditarietà nella programmazione orientata agli oggetti?",
      answers: [
        "Una tecnica per duplicare classi",
        "Una relazione tra oggetti e metodi",
        "Un modo per creare classi figlie che ereditano da classi madri",
        "Un sistema per nascondere i dati"
      ],
      rightAnswerIndex: 2
    },
    {
      question: "Quale tra i seguenti è un vantaggio dell'ereditarietà?",
      answers: [
        "Aumenta la complessità del codice",
        "Evita il riuso del codice",
        "Permette l'estendibilità e il polimorfismo",
        "Rende il codice meno comprensibile"
      ],
      rightAnswerIndex: 2
    },
    {
      question: "Cosa rappresenta la superclasse?",
      answers: [
        "La classe che eredita",
        "La classe base da cui si eredita",
        "Un metodo astratto",
        "Una funzione di libreria"
      ],
      rightAnswerIndex: 1
    },
    {
      question: "Qual è la parola chiave usata in Java per l'ereditarietà?",
      answers: [
        "inherit",
        "superclass",
        "parent",
        "extends"
      ],
      rightAnswerIndex: 3
    },
    {
      question: "Che funzione ha la parola chiave 'super' nei costruttori?",
      answers: [
        "Richiamare un metodo privato",
        "Creare un oggetto statico",
        "Accedere al costruttore della superclasse",
        "Sovrascrivere un metodo"
      ],
      rightAnswerIndex: 2
    },
    {
      question: "Cosa permette di fare l’annotazione @Override?",
      answers: [
        "Eredita automaticamente una classe",
        "Evita l’ereditarietà",
        "Verifica la correttezza della sovrascrittura di un metodo",
        "Serve per importare librerie"
      ],
      rightAnswerIndex: 2
    },
    {
      question: "Quale tipo di ereditarietà NON è supportata da Java tra classi?",
      answers: [
        "Ereditarietà singola",
        "Ereditarietà gerarchica",
        "Ereditarietà multilivello",
        "Ereditarietà multipla"
      ],
      rightAnswerIndex: 3
    },
    {
      question: "Quando è meglio usare la composizione al posto dell'ereditarietà?",
      answers: [
        "Quando la relazione è 'HA UN'",
        "Quando vogliamo estendere una classe",
        "Quando il codice è molto semplice",
        "Quando usiamo annotazioni"
      ],
      rightAnswerIndex: 0
    }
  ];

  userAnswers: any[] = [];
  currentQuestionIndex = 0;
  questionBox!: HTMLElement;
  answersBox!: HTMLElement;
  nextBtn!: HTMLButtonElement;

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      const q = this.questions[this.currentQuestionIndex];
      const questionBox = document.getElementById('questionBox');
      const answersBox = document.getElementById('answersBox');
      const nextBtn = (document.getElementById('nextBtn') as HTMLButtonElement);

      if (questionBox === null || answersBox === null || nextBtn === null) {
        return;
      }

      this.questionBox = questionBox;
      this.answersBox = answersBox;
      this.nextBtn = nextBtn;
      // Fade out
      this.questionBox.classList.remove('show');
      this.answersBox.innerHTML = '';
      this.nextBtn.disabled = true;

      setTimeout(() => {
        this.questionBox.textContent = q.question;
        q.answers.forEach((answer, index) => {
          const btn = document.createElement('button');
          btn.textContent = answer;
          btn.onclick = () => this.selectAnswer(index);
          answersBox.appendChild(btn);
        });
        this.questionBox.classList.add('show');
      }, 300);
    }
  }

  selectAnswer(index: number) {
    this.userAnswers[this.currentQuestionIndex] = index;
    const buttons = this.answersBox.querySelectorAll('button');
    buttons.forEach(btn => btn.style.backgroundColor = '#2d2d2d');
    buttons[index].style.backgroundColor = '#3700b3';
    this.nextBtn.disabled = false;
  }

  handleClick() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.ngAfterViewInit();
    } else {
      this.showResults();
    }
  }

  showResults() {
    this.questionBox.classList.remove('show');
    this.answersBox.innerHTML = '';
    this.nextBtn.style.display = 'none';

    setTimeout(() => {
      this.questionBox.innerHTML = "<strong>Quiz Complete!</strong>";
      const ul = document.createElement('ul');
      ul.style.marginTop = "20px";
      this.questions.forEach((q, i) => {
        const li = document.createElement('li');
        li.innerHTML = `${q.question} - <b>Risposta data:</b> ${q.answers[this.userAnswers[i]]} - <b>Risposta corretta:</b> ${this.userAnswers[i] == q.rightAnswerIndex ? '✅' : q.answers[q.rightAnswerIndex]}`;
        li.style.marginBottom = '10px';
        ul.appendChild(li);
      });
      this.answersBox.appendChild(ul);
      this.questionBox.classList.add('show');
    }, 300);
  }
}
