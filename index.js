$(document).ready(function(){

  class Children {
    getQuantity (){
      return Number($('#people').val()) / 100 * this._quantity
    }
  }

  class Teachers extends Children {
  }

  class Workers extends Children {
  }

  let children = new Children ();
  children._quantity = 60;
  children._marks = [3, 4, 5];
  children._age = [7-11, 12-16, 17-18];
  children._sex = ['м', 'ж'];
  children._schedule = ['Алгебра', 'География', 'Химия', 'Физика'];

  let teachers = new Teachers ();
  teachers._quantity = 25;
  teachers._rate = [1-3, 4-5];
  teachers._pay = [10000-20000, 20000-30000, 30000-40000, 40000-50000];
  teachers._age = [25-35, 36-45, 46-55];
  teachers._sex = ['м', 'ж'];
  teachers._schedule = ['Алгебра', 'География', 'Химия', 'Физика'];

  let workers = new Workers ();
  workers._quantity = 15;
  workers._rate = [1-3, 4-6, 7-10];
  workers._pay = [5000-10000, 10000-20000, 20000-30000, 30000-40000];
  workers._age = [25-35, 36-45, 46-60];
  workers._sex = ['м', 'ж'];

  let ChQuantity = children.getQuantity();
  let TQuantity = teachers.getQuantity();
  let WQuantity = workers.getQuantity();
  
  let f_chA_persent = ChQuantity / 100 * 40;
  let s_chA_persent = ChQuantity / 100 * 45;
  let th_chA_persent = ChQuantity / 100 * 15;

  let f_tA_persent = TQuantity / 100 * 40;
  let s_tA_persent = TQuantity / 100 * 45;
  let th_tA_persent = TQuantity / 100 * 15;

  let f_wA_persent = WQuantity / 100 * 60;
  let s_wA_persent = WQuantity / 100 * 30;
  let th_wA_persent = WQuantity / 100 * 10;
  
  $('#table').on('click', function() {
    // Ученики
    $('#Ch_quantity').html(Math.round(ChQuantity));
    
    
    if (children._age[0]){
      $('#first_ch_age').append("=" + Math.round(f_chA_persent));
    };
    if (children._age[1]){
      $('#second_ch_age').append("=" + Math.round(s_chA_persent));
    };
    if (children._age[2]){
      $('#third_ch_age').append("=" + Math.round(th_chA_persent));
    };

    let M_ch_percent = ChQuantity / 100 * 48;
    let F_ch_percent = ChQuantity / 100 * 52;
    if (children._sex[0]){
      $('#M_ch_sex').html(Math.round(M_ch_percent));
    };
    if (children._sex[1]){
      $('#F_ch_sex').html(Math.round(F_ch_percent));
    };

    if(ChQuantity >= 200){
      $('#ch_schedule').html(children._schedule.reverse());
    } else if (ChQuantity < 200){
      $('#ch_schedule').html(children._schedule.splice(1));
    };

    let C_persent = ChQuantity / 100 * 20;
    let B_persent = ChQuantity / 100 * 50;
    let A_persent = ChQuantity / 100 * 30;
    if (children._marks[0]){
      $('#C_mark').html(Math.round(C_persent));
    };
    if (children._marks[1]){
      $('#B_mark').html(Math.round(B_persent));
    };
    if (children._marks[2]){
      $('#A_mark').html(Math.round(A_persent));
    };
    
    // Учителя
    $('#T_quantity').html(Math.round(TQuantity));

    if (teachers._age[0]){
      $('#first_t_age').append("=" + Math.round(f_tA_persent));
    };
    if (teachers._age[1]){
      $('#second_t_age').append("=" + Math.round(s_tA_persent));
    };
    if (teachers._age[2]){
      $('#third_t_age').append("=" + Math.round(th_tA_persent));
    };

    let M_t_percent = TQuantity / 100 * 37;
    let F_t_percent = TQuantity / 100 * 63;
    if (teachers._sex[0]){
      $('#M_t_sex').html(Math.round(M_t_percent));
    };
    if (teachers._sex[1]){
      $('#F_t_sex').html(Math.round(F_t_percent));
    };

    let f_tP_persent = TQuantity / 100 * 5;
    let s_tP_persent = TQuantity / 100 * 35;
    let th_tP_persent = TQuantity / 100 * 45;
    let fo_tP_persent = TQuantity / 100 * 15;
    if (teachers._pay[0]){
      $('#first_t_pay').append("=" + Math.round(f_tP_persent));
    };
    if (teachers._pay[1]){
      $('#second_t_pay').append("=" + Math.round(s_tP_persent));
    };
    if (teachers._pay[2]){
      $('#third_t_pay').append("=" + Math.round(th_tP_persent));
    };
    if (teachers._pay[3]){
      $('#forth_t_pay').append("=" + Math.round(fo_tP_persent));
    };

    let f_tR_persent = TQuantity / 100 * 30;
    let s_tR_persent = TQuantity / 100 * 70;
    if (teachers._rate[0]){
      $('#first_t_rate').append("=" + Math.round(f_tR_persent));
    };
    if (teachers._rate[1]){
      $('#second_t_rate').append("=" + Math.round(s_tR_persent));
    };

    if(TQuantity >= 100){
      teachers._schedule.unshift('Биология');
      $('#t_schedule').html(teachers._schedule);
    } else if (TQuantity < 100){
      $('#t_schedule').html(teachers._schedule.splice(2));
    };

    // Персонал
    $('#W_quantity').html(Math.round(WQuantity));

    if (workers._age[0]){
      $('#first_w_age').append("=" + Math.round(f_wA_persent));
    };
    if (workers._age[1]){
      $('#second_w_age').append("=" + Math.round(s_wA_persent));
    };
    if (workers._age[2]){
      $('#third_w_age').append("=" + Math.round(th_wA_persent));
    };

    let M_w_percent = WQuantity / 100 * 79;
    let F_w_percent = WQuantity / 100 * 21;
    if (workers._sex[0]){
      $('#M_w_sex').html(Math.round(M_w_percent));
    };
    if (workers._sex[1]){
      $('#F_w_sex').html(Math.round(F_w_percent));
    };

    let f_wP_persent = WQuantity / 100 * 10;
    let s_wP_persent = WQuantity / 100 * 25;
    let th_wP_persent = WQuantity / 100 * 40;
    let fo_wP_persent = WQuantity / 100 * 25;
    if (workers._pay[0]){
      $('#first_w_pay').append("=" + Math.round(f_wP_persent));
    };
    if (workers._pay[1]){
      $('#second_w_pay').append("=" + Math.round(s_wP_persent));
    };
    if (workers._pay[2]){
      $('#third_w_pay').append("=" + Math.round(th_wP_persent));
    };
    if (workers._pay[3]){
      $('#forth_w_pay').append("=" + Math.round(fo_wP_persent));
    };

    let f_wR_persent = WQuantity / 100 * 35;
    let s_wR_persent = WQuantity / 100 * 40;
    let th_wR_persent = WQuantity / 100 * 25;
    if (workers._rate[0]){
      $('#first_w_rate').append("=" + Math.round(f_wR_persent));
    };
    if (workers._rate[1]){
      $('#second_w_rate').append("=" + Math.round(s_wR_persent));
    };
    if (workers._rate[2]){
      $('#third_w_rate').append("=" + Math.round(th_wR_persent));
    };
  });
    
  $('#analysis').on('click', function() {
    // сколько учеников приходится на 1 учителя
    $('#m_quant').append(ChQuantity / TQuantity);
  
    // средний возраст учеников, учителей, рабочих
    let ch_m_age_f = (7 + 11) / 2 * f_chA_persent;
    let ch_m_age_s = (12 + 16) / 2 * s_chA_persent;
    let ch_m_age_th = (17 + 18) / 2 * th_chA_persent;
    $('#ch_m_age').append((ch_m_age_f + ch_m_age_s + ch_m_age_th) / ChQuantity);

    let t_m_age_f = (25 + 35) / 2 * f_tA_persent;
    let t_m_age_s = (36 + 45) / 2 * s_tA_persent;
    let t_m_age_th = (46 + 55) / 2 * th_tA_persent;
    $('#t_m_age').append((t_m_age_f + t_m_age_s + t_m_age_th) / TQuantity);

    let w_m_age_f = (25 + 35) / 2 * f_wA_persent;
    let w_m_age_s = (36 + 45) / 2 * s_wA_persent;
    let w_m_age_th = (46 + 60) / 2 * th_wA_persent;
    $('#w_m_age').append((w_m_age_f + w_m_age_s + w_m_age_th) / WQuantity);
  });
});