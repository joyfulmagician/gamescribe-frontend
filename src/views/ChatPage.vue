<script>
import { getLocalStorage } from '@/library/auth.js';
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
        this.userToken = getLocalStorage();
        if (!this.userToken) {
            window.location.assign('/')
        }
    },
    unmounted() {
    },
    data() {
        return {
            CHATCONST: CHATCONST,
            contentType: CHATCONST.DASHBOARD,
            mainContent: '',
            isContentGenerating: false
        }
    },
    methods: {
        setMainContent(message) {
            if( message != "" )
                this.mainContent = message;
        },
        setLoadingState(state) {
            this.isContentGenerating = state;
        },
        selectedCategory(categoryId) {
            if(parseInt(categoryId) < 0 ) {
                this.contentType = CHATCONST.DASHBOARD
            } else {
                this.contentType = CHATCONST.DETAILVIEW
            }
        }
    },
}
</script>

<template>
    <div class="w-screen w-full">
        <Header />
        <span class="chat-begin-title px-[40px] ">This is the beginning of your
            direct message history with
            <font class="text-[#A5AAB1]">us</font>.
        </span>
        <div class="chat-content grid grid-cols-5 md: gap-8 px-[50px] "
            :class="contentType == CHATCONST.DASHBOARD ? 'mt-[20px]' : 'mt-[30px]'">
            <ChatDetail :mainContent="mainContent" :isContentGenerating="isContentGenerating" :pageType="contentType" class="col-span-3 md:col-span-3 mb-3" />
            <div v-if="contentType == CHATCONST.DASHBOARD" class="chat-dashboard-left-side col-span-3 md:col-span-3 mb-3">
                <span class="chat-dashboard-normal-title">Unleash Your <span class="chat-dashboard-color-title">Story</span></span>
                <img class="max-h-[50vh] mt-20" src="@/assets/images/chat_dashboard.png" />
            </div>
            <ChatBox @selectedCategory="selectedCategory" @setLoadingState="setLoadingState" @setMainContent="setMainContent" class="col-span-2 md:col-span-2 mb-3" />
        </div>
        <Footer class="mt-[150px]" />
    </div>
</template>

<style scoped>
@import '@/assets/style/common.css';

.chat-dashboard-left-side {
    justify-content: center;
    margin: auto;
    text-align: center;
}

.chat-dashboard-normal-title {
    color: var(--neutral-0, #FFF);
    font-family: 'Varela', sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.96px;
    align-items: center;
}

.chat-dashboard-color-title {
    color: var(--neutral-0, #7173FA);
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