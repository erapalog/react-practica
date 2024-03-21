import { Product } from "../interfases/ProductsListResponse"
import { ButtonModal } from "./ButtonModal";
import { ModalComponent } from "./ModalComponent";

interface Props{
    product:Product

}
export const Card = ({product}:Props) => {

    const{id,title,description,images} = product;
    
  return (
    <>
    <div className="card" key={id} style={{height:"40vh"}}>
            <img src={images[0]} className="card-img-top" style={{height:"20vh"}}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description.substring(0,50)}...</p>
            <ButtonModal></ButtonModal>

        </div>
        </div>

        
    </>
  )
}
