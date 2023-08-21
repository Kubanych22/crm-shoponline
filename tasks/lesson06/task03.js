console.log('%c\nЗадача 3:\n', rainbow);

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (name, prefix) => {
  return  name.map(item => prefix+ ' ' +  item )
}

console.log(addPrefix(names, 'Mr'))

