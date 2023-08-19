console.log('%c\nВыполняются скрипты из папки \"lesson06\"\nЗадача 1:\n', rainbow);

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const isFailed = (student, failed) => {
  for (const item of failed) {
    if (student === item) {
      return true
    }
  }
  return false
}

const filter = (all, failed) => {
  let passed = []
  for (const student of all) {
      if(!isFailed(student, failed)) {
        passed.push(student)
      }
  }
  return passed.join(', ')
}

console.log(`Студенты, сдавшие все экзамены: ${filter(allStudents, failedStudents)}`);