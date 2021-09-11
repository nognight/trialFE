<template>
  <div class="group-6 smart-layers-pointers">
    <bubble22 :title="bubble22Props.title" />
    <div class="overlap-group7-1">
      <img
        class="path-6"
        src="https://anima-uploads.s3.amazonaws.com/projects/613b274763ace1f43889828e/releases/613b27922bd67c89520ed42f/img/path-6-1@2x.png"
      />
      <div class="oval-6 border-2px-white"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Bubble22 from "./Bubble22.vue";
export default {
  name: "Group6",
  components: {
    Bubble22,
  },
  props: ["bubble22Props"],
};
</script>

<style>
.group-6 {
  height: 95px;
  left: 444px;
  opacity: 0.01;
  pointer-events: auto;
  position: absolute;
  top: 59px;
  transition: all 0.2s ease;
  width: 46px;
}

.group-6:hover {
  opacity: 1;
}

.overlap-group7-1 {
  height: 54px;
  left: 18px;
  position: absolute;
  top: 41px;
  width: 11px;
}

.path-6 {
  height: 51px;
  left: 4px;
  position: absolute;
  top: 3px;
  width: 2px;
}

.oval-6 {
  background-color: var(--denim);
  border-radius: 5.5px;
  height: 11px;
  left: 0;
  position: absolute;
  top: 0;
  width: 11px;
}
</style>
