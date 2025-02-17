import { useEffect, useState } from 'react'
import axios from 'axios'
import ItemCard from '../../components/itemcard/Item'
import LoadingSpinner from '../../components/loading'
const Home = () => {
  const [loading, setloading] = useState(true)
  const [items, setitems] = useState([])
  useEffect(() => {
    const getitems = async () => {
      try {
        await axios.get("https://daily-api-tan.vercel.app/item")
          .then(res => {
            console.log(res.data);

            setitems(res.data.result)
            setloading(false)
          })
      } catch (error) {
        console.log(error);

      }
    }
    getitems()
  }, [])

  return (
    <div
      className='w-full h-screen overflow-x-hidden'
    >
      <div
        className='w-full flex flex-wrap justify-center items-center'
      >
        {loading ?
          <LoadingSpinner />
          :
          items.map((e, i) => (
            <ItemCard item={e} key={i} />
          ))}

      </div>

    </div>
  )
}

export default Home