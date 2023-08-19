console.log('%c\nЗадача 3:\n', rainbow);

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (name, prefix) => {
  for (const key in name) {
    name[key] = prefix + ' ' + name[key]
  }
  return name
}

console.log(addPrefix(names, 'Mr'))