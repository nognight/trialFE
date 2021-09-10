<template>
  <div class="bubble-4 smart-layers-pointers">
    <bubble12 :title="bubble12Props.title" />
    <div class="overlap-group5-2">
      <img
        class="path-6-copy-2"
        src="https://anima-uploads.s3.amazonaws.com/projects/613b274763ace1f43889828e/releases/613b27922bd67c89520ed42f/img/path-6-copy-2@2x.png"
      />
      <div class="oval-4 border-2px-white"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Bubble12 from "./Bubble12.vue";
export default {
  name: "Bubble4",
  components: {
    Bubble12,
  },
  props: ["bubble12Props"],
};
</script>

<style>
.bubble-4 {
  height: 120px;
  left: 240px;
  opacity: 0.01;
  pointer-events: auto;
  position: absolute;
  top: 34px;
  transition: all 0.2s ease;
  width: 46px;
}

.bubble-4:hover {
  opacity: 1;
}

.overlap-group5-2 {
  height: 80px;
  left: 18px;
  position: absolute;
  top: 41px;
  width: 11px;
}

.path-6-copy-2 {
  height: 74px;
  left: 4px;
  position: absolute;
  top: 6px;
  width: 2px;
}

.oval-4 {
  background-color: var(--denim);
  border-radius: 5.5px;
  height: 11px;
  left: 0;
  position: absolute;
  top: 0;
  width: 11px;
}
</style>
