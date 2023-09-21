import { useContext } from 'react';
import { postOrder } from '../utilities/apiCall';
import { myContext } from '../App';

const Submit = ({ total }) => {

  const { selectedProducts, setSelectedProducts } = useContext(myContext);
  console.log(selectedProducts);
  
  const submitOrder = () => {
    if(selectedProducts.length === 0) {
      alert("Select a product first");
      return;
    }

    postOrder(total, selectedProducts)
    .then(res => {
      alert("Order placed successfully")
      setSelectedProducts([])
    })
    .catch(error => alert(error.message));

  }


  return (
    <div className='mb-4 mt-1 max-sm:w-full text-center'>
      <button className='border py-1 px-3 rounded-xl
      bg-green-600 text-white hover:bg-green-800'
      onClick={submitOrder}>
        Submit
      </button>
    </div>
  )
}

export default Submit