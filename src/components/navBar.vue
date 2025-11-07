<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <main>
        <RouterLink to="/recordTrashbinData"><button>Record Data</button></RouterLink>
        <RouterLink to="/viewData"><button>View Data</button></RouterLink>
        <RouterLink to="/account"><button>Account</button></RouterLink>
    </main>
</template>

<style scoped>
main{
    display: flex;
    justify-content: center;
}

button {
    padding: 6px;
    margin: 4px;
    flex-grow: 1;
}
</style>