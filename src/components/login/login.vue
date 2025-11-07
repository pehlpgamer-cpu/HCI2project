<script setup>
import { RouterLink } from 'vue-router';
</script>
<!--COMPONENT-->
<template>
    <main>
        <h1>LOGIN</h1>
        <form>
            <input type="text" placeholder="username / email">
            <input type="password"></input> <button id="passwordVisiblity">unhide</button>
        </form>
        
        <RouterLink to="/RecordTrashbinData"><button>demo login</button></RouterLink>
    </main>
</template>

<style scoped>

</style>