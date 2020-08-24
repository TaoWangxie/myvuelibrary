<template>
  <div class="LoadMapView">
      <div class="map-box">
          <!-- <CompAMap></CompAMap> -->
          <CompBMap 
          :clickShowMarker="clickShowMarker"
          :isGetAdressBylnglat="isGetAdressBylnglat"
          @getAddressByLnglat="getAddressByLnglat"
          ></CompBMap>
      </div>
      <span>{{adress}}</span>
      
      
  </div>
</template>

<script>
const CompBMap = () => import("@/components/CompBMap")
// const CompAMap = () => import("@/components/CompAMap")

export default {
  name: 'LoadMapView',
  components: {
      CompBMap,
      // CompAMap
  },
  data() {
    return {
      adress:'',
      clickShowMarker:true,
      isGetAdressBylnglat:true,

    };
  },
  mounted(){

  },
  methods: {
    getAddressByLnglat(addressDetail){
      this.adress = addressDetail
    },
  }
}
</script>
<style lang="scss" scoped>
  .LoadMapView{
    width: 100%;
    height: 100%;
    .map-box{
        width: 600px;
        height: 400px;
    }
  }
 
</style>