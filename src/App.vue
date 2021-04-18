<template>
  <div class = "text-bold p-10 flex justify-end bg-gray-600" id="nav">
    <div class = "flex justify-between space-x-10 ">
      <router-link to="/" class="text-white">Home</router-link> <p class="text-white">|</p>
      <router-link to="/about" class="text-white">About</router-link>
    </div>
  </div>
  <router-view/>
</template>


