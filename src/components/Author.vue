<template>
    <div class="author">
        <img v-bind:src='avatar' alt="avatar" @click="goToProfile">
        <div class="info">
            <span>{{ name }}</span>
            <a :href='goToProfile(username)' target="_blank">@{{ username }}</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            avatar: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            username: {
                type: String,
                required: true
            }
        },
        methods: {
            goToProfile(username){
                return `https://unsplash.com/@${username}`
            },
        }
    }
</script>

<style>
    .author {
        display: flex;
        padding: 10px 0 10px 10px;
    }
    .author img {
        margin: 0 10px 0 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;

    }
    .info {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        line-height: 14px;
    }
    .info span {
        font-weight: 700;
        color: #333333
    }
    .info a {
        font-weight: 300;
        color: #8D8D8D;
        text-decoration: none;
    }

    @media screen and (min-width: 480px) {
        .author {
            padding: 10px 0 10px 0;
        }
    }
    @media screen and (min-width: 768px) {
        .author {
            padding: 10px 0 10px 10px
        }
    }
</style>
