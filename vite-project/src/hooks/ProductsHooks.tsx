
import axios from "axios"
import { Product,ProductsListResponse } from "../interfases/ProductsListResponse"
import { useEffect,useState } from "react"

interface Options{
    initialValue:Product[]
}

const loadProducts= async():Promise<Product[]>=> {


    try {
        
      const {data}=await axios.get<ProductsListResponse> ("https://dummyjson.com/products")

      console.log(data.products)
      return data.products;

    } catch (error) {
        
        return [];
    }
  
}
export const ProductsHooks = ({initialValue}:Options) => {

    const [products, setproduct] = useState<Product[]>(initialValue);


    useEffect(() => {
        loadProducts()
         .then(products=> setproduct(products));  
      }, []);

  return {
    products
  }
}
