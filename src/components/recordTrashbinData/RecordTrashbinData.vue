<script setup>
import { RouterLink } from 'vue-router';
</script>
<!--COMPONENT-->
<template>
    <nav>

    </nav>
    <main>
        <form>
            <label>Trashbin Id</label>
            <div>
                <input type="number" placeholder="trashbin id">
                <button @click="">Scan QR</button>
            </div>
            <label>Capacity Status</label>
            <select>
                <option>N/A</option>
                <option>Overflowing</option>
                <option>Full</option>
                <option>Three Quarter</option>
                <option>Half</option>
                <option>Quarter</option>
                <option>Empty</option>
            </select>
            <label>Attachment</label>
            <input type="file">
            <button type="submit">Submit</button>
            
        </form>
        

    </main>

</template>
<style scoped>
form{
    display: flex;
    flex-direction: column;
    row-gap: 3px;
    text-align: start;
    border: 2px solid green;
    background-color: rgba(255, 255, 255, 0.77);
    padding: 6px;
}


</style>