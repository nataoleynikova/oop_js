$(document).ready(function(){

  let child_randomQuantity = randomQuantity (58, 62);
  let teacher_randomQuantity = randomQuantity (20, 25);
  let worker_randomQuantity = randomQuantity (17, 18);
  
  function randomQuantity (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  // написать ф-ю через for, которая проверяет, соот-ет ли сумма quantity 
  // $('#people')
  
  function child_quantity (min, max){
    return Number.parseInt($('#people').val() / 100 * child_randomQuantity);
  }
  
  function teacher_quantity (min, max){
    return Number.parseInt($('#people').val() / 100 * teacher_randomQuantity);
  }

  function worker_quantity (min, max){
    return Number.parseInt($('#people').val() / 100 * worker_randomQuantity);
  }

  let childAge = randomAge (7, 18);
  let teacherAge = randomAge (30, 55);
  let workerAge = randomAge (25, 60);
  
  function randomAge (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let sex = [
    {id: 0, sex: 'm'}, 
    {id: 1, sex: 'f'}
  ];

  let child_randomSex = randomSex (0, 1);
  let teacher_randomSex = randomSex (0, 1);
  let worker_randomSex = randomSex (0, 1);

  function randomSex (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  let childSex = sex.find(item => item.id == child_randomSex);
  let teacherSex = sex.find(item => item.id == teacher_randomSex);
  let workerSex = sex.find(item => item.id == worker_randomSex);

  let mark = randomMark(3, 5);

  function randomMark (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  let childSchedule = ['Math', 'Phisics', 'Biology', 'Chemistry', 'Spanish', 
                'English', 'Literature']

  if (childAge <= 11 && mark == 3){
    childSchedule.splice(1, 4);
  } else if (childAge <= 11 && mark >= 4){
    childSchedule.splice(1, 3);
  } else if (childAge > 11 && mark == 3){
    childSchedule.splice(3, 2);
  } else if (childAge > 11 && mark >= 4){
    childSchedule;
  };

  let teacherRate = randomRate (1, 5);
  let workerRate = randomRate (1, 10);
  // написать ф-ю, которая рассчитывала бы rate от age

  function randomRate (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  function randomPay (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let teacherPay = [randomPay (10000, 20000), randomPay (20000, 30000),
                  randomPay (30000, 40000), randomPay (40000, 50000),
                  randomPay (50000, 60000)];

  if (teacherRate == 1){
    teacherPay = teacherPay [0];
  } else if (teacherRate == 2){
    teacherPay = teacherPay [1];
  } else if (teacherRate == 3){
    teacherPay = teacherPay [2];
  } else if (teacherRate == 4){
    teacherPay = teacherPay [3];
  } else if (teacherRate == 5){
    teacherPay = teacherPay [4];
  };

  let workerPay = [randomPay (5000, 10000), randomPay (10000, 15000),
                  randomPay (15000, 20000), randomPay (20000, 25000),
                  randomPay (25000, 30000), randomPay (30000, 35000),
                  randomPay (35000, 40000), randomPay (40000, 45000),
                  randomPay (45000, 50000), randomPay (50000, 55000)];

  if (workerRate == 1){
    workerPay = workerPay [0];
  } else if (workerRate == 2){
    workerPay = workerPay [1];
  } else if (workerRate == 3){
    workerPay = workerPay [2];
  } else if (workerRate == 4){
    workerPay = workerPay [3];
  } else if (workerRate == 5){
    workerPay = workerPay [4];
  } else if (workerRate == 6){
    workerPay = workerPay [5];
  } else if (workerRate == 7){
    workerPay = workerPay [6];
  } else if (workerRate == 8){
    workerPay = workerPay [7];
  } else if (workerRate == 9){
    workerPay = workerPay [8];
  } else if (workerRate == 10){
    workerPay = workerPay [9];
  };

  let teacher_randomSchedule = randomSchedule (0, 6)
  
  function randomSchedule (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let teacherSchedule = ['Math', 'Phisics', 'Biology', 'Chemistry', 'Literature', 
                        'Spanish', 'English']
  
  if (teacher_randomSchedule == 0){
    teacherSchedule = teacherSchedule [0];
  } else if (teacher_randomSchedule == 1){
    teacherSchedule = teacherSchedule [1];
  } else if (teacher_randomSchedule == 2){
    teacherSchedule = teacherSchedule [2];
  } else if (teacher_randomSchedule == 3){
    teacherSchedule = teacherSchedule [3];
  } else if (teacher_randomSchedule == 4){
    teacherSchedule = teacherSchedule [4];
  } else if (teacher_randomSchedule == 5){
    teacherSchedule = teacherSchedule [5];
  } else if (teacher_randomSchedule == 6){
    teacherSchedule = teacherSchedule [6];
  };

  class People {
    constructor (age, sex){
      this.age = age;
      this.sex = sex;
    }
  }

  class Child extends People {
    constructor (age, sex, mark, schedule){
      super (age, sex);
      this.mark = mark;
      this.schedule = schedule;
    }
  }

  class Teacher extends People {
    constructor (age, sex, rate, pay, schedule){
      super (age, sex);
      this.rate = rate;
      this.pay = pay;
      this.schedule = schedule;
    }
  }

  class Worker extends People {
    constructor (age, sex, rate, pay){
      super (age, sex);
      this.rate = rate;
      this.pay = pay;
    }
  }

  let child = new Child (childAge, childSex.sex, mark, childSchedule);

  let teacher = new Teacher (teacherAge, teacherSex.sex, teacherRate, 
                teacherPay, teacherSchedule);

  let worker = new Worker (workerAge, workerSex.sex, workerRate, workerPay);
  
  let childArray = [];
  for (let i = 0; i <= child_quantity(); i++){
    childArray.push(child) // заполняется не рандомно
  };
  console.log(childArray);

  let teacherArray = [];
  for (let i = 0; i <= teacher_quantity(); i++){
    teacherArray.push(teacher)
  };
  console.log(teacherArray);

  let workerArray = [];
  for (let i = 0; i <= worker_quantity(); i++){
    workerArray.push(worker)
  };
  console.log(workerArray);

  $('#analysis').on('click', function() {
    $('#childrenQuantity_mark').append();
    $('#childrenQuantity_biology').append();
    $('#teachersQuantity_rate').append();
    $('#workersQuantity_pay').append();
  });
});