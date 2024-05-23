<template>
    <div class="footer">
        <router-link class="productpage hyper-link" to="/"><b>Go Back</b></router-link>
    </div>
</template>


<script setup>

</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    width: 100%;
    height: 10%;
    background-color: black;
    justify-content: space-between;
    align-items: center;

    // position: fixed;
    // bottom: 0;
    // left: 0;

    .hyper-link {

        color: beige;
        text-decoration: none;
        padding: 10px 40px;
    }
}
</style>