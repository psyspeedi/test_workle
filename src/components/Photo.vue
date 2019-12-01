<template>
    <img :src='photo' alt="photo">
</template>
<script>
    export default {
        props: {
            photo: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
    }
    @media screen and (min-width: 768px) {
        img {
            min-width: 320px;
            max-width: 320px;
            width: 100%;
        }
    }
</style>