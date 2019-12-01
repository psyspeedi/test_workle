<template>
    <div>
        <Loading v-if="loading"/>
        <h1 class="error" v-else-if="error">ОШИБКА ЗАГРУЗКИ ДАННЫХ :-(</h1>
        <div class="app-wrap" v-else>
            <PhotoCard
                    v-for="photoCard of photoCardArray"
                    :photoCard="photoCard"
            />
            <Pagination
                    :totalPages="photoPagesTotal"
            />
        </div>
    </div>
</template>

<script>
    import Loading from '@/components/Loading';
    import PhotoCard from '@/views/PhotoCard';
    import Pagination from '@/views/Pagination';
    import unsplash from "@/unsplash";

    export default {
        name: 'app',
        components: {
            PhotoCard,
            Pagination,
            Loading
        },

        data() {
            return {
                photoCardArray: [],
                photoPagesTotal: 0,
                currentPage: Number(this.$route.params.page),
                perPage: 10,
                loading: true,
                error: false,
                baseURL: 'https://api.unsplash.com/photos',
                client_id: unsplash.accessKey
            }
        },
        watch: {
            '$route': 'fetchPhotos'
        },
        methods: {
            fetchPhotos() {
                this.loading = true;
                fetch(`${this.baseURL}/?page=${this.$route.params.page}&per_page=${this.perPage}&client_id=${this.client_id}`)
                    .then(response => response.json())
                    .then(json => {
                        this.photoCardArray = json;
                        this.loading = false;
                    })
                    .catch(err => {
                        new Error(err);
                        console.log(err);
                        this.loading = false;
                        this.error = true;
                    })
            },

            fetchTotalPages() {
                fetch(`${this.baseURL}/?client_id=${this.client_id}`)
                    .then(response => this.photoPagesTotal = Math.ceil(response.headers.get('X-total') / this.perPage));
            },
        },
        mounted() {
            this.fetchTotalPages();
            this.fetchPhotos()
        }
    }
</script>

<style>

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .app-wrap {
        margin: 0 0 55px 0;
    }

    .error {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    @media screen and (min-width: 768px) {
        .app-wrap {
            columns: 2;
            column-gap: 20px;
        }
    }
</style>
