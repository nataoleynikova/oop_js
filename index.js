$( document ).ready( function() {
  // make random percent, get age, get child average perfomance, get teacher and
  // worker work experience
  function makeRandomInt( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
  };
  
  //get quantity
  function getQuantityByPercent( persent ) {
    return Number.parseInt( $( '#people' ).val() / 100 * persent );
  };

  function makeOverallQuantity() {
    if ( $( '#people' ).val() != childQuantity + teacherQuantity + workerQuantity ) {
      let realWorkerQuantity = $( '#people' ).val() - childQuantity - teacherQuantity;
      return childQuantity + teacherQuantity + realWorkerQuantity;
    };
  };

  //set sex
  function setRandomSex() {
    let sex = [ 'm', 'f' ];
    return sex[ Math.floor( Math.random() * sex.length ) ];
  };

  //form a child schedule
  function formAChildSchedule() {
    if ( childAge <= 11 ) {
      if ( childAveragePerformance === 3 ) {
        return schedule.splice( 3, 2 );
      }
      return schedule.splice( 1, 3 );
    } 
    if ( childAveragePerformance === 3 ) {
      return schedule.splice( 1, 4 );
    }
    return schedule; 
  };

  //form a teacher schedule
  function formATeacherSchedule() {
    let teacherScheduleInt = makeRandomInt( 0, 6 );
    let int = schedule[ Math.floor( Math.random() * schedule.length ) ];
    function makeLesson() {
      
    };
  };

  //get a salary
  function getSalary( salary ) {
    let borderSalary = makeRandomInt();
    
  };

  let schedule = [ 'Math', 'Phisics', 'Biology', 'Chemistry', 'Literature', 'Spanish', 'English' ];

  let childQuantity = getQuantityByPercent( makeRandomInt( 58, 62 ) );
  let childSex = setRandomSex();
  let childAge = makeRandomInt( 7, 18 );
  let childAveragePerformance = makeRandomInt( 3, 5 );
  let childSchedule = formAChildSchedule();
  
  let teacherQuantity = getQuantityByPercent( makeRandomInt( 20, 25 ) );
  let teacherSex = setRandomSex();
  let teacherAge = makeRandomInt( 30, 55 );
  let teacherWorkExperience = makeRandomInt( 1, 5 );
  let teacherSchedule = formATeacherSchedule();
  let teacherSalary = getSalary( 10000, 60000 );

  let workerQuantity = getQuantityByPercent( makeRandomInt( 17, 18 ) );
  let workerSex = setRandomSex();
  let workerAge = makeRandomInt( 25, 60 );
  let workerWorkExperience = makeRandomInt( 1, 10 );
  let workerSalary = getSalary( makeRandomInt( 5000, 55000 ) );

  class People {
    // constructor( sex, age ) {
    //   this.sex = sex;
    //   this.age = age;
    // }
  }

  class Child extends People {
    // constructor( sex, age, performance, schedule ) {
    //   super( sex, age );
    //   this.performance = performance;
    //   this.schedule = schedule;
    // }
  }

  class Teacher extends People {
    // constructor( sex, age, experience, schedule, salary ) {
    //   super( sex, age );
    //   this.experience = experience;
    //   this.schedule = schedule;
    //   this.salary = salary;
    // }
  }

  class Worker extends People {
    // constructor( sex, age, experience, salary ) {
    //   super( sex, age );
    //   this.experience = experience;
    //   this.salary = salary;
    // }
  }

  // let child = new Child( childSex, childAge, childAveragePerformance, childSchedule );
  // let teacher = new Teacher( teacherSex, teacherAge, teacherWorkExperience, teacherSchedule, teacherSalary );
  // let worker = new Worker( workerSex, workerAge, workerWorkExperience, workerSalary );

  // let childArray = [];
  // for (let i = 0; i <= childQuantity; i++){
  //   childArray.push(child)
  // };
  // console.log(childArray);

  // let teacherArray = [];
  // for (let i = 0; i <= teacherQuantity; i++){
  //   teacherArray.push(teacher)
  // };
  // console.log(teacherArray);

  // let workerArray = [];
  // for (let i = 0; i <= workerQuantity; i++){
  //   workerArray.push(worker)
  // };
  // console.log(workerArray);
});