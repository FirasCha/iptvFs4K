import React from 'react'
import dataIptv from './iptvData'

const iptv = () => {
  return (
    <div>
      iptv
      {dataIptv.map((item,index)=>{
        return(
          <div>
            <h5 className='card-title'>host : {item.host}</h5>
            <p className='card-text'>username : {item.username}</p>
            <p className='card-text'>password : {item.password}</p>
            <p className='card-text'>bunch : {item.bunch}</p>
          </div>
        )
      })
      }
    </div>
  )
}

export default iptv