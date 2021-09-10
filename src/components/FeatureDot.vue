<template>
  <div :class="[`feature-dot-3`, className || ``]">
    <div class="overlap-group-10">
      <div class="ellipse-2">
        <lottie-player
          src="https://anima-uploads.s3.amazonaws.com/projects/602e7a88c0cac64b2564ee73/files/lf30-editor-oc19syzo.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div class="ellipse-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureDot",
  props: ["className"],
};
</script>

<style>
.feature-dot-3 {
  align-items: flex-start;
  display: flex;
  height: 43px;
  justify-content: center;
  left: 3px;
  min-width: 43px;
  position: absolute;
  top: 0;
}

.overlap-group-10 {
  height: 44px;
  margin-top: -0.25px;
  position: relative;
  width: 44px;
}

.ellipse-2 {
  height: 44px;
  left: 0;
  position: absolute;
  top: 0;
  width: 44px;
}

.ellipse-2 video {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.ellipse-2 img {
  object-fit: cover;
}

.ellipse-1 {
  background-color: var(--emerald);
  border-radius: 5.5px;
  height: 11px;
  left: 16px;
  position: absolute;
  top: 16px;
  width: 11px;
}

.feature-dot-3.feature-dot-1 {
  align-items: flex-start;
  display: flex;
  height: 43px;
  justify-content: center;
  left: 112px;
  min-width: 43px;
  position: absolute;
  top: 0;
}

.feature-dot-3.feature-dot-1 .overlap-group-10,
.feature-dot-3.feature-dot-1 .overlap-group-11 {
  height: 43px;
  margin-top: unset;
}

.feature-dot-3.feature-dot-1 .ellipse-2,
.feature-dot-3.feature-dot-1 .ellipse-2-1 {
  height: 43px;
}

.feature-dot-3.feature-dot-2 {
  align-items: flex-start;
  display: flex;
  height: 43px;
  justify-content: center;
  left: 0;
  min-width: 43px;
  position: absolute;
  top: 0;
}
</style>
