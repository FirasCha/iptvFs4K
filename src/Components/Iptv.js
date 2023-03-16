import React, { useState } from 'react'
import dataIptv from './iptvData'
import { Form, InputGroup } from 'react-bootstrap';
import {TbWorld , TbCategory2 , TbFlag} from 'react-icons/tb'
import {HiOutlineUserCircle} from 'react-icons/hi2'
import {MdDriveFileRenameOutline} from 'react-icons/md'
import {BsShieldLock} from 'react-icons/bs'

const Iptv = () => {
  const [search, setSearch] = useState('');
  return (
    <>
    <section className='capy-4 container'>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
                type='search'
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search Iptv'
            />
          </InputGroup>
        </Form>
    </section>
    <div>
      <table class="table table-striped table-dark">
        <thead class="thead-dark">
          <tr>
            <th><MdDriveFileRenameOutline/> Name</th>
            <th><TbWorld/> Host</th>
            <th><HiOutlineUserCircle/> Username</th>
            <th><BsShieldLock/> Password</th>
            <th><TbCategory2/> Foot Or No</th>
            <th><TbFlag/> country</th>
          </tr>
        </thead>
        {dataIptv
        .filter((item) => {
          return search === ''
            ? item
            : item.username.includes(search);
        })
        .map((val, key) => {
          return (
            <tbody>
              <tr>
                <td>{val.name}</td>
                <td>{val.host}</td>
                <td>{val.username}</td>
                <td>{val.password}</td>
                <td>{val.bunch}</td>
                <td>{val.country}</td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
    </>
  )
}

export default Iptv