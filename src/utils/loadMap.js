const resource = {
  //百度
  BMap: ['https://api.map.baidu.com/api?v=2.0&ak=03EV2mS83xtLoifvHnRm5MTx5krHDIg0&s=1&callback=onBMapCallback'],
  //高德
  AMap: ['https://webapi.amap.com/maps?v=1.4.15&key=e84ec0fcadebf298f349546e1c433530&plugin=AMap.Geocoder&callback=onAMapCallback'],
}

export default function loadBMap(type) {
    return new Promise(function(resolve, reject) {
      if(type === 'BMap'){
        if (typeof BMap !== 'undefined') {
          resolve(BMap)
        }else{
          window.onBMapCallback = function() {
            resolve(BMap)
          }
          let script = document.createElement('script')
          script.type = 'text/javascript'
          script.src = resource['BMap']
          script.onerror = reject
          document.head.appendChild(script)
        }
      }
      else if(type === 'AMap'){
        if (window.AMap) {
          resolve(window.AMap)
        } else {
          var script = document.createElement('script')
          script.type = 'text/javascript'
          script.async = true
          script.src = resource['AMap']
          script.onerror = reject
          document.head.appendChild(script)
        }
        window.initAMap = () => {
          resolve(window.AMap)
        }
      }

      
      
    })
  }



