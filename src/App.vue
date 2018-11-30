<template>
  <div id="main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body.modal-open {
  position: fixed;
  width: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  padding: 10px;
  box-sizing: border-box;

  background: #f2f2f2;
}
.clearfix:after {
  clear: both;
  content: " ";
  display: block;
  font-size: 0;
  height: 0;
  visibility: hidden;
}
.clearfix {
  zoom: 1;
}
* {
  margin: 0;
  padding: 0;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
