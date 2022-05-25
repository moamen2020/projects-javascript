import Final from "./final.js";
import Question from "./question.js";

class Quiz {
  constructor(quizElement, amount, questions) {
    this.quizElement = quizElement;
    this.currentElement = document.querySelector(".current");
    this.totalElement = document.querySelector(".total");
    this.finalElement = document.querySelector(".final");
    this.nextBtn = document.querySelector("#next");

    this.totalAmount = amount;
    this.answeredAmount = 0;

    this.questions = this.setQuestion(questions);
    this.nextBtn.addEventListener("click", this.nextQuestion);
    this.renderQuestion();
  }

  setQuestion(questions) {
    return questions.map((question) => new Question(question));
  }

  renderQuestion() {
    this.questions[this.answeredAmount].render();
    this.currentElement.innerHTML = this.answeredAmount;
    this.totalElement.innerHTML = this.totalAmount;
  }

  nextQuestion = () => {
    const checkedElement = this.questions[
      this.answeredAmount
    ].answerElement.filter((el) => el.firstChild.checked);

    if (checkedElement.length === 0) {
      alert("Check Element");
    } else {
      thsi.questions[this.answeredAmount].answer(checkedElement);
      this.answeredAmount++;
      this.answeredAmount < this.totalAmount
        ? this.renderQuestion()
        : this.endQuizApp;
    }
  };

  endQuizApp() {
    this.quizElement.style.display = "none";
    this.finalElement.style.display = "block";
    const correcr = this.countCorrectAnswers;
    new Final(correcr, this.totalAmount);
  }

  countCorrectAnswers() {
    let count = 0;
    this.questions.forEach((el) => {
      if (el.isCorrect) {
        count++;
      }
    });
    return count;
  }
}

export default Quiz;
