<template>
  <div class="bubble">
    <div class="overlap-group1-5">
      <div class="overlap-group-8">
        <div class="rectangle"></div>
        <img
          class="triangle"
          src="https://anima-uploads.s3.amazonaws.com/projects/613b274763ace1f43889828e/releases/613b27922bd67c89520ed42f/img/triangle@2x.png"
        />
      </div>
      <div class="title-11 lato-normal-white-12px">{{ title }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Bubble12",
  props: ["title"],
};
</script>

<style>
.bubble {
  align-items: flex-start;
  display: flex;
  height: 31px;
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 46px;
}

.overlap-group1-5 {
  height: 32px;
  margin-top: -1px;
  position: relative;
  width: 48px;
}

.overlap-group-8 {
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 48px;
}

.rectangle {
  background-color: var(--denim);
  border-radius: 5px;
  height: 27px;
  left: 0;
  position: absolute;
  top: 0;
  width: 48px;
}

.triangle {
  height: 9px;
  left: 15px;
  position: absolute;
  top: 23px;
  width: 18px;
}

.title-11 {
  left: 8px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: 1px;
  white-space: nowrap;
}
</style>
