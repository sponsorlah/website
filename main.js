Vue.component("featuredevents", {
  template: `
    <el-row type="flex" class="row-big" justify="center">
      <el-col :span="20">
        <div style="padding-top: 24px">
          <el-row>
            <span class="title">Featured Sponsors</span>
            <el-button style="float: right; padding: 8px 0" type="text">View All
              <i class="el-icon-arrow-right"></i>
            </el-button>
          </el-row>

          <el-row type="flex" justify="center" style="padding-top: 14px">
            <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <img src="images/logo1.png" class="image">
              </el-card>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center" style="padding-top: 14px">
            <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <img src="images/logo1.png" class="image">
              </el-card>
            </el-col>
          </el-row>


        </div>

      </el-col>
    </el-row>
  `,

  data() {
    return {
      sponsors: [
        {
          name: "Pepsi",
          sponsored: 30000,
          id: 1
        },
        {
          name: "Bnb",
          sponsored: 28000,
          id: 2
        },
        {
          name: "Apple",
          sponsored: 25000,
          id: 3
        },
        {
          name: "Mcd",
          sponsored: 10000,
          id: 4
        },
        {
          name: "BMW",
          sponsored: 8000,
          id: 5
        },
        {
          name: "fiverr",
          sponsored: 7000,
          id: 6
        }
      ]
    };
  }
});

Vue.component("featuredsponsors", {
  template: `
  <div>
    <el-row type="flex" justify="center" :gutter="14">
      <el-col :span="12">
        <span class="title">Featured Sponsors</span>
        <el-button style="float: right; padding: 8px 0" type="text">View All
          <i class="el-icon-arrow-right"></i>
        </el-button>

        <el-row type="flex" justify="center" style="padding-top: 14px">
          <el-col :span="10" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img src="images/logo1.png" class="image">
            </el-card>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="padding-top: 14px">
          <el-col :span="10" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img src="images/logo1.png" class="image">
            </el-card>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="8">
        <span class="title">Wall of Fame</span>
        <el-row style="padding-top: 14px">

          <div>
            <div v-for="sponsor in sponsors" :key="sponsor.id" class="text item">
              <el-card shadow="hover">{{ sponsor.id + " " + sponsor.name + " ---Sponsored " + sponsor.sponsored  }}</el-card>
            </div>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>

  `,

  data() {
    return {
      sponsors: [
        {
          name: "Pepsi",
          sponsored: 30000,
          id: 1
        },
        {
          name: "Bnb",
          sponsored: 28000,
          id: 2
        },
        {
          name: "Apple",
          sponsored: 25000,
          id: 3
        },
        {
          name: "Mcd",
          sponsored: 10000,
          id: 4
        },
        {
          name: "BMW",
          sponsored: 8000,
          id: 5
        },
        {
          name: "fiverr",
          sponsored: 7000,
          id: 6
        }
      ]
    };
  }
});

Vue.component("advertisement", {
  template: `
    <div>
      <div class="block">
        <h2 class="demonstration">This is a title</h2>
        <el-carousel height="600px" indicator-position="outside">
          <el-carousel-item v-for="item in items" :key="item.id">
            <div><img :src=item.link class="ads"></div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  `,

  data() {
    return {
      items: [
        {
          link: "images/ads1.png",
          id: 1
        },
        {
          link: "images/ads2.png",
          id: 2
        },
        {
          link: "images/ads3.png",
          id: 3
        },
        {
          link: "images/ads4.png",
          id: 4
        }
      ]
    };
  }
});

Vue.component("navbar", {
  template: `
    <div class="navbar">
    

      <el-row>
        <el-col :span="12">
          <img src="images/logo.png" alt="SponsorLah Logo" height="30px" width="100px" class="logo">
        </el-col>
        <el-col :span="12">
          <div class="right">
            <el-button type="text" @click="redirect('postevent01.html')">Create An Event</el-button>
            <el-button type="text" @click="signUpFormVisible = true">Sign In</el-button>

            <el-dialog title="Sign Up" :visible.sync="signUpFormVisible">
              <el-form @submit.prevent="addProfiles">
                <el-form-item label="Name" :label-width="formLabelWidth">
                  <el-input v-model="newProfile.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Email Address" :label-width="formLabelWidth">
                  <el-input v-model="newProfile.email" placeholder="Your email address"></el-input>
                </el-form-item>
                <el-form-item label="Phone Number" :label-width="formLabelWidth">
                  <el-input v-model="newProfile.contact" placeholder="Your Phone Number"></el-input>
                </el-form-item>
                <el-form-item label="Password" :label-width="formLabelWidth">
                  <el-input v-model="newProfile.password" placeholder="Your Password"></el-input>
                </el-form-item>
                
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="signUpFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="signUpFormVisible = false" @click.native="signUp">Confirm</el-button>
              </span>
            </el-dialog>      
          </div>
        </el-col>
      </el-row>
    </div>
    
  `,

  data() {
    return {
      signUpFormVisible: false,

      formLabelWidth: "120px",

      newProfile: {
        name: "",
        email: "",
        contact: "",
        password: ""
      }
    };
  },

  firebase: {
    profiles: profilesRef
  },

  methods: {
    redirect(url) {
      window.location.href = url;
    },
    signUp() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .createUserWithPopup(provider)
        .then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          profilesRef.push(this.newProfile);
          this.newProfile.name = "";
          this.newProfile.email = "";
          this.newProfile.contact = "";
          this.newProfile.password = "";
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    }
  }
});

var profilesRef = db.ref("users/profiles");
var eventRef = db.ref("users/eventCreated");

// firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });

var app = new Vue({
  el: "#app",

  data() {
    return {

      test: '123123123',
      event: {
        title: '',
        type: '',
        location: '',
        startDate: '',
        endDate: '',
        demographics: '',
        logo: '',
        website: '',
        socialMedia: '',
        packages: 
        {
          title: '',
          description: '',
          items: '',
        },
        video: '',
        image: '',
        confirmedSponsors: '',
        description: '',
        reason: '',
        about: ''
      }
    };
  },

  firebase: {
    // simple syntax, bind as an array by default
    anArray: db.ref("url/to/my/array"),
    // can also bind to a query
    // anArray: db.ref('url/to/my/collection').limitToLast(25)
    // full syntax
    anObject: {
      source: db.ref("url/to/my/object"),
      // optionally bind as an object
      asObject: true,
      // optionally provide the cancelCallback
      cancelCallback: function() {},
      // this is called once the data has been retrieved from firebase
      readyCallback: function() {}
    }
  },

  methods: {
    createEvent() {
      eventRef.push(this.event);
      this.event.title = '';
      this.event.type = '';
      this.event.location = '';
      this.event.startDate = '';
      this.event.endDate = '';
      this.event.demographics = '';
      this.event.logo = '',
      this.event.website = '',
      this.event.socialMedia = '',
      this.event.packages = '',
      this.event.video = '',
      this.event.image = '',
      this.event.confirmedSponsors = '',
      this.event.description = '',
      this.event.reason = '',
      this.event.about = ''
    }
    // .createUserWithPopup(provider)
    // .then(function(result) {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   var token = result.credential.accessToken;
    //   // The signed-in user info.
    //   var user = result.user;
    //   profilesRef.push(this.newProfile);
    //   this.newProfile.name = "";
    //   this.newProfile.email = "";
    //   this.newProfile.contact = "";
    //   this.newProfile.password = "";
    // })
  }
});
