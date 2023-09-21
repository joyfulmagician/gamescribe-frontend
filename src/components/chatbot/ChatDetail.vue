<script>
import { CHATCONST } from "@/const/value.js"
import ChatEmpty from "@/components/chatbot/ChatEmpty.vue"
import ChatDescription from "@/components/chatbot/ChatDescription.vue"

export default {
    props: {
        pageType: Number
    },
    components: {
        ChatEmpty,
        ChatDescription
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
            CHATCONST: CHATCONST
        }
    },
    methods: {
    },
}
</script>

<template>
    <div>
        <ChatEmpty v-if="pageType && CHATCONST.DASHBOARD" />
        <ChatDescription v-else-if="pageType && CHATCONST.DETAILVIEW" class="chat-description" />
    </div>
</template>

<style scoped>
@import '@/assets/style/common.css';

.chat-description {
    border-radius: 16px;
    background: #181821;
    min-height: calc(100vh - 130px);
}
</style>