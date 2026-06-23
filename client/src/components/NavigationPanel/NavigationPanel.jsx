import './NavigationPanel.css'

const NavigationPanel = (props) => {
    const {
        items,
        className=''
    } = props

    return(
        <nav className='navigation'>
                <ul className='navigation__list'>
                    {items.map((item, index) => (
                        <li key={index} className="navigation__list-item">
                            <a className="list-item__link" href="#">
                                <div className='list-item__content'>
                                    {item.icon}
                                    {item.label}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
    )
}

export default NavigationPanel