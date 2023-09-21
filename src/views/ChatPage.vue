<script>
import Header from "@/views/layout/Header.vue"
import Footer from "@/views/layout/Footer.vue"
import ChatDetail from "@/components/chatbot/ChatDetail.vue"
import ChatBox from "@/components/chatbot/ChatBox.vue"
import { CHATCONST } from "@/const/value.js"

export default {
    components: {
        Header,
        Footer,
        ChatDetail,
        ChatBox
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
            CHATCONST: CHATCONST,
            contentType: CHATCONST.DETAILVIEW
        }
    },
    methods: {
    },
}
</script>

<template>
    <div class="w-screen w-full">
        <Header />
        <span v-if="contentType == CHATCONST.DASHBOARD" class="chat-begin-title px-[50px] ">This is the beginning of your
            direct message history with
            <font class="text-[#A5AAB1]">us</font>.
        </span>
        <div class="chat-content grid grid-cols-3 md: gap-8 px-[50px] " :class="contentType == CHATCONST.DASHBOARD ? 'mt-[20px]' : 'mt-[50px]'">
            <ChatDetail :pageType="contentType" class="col-span-3 md:col-span-2 mb-3"/>
            <ChatBox class="col-span-3 md:col-span-1 mb-3" />
        </div>
        <Footer class="mt-[150px]" />
    </div>
</template>

<style scoped>
@import '@/assets/style/common.css';

.chat-content {
}

.chat-begin-title {
    color: #959BA3;
    font-family: 'Open Sans', sans-serif;
    font-size: 15.983px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>