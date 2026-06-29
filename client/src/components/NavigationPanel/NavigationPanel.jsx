import './NavigationPanel.css'
import { Link } from 'react-router-dom'

const NavigationPanel = (props) => {
    const {
        items,
        className=''
    } = props

    const user = localStorage.getItem('user')

    const userData = user ? JSON.parse(user) : null

    const modifiedItems = !userData 
        ? items 
        : items
        .filter(item => {
            if (userData.role !== "ADMIN" && item.label === "Admin Panel") {
                return false
            }
            return true
        })
        .map((item, index) => {
            if (item.label === 'Login') {
                return {
                    ...item,
                    label: userData.first_name,
                }
            }
            return item
        })
    
    console.log(modifiedItems);
    
    

    return(
        <nav className='navigation'>
                <ul className='navigation__list'>
                    {modifiedItems.map((item, index) => (
                        <li key={index} className="navigation__list-item">
                            <Link onClick={item.confirmLogout} to={item.to} className="list-item__link">
                                
                                <div className='list-item__content'>
                                    {item.icon}
                                    {item.label}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
    )
}

export default NavigationPanel