import Vue from 'vue';
import format from 'date-fns/format';

Vue.filter('dateFormatYMDJp', date => format(date, 'YYYY年M月D日'));
