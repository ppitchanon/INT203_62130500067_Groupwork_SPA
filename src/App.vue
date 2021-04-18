<template>
  <div class = "text-bold p-10 flex justify-end " id="nav">
    <div class = "flex justify-between space-x-10 ">
      <router-link to="/" >Home</router-link> <p>|</p>
      <router-link to="/about" >About</router-link>
    </div>
  </div>
  <router-view/>
</template>


