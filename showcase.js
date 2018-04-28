Vue.component("Project", {
  template: `   
   
  `,

  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },


});

var app = new Vue({
  el: '#app',
  data() {
    return {

      form: {

      }
    }
  },

  methods: {

  }
});
