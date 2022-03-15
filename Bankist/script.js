let currentAccount;
let name;
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");
const containerNotice = document.querySelector(".notice");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Login functionality
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("here");
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    nameu = currentAccount.owner.split(" ")[0];
    labelWelcome.textContent = `Good to see you, ${nameu}👋`;
    containerApp.style.opacity = 100;
    inputLoginPin.value = inputLoginUsername.value = " ";
    inputLoginPin.blur();
    // Update UI
    updateUI(currentAccount);
  }
});

// Update UI function
const updateUI = function (acc) {
  displayMovements(acc);
  calcDisplayBalance(acc);
  displaySummary(acc);
};

const displayMovements = function (acc) {
  containerMovements.innerHTML = "";
  acc.movements.forEach(function (mov, i) {
    var type = Math.sign(mov) == 1 ? "deposit" : "withdrawal";
    html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// Username generate
const converted = (accs) => {
  accs.forEach(function (value, key, accs) {
    value.username = value.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

// credited score
const displaySummary = function (acc) {
  const incomeIn = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = incomeIn;

  const incomeOut = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(incomeOut)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, cval) => acc + cval, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// Total addition display on the top
const calcDisplayBalance = function (acc) {
  // acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  console.log(acc.balance);

  labelBalance.textContent = `${acc.balance}`;
};

converted(accounts);

// Transfer money
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username == inputTransferTo.value
  );

  if (
    currentAccount.balance >= Number(amount) &&
    amount > 0 &&
    receiverAcc &&
    receiverAcc.username !== currentAccount
  ) {
    console.log("transfer is valid");
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  if (currentAccount.balance > (loanAmount * 10) / 100) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value == currentAccount.username &&
    inputClosePin.value == currentAccount.pin
  ) {
    console.log("delete me");
  }

  // if(
});
