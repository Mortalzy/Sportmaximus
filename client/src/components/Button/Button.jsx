const Button = (props) => {
    const {
        onClick,
        className='',
        children,
        type='button'
    } = props

    return (
        <button
        onClick={onClick}
        className={className}
        type={type}
        >
            {children}
        </button>
    )
}

export default Button