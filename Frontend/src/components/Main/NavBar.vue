<template>
  <div class="navbar">
    <router-link to="/" class="nav-img">
      <img class="nav-logo" src="../../assets/logo.png">
    </router-link>
    <div class="nav-menu">
      <router-link to="/datalab" class="nav-menu-item">데이터랩</router-link> 
      <router-link to="/game" class="nav-menu-item">더 많이 더 적게</router-link>
      <router-link to="/DYKC" class="nav-menu-item">명예의 전당</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .nav-img{
    margin: 0;
  }
  .navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
    position: fixed;
  }
  .nav-logo {
    border: 0;
    width: 5vw;
    height: auto;
    margin: 10px 0 0 10px;
  }
  
  .nav-menu {
    /* display: flex; */
    font-size: 2em;
    margin: 0 30px;
  }
  
  .nav-menu-item {
    margin: 0 10px;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    padding: 6px 12px;
  }
  
  .nav-menu-item::after {
    content:"";
    position: absolute;
    bottom: 0;
    left:50%;
    transform: translateX(-50%);
    width: 0;
    height: 4px;
    background: #f1c40f;
    transition: all .5s ease-out;
  }
  
  .nav-menu-item:hover::after {
    width: 80%;
  }
  </style>