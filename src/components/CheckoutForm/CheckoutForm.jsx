import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
 
  const [error, setError] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();

    if (email !== confirmEmail) {
      setError('Las direcciones de E-mail no coinciden, por favor verifique ambos campos.');
      return;
    }

    const userData = {
      name,

      email
    };

    onConfirm(userData);
  };

  return (
    <div className='Center'>
      <div className='Check'>
        <Form onSubmit={handleConfirm}>
          <Form.Group className="form-outline mb-4" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escriba su Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="form-outline mb-4" controlId="formBasicEmail">
            <Form.Label>Dirección de Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Escriba su E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
          </Form.Group>

          <Form.Group className="form-outline mb-4" controlId="formBasicConfirmEmail">
            <Form.Label>Confirmar Dirección de Email</Form.Label>
            <Form.Control
              type="email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              required
              placeholder="Escriba nuevamente su E-mail"
            />
          </Form.Group>

          {error && <p className="error-message">{error}</p>}
          
          <Button type="submit">Crear Orden</Button>
        </Form>
      </div>
    </div>
  );
};

export default CheckoutForm;


/*{ useState, setError, setConfirmEmail } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setMail] = useState('')
    const [confirmEmail, setConfirmMail] = useState('')
    const [orderId, setOrderId] = useState('')

    const generateID = () => {
        const timestamp = Date.now().toString();
        const randomNum = Math.floor(Math.random() * 1000).toString();
        const uniqueID = timestamp + '-' + randomNum;
        setOrderId(uniqueID);
    }

    const handleConfirm = (event) => {
        event.preventDefault()
        generateID()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)

        if (email !== confirmEmail) {
            setError('Error en los correos, por favor verifica ambos campos.');
            return;
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

                        <Form.Group className="form-outline mb-4" controlId="formBasicEmail">
                            <Form.Label>Dirección de Email</Form.Label>
                            <Form.Control type="confirmEmail" value={confirmEmail}
                                onChange={({ target }) => setConfirmEmail(target.value)}
                                required
                                placeholder="Escriba nuevamente su E-mail" />
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
                    {orderId && <p>ID de Orden Generado: {orderId}</p>}
                </div>
            </div>

        )
    }


export default CheckoutForm*/