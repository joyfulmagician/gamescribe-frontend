
<script>

export default {
    created() {
    },

    data() {
        return {
            inputText: "",
            placeholderText: 'Write a message...', 
            inputHoverState: false,
            textareaHeight: 'auto',
            isContentGenerating: false
        }
    },

    mounted: function () {
        this.adjustTextareaHeight()
        this.setFocusToInput()
    },

    watch: {
        inputText: {
            handler(newValue) {
                const _this = this;
                _this.$emit('searchChannel', newValue);
                _this.adjustTextareaHeight()
            },
            immediate: true,
        }
    },

    methods: {
        handleKeyDownInput(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendChatText(e)
            }
        },

        sendChatText(e) {
            e.preventDefault();
            const _this = this;
            var text = _this.$refs.chat_input.value;
            if (text) {
                _this.$emit('sendMessage', text);
            }
        },

        setLoadingState(state) {
            this.isContentGenerating = state
        },

        setFocusToInput() {
            if( this.$refs.chat_input )
                this.$refs.chat_input.focus();
        },

        clearInput() {
            this.inputText = '';
        },

        setPlaceHolder(text) {
            this.placeholderText = text;
        },

        setCurrentChannel(channelInfo) {
            switch (channelInfo.value) {
                case COMMANDTYPE.chat: this.setPlaceHolder(_functionUtil.getWordByLang('command_placeholder')); break;
                case COMMANDTYPE.video: this.setPlaceHolder(_functionUtil.getWordByLang('command_placeholder')); break;
                case COMMANDTYPE.translate: this.setPlaceHolder(_functionUtil.getWordByLang('command_placeholder')); break;
            }
        },

        adjustTextareaHeight() {
            this.$nextTick(() => {
                if (this.$refs.chat_input) {
                    this.textareaHeight = `${this.$refs.chat_input_hidden.scrollHeight + 2}px`;
                    this.$refs.chat_input.scrollTop = this.$refs.chat_input.scrollHeight + 100;
                    if (this.inputText === "") {
                        this.textareaHeight = '20px';
                    }
                }
            });
        },
    }
}
</script>

<template>
    <div class="scribe-chat-input">
        <div class="scribe-textarea-panel" v-if="!isContentGenerating">
            <div class="flex items-end gap-[12px]">
                <textarea ref="chat_input" class="scribe-custom-textarea scroll-div-y custom-scroll-small tab-tag"
                    :class="{ 'has-value': inputText }" :style="{ height: textareaHeight }" v-model="inputText"
                    @keydown="handleKeyDownInput" @focus="true" @blur="inputHoverState = false"></textarea>
                <textarea ref="chat_input_hidden" class="scribe-custom-textarea-hidden" v-model="inputText"></textarea>
                <img class="ico-24 pointer" src="@/assets/images/ico/ico-send.png" @click="sendChatText"/>
            </div>
            <div class="chatbot-placeholder" v-if="!inputText" v-html="placeholderText">
            </div>
        </div>

        <div class="loadingdiv" v-else>
            <span class="loadingtext">Generating...</span>
        </div>
    </div>
</template>



<style scoped>
@import '@/assets/style/common.css';
.scribe-chat-input {
    width: 100%;
    background-color: transparent;
    position: relative;
}

.scribe-textarea-panel {
    position: relative;
    padding: 16px 24px 16px 24px;
    border: 1px solid #232338;
    border-radius: 32px;
    background: #151515;
}

.scribe-custom-textarea {
    outline: none;
    resize: none;
    width: 100%;
    border: 1px solid transparent !important;
    box-shadow: none !important;
    padding: 0px !important;
    box-sizing: border-box;
    background-color: transparent;
    /* Adjust as needed */
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16.5px;
    letter-spacing: 0.32px;
    /* 103.125% */
    color: white;
    overflow-x: hidden;


    max-height: 80px;
    height: auto;
}

.scribe-custom-textarea-hidden {
    position: absolute;
    outline: none;
    resize: none;
    width: calc(100% - 84px);
    border: 1px solid transparent !important;
    box-shadow: none !important;
    padding: 0px !important;
    box-sizing: border-box;
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16.5px;
    letter-spacing: 0.32px;
    /* 103.125% */
    color: white;
    overflow-x: hidden;
    height: 0px;
    overflow: hidden;
    left: 0px;
}

.scribe-btn-send {
    position: absolute;
    bottom: 17px;
    right: 16px;
    cursor: pointer;
}



.has-value+.chatbot-placeholder {
    display: none;
}

.chatbot-placeholder {
    position: absolute;
    left: 24px;
    bottom: 14px;
    pointer-events: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: #6C757D;
}

.loading-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #7173FA;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

.loadingdiv {
  display: flex;
  justify-content: center;
  width: 210px;
  height: 50px;
  border-radius: 9px;
  align-items: center;
  margin: auto;
  margin-bottom: 10px;
  background-color: #444ce7;
  background: linear-gradient(to left, #444ce7, #656be2, #464ee9);
  background-size: 200% 200%;
  background-position: -100% 0;
  animation: loading-gradient 2s ease-in-out infinite;
  animation-direction: alternate;
  animation-name: loading-gradient;
}

.loadingtext {
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes loading-gradient {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
</style>