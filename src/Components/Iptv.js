import React, { useState } from 'react'
import dataIptv from './iptvData'
import { Form, InputGroup } from 'react-bootstrap';

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
            <th>Name</th>
            <th>Host</th>
            <th>Username</th>
            <th>Password</th>
            <th>Bunch</th>
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