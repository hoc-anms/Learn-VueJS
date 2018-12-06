<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center">
        <h3>Animations, Transitions</h3>
        <hr>
        <button class="btn btn-block btn-success"
                @click="show=!show">Show Notification</button>
        <br>
        <transition name="fade">
        <div class="alert alert-success" 
                v-show="show">This is something Notification</div>
        </transition>
        <transition name="slide">
        <div class="alert alert-warning" 
                v-if="show">This is something Notification</div>
        </transition>
        <transition name="slide" appear="">
        <div class="alert alert-danger" 
                v-if="show">This is something Notification</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
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
