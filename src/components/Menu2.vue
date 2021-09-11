<template>
  <div class="menu">
    <div class="oval-1-2"></div>
    <div class="oval-7"></div>
    <div class="oval-7"></div>
  </div>
</template>

<script>
export default {
  name: "Menu2",
};
</script>

<style>
.menu {
  align-items: flex-start;
  display: flex;
  height: 4px;
  justify-content: center;
  left: 223px;
  min-width: 20px;
  position: absolute;
  top: 15px;
}

.oval-1-2 {
  background-color: var(--white);
  border-radius: 3px;
  height: 6px;
  margin-top: -1px;
  width: 6px;
}

.oval-7 {
  background-color: var(--white);
  border-radius: 3px;
  height: 6px;
  margin-left: 2px;
  margin-top: -1px;
  width: 6px;
}
</style>
