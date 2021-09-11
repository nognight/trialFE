<template>
  <div class="empty-heart-icon-video-card">
    <div class="empty-heart-icon"><img class="shape" :src="src" /></div>
  </div>
</template>

<script>
export default {
  name: "EmptyHeartIconvideoCard",
  props: ["src"],
};
</script>

<style>
.empty-heart-icon-video-card {
  display: flex;
  height: 31px;
  left: 476px;
  position: absolute;
  top: 419px;
  width: 31px;
}

.empty-heart-icon {
  align-items: flex-end;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  min-width: 31px;
  padding: 3.4px 2.5px;
}

.shape {
  height: 24px;
  width: 26px;
}
</style>
