const userName = 'Alex'

function helloName(name) {
  return `Hello ${name}`
}

console.log(helloName(userName));



const number = [1, 2, 3, 4, 8, 10, 11, 44, 22, 344, 121]

function arrayNumbers(array) {
  for (let i = 0; i < array.length; i++)
    if (array[i] > 10) {
      console.log(array[i])
    }
}

console.log(arrayNumbers(number));


const result = calculator(2, 3, 'minus')

function calculator(a, b, operator) {
  if (operator === 'plus') {
    return a + b
  } else if (operator === 'minus') {
    return a - b
  } else if (operator === 'multiply') {
    return a * b
  } else if (operator === 'divide') {
    return b !== 0 ? a / b : 'Ошибка - Делить на ноль нельзя'
  } else {
    return 'Ошибка'
  }
}

console.log(result);



const user = {
  me: {
    name: 'Anna',
    age: 22,
    city: 'Kirov'
  },

  helloUser: function (helloArgument) {
    return `Hello ${user.me.name}`
  }
}

console.log(user.helloUser());



const users = [
  {
    name: 'Alex',
    age: 23,
    isAdmin: true
  },
  {
    name: 'John',
    age: 27,
    isAdmin: true
  },
  {
    name: 'Maria',
    age: 25,
    isAdmin: true
  },
  {
    name: 'Oliver',
    age: 22,
    isAdmin: false
  },
  {
    name: 'Elena',
    age: 20,
    isAdmin: false
  },
  {
    name: 'Antonio',
    age: 19,
    isAdmin: false
  }
]

let userNotAdmin = 0;
for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin === false) {
    userNotAdmin++;
  }
}

console.log(userNotAdmin)