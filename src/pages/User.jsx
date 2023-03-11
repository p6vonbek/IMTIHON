import { useEffect, useState } from 'react'
import { List, ListItem } from '@mui/material'
import { Link } from 'react-router-dom'
const Users = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setList(data))
  }, [])

  return (
    <div>
      <section style={{ display: 'flex', flexWrap: 'wrap' }}>
        {list.slice(0, 100).map((value) => {
          return (
            <Link
              to={`/users/${value.id}`}
              style={{
                fontSize: '25px',
                width: '300px',
                margin: '15px',
                border: '1px solid gray',
                height: 'fit-content',
              }}
              key={value.id}
            >
              <img src={value.url} alt='' width={'100%'} />
              <h5>{value.title}</h5>
            </Link>
          )
        })}
      </section>
    </div>
  )
}

export default Users
