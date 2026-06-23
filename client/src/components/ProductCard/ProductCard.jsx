import './ProductCard.css'
import Button from '../Button/Button'
import {ShoppingCart} from 'lucide-react'

const ProductCard = (props) => {
    const {
        item
    } = props

    return (
        <div className='product-card'>
            <img className='product-card__image' src={item.image} alt="product-card" />
                <p className='product-card__title'>{item.title}</p>
                <div className='product-card__bottom'>
                    <p className='product-card__price'>{item.price} Р</p>
                    <Button className="product-card__button" >
                        <ShoppingCart size={16}/>
                    </Button>
                </div>
        </div>
    )
}

export default ProductCard
