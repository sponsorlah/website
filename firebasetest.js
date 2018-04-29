var namesRef = db.ref("names/");
new Vue({
  el: "#app",

  firebase: {
    names: namesRef
  },

  data() {
    return {
      name: ""
    };
  },

  methods: {
    addName() {
      namesRef.push({ name: this.name, edit: false });
    },

    removeName(key) {
      namesRef.child(key).remove();
    },

    setEditName(key) {
      namesRef.child(key).update({ edit: true });
    },

    cancelEdit(key) {
      namesRef.child(key).update({ edit: false });
    },

    saveEdit(person) {
      const key = person[".key"];
      namesRef.child(key).set({ name: person.name, edit: false });
    }

    // getData: function(){
    //   db.ref('data1/entry01').on('value', (data)=>{
    //     this.data1 = data.val();
    //   });
    // }
  }
  // mounted(){
  //   this.getData();
  // }
});
