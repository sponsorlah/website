var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;
if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;
}

var eventsRef = db.ref("users/events");

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
    events: eventsRef
  },

  methods: {
    createEvent() {
      eventsRef.push(this.form);
    }
  }
});
