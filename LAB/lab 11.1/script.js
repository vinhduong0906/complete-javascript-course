'use strict';

const answerBtn = document.getElementById('answer-poll');
const poll = {
  question: 'What is your favourite programing language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  numberOfVotes: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        this.question +
          '\n' +
          this.options.join('\n') +
          '\n(Write option number)'
      )
    );
    console.log(typeof answer);

    if (isNaN(answer) || answer < 0 || answer > 3)
      alert('Câu trả lời không hợp lệ');
    else {
      this.numberOfVotes[answer] += 1;
      console.log(this.numberOfVotes);
    }
  },
  displayResults: function (type) {
    typeof type === 'string'
      ? console.log('Poll results are ' + type)
      : console.log(type);
  },
};
answerBtn.addEventListener('click', function () {
  poll.registerNewAnswer();
  poll.displayResults('5, 2, 3');
  poll.displayResults([5, 2, 3]);
  poll.displayResults([1, 5, 3, 9, 6, 1]);
  poll.displayResults('1, 5, 3, 9, 6, 1');
});
