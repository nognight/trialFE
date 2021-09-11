<template>
  <div :class="[`trainer-1-desktop`, className || ``]">
    <div class="avatar-1" :style="{ 'background-image': 'url(' + avatar1 + ')' }"></div>
    <div class="overlap-group-12">
      <div class="overlap-group-13">
        <div class="empty-checkbox border-1px-te-papa-green-2"></div>
        <div class="name-2 lato-normal-black-14px">{{ name }}</div>
        <img
          class="empty-checkbox-1 smart-layers-pointers"
          src="https://anima-uploads.s3.amazonaws.com/projects/613b274763ace1f43889828e/releases/613b27922bd67c89520ed42f/img/empty-checkbox-3@3x.png"
        />
      </div>
      <div class="kickboxing lato-normal-black-13px">{{ kickboxing }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trainer1Desktop",
  props: ["avatar1", "name", "kickboxing", "className"],
};
</script>

<style>
.trainer-1-desktop {
  align-items: center;
  display: flex;
  height: 40px;
  margin-top: 23px;
  min-width: 236px;
  padding: 1px 0;
}

.avatar-1 {
  background-size: 100% 100%;
  height: 35px;
  margin-top: 1px;
  width: 35px;
}

.overlap-group-12 {
  align-self: flex-end;
  height: 37px;
  margin-left: 15px;
  position: relative;
  width: 186px;
}

.overlap-group-13 {
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 186px;
}

.empty-checkbox {
  border-radius: 5px;
  height: 20px;
  left: 166px;
  position: absolute;
  top: 8px;
  width: 20px;
}

.name-2 {
  left: 0;
  letter-spacing: 0;
  line-height: 18px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 171px;
}

.empty-checkbox-1 {
  height: 20px;
  left: 166px;
  pointer-events: auto;
  position: absolute;
  top: 8px;
  transition: all 0.2s ease;
  width: 20px;
}

.empty-checkbox-1:hover {
  opacity: 1;
}

.kickboxing {
  left: 0;
  letter-spacing: 0;
  line-height: 18px;
  opacity: 0.4;
  position: absolute;
  top: 19px;
  white-space: nowrap;
  width: 160px;
}

.trainer-1-desktop.trainer-2-desktop {
  margin-top: 16px;
}
</style>
