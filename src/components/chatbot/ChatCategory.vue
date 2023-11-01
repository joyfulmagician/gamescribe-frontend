<script>
import ChatCategoryItem from "@/components/chatbot/ChatCategoryItem.vue"
import { CHAT_CATEGORY } from '@/const/value.js'

export default {
    components: {
        ChatCategoryItem
    },

    created() {

    },

    data() {
        return {
            categoryId: -1,
            CHAT_CATEGORY: CHAT_CATEGORY
        }
    },

    mounted() {
    },

    methods: {
        handleCategorySelection(data) {
            const _this = this
            _this.categoryId = data.id
            
            _this.$emit("selectedCategory", _this.categoryId)
        }
    }
}
</script>

<template>
    <div class="chat-category-panel">
        <div class="chat-category-question">
            What would you like to make?
        </div>
        <div class="flex gap-1 mt-5 mb-5">
            <ChatCategoryItem @itemSelected="handleCategorySelection" :clickedId="categoryId" :categoryId="CHAT_CATEGORY.CHARACTER" categoryTitle="Character" />
            <ChatCategoryItem @itemSelected="handleCategorySelection" :clickedId="categoryId" :categoryId="CHAT_CATEGORY.MONSTER" categoryTitle="Monster" />
            <ChatCategoryItem @itemSelected="handleCategorySelection" :clickedId="categoryId" :categoryId="CHAT_CATEGORY.SPELL" categoryTitle="Spell" />
            <ChatCategoryItem @itemSelected="handleCategorySelection" :clickedId="categoryId" :categoryId="CHAT_CATEGORY.BACKGROUND" categoryTitle="Background" />
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/style/common.css';
.chat-category-panel {
    margin: auto;
    width: 100%;
}

.chat-category-question {
    display: flex;
    padding: 12px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    border-radius: 8px;
    background: #232338;
    color: #D1D1F5;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.24px;
}
</style>