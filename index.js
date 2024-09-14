// 1
let tableId = document.getElementById('age-table');
console.log(tableId)

// 2
let tableElement = tableId.parentElement.getElementsByTagName('label')
console.log(tableElement);

// 3
let firstTd = tableId.parentElement.getElementsByTagName('td')[0]
console.log(firstTd)

// 4
let form = document.getElementsByName('search')[0]
console.log(form)

// 5
let firstInput = form[0]
console.log(firstInput)

// 6
let lastInput = form[1]
console.log(lastInput)