
<script>

export default {
    props: {
        messageList : Array
    },

    created() {
    },

    data() {
    },

    mounted: function () {
    },

    watch: {
    },

    methods: {
        // scroll to end of the chat content
        scrolltoChatEnd(idx) {
            setTimeout(() => {
                const scroll = this.$refs.scrolllist;
                if (idx >= 0 && idx < this.messageList.length) {
                    const listitem = scroll.querySelectorAll('.message-item')[idx];
                    const contentHeight = listitem.offsetHeight;
                    if (contentHeight > scroll.offsetHeight)
                        scroll.scrollTop = listitem.offsetTop - scroll.offsetTop + contentHeight;
                    else
                        scroll.scrollTop = listitem.offsetTop - scroll.offsetTop;
                } else {
                    scroll.scrollTop = scroll.scrollHeight + 400;
                }
            }, 200);
        },
    }
}
</script>

<template>
    <div ref="scrolllist" class="scroll-div-y custom-scroll-small relative mb-2">
        <div class="scribe-chat-list">
            <div class="message-list-item">
                <!-- chat histories -->
                <div class="message-item hover-parent" :class="'item-' + index + ' item-' + item.role"
                    v-for="(item, index) in this.messageList" :key="'message' + index">
                    <div v-if="item.role == 'system'" class="message-item-content">
                        <img src="@/assets/images/ico/ico-chatlogo.png" />
                        <span class="message-item-content-text" v-html="item.content"></span>
                    </div>
                    <div v-else class="message-item-content">
                        <span class="message-item-content-text" v-html="item.content"></span>
                        <img src="@/assets/images/ico/ico-chatlogo.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.scribe-chat-list {
    box-sizing: border-box;
    position: relative;
    height: fit-content;
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    padding: 16px;
}


.message-item {
    clear: both;
    max-width: calc(100% - 20px);
    height: fit-content;
    width: fit-content;
    box-sizing: border-box;
    margin-bottom: 16px;
    /* Shadow 1 */
    overflow: hidden;
    word-wrap: break-word;
}

.message-item-content {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    color: white;
    box-sizing: border-box;
    padding: 12px 16px;
    border-radius: 32px;
    background: #232338;
}

.message-item-content-text {
    color: #D1D1F5;
    font-family: 'Open Sans' sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.4px;
    /* 172.308% */
    letter-spacing: 0.26px;
}

.message-item.item-user {
    box-shadow: 0px 2px 2px rgba(33, 37, 41, 0.06), 0px 0px 1px rgba(33, 37, 41, 0.08);
    float: right;
}

.message-item.item-system {
    box-shadow: 0px 2px 2px rgba(33, 37, 41, 0.06), 0px 0px 1px rgba(33, 37, 41, 0.08);
    float: left;
}
</style>