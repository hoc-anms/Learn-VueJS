<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome Developer! I'm {{name}} and {{age}} years old</p>
        <button @click="changeName">Change Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :customName ="name" @nameWasReset="name=$event"  :resetNameFn="resetName" :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageEdited="age=$event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';


    export default {
        data: function(){
            return {
                name: 'Sky Albert',
                age: 18,
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods:{
            changeName(){
                this.name="anms";
            },
            resetName(){
                this.name='Sky Albert';
            }
        },
        watch:{

        },
        computed:{

        },
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>