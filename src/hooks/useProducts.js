import { useEffect, useState } from "react";

const useProducts = () =>{

    const [products , setProducts] = useState([])

    useEffect(()=>{

        fetch('https://raw.githubusercontent.com/FahadwebD/data-test/main/watch.json')
        .then(res => res.json())
        .then(data => setProducts(data))


    } , [])

    return [products]

}

export default useProducts;