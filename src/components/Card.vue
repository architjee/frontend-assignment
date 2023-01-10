<template>
    <div class="wrapper mx-8">
        <img :src="logoURL" alt="Logo" class="mx-auto logo-circle">
        <img :src="coindata[coincode].path" alt="" class="mx-auto bitcoin-circle">
        <div class="my-card text-center">
            <p class="text-neutral">

                {{ coindata[coincode].name }}
            </p>
            <p>
                <button class="btn btn-wide btn-sm glass">$ {{ coindata[coincode].price }}</button>
            </p>
            <p class="text-neutral">
                Price
            </p>
            <p>
                <button class="btn btn-wide btn-sm glass">$ {{ coindata[coincode].tvl }}</button>
            </p>
            <p class="text-neutral">
                TVL
            </p>
            <p>
                <button class="btn btn-wide btn-sm glass"><span v-for="pair in coindata[coincode].pairs"><img class="w-6 h-6" :src="coindata[pair].path"></span></button>
            </p>
            <p class="text-neutral">
                Popular Pairs
            </p>
        </div>


    </div>


</template>
<script>
import logoURL from '../assets/circle.svg'
export default {
    props: ['coincode', 'coindata'],
    data() {
        return { logoURL }
    },
   
}

</script>
<style scoped>
.wrapper {
    left: auto;
    right: auto;
}

.logo-circle {
    position: relative;
    width: 100px;
    top: 0px;
    left: auto;
    right: auto;
}

.bitcoin-circle {
    position: relative;
    z-index: 3;
    top: -76px;
    width: 56px;
}

.my-card {
    position: relative;
    left: auto;
    right: auto;
    top: -100px;
    width: 291px;
    height: 351px;
    background-size: 291px 351px;
    background-image: url('../assets/Vector.svg');
    padding-top: 80px;
}

.btn {
    border-radius: 100px;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>