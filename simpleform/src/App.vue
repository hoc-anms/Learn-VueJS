<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                :value="userData.email"
                                @input="userData.email=$event.target.value">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"
                            ></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendEmail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                     v-model="sendEmail"> Send Infomail
                        </label>
                         <label for="cutEmail">
                            <input
                                    type="checkbox"
                                    id="cutEmail"
                                    value="cutEmail"
                                     v-model="sendEmail"> Cut Email
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"> Female

                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectPriorities"
                           >
                        <option  v-for="item in priorities" :key="item" >{{item}}</option>
                    </select>
                </div>
            </div>
             <div class="row">
                <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 from-group">
                    <label for="switched">Switched:</label>
                    <app-custom
                        v-model="dataSwitch"></app-custom>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submited">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmit">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail:{{userData.email}}</p>
                        <p>Password:{{userData.password}}</p>
                        <p>Age:{{userData.age}}</p>
                        <p style="white-space: pre">Message:{{message}}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="(item,index) in sendEmail" :key="index">{{item}}</li>
                        </ul>
                        <p>Gender:{{gender}}</p>
                        <p>Priority:{{selectPriorities}}</p>
                        <p>Switched:{{dataSwitch}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Custom from './components/CustomControl.vue'
export default {
  data() {
    return {
      userData: {
        email: "",
        password: 0,
        age:12,
      },
      message:'Please type something..',
      sendEmail:[

      ],
      gender: 'Male',
      priorities:['High','Medium','Low'],
      selectPriorities:'Low',
      dataSwitch: true,
      isSubmit:false,
    };
  },
  components:{
    appCustom:Custom,
  },
  methods:{
    submited(){
      this.isSubmit=true;
    }
  },
};
</script>

<style>
</style>