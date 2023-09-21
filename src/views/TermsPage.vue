<script>
import Header from "@/views/layout/Header.vue"
import Footer from "@/views/layout/Footer.vue"

export default {
    components: {
        Header,
        Footer
    },
    name: 'landing page',
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
        <Header />
        <div class="terms-content w-full px-[80px] mt-[89px]">
            <div class="terms-header">Terms and Conditions</div>
            <div class="terms-content mt-[26px]">
                <div class="content-block">
                    <a class="content-header">Lorem ipsum </a>dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </div>
                <div class="content-block">
                    <a class="content-header">Lorem ipsum </a>dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div class="content-block">
                    <a class="content-header">Lorem ipsum </a>dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div class="content-block">
                    <a class="content-header">Lorem ipsum </a>dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </div>
                <div class="content-block">
                    <a class="content-header">Lorem ipsum </a>dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div class="content-block">
                    <a class="content-header">Lorem ipsum </a>dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div class="content-block">
                    <ul class="ml-8">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</li>
                    </ul>
                </div>
                <div class="content-block">
                    <a class="content-header">Lorem ipsum </a>dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
        <Footer class="mt-[150px]" />
    </div>
</template>

<style scoped>
@import '@/assets/style/common.css';

.terms-header {
    color: #F5F5FF;
    text-align: center;
    font-family: Open San;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: 49.4px;
}

.terms-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.content-block {
    color: rgba(255, 255, 255, 0.80);
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
}

.content-header {
    color: #7173FA;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
}

.content-block ul {
    list-style-type: disc;
}

.content-block li {
    display: list-item;
}
</style>