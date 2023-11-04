<script>
import { CHATCONST } from "@/const/value.js"

export default {
    props: {
        mainContent: String,
        isContentGenerating: Boolean,
    },
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
            descContent: ``
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
            <!-- <div v-if="!editState" class="header-item btn-edit" @click="editState = true">
                <img src="@/assets/images/ico/ico-edit.png" class="ico-16" />
                <span class="key">Edit</span>
            </div>
            
            <div v-else class="header-item btn-edit" @click="editState = false">
                <img src="@/assets/images/ico/ico-edit.png" class="ico-16" />
                <span class="key">Save</span>
            </div> -->
        </div>


        <div class="loading-indicator" v-if="isContentGenerating">
            <div class="loader"></div>
        </div>

        <div class="main-content scroll-div-y custom-scroll-small relative mb-2" v-html="mainContent">
            
        </div>

        <!-- <textarea class="desc-content custom-scroll-small scroll-div-y" :class="editState && 'edit-active'" v-bind:readonly="!editState" v-html="mainContent"></textarea> -->
    </div>
</template>

<style>
@import '@/assets/style/common.css';

.main-content {
    box-sizing: border-box;
    flex: 1 1 auto;
    padding: 5px 10px;
}

.monster-title {
    color: var(--neutral-0, #FFF);
    font-family: 'Merriweather', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.64px;
    text-transform: capitalize;
}

.monster-subtitle {
    color: var(--neutral-0, #FFF);
    font-family: 'Merriweather', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: 0.36px;
}

.section-divider {
    border-top: 2px solid rgba(113, 115, 250, 0.60);
}

.section-body {
    margin-top: 45px;
}

.section-title {
    color: var(--neutral-0, #FFF);
    font-family: "Merriweather", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 100% */
    letter-spacing: 0.48px;
    text-transform: uppercase;
}

.stat-title {
    color: var(--neutral-0, #FFF);
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 133.333% */
    letter-spacing: 0.36px;
}

.stat-subtitle {
    color: var(--neutral-0, #FFF);
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-style: normal;
    line-height: 28px; /* 133.333% */
    letter-spacing: 0.36px;
}

.ability {
    display: inline-block;
    width: 120px;
    text-align: center;
    border-right: 2px solid rgba(113, 115, 250, 0.45);
    padding-right: 10px;
}

.ability-label {
    text-transform: uppercase;
}

.ability:last-child {
    border-right: none;
}
.action-title {
    margin-right: 15px;
}

.chat-desc {
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    padding: 5px 10px;
}

.desc-content.edit-active {
    border: 1px solid #3f3f3f;
    background-color: #FFFFFF11;
}

.loading-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #7173FA;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>