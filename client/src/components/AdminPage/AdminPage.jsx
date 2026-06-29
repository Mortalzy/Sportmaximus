import { useState } from "react"
import "./AdminPage.css"

const AdminPage = () => {

    const [formData, setFormData] = useState({
        category_id: 0,
        name: "",
        description: "",
        price: 0, 

    })

    const handleChange = (event) => {   
        const {name, value} = event.target

        setFormData({
            ...formData,
            [name]: value,
        })

        console.log(formData);
    }
    

    return (
        <div className="admin">
            <h1 className="admin__title">Administration Panel</h1>

            <p className="admin__subtitle">You can create, delete, change products and categories</p>

            <p>Create product</p>
            <form className="create-form">
                <input
                type="number"
                name="category_id"
                placeholder="Category ID"
                value={formData.category_id}
                onChange={handleChange}
                />

                <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                />

                <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                />

                <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                />
            </form>

        </div>    
    )
}

export default AdminPage