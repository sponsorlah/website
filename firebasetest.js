var config = {
  apiKey: "AIzaSyCjrZ2sbCKlOEhru94U4_IFaKzI9xKTEmM",
  authDomain: "sponsorlah-c5bf1.firebaseapp.com",
  databaseURL: "https://sponsorlah-c5bf1.firebaseio.com",
  projectId: "sponsorlah-c5bf1",
  storageBucket: "sponsorlah-c5bf1.appspot.com",
  messagingSenderId: "474296941108"
};
firebase.initializeApp(config);
var db = firebase.database();

new Vue({
  el: '#test1',
  data() {
    return {
        data1: ''
    }
  },
  methods:{
    getData: function(){
      db.ref('data1/entry01').on('value', (data)=>{
        this.data1 = data.val();
      });
    }
  },
  mounted(){
    this.getData();
  }
})
