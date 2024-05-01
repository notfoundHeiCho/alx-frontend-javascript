// task 5
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  class Director implements DirectorInterface {
    workFromHome() {
      return 'Working from home';
    }
  
    getCoffeeBreak() {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks() {
      return 'Getting to director tasks';
    }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome() {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak() {
      return 'Cannot have a break';
    }
  
    workTeacherTasks() {
      return 'Getting to work';
    }
  }
  
  function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  // testing task 5 if salary under 500 return teacher else return director
  console.log(createEmployee(200));
  console.log(createEmployee(1000));
  console.log(createEmployee('$500'));
  
  
  // task 6
  function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  function executeWork(employee: Teacher | Director) {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks());
    } else {
      console.log(employee.workTeacherTasks());
    }
  }
  // testing task 6
  executeWork(createEmployee(200)); // Getting to work
  executeWork(createEmployee(1000)); // Getting to director tasks
  
  // task 7
  type Subjects = 'English' | 'Germany';
  
  function teachClass(todayClass: Subjects): string {
    if (todayClass === 'English') {
      return 'Teaching English';
    } else if (todayClass === 'Germany') {
      return 'Teaching Germany';
    }
  }
  // testing task 7
  teachClass('English');
  teachClass('Germany');
  
  console.log(teachClass('English'));
  console.log(teachClass('Germany'));
