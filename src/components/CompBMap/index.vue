<template>
  <div class="CompBMap">
      <div class="mapBox" id="myBMap"></div>
  </div>
</template>

<script>
import loadMap from '@/utils/loadMap'

export default {
  name: 'CompBMap',
  components: {

  },
  props:{
    clickShowMarker: {
      type: Boolean,
      default: false
    },
    isGetAdressBylnglat: {
      type: Boolean,
      default: false
    },
    isGetLocation: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      myMap:null,
      location:{
        lng: '',
        lat: ''
      },
      ac: {}
    };
  },
  watch:{
    
  },
  mounted(){
      this.initMap()
  },
  methods: {
    initMap() {
      loadMap('BMap').then(() => {
          // 百度地图API功能
          this.myMap = new BMap.Map('myBMap') // 创建Map实例
          const _this = this
          this.myGeo = new BMap.Geocoder()
          this.myMap.centerAndZoom(new BMap.Point(116.404, 39.915), 11) // 初始化地图,设置中心点坐标和地图级别
          //添加地图类型控件
          this.myMap.addControl(
            new BMap.MapTypeControl({
              mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
            })
          )
          this.myMap.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
          this.myMap.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
          //添加缩略图控件
          this.myMap.addControl(new BMap.OverviewMapControl({isOpen:false,anchor:BMAP_ANCHOR_BOTTOM_RIGHT}));
          //添加缩放平移控件
          this.myMap.addControl(new BMap.NavigationControl());
          //添加比例尺控件
          this.myMap.addControl(new BMap.ScaleControl());
          this.myMap.addEventListener('click', function(e) {
            _this.location.lng = e.point.lng
            _this.location.lat = e.point.lat
            //点击是否添加marker
            if(_this.clickShowMarker){
              _this.drawLocation()
            }
          });

          //获取当前浏览器位置
          var geolocation = new BMap.Geolocation();
          geolocation.getCurrentPosition(function(e){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
              var mk = new BMap.Marker(e.point);
              _this.myMap.addOverlay(mk);
              _this.myMap.panTo(e.point);

              _this.location.lng = e.point.lng
              _this.location.lat = e.point.lat

            }
            else {
              alert('failed'+this.getStatus());
            }        
          },{enableHighAccuracy: true})

        })
        .catch(err => {
          console.log('地图加载失败')
        })
    },

    //绘制点
    drawLocation () {
      if(this.location.lng !== "" && this.location.lat !== ""){
        this.myMap.clearOverlays()
        const new_point = new BMap.Point(this.location.lng, this.location.lat)
        const marker = new BMap.Marker(new_point)
        this.myMap.addOverlay(marker)
        this.myMap.panTo(new_point) 
        if(this.isGetAdressBylnglat){
          this.getAddressByLnglat()
        }
      }
    },
    //获取地址
    getAddressByLnglat(){
      var point = new BMap.Point(this.location.lng, this.location.lat)
      let _this = this
      this.myGeo.getLocation(point, function(_e) {
        let address = _e.addressComponents
        let addressDetail =
          address.province +
          address.city +
          address.district +
          address.street +
          address.streetNumber
          console.log(addressDetail)
        _this.$emit("getAddressByLnglat",addressDetail)
      });
    },
  }
}
</script>
<style lang="scss">
  .CompBMap{
    width: 100%;
    height: 100%;
    .mapBox{
        width: 100%;
        height: 100%;
    }
  }
 
</style>