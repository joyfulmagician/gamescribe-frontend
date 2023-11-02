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
            CHAT_CATEGORY: CHAT_CATEGORY,
            messageList: [],
            lastGeneratedContent: ""
        }
    },
    methods: {
        createSystemMessage(msg) {
            return {
                role: 'system',
                content: msg
            }
        },

        createUserMessage(msg) {
            return {
                role: 'user',
                content: msg
            }
        },

        addFirstSuggestionMessage(msg) {
            this.messageList = []
            this.messageList.push(this.createSystemMessage(msg))
        },

        addMessageList(type, msg) {
            if (type) {
                this.messageList.push(this.createSystemMessage(msg));
            } else {
                this.messageList.push(this.createUserMessage(msg));
            }

            this.$refs.chatlist.scrolltoChatEnd();

        },

        sendMessage(msg) {
            this.$refs.chatinput.clearInput();
            this.$refs.chatinput.setLoadingState(true);
            this.$emit('setLoadingState', true);
            this.addMessageList(false, msg);

            this.getChatMainContent();
        },

        getChatMainContent() {
            const _this = this;
            _this.getChatMainChunkAPI(function (chunk) {
                const message = chunk.result;
                _this.lastGeneratedContent = message
                _this.$emit('setMainContent', message);
                _this.$emit('setLoadingState', false);
                _this.$refs.chatinput.setLoadingState(false);
                _this.$refs.chatinput.setFocusToInput()
            });

            _this.getAIQuestion(function(chunk) {
                const question_msg = chunk.result;
                _this.addMessageList(true, question_msg);
                _this.$refs.chatinput.setFocusToInput()
            })
        },

        getAIQuestion(callback) {
            var sendData = {
                message_list: this.messageList
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

        getChatMainChunkAPI(callback) {
            var sendData = {
                message_list: this.messageList,
                last_content: this.lastGeneratedContent
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
                this.addFirstSuggestionMessage("You selected monster and I'm createing a new monster description for your review on the left")
            } else if( categoryId == CHAT_CATEGORY.CHARACTER ) {
                this.addFirstSuggestionMessage("Please choose a name for your character. I suggest you to use one of those or you can write it by yourself")
            } else if( categoryId == CHAT_CATEGORY.SPELL ) {
                this.addFirstSuggestionMessage("This is SPELL system message")
            } else if( categoryId == CHAT_CATEGORY.BACKGROUND ) {
                this.addFirstSuggestionMessage("This is BACKGROUND system message")
            } else {
                this.addFirstSuggestionMessage("")
            }
            _this.$emit("selectedCategory", categoryId)
            _this.$refs.chatinput.setFocusToInput()
        }
    },
}
</script>

<template>
    <div class="chatbot-panel">
        <ChatCategory @selectedCategory="selectedCategory" ref="chatcategory" />
        <ChatList ref="chatlist" :messageList="messageList" />
        <ChatInput ref="chatinput" @sendMessage="sendMessage"/>
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