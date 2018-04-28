var eventRef = db.ref("users/eventCreated");

var app = new Vue({
  el: "#app",
  data() {
    return {
      tabPosition: "left",
      labelPosition: "right",
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
    eventRef: db.ref("users/eventCreated")
  },

  methods: {
    createEvent() {
      eventRef.push(this.form);
    }
  }
});
