<script>

import ChatInput from "@/components/chatbot/ChatInput.vue"
import ChatList from "@/components/chatbot/ChatList.vue"
import { URLCONST } from '@/const/url.js';
import axios from 'axios'
export default {
    components: {
        ChatInput,
        ChatList
    },
    name: 'chatbot page',
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
        sendMessage(msg) {
            this.$refs.chatinput.clearInput();
            this.$refs.chatlist.addMessageList(false, msg);

            this.getChatMainContent(msg);
        },

        getChatMainContent(msg) {
            const _this = this;
            this.getChatMainChunkAPI(msg, function (chunk) {
                const message = chunk.result;
                _this.$emit('setMainContent', message);
            })
        },

        getChatMainChunkAPI(text, callback) {
            var sendData = {
                user_input: text
            }
            axios
                .post(URLCONST.generateContentAPI, sendData)
                .then((response) => {
                    if (response.status == 200 && response?.data) {
                        const result = response.data;
                        callback(result);
                    } else {
                    }
                })
        }
    },
}
</script>

<template>
    <div class="chatbot-panel">
        <ChatList ref="chatlist" />
        <ChatInput ref="chatinput" @sendMessage="sendMessage" />
    </div>
</template>

<style scoped>
@import '@/assets/style/common.css';

.chatbot-panel {
    border-radius: 27px;
    background: #181821;
    height: calc(100vh - 130px);
    padding: 24px;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}
</style>