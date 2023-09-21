import { BsSearch } from 'react-icons/bs';
import ProductList from './ProductList';
import { useState } from 'react';

const Search = () => {
  const [productName, setProductName] = useState("");
  console.log(productName);

  return (
    <div className='flex items-start justify-start gap-4 relative
    my-5 max-sm:ml-3'>

      <div className='flex justify-start items-center gap-2
      border-2 p-2 rounded-xl'>
        <BsSearch />
        <input type="text" placeholder='Product loop-up'
        className='focus:outline-none' 
        onChange={(e) => setProductName(e.target.value)} />
      </div>

      <ProductList productName={productName} />

    </div>

  )
}

export default Search