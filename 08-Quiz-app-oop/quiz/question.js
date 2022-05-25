class Question {
  constructor(question) {
    this.questionElement = document.querySelector(".question");
    this.answerElement = [
      document.querySelector("#a1"),
      document.querySelector("#a2"),
      document.querySelector("#a3"),
      document.querySelector("#a4"),
    ];

    this.correctAnswer = question.correct_answer;
    this.question = question.question;
    this.isCorrect = false;

    this.answers = [question.correctAnswer, ...question.incorrect_answers];
  }

  answer(checkedElement) {
    this.isCorrect =
      checkedElement[0].textContent === this.correctAnswer ? true : false;
  }

  render() {
    this.questionElement.innerHTML = this.question;
    this.answerElement.forEach((el, index) => {
      el.innerHTML =
        "<input type='radio' name='radio'/> " + this.answers[index];
    });
  }
}

export default Question;
