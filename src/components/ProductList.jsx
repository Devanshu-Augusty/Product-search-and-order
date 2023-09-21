import { useEffect, useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../utilities/apiCall";
import { myContext } from "../App";

const ProductList = ({ productName }) => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetchData(url)
    //         .then(data => setProducts(data));
    // }, [])

    const { selectedProducts, setSelectedProducts } = useContext(myContext);
    // console.log(seletedProducts);
    

    const {data: products, error, isLoading} = useQuery({ queryKey: ['productsKey'], queryFn: fetchData });

    productName = productName.toLowerCase();

    if (productName) {
        if(isLoading) return <div>Loading...</div>;
        if(error) return <div>{error.message}</div>;

        return (
            <div  className="absolute left-60 max-sm:left-32
            max-sm:top-11">
                {products.map((product) => {
                    if (product.name.toLowerCase().includes(productName)) {
                        return (
                            <div key={product.name}
                            className="cursor-pointer my-2 p-2 z-10 w-44 bg-black
                            flex flex-col text-white rounded-xl"
                            onClick={() => {
                                if(selectedProducts.includes(product)) {
                                    return;
                                }
                                setSelectedProducts([...selectedProducts, product]);
                            }}>
                                {product.name}
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default ProductList;