<template>
  <div class="px-3 py-3 pb-14 flex justify-center">
    <table class="w-5/6 text-md bg-gray-500 shadow-md rounded mb-4">
      <tbody class="ml-24 " >
        <tr class="border-b ">
          <th class="w-1/4 text-white text-base font-medium text-left text-xl p-3 px-5">
            Firstname
          </th>
          <th class="w-1/4 text-white text-base font-medium text-left text-xl p-3 px-5">
            Lastname
          </th>
          <th class="w-1/4 text-white text-base font-medium text-left text-xl p-3 px-5">
            Email
          </th>
          <th class="w-1/4 text-white text-base font-medium text-left text-xl p-3 px-5">
            Password
          </th>
          <th></th>
        </tr>
        <tr class="border-b hover:bg-orange-100 bg-gray-100 text-gray-500">
          <td class="p-3 px-5 text-s">
            {{form.fname}}
          </td>
          <td class="p-3 px-5 text-s">
            {{form.lname}}
          </td>
          <td class="p-3 px-5 text-s">
            {{form.email}}
          </td>
          <td class="p-3 px-5 text-s ">
            {{form.password}}
          </td>
          <td class="p-3 px-5 flex justify-between">
            <button
              type="button"
              class="mr-3 text-sm font-bold bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              @click="editForm"
              >
              
              Edit
            </button>
            <button
              type="button"
              class="text-sm font-bold bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              @click="deleteForm"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    form: Object 
  } ,
  methods: {
    deleteForm() {
      this.$emit("delete-form",this.form.id);
    },
    editForm(){
      this.$router.push("/edit/"+this.form.id);
      this.$emit("edit-form",this.form.id);
    }
  },
}
</script>
