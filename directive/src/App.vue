<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <!-- default -->
        <h1>Default/ Build in Directive</h1>
        <p v-text="'Something else'"></p>
        <p v-html="'<h4>This is heading directive</h4>'"></p>

        <!-- Custom -->
        <h1>Custom in Directive</h1>
        <p v-custom:background.delayed="'yellow'"> Color style by directive global</p>
        <p v-local-custom:background.delayed.blink="{mainColor:'yellow',secondColor:'green',delay:500}"> Color style by directive local</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-custom": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor =  binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg === "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor ;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
