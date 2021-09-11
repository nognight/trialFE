<template>
  <div class="bubble-2 smart-layers-pointers">
    <bubble22 :title="bubble22Props.title" />
    <div class="overlap-group3-2">
      <img
        class="path-6-copy-4"
        src="https://anima-uploads.s3.amazonaws.com/projects/613b274763ace1f43889828e/releases/613b27922bd67c89520ed42f/img/path-6-copy-4@2x.png"
      />
      <div class="oval-2 border-2px-white"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Bubble22 from "./Bubble22.vue";
export default {
  name: "Bubble2",
  components: {
    Bubble22,
  },
  props: ["bubble22Props"],
};
</script>

<style>
.bubble-2 {
  height: 70px;
  left: 103px;
  opacity: 0.01;
  pointer-events: auto;
  position: absolute;
  top: 85px;
  transition: all 0.2s ease;
  width: 46px;
}

.bubble-2:hover {
  opacity: 1;
}

.overlap-group3-2 {
  height: 30px;
  left: 18px;
  position: absolute;
  top: 41px;
  width: 11px;
}

.path-6-copy-4 {
  height: 24px;
  left: 5px;
  position: absolute;
  top: 6px;
  width: 2px;
}

.oval-2 {
  background-color: var(--denim);
  border-radius: 5.5px;
  height: 11px;
  left: 0;
  position: absolute;
  top: 0;
  width: 11px;
}
</style>
