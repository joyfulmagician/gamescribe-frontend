<script>
import Header from "@/views/layout/Header.vue"
import Footer from "@/views/layout/Footer.vue"

export default {
    components: {
        Header,
        Footer,
    },
    created: function () {
    },
    mounted() {
    },
    unmounted() {
    },
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>

<template>
    <div class="w-screen w-full">
        <Header :pageName="'encyclopedia'" />
        <div class="px-[50px]">
            Encyclopedia
        </div>
        <Footer class="mt-[150px]" />
    </div>
</template>

<style scoped>
@import '@/assets/style/common.css';
</style>