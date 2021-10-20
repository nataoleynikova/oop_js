$(document).ready(function(){

  function setRandomQuantity (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  // написать ф-ю через for, которая проверяет, соот-ет ли сумма getQuantity 
  // $('#people')

  function setRandomAge (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  class People {
    constructor (quantity, age, sex){
      this._quantity = quantity;
      this._age = age;
      this._sex = sex;
    }

    getQuantity (){
      return Number.parseInt($('#people').val() / 100 * this._quantity);
    }

    // getAge (){
    //   return function (){
    //     for (i = 0; i <= this._age; i++){
    //       console.log (i);
    //     }
    //   };
    // }

    getSex (){
      return 
    }
  }

  class Child extends People {
    constructor (quantity, age, sex, marks, schedule){
      super (quantity, age, sex);
      this._marks = marks;
      this._schedule = schedule;
    }
  }

  class Teacher extends People {
    constructor (quantity, age, sex, schedule, rate, pay){
      super (quantity, age, sex);
      this._schedule = schedule;
      this._rate = rate;
      this._pay = pay;
    }
  }

  class Worker extends People {
    constructor (quantity, age, sex, rate, pay){
      super (quantity, age, sex);
      this._rate = rate;
      this._pay = pay;
    }
  }

  let child = new Child ();
  child._quantity = setRandomQuantity (58, 62);
  child._age = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  // children._marks = [3, 4, 5];
  // children._sex = ['м', 'ж'];
  // children._schedule = ['Алгебра', 'География', 'Химия', 'Физика'];

  let teacher = new Teacher ();
  teacher._quantity = setRandomQuantity (20, 25);
  teacher._age = setRandomAge (25, 55);
  // teachers._rate = [1-3, 4-5];
  // teachers._pay = [10000-20000, 20000-30000, 30000-40000, 40000-50000];
  // teachers._sex = ['м', 'ж'];
  // teachers._schedule = ['Алгебра', 'География', 'Химия', 'Физика'];

  let worker = new Worker ();
  worker._quantity = setRandomQuantity (17, 18);
  worker._age = setRandomAge (20, 60);
  // workers._rate = [1-3, 4-6, 7-10];
  // workers._pay = [5000-10000, 10000-20000, 20000-30000, 30000-40000];
  // workers._sex = ['м', 'ж'];
 
  let childArray = [];
  function fillChildArray (){

  };

  $('#table').on('click', function() {
  }); 
   
  $('#analysis').on('click', function() {
  });


  console.log (child.getQuantity());
  console.log (teacher.getQuantity());
  console.log (worker.getQuantity());

});