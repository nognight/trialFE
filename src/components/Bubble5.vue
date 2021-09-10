<template>
  <div class="bubble-5 smart-layers-pointers">
    <bubble12 :title="bubble12Props.title" />
    <div class="overlap-group6-1">
      <img
        class="path-6-copy"
        src="https://anima-uploads.s3.amazonaws.com/projects/613b274763ace1f43889828e/releases/613b27922bd67c89520ed42f/img/path-6-copy@2x.png"
      />
      <div class="oval-5 border-2px-white"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Bubble12 from "./Bubble12.vue";
export default {
  name: "Bubble5",
  components: {
    Bubble12,
  },
  props: ["bubble12Props"],
};
</script>

<style>
.bubble-5 {
  height: 146px;
  left: 309px;
  opacity: 0.01;
  pointer-events: auto;
  position: absolute;
  top: 9px;
  transition: all 0.2s ease;
  width: 46px;
}

.bubble-5:hover {
  opacity: 1;
}

.overlap-group6-1 {
  height: 106px;
  left: 18px;
  position: absolute;
  top: 41px;
  width: 11px;
}

.path-6-copy {
  height: 100px;
  left: 4px;
  position: absolute;
  top: 6px;
  width: 2px;
}

.oval-5 {
  background-color: var(--denim);
  border-radius: 5.5px;
  height: 11px;
  left: 0;
  position: absolute;
  top: 0;
  width: 11px;
}
</style>
