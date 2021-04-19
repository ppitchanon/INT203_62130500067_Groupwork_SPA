<template>
  <div class>
    <div
      class="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto"
    >
      <div class="flex items-center px-2 py-3">
        <form class="w-full max-w-lg" @submit="submitform">
          <div class="flex flex-wrap -mx-3 mb-8">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Firstname
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="John"
                v-model="fname"
              />
              <p class="text-gray-red text-xs italic" v-if="showfname">
                Please Enter your Firstname
              </p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Lastname
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Smit"
                v-model="lname"
              />
              <p class="text-red-600 text-xs italic" v-if="showlname">
                Please Enter your Lastname
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Example@mail.com"
                v-model="email"
              />
              <p class="text-red-600 text-xs italic" v-if="showemail">
                Please Enter your Email
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="password"
                placeholder="**********"
                v-model="password"
              />
              <p class="text-red-600 text-xs italic" v-if="showfpassword">
                Please Enter your Password
              </p>
            </div>
          </div>
          <div
            class="flex flex-col-reverse sm:flex-row sm:justify-between items-center"
          >
            <div></div>
            <button
              type="submit"
              class="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-indigo-600 rounded hover:bg-indigo-500"
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
      url: "http://localhost:3000/information",
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submitform() {
      if (this.$route.params.id != undefined) {
        axios
          .put(this.url + "/" + this.$route.params.id, {
            fname: this.fname,
            lname: this.lname,
            email: this.email,
            password: this.password,
          })
          .then(() => {
            // this.$router.push("/About");

          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .post(this.url, {
            fname: this.fname,
            lname: this.lname,
            email: this.email,
            password: this.password,
          })
          .then(() => {
            // this.$router.push("/about");
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.$router.push("/about");
    },
  },
  mounted() {
    this.$route.params.id;
    console.log(this.$route.params.id);
    if (this.$route.params.id != undefined) {
      axios
        .get(this.url + "/" + this.$route.params.id)
        .then((response) => {
          this.fname = response.data.fname;
          this.lname = response.data.lname;
          this.email = response.data.email;
          this.password = response.data.password;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
const axios = require("axios");
</script>
