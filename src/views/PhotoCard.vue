<template>
    <div class="photo-card">
        <div>
            <Author
                    v-bind:avatar="photoCard.user.profile_image.medium"
                    v-bind:name="photoCard.user.name"
                    v-bind:username="photoCard.user.username"
            />
            <Photo
                    v-bind:photo="photoCard.urls.regular"
            />
            <ViewsCount
                    v-bind:likes="photoCard.likes"
            />
        </div>
    </div>
</template>

<script>
    import Author from '@/components/Author'
    import Photo from '@/components/Photo'
    import ViewsCount from '@/components/ViewsCount'
    export default {
        components: {
            Author,
            Photo,
            ViewsCount
        },
        props: {
            photoCard: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style>
    .photo-card {
        min-width: 320px;
        max-width: 440px;
        width: 100%;
        overflow: hidden;
        break-inside: avoid;
    }

    @media screen and (min-width: 768px) {
        .photo-card {
            min-width: 320px;
            max-width: 320px;
            width: 100%;
        }
    }

</style>