import { useEffect, useState } from "react";
import { SingleProduct } from "./SingleProduct";
import './Links.css'
function Product() {
    const [myData, setMyData] = useState([]);
    const [myData2, setMyData2] = useState([]);
    const [category, setCategory] = useState();
    const myUrl = "https://fakestoreapi.com/products";
    useEffect(() => {
        fetch(myUrl).then((res) => res.json()).then((resu) => { setMyData(resu); setMyData2(resu) });
    }, []);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategory(json))
    }, []);
    const filterData = (cat) => {
        //console.log(myData2)
        const result = myData2.filter((data) => {
            return data.category === cat;
        })
        setMyData(result)
    }

    return (
        <div className="products" style={{ marginTop: "30px" }} >
            <ul>
                {category && category.map((categ) => {
                    return (
                        <a onClick={() => filterData(categ)} key={crypto.randomUUID()} className="categr">{categ}</a>
                    )
                })}
            </ul>
            <div className="container">
                <div className="row" >
                    {myData.map((product) => {
                        return (
                            <SingleProduct myProduct={product} key={product.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Product;