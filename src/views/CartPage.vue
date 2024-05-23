<template>
    <div>
        <h1>CartPage</h1>
        <div v-if="cart.length === 0">
            購物車上未有商品
        </div>
        <div v-else>
            <div v-for="item in cart" class="cart">
                <div class="cart_left">
                    <img :src="item.imgSrc" width="30%" />
                </div>
                <div class="cart_right">
                    <div class="cart_right_top">
                        <div class="aboutitem"><b>Name:</b>{{ item.name }}</div>
                        <!-- <div class="aboutitem"><b>Detail:</b>{{ item.detail }}</div> -->
                        <div class="aboutitem"><b>Price:</b>{{ item.price }}</div>
                        <!-- <div class="aboutitem"><b>remaining:</b> {{ x.count }}</div> -->
                    </div>
                    <div class="cart_right_buttom">
                        <button @click="remove(1)">Remove</button>
                        <p>{{ counterData.counter }}</p>
                        <button @click="add(1)">add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const cart = JSON.parse(localStorage.getItem("Cart") ?? '[]');
console.log('incart', cart)

const counterData = reactive({
    counter: 0
})

const remove = amount => {
    counterData.counter -= amount
}
const add = amount => {
    counterData.counter += amount
}

</script>

<style scoped lang="scss">
.cart {
    display: flex;
}

.cart_right_buttom {
    display: flex;
}
</style>
