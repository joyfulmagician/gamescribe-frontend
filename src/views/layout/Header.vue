<script>

export default {
    props: {
        pageName: String
    },
    name: 'header page',
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
    <div class="px-[40px] py-[12px] md:flex items-center justify-between">
        <a class="login-logo pointer" href="/">
            <img class="w-[217px] h-[26px]" src="@/assets/images/title-logo.png" />
        </a>
        <div class="flex items-center justify-between w-[468px] header-nav">
            <a class="nav-item pointer" :class="pageName == 'marketplace' && 'active'" href="/marketplace">Marketplace</a>
            <a class="nav-item pointer" :class="pageName == 'encyclopedia' && 'active'"
                href="/encyclopedia">Encyclopedia</a>
            <a class="nav-item pointer" :class="pageName == 'tools' && 'active'" href="/tools">Tools</a>
        </div>
        <a class="btn-signup pointer" href="/register">Sign Up Free</a>
    </div>
</template>

<style scoped>
@import '@/assets/style/common.css';

.header-nav .nav-item {
    color: #F2F4F7;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    padding: 4px 8px;
    line-height: 20px;
}

.header-nav .nav-item.active {
    color: #ffffff;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    font-style: normal;
    line-height: 20px;
    border-bottom: 2px solid #F2F4F7;
    padding: 4px 8px;
}

.btn-signup {
    width: fit-content;
    border-radius: 32px;
    background: #7173FA;
    padding: 12px 24px;
    color: #FFF;
    font-family: Open San;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
}
</style>
