import React, { useState } from 'react'
import dataIptv from './iptvData'
import { Button, Form, InputGroup } from 'react-bootstrap';
import { TbWorld, TbCategory2, TbFlag } from 'react-icons/tb'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { MdDriveFileRenameOutline } from 'react-icons/md'
import { BsShieldLock, BsTelegram, BsCalendar3 } from 'react-icons/bs'

const Iptv = () => {
  const [search, setSearch] = useState('')
  console.log(dataIptv.length)

  // const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  // console.log(date)
  // console.log(dataIptv[0].expiredDate)
  // if(dataIptv[0].expiredDate===date)
  // {
  //   console.log("same date")
  // }

  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedData = dataIptv.sort((a, b) => {
    if (sortKey) {
      if (sortOrder === 'asc') {
        return a[sortKey] > b[sortKey] ? 1 : -1;
      } else {
        return a[sortKey] < b[sortKey] ? 1 : -1;
      }
    } else {
      return 0;
    }
  });

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };
  const getSortIcon = (key) => {
    if (key === sortKey) {
      return sortOrder === 'asc' ? '▲' : '▼';
    } else {
      return '';
    }
  };
  /**Compare 2 dates */
  const usernames = dataIptv.map((item) => item.username);
  const duplicateUsernames = usernames.filter((username, index) => usernames.indexOf(username) !== index); 
  if (duplicateUsernames.length > 0) {
    console.log('The following usernames are repeated: ', duplicateUsernames);
  }
  /** */
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const todayString = today.toISOString().slice(0, 10);
  const yesterdayString = yesterday.toISOString().slice(0, 10);
  console.log()
  return (
    <>
      <section className='form-horizontal capy-4 container'>
        <div className="form-group">
          <Form className='col-sm-12'>
            <InputGroup className='my-3'>
              <Form.Control
                type='search'
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search Iptv'
              />
              <Button style={{ background: "none" }}
                color='link'
                floating='true'
                size="lg"
                className='text-dark m-0 col-sm-0'
                target="_blank"
                href='https://web.telegram.org/k/'
                role='button'
              >
                <BsTelegram />
              </Button>
            </InputGroup>
          </Form>
        </div>
      </section>
      <div>
        <table className="table table-striped table-dark">
          <thead className="thead-dark">
            <tr>
              <th style={{ cursor: "pointer" }}
                onClick={() => handleSort('name')}
              >
                <MdDriveFileRenameOutline /> Name {getSortIcon('name')}
              </th>
              <th style={{ cursor: "pointer" }}
                onClick={() => handleSort('host')}
              >
                <TbWorld /> Host {getSortIcon('host')}
              </th>
              <th style={{ cursor: "pointer" }}
                onClick={() => handleSort('username')}
              >
                <HiOutlineUserCircle /> Username {getSortIcon('username')}
              </th>
              <th><BsShieldLock /> Password</th>
              <th style={{ cursor: "pointer" }}
                onClick={() => handleSort('expiredDate')}
              >
                <BsCalendar3 /> Date Expiration {getSortIcon('expiredDate')}
              </th>
              <th><TbCategory2 /> Foot Or No</th>
              <th><TbFlag /> country</th>
            </tr>
          </thead>
          {sortedData
            .filter((item) => {
              return search === ''
                ? item
                : ((item.username.includes(search)) || (item.host.includes(search)));
            })
            .map((val, key) => {
              return (
                <tbody>
                  <tr>
                    <td>{val.name}</td>
                    <td>{val.host}</td>
                    <td>{val.username}{" "}
                    {val.dateofadd === todayString ? (
                        <span className="new-flag">New</span>
                      ) : val.dateofadd === yesterdayString ? (
                        <span className="new-flag new-flag-red">New</span>
                      ) : null}
                    </td>
                    <td>{val.password}</td>
                    <td>{val.expiredDate}</td>
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