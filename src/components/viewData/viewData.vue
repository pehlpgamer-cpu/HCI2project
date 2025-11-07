<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';


const trasbins = ref([]);
const DisplayData = ref('');

async function GetAllTrashins() {
const options = {method: 'GET', url: 'https://localhost:7123/api/Trashbin/'};
try {
    const { data } = await axios.request(options);
    console.log(data);
    trasbins.value = data;
    } catch (error) {
    console.error(error);
    }
}

onMounted(() => {
  console.log(`the component is now mounted.`);
  GetAllTrashins();
})
</script>
<!--COMPONENT-->

<!-- trasbins[1].trashbinId -->
<template>
    <h1>VIEW DATA</h1>
    <table style="">
        <thead>
            <tr>
                <th>ID</th>
                <th>Container Color</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="value in trasbins">
                <th>{{ value.trashbinId }}</th>
                <th>{{ value.containerColor }}</th>
            </tr>
        </tbody>
    </table>
</template>
<style scoped>

</style>