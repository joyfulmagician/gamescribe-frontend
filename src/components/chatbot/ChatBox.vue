<script>

import ChatCategory from "@/components/chatbot/ChatCategory.vue"
import ChatInput from "@/components/chatbot/ChatInput.vue"
import ChatList from "@/components/chatbot/ChatList.vue"
import { URLCONST } from '@/const/url.js'
import { CHAT_CATEGORY } from '@/const/value.js'
import axios from 'axios'
export default {
    components: {
        ChatCategory,
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
            CHAT_CATEGORY: CHAT_CATEGORY
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
            _this.getChatMainChunkAPI(msg, function (chunk) {
                const message = chunk.result;
                _this.$emit('setMainContent', message);
            });

            _this.getAIQuestion(msg, function(chunk) {
                const question_msg = chunk.result;
                console.log("question_msg", question_msg);
                _this.$refs.chatlist.addMessageList(true, question_msg);
            })
        },

        getAIQuestion(text, callback) {
            var sendData = {
                user_input: text
            }
            axios
                .post(URLCONST.generateQueestionAPI, sendData)
                .then((response) => {
                    if (response.status == 200 && response?.data) {
                        const result = response.data;
                        callback(result);
                    } else {
                    }
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
        },

        selectedCategory(categoryId) {
            const _this = this;
            if( categoryId == CHAT_CATEGORY.MONSTER ) {
                _this.$refs.chatlist.addFirstSuggestionMessage("You selected monster and I'm createing a new monster description for your review on the left")
            } else if( categoryId == CHAT_CATEGORY.CHARACTER ) {
                _this.$refs.chatlist.addFirstSuggestionMessage("Please choose a name for your character. I suggest you to use one of those or you can write it by yourself")
            } else if( categoryId == CHAT_CATEGORY.SPELL ) {
                _this.$refs.chatlist.addFirstSuggestionMessage("This is SPELL system message")
            } else if( categoryId == CHAT_CATEGORY.BACKGROUND ) {
                _this.$refs.chatlist.addFirstSuggestionMessage("This is BACKGROUND system message")
            } else {
                _this.$refs.chatlist.addFirstSuggestionMessage("")
            }
            _this.$emit("selectedCategory", categoryId)
        }
    },
}
</script>

<template>
    <div class="chatbot-panel">
        <ChatCategory @selectedCategory="selectedCategory" ref="chatcategory" />
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