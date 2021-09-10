<template>
  <div class="bubble-1 smart-layers-pointers">
    <bubble12 :title="bubble12Props.title" />
    <div class="overlap-group2-4">
      <img
        class="path-6-copy-5"
        src="https://anima-uploads.s3.amazonaws.com/projects/613b274763ace1f43889828e/releases/613b27922bd67c89520ed42f/img/path-6-copy-5@2x.png"
      />
      <div class="oval-1-1 border-2px-white"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Bubble12 from "./Bubble12.vue";
export default {
  name: "Bubble1",
  components: {
    Bubble12,
  },
  props: ["bubble12Props"],
};
</script>

<style>
.bubble-1 {
  height: 97px;
  left: 37px;
  opacity: 0.01;
  pointer-events: auto;
  position: absolute;
  top: 58px;
  transition: all 0.2s ease;
  width: 46px;
}

.bubble-1:hover {
  opacity: 1;
}

.overlap-group2-4 {
  height: 57px;
  left: 18px;
  position: absolute;
  top: 41px;
  width: 11px;
}

.path-6-copy-5 {
  height: 51px;
  left: 4px;
  position: absolute;
  top: 6px;
  width: 2px;
}

.oval-1-1 {
  background-color: var(--denim);
  border-radius: 5.5px;
  height: 11px;
  left: 0;
  position: absolute;
  top: 0;
  width: 11px;
}
</style>
