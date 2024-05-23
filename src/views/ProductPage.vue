<template>
    <div class="shopitems">
        <div class="items" v-for="item in shoppingItems" :key="item.id">
            <ProductItems :item="item" @addToCart="addToCart"></ProductItems>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import ProductItems from '../components/ProductItems.vue';
import { ShoppingItemType } from '../interfaces/types';


const shoppingItems = reactive([{
    id: 1,
    name: '排球衣1',
    price: 3999.50,
    imgSrc: 'https://shoplineimg.com/5f58573fa533da00285df250/6540aaa54a866600143ff2e7/540x.webp?source_format=jpg',
    count: 10,
    detail: "吸濕排汗布料布面乾爽舒適\n" +
        "不易黏皮膚單邊肩膀亞瑟士字體印刷亞洲版型\n" +
        "材質：100%聚酯纖維產地：台灣\n"
},
{
    id: 2,
    name: '排球衣2',
    price: 3299.50,
    imgSrc: 'https://shoplineimg.com/5f58573fa533da00285df250/65407759fafb6800234fe438/540x.webp?source_format=jpg',
    count: 12,
    detail: "吸濕排汗布料布面乾爽舒適\n" +
        "不易黏皮膚單邊肩膀亞瑟士字體印刷亞洲版型\n" +
        "材質：100%聚酯纖維產地：台灣\n"
},
{
    id: 3,
    name: '排球衣3',
    price: 2600.00,
    imgSrc: 'https://shoplineimg.com/5f58573fa533da00285df250/65409bfc13d9f914a2fe8b89/540x.webp?source_format=jpg',
    count: 3,
    detail: "吸濕排汗布料布面乾爽舒適\n" +
        "不易黏皮膚單邊肩膀亞瑟士字體印刷亞洲版型\n" +
        "材質：100%聚酯纖維產地：台灣\n"
},
{
    id: 4,
    name: '排球衣4',
    price: 2200.50,
    imgSrc: 'https://shoplineimg.com/5f58573fa533da00285df250/653f835b2abfa9001ddf1b38/540x.webp?source_format=jpg',
    count: 1,
    detail: "吸濕排汗布料布面乾爽舒適\n" +
        "不易黏皮膚單邊肩膀亞瑟士字體印刷亞洲版型\n" +
        "材質：100%聚酯纖維產地：台灣\n"
},
{
    id: 5,
    name: '排球衣5',
    price: 1600.50,
    imgSrc: 'https://shoplineimg.com/5f58573fa533da00285df250/6540715ee3e01b001704562f/540x.webp?source_format=jpg',
    count: 2,
    detail: "吸濕排汗布料布面乾爽舒適\n" +
        "不易黏皮膚單邊肩膀亞瑟士字體印刷亞洲版型\n" +
        "材質：100%聚酯纖維產地：台灣\n"
},
{
    id: 6,
    name: '排球衣6',
    price: 2000.50,
    imgSrc: 'https://shoplineimg.com/5f58573fa533da00285df250/653f6a5f1956cb000e8b5fb6/540x.webp?source_format=jpg',
    count: 10,
    detail: "吸濕排汗布料布面乾爽舒適\n" +
        "不易黏皮膚單邊肩膀亞瑟士字體印刷亞洲版型\n" +
        "材質：100%聚酯纖維產地：台灣\n"
},
{
    id: 7,
    name: '排球衣7',
    price: 6000.00,
    imgSrc: 'https://shoplineimg.com/5f58573fa533da00285df250/653f7b28c180068a100cd4c3/540x.webp?source_format=jpg',
    count: 7,
    detail: "吸濕排汗布料布面乾爽舒適\n" +
        "不易黏皮膚單邊肩膀亞瑟士字體印刷亞洲版型\n" +
        "材質：100%聚酯纖維產地：台灣\n"
},
{
    id: 8,
    name: '排球衣8',
    price: 5400.00,
    imgSrc: 'https://shoplineimg.com/5f58573fa533da00285df250/653b67389fdc56001130cd4f/540x.webp?source_format=jpg',
    count: 5,
    detail: "吸濕排汗布料布面乾爽舒適\n" +
        "不易黏皮膚單邊肩膀亞瑟士字體印刷亞洲版型\n" +
        "材質：100%聚酯纖維產地：台灣\n"
}]);

const storageKey = 'Cart'
const cartItems = reactive<ShoppingItemType[]>([]);

const loadCartFromStorage = () => {
    const savedCart = window.localStorage.getItem(storageKey);
    if (savedCart) {
        try {
            const parsedCart = JSON.parse(savedCart);

            if (Array.isArray(parsedCart)) {
                parsedCart.forEach(item => cartItems.push(item));
            }
        } catch (error) {
            console.error('Failed to parse cart items from localStorage', error);
        }
    }
};

const addToCart = (item) => {
    console.log('add to cart:', item.name);
    cartItems.push(item);
    window.localStorage.setItem(storageKey, JSON.stringify(cartItems));
};

// 在组件挂载时加载购物车数据
onMounted(() => {
    loadCartFromStorage();
});

</script>

<style scoped lang="scss">
.shopitems {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 10%;
    .items {
        width:30%;
        border: 0;
        box-shadow: 5px 5px 5px rgb(137, 137, 137);
        display: flex;
        margin-top: 3%;
        padding: 10px;
    }
}
</style>