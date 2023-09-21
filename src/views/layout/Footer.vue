<script>

</script>

<template>
    <div class="footer-section">
        <div class="footer-box grid grid-flow-row-dense grid-cols-1 md:grid-cols-4">
            <div class="footer-item col-span-1 mb-3">
                <div class="footer-item-header">Company</div>
                <div class="footer-item-content">
                    <div class="footer-content">Page name</div>
                    <div class="footer-content">Page name</div>
                    <div class="footer-content">Page name</div>
                    <div class="footer-content">Page name</div>
                </div>
            </div>
            <div class="footer-item col-span-1 mb-3">
                <div class="footer-item-header">Help</div>
                <div class="footer-item-content">
                    <div class="footer-content">Page name</div>
                    <div class="footer-content">Page name</div>
                    <div class="footer-content">Page name</div>
                    <div class="footer-content">Page name</div>
                </div>
            </div>
            <div class="footer-item col-span-1 mb-3">
                <div class="footer-item-header">Resources</div>
                <div class="footer-item-content">
                    <div class="footer-content">Page name</div>
                    <div class="footer-content">Page name</div>
                    <div class="footer-content">Page name</div>
                    <div class="footer-content">Page name</div>
                </div>
            </div>
            <div class="footer-item col-span-1 mb-3">
                <div class="footer-item-header">Resources</div>
                <div class="footer-item-content">
                    <div class="footer-content">Page name</div>
                    <div class="footer-content">Page name</div>
                    <div class="footer-content">Page name</div>
                    <div class="footer-content">Page name</div>
                </div>
            </div>

        </div>
        <div class="footer-end md:flex">
            <div class="footer-title">© Copyright 2023, All Rights Reserved by Gamescribe.ai</div>
            <div class="footer-social">
                <img src="@/assets/images/ico/twitter.png" class="ico-28"/>
                <img src="@/assets/images/ico/facebook.png" class="ico-28"/>
                <img src="@/assets/images/ico/youtube.png" class="ico-28"/>
                <img src="@/assets/images/ico/github.png" class="ico-28"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/style/common.css';

.footer-section {
    padding: 100px 130px 40px 130px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.footer-box {
    padding-bottom: 100px;
    border-bottom: 1px solid #1E293B;
}

.footer-item-header {
    color: #FFF;
    font-family: Open San;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
}

.footer-item-content {
    margin-top: 36px;
}

.footer-content {
    color: #E4E4E7;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    margin-top: 30px;
}

.footer-end {
    justify-content: space-between;
    align-items: center;
    padding: 40px 0px;
}

.footer-title {
    color: #A1A1AA;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
}

.footer-social {
    display: flex;
    align-items: center;
    gap: 3px;
}
</style>
