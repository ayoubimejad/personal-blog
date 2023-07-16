import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
    const [myData, setMyData] = useState([]);
    const myUrl = "https://fakestoreapi.com/products";
    useEffect(() => {
        fetch(myUrl).then((res) => res.json()).then((resu) => setMyData(resu));
    }, []);
    const param = useParams();
    //console.log(param)
    return (
        <div className="row" >
            {myData.map((product) => {
                if (product.id === +(param.ProNum)) {
                    return (
                        <div className="col-md-4" key={product.id}>
                            <div className="card " style={{ marginTop: "30px" }} >
                                <img src={product.image} style={{ height: "250px" }} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title thetitle">{product.title}</h5>
                                    <p className="card-text para">{product.description}</p>
                                    <p><span style={{fontWeight:"900"}}>price</span> : {product.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}
export default ProductDetails;