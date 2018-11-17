<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h3>Filter & mixins</h3>
        
        <p>{{text|toLowerCase|to-uppercase}}</p>
      </div>
    </div>
    <div class="row">
       <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
         <h3>Filter Product</h3>
         <button class="btn btn-block btn-success" @click="products.push('Mixin')">Add new item</button>
         <input type="text" class="form-control mb-md-3 mt-md-3" placeholder="type filter" v-model="filterProduct">
         <div class="card">
           <div class="card-body">
             <ul>
               <li v-for="(product,index) in filteredProducts " :key="index">{{product}}</li>
             </ul>
           </div>
         </div>
       </div>
    </div>
   <app-list></app-list>
  </div>
</template>

<script>
import {productMixin} from './productMixin.js';

import List from './components/List.vue';

export default {
  created(){
    console.log("create!"); 
  },

  mixins: [productMixin],

  data() {
    return {
      text: "Hi All!",
      
    };
  },
  filters: {
    toLowerCase(text) {
      return text.toLowerCase();
    }
  },
  components:{
    appList:List,

  }
};
</script>

<style>
</style>
