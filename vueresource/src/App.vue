<template>
  <div class="container">
    <div class="row">
       <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-left">
         <h1 class="text-center">Vue Resource</h1>
         <div class="form-group">
           <input class="form-control"
              type="text"
              v-model="user.username" placeholder="Input username">
         </div>
          <div class="form-group">
           <input class="form-control"
              type="text"
              v-model="user.email" placeholder="Input email">
         </div>
         <button class="btn btn-block btn-success"
                
            @click="submit">Submit</button>
         <hr>
         <br>
         <button
            class="btn btn-block btn-warning" @click="getAllUser">Get All Data</button>
          <br>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="user in users" :key="user"
              >{{user.username}}: {{user.email}}</li>
          </ul>


  
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user:{
        username:'',
        email:''
      },
      users:[]
    }
  },
  methods:{
    submit(){
      // console.log(this.user);
      this.$http.post('',this.user)
          .then(response=>{
            console.log(response);
          }, error=>{
            console.log(error);
          })
    },
    getAllUser(){
      this.$http.get('')
          .then(response=>{
            return response.json();
          })
          .then(data=>{
              const newArr = []
              for(let key in data){
                newArr.push(data[key])
              }
              this.users=newArr;
          })
    }
  }
}
</script>

<style >

</style>
