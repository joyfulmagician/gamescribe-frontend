<script>
import Header from "@/views/layout/Header.vue"
import Footer from "@/views/layout/Footer.vue"
import NewsLetterComponent from "@/components/NewsLetterComponent.vue"

export default {
    components: {
        Header,
        Footer,
        NewsLetterComponent
    },
    name: 'landing page',
    created: function () {
    },
    mounted() {

    },
    unmounted() {
    },
    data() {
        return {
            
        }
    },
    methods: {
    },
}
</script>

<template>
    <div class="w-screen w-full">
        <Header />
        <div class="home-content w-full px-[80px]">
            <section
                class="main-section items-center justify-center w-full  animate-flip-up animate-once animate-ease-out animate-duration-[1500ms]">
                <div class="title-small text-center">LATEST RELEASE</div>
                <img class="text-center w-auto h-auto" src="@/assets/images/title-logo.png" />
                <div class="title-medium text-center">Unleash your story with Generative AI</div>
                <div class="btn-try flex gap-[8px] pointer">
                    <img src="@/assets/images/ico/ico-try.png" class="ico-24" />
                    <span>Try Now</span>
                </div>
            </section>

            <section class="video-section w-full animate-fade-left animate-once animate-ease-out">
                <div class="video-content"></div>
            </section>
            <section class="card-section mt-[166px]">
                <div class="card-item animate-rotate-y animate-ease-out animate-duration-[2000ms]">
                    <div class="card-header flex items-center justify-between gap-[36px]">
                        <img class="ico-32" src="@/assets/images/ico/ico-paste.png" />
                        <span>The ultimate ally for storytellers</span>
                    </div>
                    <div class="card-content">Unleash your storytelling prowess and embark on unforgettable journeys with
                        our platform. We
                        empower storytellers like you to craft intricate plots, vibrant characters, and immersive lore that
                        captivates players from all walks of life.</div>
                </div>
                <div class="card-item animate-rotate-y animate-ease-out animate-duration-[2000ms] animate-delay-[1000ms]">
                    <div class="card-header flex items-center justify-between gap-[36px]">
                        <img class="ico-32" src="@/assets/images/ico/ico-incusive.png" />
                        <span>All-inclusive tabletop RPG companion</span>
                    </div>
                    <div class="card-content">We empower game masters and players alike to create captivating character
                        descriptions, vivid box
                        text and custom stat blocks. You can enrich your gameplay experience, allowing you to focus on the
                        heart of tabletop gaming - storytelling.</div>
                </div>
                <div class="card-item animate-rotate-y animate-ease-out animate-duration-[2000ms] animate-delay-[2000ms]">
                    <div class="card-header flex items-center justify-between gap-[36px]">
                        <img class="ico-32" src="@/assets/images/ico/ico-ai.png" />
                        <span>AI companion for your tabletop RPGs!</span>
                    </div>
                    <div class="card-content">Focus on crafting compelling narratives that will leave players enchanted and
                        enthralled. Embrace
                        the future of tabletop gaming with GameScribe by your side, your perfect AI partner for
                        unforgettable adventure.</div>
                </div>
            </section>

            <section class="unleash-section mt-[150px]">
                <div class="unleash-header">Unleash Your Creativity</div>
                <div class="unleash-content mt-[8px]">You write, we generate the amazing stories - so Imagination Meets
                    Seamless Code
                    Generation.</div>
                <div class="btn-unleash-try mt-[36px] pointer">Try Now</div>
            </section>

            <section class="event-section mt-[56px] grid grid-flow-row-dense md:grid-cols-5">
                <div class="event-item h-full md:col-span-3 mb-3">
                    <div class="group-header">Lorem Ipsum</div>
                    <div class="group-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet nulla. Et
                        egestas quis ipsum suspendisse ultrices.</div>
                    <img class="absolute left-[-80px] bottom-[50px]" src="@/assets/images/event-section.png" />
                </div>
                <div class="event-item h-full md:col-span-2">
                    <div class="group-header">Lorem Ipsum</div>
                    <div class="group-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet nulla. Et
                        egestas quis ipsum suspendisse ultrices.s</div>
                    <img class="absolute left-[54px] bottom-[-20px]" src="@/assets/images/item-section.png" />
                </div>
            </section>

            <section class="campaign-section mt-[150px] md:flex">
                <div class="campaign-box">
                    <div class="campaign-header">Upcoming Campaigns</div>
                    <div class="campaign-content mt-[36px]">Join the gaming revolution with GameScribe.ai! Unleash the power
                        of
                        artificial intelligence and take your gaming experience to the next level. Our innovative platform
                        combines cutting-edge technology and immersive storytelling to create captivating narratives
                        tailored specifically to your gameplay. Immerse yourself in rich, dynamic worlds, where your choices
                        shape the outcome of the game. Whether you're a seasoned gamer or just starting your adventure,
                        GameScribe.ai will transport you to a realm of endless possibilities. Get ready to embark on the
                        gaming journey of a lifetime!</div>
                    <div class="btn-explore mt-[36px] mb-3">Explore All</div>
                </div>
                <img class="campaign-image w-[240px] lg:w-[512px]" src="@/assets/images/item-campaign.png" />
            </section>

            <NewsLetterComponent class="mt-[190px]"/>

            <section class="question-section mt-[150px]">
                <div class="question-header">Frequently Asked Questions</div>
                <div class="questoin-box md:flex mt-[100px]">
                    <div class="question-item mb-3">
                        <div class="question-item-header">What kind of games does GameScribe support?</div>
                        <div class="question-item-content mt-[36px]">GameScribe supports a wide variety of gaming genres,
                            including
                            RPG, strategy, adventure, and more.</div>
                    </div>
                    <div class="question-item">
                        <div class="question-item-header">How do I start using GameScribe?</div>
                        <div class="question-item-content mt-[36px">Sign up for an account, choose your game, and let
                            GameScribe
                            enhance your gaming experience with its AI expertise.</div>
                    </div>
                </div>
            </section>
        </div>
        <Footer class="mt-[150px]" />
    </div>
</template>

<style scoped>
@import '@/assets/style/common.css';

.home-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.main-section {
    display: flex;
    flex-direction: column;
    height: 60vh;
    gap: 32px;
}

.main-section .title-small {
    color: #FFF;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.main-section .title-medium {
    color: #FFF;
    text-align: center;
    font-family: Open San;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 3px;
    text-transform: capitalize;
}

.btn-try {
    padding: 12px 24px;
    border-radius: 4px;
    background: #7173FA;
    margin-top: 18px;
}

.btn-try span {
    color: #FFF;
    font-family: Open San;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
}

.video-content {
    border-radius: 7.2px;
    background: #151515;
    width: 80%;
    height: auto;
    aspect-ratio: 5/3;
    margin: auto;
}

.card-section {
    display: flex;
    width: 100%;
    gap: 76px;
}

/* card section */
.card-section .card-item {
    flex-grow: 1;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    display: flex;
    box-sizing: border-box;
    padding: 36px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
}

.card-section .card-item .card-header span {
    color: #FFF;
    font-family: Open San;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 3px;
}

.card-section .card-item .card-content {
    color: rgba(255, 255, 255, 0.80);
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
}

.unleash-header {
    color: #FFF;
    font-family: Open San;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 76.8px;
    letter-spacing: 3px;
}

.unleash-content {
    color: #FFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 3px;
    text-transform: lowercase;
}

.btn-unleash-try {
    border-radius: 4px;
    background: #7173FA;
    padding: 12px 24px;
    color: #FFF;
    font-family: Open San;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    width: fit-content;
}

.event-section {
    width: 100%;
    height: auto;
    gap: 30px;
}

.event-section .event-item {
    border-radius: 32px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-sizing: border-box;
    padding: 35px 36px;
    gap: 10px;
    position: relative;
    height: 530px;
}

.event-section .event-item .group-header {
    color: #FFF;
    font-family: Open San;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.96px;
}

.event-section .event-item .group-content {
    color: #FFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
}

.campaign-section {
    justify-content: space-between;
    gap: 90px;
}

.campaign-header {
    color: #FFF;
    font-family: Open San;
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 3px;
}

.campaign-content {
    color: rgba(255, 255, 255, 0.80);
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
}

.btn-explore {
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


.question-header {
    color: #FFF;
    text-align: center;
    font-family: Open San;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
}

.question-box {
    justify-content: space-between;
    align-items: center;
    gap: 40px;
}

.question-item-header {
    color: #FFF;
    font-family: Open San;
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 3px;
}

.question-item-content {
    color: rgba(255, 255, 255, 0.80);
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
}
</style>