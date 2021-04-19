<template>

  <div class = "text-bold flex justify-between bg-gray-600">
    <img src="@/assets/logo-web.svg" atl="logo" class="w-40 ml-12">
    <div class = "flex justify-between space-x-10 p-10">
      <router-link to="/" class="text-white">Home</router-link> <p class="text-white">|</p>
      <router-link to="/register" class="text-white">Register</router-link> <p class="text-white">|</p>
      <router-link to="/about" class="text-white">Info</router-link>
    </div>
  </div>
  <router-view/>
</template>


