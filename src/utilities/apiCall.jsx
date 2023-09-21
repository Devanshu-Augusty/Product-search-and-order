import axios from "axios";

const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/products");
    // console.log(response.data);
    return response.data;
}

const postOrder = async (total, order) => {
    console.log('order');
        
    const response = await axios.post("http://localhost:3000/order",{total, order});
    console.log(response.data);
    return response;
}

export { fetchData, postOrder };