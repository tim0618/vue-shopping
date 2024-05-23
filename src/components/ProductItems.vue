<script setup lang="ts">
// import { defineProps } from 'vue';
// const props = defineProps({
//   item: {
//     type: Object,
//     required: true
//   }
// });

const props = defineProps<{
    item: {
        id: Number,
        name: string,
        price: Number,
        imgSrc: string,
        count: Number,
        detail: string,
    }
}>();

const emits = defineEmits(['addToCart']);

const addToCart = () => {
    emits('addToCart', props.item);
};

</script>

<template>
    <div class="itemDetail">
        <img :src="item.imgSrc" width="70%" />
        <div class="aboutitem"><b>Name:</b>{{ item.name }}</div>
        <div class="aboutitem"><b>Price:</b>{{ item.price }}</div>
        <div class="aboutitem"><b>Detail:</b>{{ item.detail }}</div>
        <div class="aboutitem"><b>remaining:</b> {{ item.count }}</div>
        <button @click="addToCart">add to cart</button>
    </div>
</template>

<style lang="scss" scoped>
.itemDetail {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {

        border-radius: 5px;
    }

    .aboutitem {
        margin: 3px 0px;
    }

    button {
        margin: 10px 0px;
        padding: 5px;
        border: 0;
        border-radius: 5px;
        background-color: rgb(153, 153, 153);
        color: white;
    }
}
</style>