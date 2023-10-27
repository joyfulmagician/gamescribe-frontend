<script>
export default {
    props: {
        categoryId: Number,
        categoryTitle: String,
        clickedId: Number
    },
    created() {
    },

    data() {
        return {
        }
    },

    mounted() {
    },

    methods: {
        selectItem(id) {
            const _this = this
            _this.$emit("itemSelected", { id: id })
        }
    }
}
</script>

<template>
    <span @click="selectItem(categoryId)" class="chat-category-item" :class="clickedId!=categoryId?'unselected':'selected'">
        <img v-if="clickedId==categoryId" src="@/assets/images/radix-icons_check.svg" />
        {{ categoryTitle }}
    </span>
</template>

<style scoped>
.chat-category-item {
    display: flex;
    padding: 4px 12px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 16px;
    border: 1px solid #232338;
    background: #232338;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
}

.unselected { 
    color: var(--neutral-0, #FFF);
}

.selected {
    color: #7173FA;
}
</style>