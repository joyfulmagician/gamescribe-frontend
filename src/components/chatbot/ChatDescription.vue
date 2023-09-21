<script>
import { CHATCONST } from "@/const/value.js"

export default {
    components: {
    },
    name: 'ChatDescription',
    created: function () {
    },
    mounted() {
    },
    unmounted() {
    },
    data() {
        return {
            CHATCONST: CHATCONST,
            editState: false,
            descContent: `Introducing the Draegonspire, a fearsome and majestic creature that prowls the shadowed realms of your game's world. Standing at a towering height with scales as dark as midnight, the Draegonspire commands both awe and terror. Its eyes, blazing orbs of molten gold, possess an uncanny intelligence that pierces through the deepest corners of your soul.\n\

With wings that stretch wide and powerful, the Draegonspire dominates the skies, casting an ominous silhouette as it soars. Its talons, sharp as obsidian blades, can tear through even the hardiest of defenses, making it a formidable adversary. Yet, it's not just its physical prowess that makes the Draegonspire a creature to be reckoned with. Legends speak of its ability to manipulate the very elements, conjuring storms that darken the sun and crack the earth.\n

But within this terrifying exterior lies a complexity that challenges expectations. Whispers carried by the wind claim that the Draegonspire is a guardian of forgotten knowledge, a sentinel of ancient secrets buried deep within the heart of the world. Some say it can be appeased with offerings of precious gems and rare herbs, and in return, it imparts hidden wisdom to those who prove themselves worthy.\n

Venture forth, for encountering the Draegonspire will test your courage, wit, and strategy. Will you face it as an adversary, driven by the desire to conquer, or will you seek to unravel the enigma it embodies and uncover the truths that lie beneath its majestic exterior? The choice is yours, as you navigate the uncharted territories where legends and reality intertwine.`
        }
    },
    methods: {
    },
}
</script>

<template>
    <div class="chat-desc">
        <div class="desc-header">
            <div class="header-item">
                <span class="key">Monster:</span>
                <span class="value">They Eye-Stalker:</span>
            </div>
            <div class="header-item">
                <span class="key">Monster:</span>
                <span class="value">They Eye-Stalker:</span>
            </div>
            <div class="header-item">
                <span class="key">Monster:</span>
                <span class="value">They Eye-Stalker:</span>
            </div>
            <div class="header-item">
                <span class="key">Monster:</span>
                <span class="value">They Eye-Stalker:</span>
            </div>
            <div class="header-item">
                <span class="key">Monster:</span>
                <span class="value">They Eye-Stalker:</span>
            </div>
            <div class="header-item btn-edit" @click="editState = true">
                <img src="@/assets/images/ico/ico-edit.png" class="ico-16" />
                <span class="key">Edit</span>
            </div>
        </div>
        <textarea class="desc-content custom-scroll-small scroll-div-y" v-bind:readonly="!editState" v-html="descContent"></textarea>
    </div>
</template>

<style scoped>
@import '@/assets/style/common.css';

.chat-desc {
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: space-between;
}

.desc-header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
}

.header-item {
    padding: 4px 12px;
    border-radius: 8px;
    border: 1px solid #232338;
    background: #181821;
    display: flex;
    align-items: center;
}

.header-item .key {
    color: #FFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.header-item .value {
    color: #959BA3;
    font-family: 'Open Sans', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-left: 4px;
}

.btn-edit {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
}

.desc-content {
    background-color: transparent;
    resize: none;
    outline: none;
    border-radius: 8px;
    border: none;
    background: #181821;

    color: #F5F5FF;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    flex: 1 1 auto;
    padding-right: 10px;
}
</style>