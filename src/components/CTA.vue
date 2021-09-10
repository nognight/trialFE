<template>
  <div class="cta">
    <div class="overlap-group-15"><div class="sign-up lato-normal-white-16px">Send Invite</div></div>
  </div>
</template>

<script>
export default {
  name: "CTA",
};
</script>

<style>
.cta {
  align-items: flex-start;
  display: flex;
  height: 44px;
  justify-content: center;
  margin-top: 33px;
  min-width: 111px;
}

.overlap-group-15 {
  align-items: center;
  background-color: var(--te-papa-green);
  border-radius: 5px;
  display: flex;
  height: 46px;
  justify-content: flex-end;
  margin-top: -1px;
  min-width: 113px;
  padding: 0 15.5px;
}

.sign-up {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 24px;
  min-width: 80px;
  text-align: center;
  white-space: nowrap;
}
</style>
