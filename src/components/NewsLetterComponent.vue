<script>

</script>

<template>
    <section class="subscribe-section">
        <div class="subscribe-header">Subscribe to our newsletter</div>
        <div class="subscribe-content md:flex mt-[50px]">
            <input class="subscribe-input" placeholder="First name" />
            <input class="subscribe-input" placeholder="Email address" />
            <div class="btn-subscribe">Subscribe</div>
        </div>
    </section>
</template>

<style scoped>
@import '@/assets/style/common.css';


.subscribe-section {
    border-radius: 32px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: #050618;
    padding: 80px 0px;
}

.btn-subscribe {
    border-radius: 32px;
    border: 1px solid #7173FA;
    padding: 12px 24px;
    color: #7173FA;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    width: fit-content;
}

.subscribe-header {
    color: #FFF;
    text-align: center;
    font-family: Open San;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
}

.subscribe-content {
    justify-content: center;
    align-items: center;
    gap: 24px;
}

.subscribe-input {
    padding: 13px 20px;
    border-radius: 4px;
    border: 1px solid #D4D4D8;
    outline: none;
    background-color: transparent;
    color: #FFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
}
</style>
