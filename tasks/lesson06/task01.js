console.log('%c\nВыполняются скрипты из папки \"lesson06\"\nЗадача 1:\n', rainbow);

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (all, failed) => {
  
  const passed = all.filter(student => !failed.some(item => student === item))
  
  return passed.join(', ')
}

console.log(`Студенты, сдавшие все экзамены: ${filter(allStudents, failedStudents)}`);