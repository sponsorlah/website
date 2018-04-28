
  var app=new Vue ({
    el: "#app",
    data() {
      return {
        tabPosition: 'left',
        labelPosition: 'top',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        form: {
          title: '',
          type: '',
          location:'',
          date1: '',
          date2: '',
          participants: '',
          range: '',
          link:'',
          desc:'',
        },
      };
    },

  
    
  });

