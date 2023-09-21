import { useEffect, useContext } from "react";
import { myContext } from "../App";

const Table = ({ total, setTotal }) => {

  const { selectedProducts, setSelectedProducts } = useContext(myContext);

  useEffect(() => {
    let sum = 0
    selectedProducts.map(product => (
      sum += product.price
    ));
    setTotal(sum);
  }, [selectedProducts])
  

  if (selectedProducts.length == 0) {
    return (
      <h1 className="text-2xl my-5 border-2 p-2 rounded-md
      border-black text-center max-sm:ml-3">
        No Products Selected
      </h1>
    )
  }

  const deletedProduct = (name) => {
    console.log(name);
    if (confirm("Are you sure you want to delete this Product?")) {
      setSelectedProducts(selectedProducts.filter((product) =>
        product.name !== name
      ));
    } else {
      return;
    }
  }

  return (
    <div className="my-4">
      <table className="border-4 border-slate-500 border-separate
      border-spacing-2 max-sm:border-spacing-0 max-sm:border-collapse
      max-md:border-collapse max-sm:text-xs ">

        <thead>
          <tr>
            <th className="border-2 border-black p-1 max-sm:p-0">Name</th>
            <th className="border-2 border-black p-1 max-sm:p-0">Details</th>
            <th className="border-2 border-black p-1 max-sm:p-0">Dispatch Time</th>
            <th className="border-2 border-black p-1 max-sm:p-0">Price</th>
          </tr>
        </thead>

        <tbody>
          {selectedProducts.map((product, index) => (
            <tr key={index}>
              <td className="border-2 border-green-800 px-2 py-2 max-sm:py-0">
                {product.name}
              </td>
              <td className="border-2 border-green-800 px-2 py-2 max-sm:py-0">
                {product.details}
              </td>
              <td className="border-2 border-green-800 px-2 py-2 max-sm:py-0">
                {product.dispatch_time} day
              </td>
              <td className="border-2 border-green-800 px-6 py-2
              flex gap-1 items-start justify-end max-sm:py-4 max-sm:flex-col">
                {product.price}<p>Rs</p>
                <button className="border-2 px-1 border-red-600 ml-3
                max-sm:ml-2"
                  onClick={() => deletedProduct(product.name)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="flex justify-center items-center mt-3
      text-xl font-bold underline">
        Total: {total} Rs
      </h2>
    </div>
  )
}

export default Table;