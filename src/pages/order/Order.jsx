import { useEffect, useState } from 'react';
import AnimatedTable from '../../components/oder/OrderShow';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import TabelLinks from '../../components/tabelLinks/TabelLinks';


const Order = () => {
  const [searchparams] = useSearchParams(); // No need to setsearchparams here
  const [order, setOrder] = useState([]);
  const [location, setlocation] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let getlocation = (e) => {
    let a = []
    for (let i = 0; i < e.length; i++) {
      a = [...a, {
        price: e[i].ride,
        name: e[i].user,
        phone: e[i].phone,
        lat: e[i].location.location[0],
        lng: e[i].location.location[1]
      }];
    }
    return a
  }
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        const about = searchparams.get('about');
        let endpoint = 'https://daily-api-tan.vercel.app/order/';

        // Determine endpoint based on "about" parameter
        if (about === 'cancel') {
          endpoint = 'https://daily-api-tan.vercel.app/order/cancel/show';
        } else if (about === 'take') {
          endpoint = 'https://daily-api-tan.vercel.app/order/take/show';
        } else if (about === 'done') {
          endpoint = 'https://daily-api-tan.vercel.app/order/done/show';
        }

        const response = await axios.get(endpoint);
        setOrder(response.data.result || []); // Fallback to empty array if no result
      } catch (err) {
        console.error('Failed to fetch orders:', err);
        setError('Failed to load orders. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [searchparams]);
  console.log(location);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-4">{error}</div>;
  }
  return (
    <div className="w-full">
      {/* Table Links */}
      <div className="w-full overflow-x-auto bg-gray-100 py-2">
        <TabelLinks />
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <motion.table
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-w-full border-collapse border border-gray-200"
        >
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-200">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="px-4 py-2 border border-gray-200 text-left">Name</th>
              <th className="px-4 py-2 border min-w-[270px] border-gray-200 text-left">Items</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Price</th>
              <th className="px-4 py-2 border border-gray-200">Ride</th>
              <th className="px-4 py-2 border border-gray-200">promo</th>
              <th className="px-4 py-2 border border-gray-200">Total</th>
              <th className="px-4 py-2 border border-gray-200">usecridet</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {order.map((e) => (
              <AnimatedTable order={e} key={e._id} />
            ))}
            {order.length == 0 && <h1
              className='text-center '
            >no order</h1>}
          </tbody>
          {/* Table Footer */}
          <tfoot>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 border border-gray-200"></td>
              <td className="px-4 py-2 border border-gray-200">Name</td>
              <td className="px-4 py-2 border border-gray-200">Items</td>
              <td className="px-4 py-2 border border-gray-200">Price</td>
              <td className="px-4 py-2 border border-gray-200">Ride</td>
              <td className="px-4 py-2 border border-gray-200">Total</td>
            </tr>
          </tfoot>
        </motion.table>
      </div>

    </div>
  );
};

export default Order;
