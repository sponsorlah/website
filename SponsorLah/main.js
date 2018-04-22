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
            <img :src=item.link class="ads">
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
            <el-button type="text">Create An Event</el-button> <!-- @click="clickEvent('signup.html')" -->
            <el-button type="text">Sign Up</el-button>  <!-- @click="clickEvent('createEvent.html')"-->
          </div>
        </el-col>
      </el-row>
    </div>
  `,

  data() {
    return {
      user: {
        username: "",
        age: "",
        email: ""
      }
    };
  },
  method: {
    clickEvent(url) {
      window.location.href = url;
    }
  }
});

var app = new Vue({
  el: "#app",
  data() {
    return {

    };
  },
  methods: {
    
  }
});
