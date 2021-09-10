<template>
  <div class="bubble-3-1 smart-layers-pointers">
    <bubble12 :title="bubble12Props.title" />
    <div class="overlap-group4-2">
      <img
        class="path-6-copy-3"
        src="https://anima-uploads.s3.amazonaws.com/projects/613b274763ace1f43889828e/releases/613b27922bd67c89520ed42f/img/path-6-copy-5@2x.png"
      />
      <div class="oval-3 border-2px-white"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Bubble12 from "./Bubble12.vue";
export default {
  name: "Bubble3",
  components: {
    Bubble12,
  },
  props: ["bubble12Props"],
};
</script>

<style>
.bubble-3-1 {
  height: 94px;
  left: 173px;
  opacity: 0.01;
  pointer-events: auto;
  position: absolute;
  top: 61px;
  transition: all 0.2s ease;
  width: 46px;
}

.bubble-3-1:hover {
  opacity: 1;
}

.overlap-group4-2 {
  height: 53px;
  left: 18px;
  position: absolute;
  top: 41px;
  width: 11px;
}

.path-6-copy-3 {
  height: 51px;
  left: 4px;
  position: absolute;
  top: 2px;
  width: 2px;
}

.oval-3 {
  background-color: var(--denim);
  border-radius: 5.5px;
  height: 11px;
  left: 0;
  position: absolute;
  top: 0;
  width: 11px;
}
</style>
