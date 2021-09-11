<template>
  <div class="bubble-3">
    <div class="overlap-group1-6">
      <div class="overlap-group-9">
        <div class="rectangle-3"></div>
        <img
          class="triangle-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/613b274763ace1f43889828e/releases/613b27922bd67c89520ed42f/img/triangle@2x.png"
        />
      </div>
      <div class="title-12 lato-normal-white-12px">{{ title }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Bubble22",
  props: ["title"],
};
</script>

<style>
.bubble-3 {
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

.overlap-group1-6 {
  height: 32px;
  margin-top: -1px;
  position: relative;
  width: 48px;
}

.overlap-group-9 {
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 48px;
}

.rectangle-3 {
  background-color: var(--denim);
  border-radius: 5px;
  height: 27px;
  left: 0;
  position: absolute;
  top: 0;
  width: 48px;
}

.triangle-1 {
  height: 9px;
  left: 15px;
  position: absolute;
  top: 23px;
  width: 18px;
}

.title-12 {
  left: 11px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: 1px;
  white-space: nowrap;
}
</style>
