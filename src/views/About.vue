<template>
  <div class="text-gray-900 bg-white">
    <div class="px-40 py-10 flex">
      <h1 class="text-4xl font-bold text-gray-700 ">
        Information
      </h1>
    </div>
    <info v-for = "data in form" :key="data.id" :form="data" @delete-form="deleteData"></info>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url : "http://localhost:3000/information" ,
      form : []
    }
  },
  methods: {
    deleteData(id) {
      axios
        .delete(`${this.url}/${id}`)
        .then((response) => {
          return response.data;
        })
        .then(() => {
          this.form = this.form.filter((n) => n.id !== id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getNoteResult() {
      axios
        .get(this.url)
        .then((response) => {
          this.form = response.data;
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.form = this.getNoteResult();
  },
}
const axios = require("axios");
</script>
