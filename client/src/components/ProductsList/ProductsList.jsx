import './ProductsList.css'
import ProductCard from '../ProductCard/ProductCard'

const ProductsList = () => {
    const defaultImageUrl = '/images'
    const products = [
        {
            image: '/images/кроссы.png',
            title: "Кроссовки Nike",
            price: 13990,
        },
        {
            image: '/images/ветровка.png',
            title: "Ветровка Puma",
            price: 5990,
        },
        {
            image: '/images/кроссы.png',
            title: "Кроссовки Nike",
            price: 13990,
        },
        {
            image: '/images/ветровка.png',
            title: "Ветровка Puma",
            price: 5990,
        },
        {
            image: '/images/кроссы.png',
            title: "Кроссовки Nike",
            price: 13990,
        },
        {
            image: '/images/ветровка.png',
            title: "Ветровка Puma",
            price: 5990,
        },
    ]



    return(
        <ul className='product-list'>
            {products.map( (item, index) => {
                return (
                    <li key={index} className='product-item'>
                        <ProductCard item={item}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default ProductsList