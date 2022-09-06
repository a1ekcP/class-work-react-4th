import { useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

function SingleProduct(){
const {productId} = useParams();
const [singleProduct, setSingleProducts] = useState({});
const products = useOutletContext();

useEffect(() => {
    if(products?.length){
        setSingleProducts(products.filter(el => el.id == productId)[0]);
    }
}, [products, productId])

return <Col>
<p>Product: {singleProduct.brand} {singleProduct.model} ${singleProduct.price}</p>
</Col>
}

export default SingleProduct;