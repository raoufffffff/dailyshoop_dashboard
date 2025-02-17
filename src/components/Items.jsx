import React, { useEffect, useState } from 'react'
import ItemCard from './itemcard/Item'
import { AnimatePresence } from 'motion/react'
import axios from 'axios'
import PlaceholderList from './loading'
const Items = ({ id }) => {
  const body = id == "offer" ? { offer: true } : { type: id }
  const [loading, setLoading] = useState(true)
  const [BestOffer, setBestOffer] = useState([])
  useEffect(() => {
    const getItems = async () => {
      try {
        await axios.put('https://daily-api-tan.vercel.app/item/type',
          {
            offer: (id === "offer"),
            type: id
          }
        )
          .then(res => {
            console.log(res.data, id);

            setBestOffer(res.data.result)
            setLoading(false)
          })

      } catch (error) {
        console.log(error);
      }
    }
    getItems()
  }, [id])

  return (
    <div
      className=' w-full pb-5  ml-auto flex justify-center items-center flex-wrap '
    >
      <AnimatePresence>

        {
          loading ? <PlaceholderList /> :
            BestOffer.map((e, i) => (
              <ItemCard key={i} item={e} />
            ))
        }
      </AnimatePresence>
    </div>
  )
}

export default Items