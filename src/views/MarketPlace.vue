<script>
import Header from "@/views/layout/Header.vue"
import Footer from "@/views/layout/Footer.vue"
import StarRating from 'vue-star-rating'

export default {
    components: {
        Header,
        Footer,
        StarRating
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
            isSidebarShow: true,
            productMenuType: 0,
            filterData: [
                {
                    title: 'Title1',
                    item: [
                        { key: 'Subtitle', value: '' },
                        { key: 'Subtitle', value: '' },
                        { key: 'Subtitle', value: '' },
                        { key: 'Subtitle', value: '' },
                    ]
                },
                {
                    title: 'Title2',
                    item: [
                        { key: 'Subtitle', value: '' },
                        { key: 'Subtitle', value: '' },
                        { key: 'Subtitle', value: '' },
                    ]
                },
                {
                    title: 'Skill Level',
                    item: [
                        { key: 'Beginner', value: '' },
                        { key: 'Intermediate', value: '' },
                        { key: 'Expert', value: '' },
                    ]
                },
                {
                    title: 'Brand',
                    item: [
                        { key: 'Brand 1', value: '' },
                        { key: 'Brand 2', value: '' },
                        { key: 'Brand 3', value: '' },
                        { key: 'Brand 4', value: '' },
                        { key: 'Brand 5', value: '' },
                        { key: 'Brand 6', value: '' },
                        { key: 'Brand 7', value: '' },
                    ]
                },
            ],
            productList: [
                {
                    image: '@/assets/images/product/1.png', title: 'Ti1tle', price: 599, rating: 3.5, cnt: 243
                },
                {
                    image: '@/assets/images/product/2.png', title: 'Title', price: 599, rating: 3.5, cnt: 243
                },
                {
                    image: '@/assets/images/product/3.png', title: 'Title', price: 599, rating: 3.5, cnt: 243
                },
                {
                    image: '@/assets/images/product/4.png', title: 'Title', price: 599, rating: 3.5, cnt: 243
                },
                {
                    image: '@/assets/images/product/5.png', title: 'Title', price: 599, rating: 3.5, cnt: 243
                },
                {
                    image: '@/assets/images/product/6.png', title: 'Title', price: 599, rating: 3.5, cnt: 243
                },
                {
                    image: '@/assets/images/product/7.png', title: 'Title', price: 599, rating: 3.5, cnt: 243
                },
                {
                    image: '@/assets/images/product/8.png', title: 'Title', price: 599, rating: 3.5, cnt: 243
                },
                {
                    image: '@/assets/images/product/9.png', title: 'Title', price: 599, rating: 3.5, cnt: 243
                },
                {
                    image: '@/assets/images/product/10.png', title: 'Title', price: 599, rating: 3.5, cnt: 243
                },
                {
                    image: '@/assets/images/product/11.png', title: 'Title', price: 599, rating: 3.5, cnt: 243
                },
                {
                    image: '@/assets/images/product/12.png', title: 'Title', price: 599, rating: 3.5, cnt: 243
                },
                {
                    image: '@/assets/images/product/1.png', title: 'Title', price: 599, rating: 3.5, cnt: 243
                },
                {
                    image: '@/assets/images/product/2.png', title: 'Title', price: 599, rating: 3.5, cnt: 243
                },
                {
                    image: '@/assets/images/product/3.png', title: 'Title', price: 599, rating: 3.5, cnt: 243
                },
            ]
        }
    },
    methods: {
        
    },
}
</script>

<template>
    <div class="w-screen w-full">
        <Header :pageName="'marketplace'"/>
        <div class="ratinget-content mt-[36px] px-[50px]">
            <span class="ratinget-title">Marketplace</span>
            <div class="w-full">
                <div class="view-tools float-right">
                    <div class="sort-button flex gap-[4px]">
                        <span>Sort by</span>
                        <img src="@/assets/images/ico/drop-arrow.png" class="ico-24" />
                    </div>
                    <div class="view-type">
                        <div class="ico-menu-card ico-32 pointer" :class="this.productMenuType == 0 && 'active'"
                            @click="this.productMenuType = 0">
                        </div>
                        <div class="ico-menu-list ico-32 pointer" :class="this.productMenuType == 1 && 'active'"
                            @click="this.productMenuType = 1">
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-content mt-[60px] flex justify-between">
                <div id="sideNav" class="product-filter lg:flex hidden w-64 h-screen rounded-none border-none mr-[50px]"
                    :class="isSidebarShow && 'flex'">
                    <!-- Items -->
                    <div class="price-range">
                        <span class="range-title">Price, $</span>
                        <div class="flex justify-between items-center gap-4 mt-[12px]">
                            <input class="range-input" placeholder="Min" />
                            <input class="range-input" placeholder="Max" />
                        </div>
                    </div>

                    <div class="filter-list" v-for="(e, i) in filterData" :key="i">
                        <span class="filter-title mb-1">{{ e.title }}</span>
                        <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] mt-2" v-for="(item, j) in e.item"
                            :key="j">
                            <input
                                class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="checkbox" value="" :id="`checkboxDefault${i}-${j}`" />
                            <label class="inline-block pl-[0.15rem] hover:cursor-pointer" :for="`checkboxDefault${i}-${j}`">
                                {{ item.key }}
                            </label>
                        </div>
                    </div>
                </div>


                <div v-if="productMenuType == 0"
                    class="product-list grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto">
                    <div class="product-item col-span-1 p-0 m-0" v-for="(e, i) in productList" :key="i">
                        <img src="@/assets/images/product/1.png" />
                        <div class="product-info w-full">
                            <div class="info-group">
                                <div class="product-title">{{ e.title }}</div>
                                <div class="product-price mt-[2px]">$ {{ e.price }}</div>
                                <StarRating class="mt-[4px]" read-only v-bind:star-size="15" v-bind:increment="0.5"
                                    v-bind:rating="e.rating" />
                            </div>

                            <div class="btn-buy pointer">Buy</div>
                        </div>
                    </div>
                </div>
                <div v-else-if="productMenuType == 1" class="product-list card mx-auto w-full">
                    <div class="product-item mt-[8px]" v-for="(e, i) in productList" :key="i">
                        <img src="@/assets/images/product/1.png" class="max-w-[120px]" />
                        <div class="product-info w-full">
                            <div class="info-group">
                                <div class="product-title">{{ e.title }}</div>
                                <div class="product-price mt-[2px]">$ {{ e.price }}</div>
                                <StarRating class="mt-[4px]" read-only v-bind:star-size="15" v-bind:increment="0.5"
                                    v-bind:rating="e.rating" />
                            </div>

                            <div class="btn-buy pointer">Buy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer class="mt-[150px]" />
    </div>
</template>

<style scoped>
@import '@/assets/style/common.css';

.ratinget-title {
    color: #FFF;
    font-family: Merriweather;
    font-size: 66px;
    font-style: normal;
    font-weight: 700;
    line-height: 99px;
    letter-spacing: 3px;
}

.product-filter {
    flex-direction: column;
    gap: 36px;
}

.range-input {
    padding: 4px 12px;
    border-radius: 4px;
    border: 1px solid #585979;
    color: #9AA6AC;
    font-family: Open Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.108px;
    max-width: 132px;
    background: transparent;
    outline: none;
}

.filter-title {
    color: #FFF;
    font-family: Merriweather;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.12px;
    align-items: flex-end;
}

.product-list.grid {
    border-radius: 10px;
    overflow: hidden;
}

.product-list.grid .product-item {
    display: flex;
    flex-direction: column;
    height: fit-content;
    border: 1px solid rgba(255, 255, 255, 0.15);
}



.product-list.grid .product-item img {
    height: auto;
    aspect-ratio: 31/28;
}


.product-list.grid .product-info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
}


.product-list.grid .product-info .info-group {
    display: flex;
    flex-direction: column;
}


.product-list.card .product-item {
    display: flex;
    height: fit-content;
    border: 1px solid rgba(255, 255, 255, 0.15);
    align-items: center;
    box-sizing: border-box;
}

.product-list.card .product-info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
}

.info-group .product-title {
    color: #FFF;
    font-family: Merriweather;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.084px;
}

.info-group .product-price {
    color: #FFF;
    font-family: Open Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.252px;
}

.product-list .product-info .btn-buy {
    padding: 14px 24px;
    border-radius: 4px;
    border: 1px solid #585979;
    color: #FFF;
    text-align: center;
    font-family: Open Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
}

.sort-button {
    display: flex;
    gap: 4px;
    align-items: center;
    padding: 4px 12px;
    border-radius: 4px;
    border: 1px solid #585979;
}

.sort-button span {
    color: #9AA6AC;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.084px;
}

.view-tools {
    display: flex;
    gap: 16px;
    align-items: center;
}

.view-type {
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 0px;
    overflow: hidden;
}
</style>