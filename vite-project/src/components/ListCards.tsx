import { ProductsHooks } from "../hooks/ProductsHooks"
import { Card } from "./Card";

export const  ListCards = ()=>{

    const {products} = ProductsHooks(
        {initialValue:[]}
    );

  return (
    <>

    <div className="row"> <br /> <br />

        {
            products.map(product=>(
                <div className="col-md-3" key={product.id}>
                
                <Card product={product}></Card> <br />
                </div>
                                           
            ))
            }
        
       </div>

    </>
  )
}


