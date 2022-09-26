<template>
  <div class="navbar">
    <img class="nav-logo" src="../../assets/logo.png">
    <div class="nav-menu">
      <div class="nav-menu-item">데이터랩</div>
      <div class="nav-menu-item">명예의 전당</div>
      <div class="nav-menu-item">더 많이 더 적게</div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  
}

.nav-logo {
  width: 5vw;
  height: auto;
  margin: 10px 0 0 10px;
}

.nav-menu {
  display: flex;
  font-size: 2em;
  margin: 0 30px;
}

.nav-menu-item {
  margin: 0 10px;
}
</style>