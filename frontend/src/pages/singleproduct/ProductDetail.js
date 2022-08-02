export const ProductDetail = (product) => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1)
    const onClick = (e) => {
        e.preventDefault()
        navigate(`/cart/${id}?quantity=${quantity}`
        )
    }

    const handleQantity = (e) => {
        setQuantity(e.target.value)
    }
    return(
        <div className='product-detail'>
            <div className='product-info'>
                <div className='product-name'>{product.name}</div>
            </div>
            <p>{product.description}</p>
            <div className='product-count'>
                <ProductCount product={product} />
                <ProductQuantityButton className='btn' onClick={onClick}>
                    Add To Cart
                </ProductQuantityButton>
            </div>
            {product.countInStock > 0 ? (
                <>
                    <div className='quantity' >
                        <h6>Quantity</h6>
                        <select
                            value={quantity}
                            onChange={handleQantity}
                        >
                            {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            ) : null}

        </div>
    )
}



export const ProductImage = (product) => {
    console.log(`ProductImage: ${ProductImage}`)
    return (
           <img src={product.image || product.imageFile || product.imageUrl} alt={product.name}
                style={{ whith: "500px", height: "300px" }} />
    )
}
