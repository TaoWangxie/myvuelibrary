<template>
  <div class="CompAMap">
      <div class="mapBox" id="myAMap"></div>
  </div>
</template>

<script>
import loadMap from '@/utils/loadMap'

export default {
  name: 'CompAMap',
  components: {

  },
  data() {
    return {
        myMap:null,
    };
  },
  mounted(){
      this.initMap()
  },
  methods: {
    initMap() {
      loadMap('AMap')
        .then(() => {
            console.log('地图加载成功')
            this.myMap = new AMap.Map('myAMap', {
                center: [117.000923, 36.675807],
                zoom: 11
            })
        })
        .catch(err => {
          console.log('地图加载失败')
        })
    }
  }
}
</script>
<style lang="scss">
  .CompAMap{
    width: 100%;
    height: 100%;
    .mapBox{
        width: 100%;
        height: 100%;
    }
  }
 
</style>