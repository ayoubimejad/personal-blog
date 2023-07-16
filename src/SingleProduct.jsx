import './SingleProduct.css'
import { Link } from 'react-router-dom'
export function SingleProduct(Props) {
    //console.log(Props.myProduct) `
    return (
        <div className="col-md-4" key={Props.myProduct.id}>
            <div className="card " style={{ marginTop: "30px" }} >
                <img src={Props.myProduct.image} style={{ height: "250px" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title thetitle">{Props.myProduct.title}</h5>
                    <p className="card-text para">{Props.myProduct.description}</p>
                    <Link to= {`/product/${Props.myProduct.id}`} className="btn btn-primary" >Details</Link>
                </div>
            </div>
        </div>
    )
}