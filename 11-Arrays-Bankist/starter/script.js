'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
let currentUser = null;
/////////////////////////////////////////////////

// Create userName
accounts.forEach(function (element) {
  //"john adam">[john,adam]>"jd"
  element.userName = element.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
});

//wellcome user
const welcomeUser = user => {
  labelWelcome.innerHTML = `Welcome back, ${user.owner.split(' ')[0]}`;
};

//display balance
const currentBalance = () => {
  return currentUser.movements.reduce((a, b) => a + b, 0);
};
const showCurrentBalance = () =>
  (labelBalance.innerHTML = currentBalance() + '€');
//display movements
const showMovements = movements => {
  let displayMovements = [];
  movements.forEach((movement, index) => {
    displayMovements.unshift(`<div class="movements__row">
    <div class="movements__type movements__type--${
      movement > 0 ? 'deposit' : 'withdrawal'
    }">${index + 1} ${movement > 0 ? 'deposit' : 'withdrawal'}</div>
    <div class="movements__value">${movement}€</div>
  </div>`);
  });
  containerMovements.innerHTML = displayMovements.join('');
};

//Show deposit total
const showDepositTotal = user => {
  labelSumIn.innerHTML =
    user.movements.filter(movement => movement > 0).reduce((a, b) => a + b, 0) +
    '€';
};
// Login
const showWithdrawTotal = user =>
  (labelSumOut.innerHTML =
    Math.abs(
      user.movements.filter(movement => movement < 0).reduce((a, b) => a + b, 0)
    ) + '€');
//Show the day of today
const showDay = () => (labelDate.innerHTML = new Date().toLocaleDateString());

//Show Interest
const showInterest = user => {
  labelSumInterest.innerHTML = user.movements
    .map(movement => {
      return movement > 0 && (movement * user.interestRate) / 100;
    })
    .filter(int => int >= 1)
    .reduce((a, b) => a + b, 0);
};
// Login check
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  // Check current user
  const user =
    accounts[
      accounts.findIndex(user => user.userName === inputLoginUsername.value)
    ];
  if (user.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 1;
    currentUser = user;
    welcomeUser(currentUser);
    showCurrentBalance();
    showMovements(currentUser.movements);
    showDepositTotal(currentUser);
    showWithdrawTotal(currentUser);
    showDay();
    showInterest(currentUser);
  }
  inputLoginUsername.value = inputLoginPin.value = '';
});
//Sort function
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault;
  if (!sorted) {
    showMovements([...currentUser.movements].sort((a, b) => a - b));
    sorted = true;
  } else {
    showMovements(currentUser.movements);
    sorted = false;
  }
});

//Transfer function
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amountTransfer = Number(inputTransferAmount.value);
  const accountTransfer = accounts.find(
    acount =>
      acount.userName === inputTransferTo.value &&
      currentUser.userName !== inputTransferTo.value
  );

  if (
    accountTransfer &&
    amountTransfer > 0 &&
    currentBalance() >= amountTransfer
  ) {
    accountTransfer.movements.push(amountTransfer);
    currentUser.movements.push(-amountTransfer);
    showMovements(currentUser.movements);
    showCurrentBalance();
  }
  console.log(accountTransfer);
  inputTransferTo.value = inputTransferAmount.value = '';
});

// Loan function
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amountTransfer = Number(inputLoanAmount.value);
  if (amountTransfer > 0) {
    currentUser.movements.push(amountTransfer);
    showMovements(currentUser.movements);
    showCurrentBalance();
  }
  inputLoanAmount.value = '';
});
//Close acount

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentUser.userName &&
    Number(inputClosePin.value) === currentUser.pin
  ) {
    const index = accounts.findIndex(
      account => account.username === currentUser.userName
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});
