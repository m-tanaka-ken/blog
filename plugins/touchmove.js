import Vue from 'vue';

Vue.directive('touchmove', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('touchmove', f);
      }
    };
    window.addEventListener('touchmove', f, { passive: false });
  }
});
