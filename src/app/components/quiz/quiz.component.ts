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
      question: "What is the capital of France?",
      answers: ["Paris", "Berlin", "Madrid", "Rome"]
    },
    {
      question: "Which language runs in a web browser?",
      answers: ["Java", "C", "Python", "JavaScript"]
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"]
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
        li.textContent = `${q.question} - Your answer: ${q.answers[this.userAnswers[i]]}`;
        li.style.marginBottom = '10px';
        ul.appendChild(li);
      });
      this.answersBox.appendChild(ul);
      this.questionBox.classList.add('show');
    }, 300);
  }
}
