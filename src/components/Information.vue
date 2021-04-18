<template>
  <div class="px-3 py-4 flex justify-center">
    <table class="w-full text-md bg-white shadow-md rounded mb-4">
      <tbody class="ml-24">
        <tr class="border-b ">
          <th class="text-gray-700 text-xs font-bold text-left p-3 px-5">
            Firstname
          </th>
          <th class="text-gray-700 text-xs font-bold text-left p-3 px-5">
            Lastname
          </th>
          <th class="text-gray-700 text-xs font-bold text-left p-3 px-5">
            Email
          </th>
          <th class="text-gray-700 text-xs font-bold text-left p-3 px-5">
            Password
          </th>
          <th></th>
        </tr>
        <tr class="border-b hover:bg-orange-100 bg-gray-100">
          <td class="p-3 px-5 text-s">
            {{form.fname}}
          </td>
          <td class="p-3 px-5 text-s">
            {{form.lname}}
          </td>
          <td class="p-3 px-5 text-s">
            {{form.email}}
          </td>
          <td class="p-3 px-5 text-s">
            {{form.password}}
          </td>
          <td class="p-3 px-5 flex justify-center">
            <button
              type="button"
              class="mr-3 text-sm font-bold bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              Edit
            </button>
            <button
              type="button"
              class="text-sm font-bold bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
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
  }
  
}
</script>
