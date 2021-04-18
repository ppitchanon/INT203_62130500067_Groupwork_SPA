<template>
  <div class>
    <div
      class="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto"
    >
      <div class="flex items-center px-2 py-3">
        <form class="w-full max-w-lg" @submit.prevent="submitform">
          <div class="flex flex-wrap -mx-3 mb-8">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Firstname
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Firstname"
                v-model="fname"
              />
              <p class="text-gray-red text-xs italic" v-if="showfname" >Please Enter your Firstname</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Lastname"
                v-model="lname"
              />
              <p class="text-red-600 text-xs italic" v-if="showlname" >Please Enter your Lastname</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Example@mail.com"
                v-model="email"
              />
              <p class="text-red-600 text-xs italic" v-if="showemail" >Please Enter your Email</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="**********"
                v-model="password"
              />
              <p class="text-red-600 text-xs italic" v-if="showfpassword" >Please Enter your Password</p>
            </div>
          </div>
          <div
            class="flex flex-col-reverse sm:flex-row sm:justify-between items-center"
          >
            <div></div>
            <button
              type="submit"
              class="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
            <div></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url : "http://localhost:3000/information" ,
      fname: "",
      lname: "",
      email: "",
      password: "",
    }
  },
  methods: {
    submitform() {
      axios
        .post(this.url, {
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.form = [...this.form, response.data];
          return response.data;
        })
        .catch((error) => {
          console.log(error) 
        });
    },
  },
}
const axios = require("axios");
</script>


