<template>
  <div :class="[`full-heart-icon-2 smart-layers-pointers`, className || ``]">
    <div class="full-heart-icon-1">
      <div class="overlap-group-14">
        <img
          class="path-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/613b274763ace1f43889828e/releases/613b27922bd67c89520ed42f/img/path-5@2x.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullHeartIcon",
  props: ["className"],
};
</script>

<style>
.full-heart-icon-2 {
  display: flex;
  height: 31px;
  left: 476px;
  opacity: 0.01;
  pointer-events: auto;
  position: absolute;
  top: 419px;
  transition: all 0.2s ease;
  width: 31px;
}

.full-heart-icon-2:hover {
  opacity: 1;
}

.full-heart-icon-1 {
  align-items: flex-end;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  min-width: 31px;
  padding: 3.4px 2.5px;
}

.overlap-group-14 {
  align-items: flex-start;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/613b274763ace1f43889828e/releases/613b27922bd67c89520ed42f/img/path-4@2x.png);
  background-size: 100% 100%;
  display: flex;
  height: 24px;
  min-width: 26px;
  padding: 1.8px 1.5px;
}

.path-3 {
  height: 20px;
  width: 23px;
}

.full-heart-icon-2.full-heart-icon-3 {
  left: unset;
  position: unset;
  top: unset;
}
</style>
