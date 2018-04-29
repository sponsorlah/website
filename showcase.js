Vue.component("Project", {
  template: `   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  `,

  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
});

// var userId = firebase.auth().currentUser.uid;
var eventsRef = db.ref("users/events");

var app = new Vue({
  el: "#app",
  data() {
    return {
      radio: "1",
      form: {},
      value: "",
      input: "",

      form: {
        title: "",
        type: "",
        location: "",
        dateStart: "",
        dateEnd: "",
        participants: "",
        range: "",
        website: "",
        facebook: "",
        twitter: "",
        google: "",
        package: {
          name: "",
          description: ""
        },
        list: "",
        video: "",
        image: "",
        confirmedSponsor: "",
        description: "",
        reason: ""
      }
    };
  },
  firebase: {
    events: eventsRef
  },
  methods: {
    getEventDat() {
      
    }
  }
});
