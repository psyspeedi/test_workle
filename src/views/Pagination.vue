<template>
    <ul class="pagination" v-if="pages.length">

        <li v-if="hasFirst()">
            <router-link :to="{ name: 'page', params: { page: 1 } }">1</router-link>
        </li>

        <li v-if="hasFirst()">
            <router-link :to="{ name: 'page', params: { page: middleFirst } }">...</router-link>
        </li>

        <li v-for="page in pages">
            <router-link :to="{ name: 'page', params: { page: page } }" :class="{ current: currentPage == page }">{{ page }}</router-link>
        </li>

        <li v-if="hasLast()">
            <router-link :to="{ name: 'page', params: { page: middleLast } }">...</router-link>
        </li>

       <li v-if="hasLast()">
            <router-link :to="{ name: 'page', params: { page: totalPages } }">{{ totalPages }}</router-link>
       </li>

    </ul>
</template>

<script>
    export default {
        props: {
            totalPages: {
                type: Number,
                required: true
            },
            pageRange: {
                type: Number,
                default: 1
            },
        },
        watch: {
            '$route': 'page'
        },
        data() {
            return {
                currentPage: this.$route.params.page
            }
        },
        computed: {
            page(){
                return this.currentPage = this.$route.params.page;
            },
            pages() {
                let pages = [];
                for(let i = this.rangeStart; i <= this.rangeEnd; i++) {
                    pages.push(i)
                }
                return pages;
            },
            rangeStart(){
                let start = Number(this.currentPage) - this.pageRange;
                return (start > 0) ? start : 1;
            },
            rangeEnd(){
                let end = Number(this.currentPage) + this.pageRange;
                return (end < this.totalPages) ? end : this.totalPages;
            },
            middleFirst(){
                return Math.ceil((this.pages[0] + 1) / 2);
            },
            middleLast(){
                return Math.ceil((this.totalPages + Number(this.$route.params.page)) / 2);
            }
        },
        methods: {
            hasFirst(){
                return this.rangeStart !== 1
            },
            hasLast(){
                return this.rangeEnd < this.totalPages
            },
        }
    }
</script>

<style scoped>
    .pagination {
        position: fixed;
        width: 100vw;
        height: 60px;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: baseline;
        background-color: #000;
        opacity: 0.9;

    }
    .pagination li {
        list-style: none;

    }
    .pagination a {
        text-decoration: none;
        color: #fff;
        font-weight: 300;
        font-size: 12px;
        line-height: 60px;
        letter-spacing: 1px;
        padding: 0 6px;

    }
    .pagination a.current {
        font-weight: 400;
        font-size: 16px;
    }
    @media screen and (max-width: 320px) {
        .pagination {
            max-width: 320px;
            width: 100%;
        }
    }
</style>