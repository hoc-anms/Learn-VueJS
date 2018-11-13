<template>
    <div class="component">
        <h3>Information User Details</h3>
        <p>List Details</p>
        <p>My name: {{reverseName()}}</p>
        <p>My age {{userAge}}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetNameFn() ">Reset name call back</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js';

    //props dung de chuyen du lieu tu component cha sang cac component con, 
    //cac component con gui thong bao toi component cha thong qua cac event
    export default {
        props:{
            customName:{
                type: Object,
                default: "Sky Albert",
               
            },
             resetNameFn:Function,
             userAge: Number,
        }
        ,
        methods:{
            reverseName(){
                return this.customName.split("").reverse().join("");
            },
            resetName(){
                this.customName='Sky Albert';
                this.$emit('nameWasReset',this.customName);
            }
        },
        watch:{

        },
        computed:{

        },
        created() {
            eventBus.$on('ageEdited',(age)=>{
                this.userAge=age;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>