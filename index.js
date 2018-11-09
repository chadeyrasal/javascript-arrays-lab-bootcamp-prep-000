var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

var name

function destructivelyAppendKitten(name) {
  name = 'Ralph'
  kittens.push(name)
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyPrependKitten(name) {
  name = 'Bob'
  kittens.unshift(name)
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield']

function appendKitten(name) {
  
}