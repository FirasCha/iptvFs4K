import React from 'react'
import dataIptv from './iptvData'

const iptv = () => {
  return (
    
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Host</th>
          <th>Username</th>
          <th>Password</th>
          <th>Bunch</th>
        </tr>
        {dataIptv.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.host}</td>
              <td>{val.username}</td>
              <td>{val.password}</td>
              <td>{val.bunch}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default iptv