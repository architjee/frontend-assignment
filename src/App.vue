<template>
  <div class="bounding-box overflow-scroll">
    <div class="main-screen flex items-center min-h-screen w-full">
      <div class="utitlity-wrapper">

        <div class="text-base-300">
          Trending assets
        </div>
        <div class="small-cover justify-between">
          <div v-for='coincode in Object.keys(coindata)'>
            <Card :coincode="coincode" :coindata="coindata"></Card>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Card from './components/Card.vue'
import {coindata} from './components/data';
export default {
  components: {
    // shorthand
    Card,

  }
  ,
  data() {
    return {  coindata}
  },


}
</script>

<style scoped>
.bounding-box {
  display: flex;
  flex-direction: column;
  justify-items: center;
  background: #14172B;
}

.utitlity-wrapper {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

}

.small-cover {
  display: flex;
  justify-items: space-between;
  min-width: 1600px
}
</style>