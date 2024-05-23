<template>
    <div class="header">
        <router-link class="productpage hyper-link" to="/productpage"><b>Product Page</b></router-link>
        <router-link class="shoppingcart hyper-link" to="/cartpage"><b>Shopping Cart</b></router-link>
    </div>
</template>


<script setup>

</script>

<style lang="scss" scoped>
.header {
    display: flex;
    width: 100%;
    height: 10%;
    background-color: black;
    justify-content: space-between;
    align-items: center;

    .hyper-link {
        color: beige;
        text-decoration: none;
        padding: 10px 40px;
    }
}

</style>