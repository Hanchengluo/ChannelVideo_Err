import React, { useState } from "react"; 
import Taro,{  useReady, useDidShow, useDidHide, usePullDownRefresh,ChannelVideo  } from '@tarojs/taro'
 
import { View    
} from "@nutui/nutui-react-taro";
import { baseUrl, noConsole ,baseUrl_img,LOCATION_APIKEY}  from '../../utils/baseUrl'
 
 

const App = () => {
//onLoad
 // useEffect(() => {})
 
  // 对应 onReady
  useReady(() => {_inti();})

  // 对应 onShow
  useDidShow(() => { 
    
  })

  // 对应 onHide
  useDidHide(() => {})

  // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持 , 详情可查阅：【Hooks】
  usePullDownRefresh(() => {})
  const _inti  = () => { }
 
 
  return (
    <div className="xxx"> 
 <ChannelVideo objectFit="fill"  feedId="export/UzFfAgtgekIEAQAAAAAALbQLU5ax1gAAAAstQy6ubaLX4KHWvLEZgBPEzYNMJH5ZT7GDzNPgMJpkPmv2ZDpd5BqEsGFo2z2V"   finderUserName="sphxino6SeatCwn" /> 
 </div>
  );
};
export default App;