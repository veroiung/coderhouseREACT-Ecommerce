import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setMail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (

        <div className='Center'>
             <div className='Check'>
            <Form onSubmit={handleConfirm} >
                <Form.Group className="form-outline mb-4" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="Nombre" placeholder="Escriba su Nombre" />
                </Form.Group>
                <Form.Group className="form-outline mb-4" controlId="formBasicEmail">
                    <Form.Label>Dirección de Email</Form.Label>
                    <Form.Control type="email" placeholder="Escriba su E-mail" />
                    <Form.Text className="text-muted">
                        Nunca compartiremos su correo electrónico con nadie más.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="disabledFieldsetCheck"
                        label="Chequee los datos por favor"
                    />
                </Form.Group>
                <Button type="submit">Crear Orden</Button>
            </Form>
            </div>
        </div>

    )
}

export default CheckoutForm