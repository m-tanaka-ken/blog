import Vue from 'vue';
import format from 'date-fns/format';

Vue.filter('dateFormatYMDJp', date => {
  return format(date, 'YYYY年M月D日');
});
