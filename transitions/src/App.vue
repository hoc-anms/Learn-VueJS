<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center">
        <h3>Animations, Transitions</h3>
        <hr>
        <select v-model="typeAnimation" class="form-control mb-md-3">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <button class="btn btn-block btn-success" @click="show=!show">Show Notification</button>
        <br>
        <transition :name="typeAnimation">
          <div class="alert alert-success" v-show="show">This is something Notification</div>
        </transition>
        <transition name="slide">
          <div class="alert alert-warning" v-if="show">This is something Notification</div>
        </transition>
        <transition
          appear
          enter-class
          enter-active-class="animated bounceOutDown"
          leave-class
          leave-active-class="animated  hinge"
        >
          <div class="alert alert-danger" v-if="show">This is something Notification</div>
        </transition>

        <transition :name="typeAnimation" mode="out-in">
          <div
            class="alert alert-success"
            v-if="show"
            key="success"
          >This is something Notification from success</div>
          <div
            class="alert alert-danger"
            v-else
            key="danger"
          >This is something Notification from danger</div>
        </transition>
        <hr>
        <button class="btn btn-success btn-block" @click="status=!status">Add or Remove</button>
        <br>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <div style="width:300px; height:100px; background:lightblue;" v-if="status"></div>
        </transition>
        <hr>
        <button
          class="btn btn-block btn-primary"
          @click="selectComponents === 'app-success-alert'?
          selectComponents = 'app-danger-alert':
          selectComponents = 'app-success-alert'"
        >Submit (toggel 2 notification)</button>
        <br>
        <transition name="fade">
          <component :is="selectComponents"></component>
        </transition>

        <hr>

        <button class="btn btn-block btn-warning" @click="addItem">Add item</button>
        <br>
        <ul class="list-group">
          <transition-group name="slide">
            <li
              class="list-group-item"
              v-for="(number,index) in numbers"
              :key="number"
              style="cursor:pointer"
              @click="removeItem(index)"
            >{{number}}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from "./components/DangerAlert.vue";
import SuccessAlert from "./components/SuccessAlert.vue";
export default {
  data() {
    return {
      show: true,
      status: false,
      elementWidth: 100,
      alertAnimation: "fade",
      typeAnimation: "fade",
      selectComponents: "appSuccessAlert",
      numbers: [1, 2, 3, 4, 5, 6]
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("enter");
      let point = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + point * 10 + "px";
        point++;
        if (point > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
      done();
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let point = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - point * 10 + "px";
        point++;
        if (point > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    },
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    }
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  }
};
</script>

<style>
/* enter */

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}

/* leave */

.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
/*
  *Slide Transition effect
  *
  */

/* enter */
.slide-enter {
  /* transform: translateY(20px); */
  opacity: 0;
}
.slide-enter-active {
  transition: opacity 1s;
  animation: slide-in 1s ease-in forwards;
}

/* leave */
.slide-leave {
}
.slide-leave-active {
  opacity: 0;
  transition: opacity 1s;
  animation: slide-out 1s ease-out forwards;
}
.slide-move{
    transition: transform 1s;
}
/* key frame */
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
