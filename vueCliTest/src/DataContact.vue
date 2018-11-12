<template>
    <div>
       <p>My address: {{address}}</p>
        <hr>
        <button @click="changePhone">Show My Phone</button>
    </div>
</template>

<script>
// xu ly data
export default {
    data: function(){
        return {
            address:"75 Ho tung mau",
        }
    },
    methods:{
        changePhone(){
            this.address="0984125373";
        }
    }
}

</script>

<style>

</style>
  