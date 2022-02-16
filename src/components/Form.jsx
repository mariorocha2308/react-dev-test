import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import '../sass/form.scss'

const Form = () => {

    const { register, handleSubmit, resetField, formState: { errors } } = useForm();
    const [isShow, setIsShow] = useState()
    const { id } = useParams()

    const onSubmit = (data) => {
        console.log(data);

        setIsShow(true)

        setTimeout(() => {
            setIsShow(false)
        }, 5000);

        resetField('name')
        resetField('email')
        resetField('phone')
        resetField('age')
        
    };

    return (
        <div className='block-form'>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <div className='form-input--text'>
                    <div>
                        <h1>Hola, bienvenido, <br/> sabemos que quieres viajar en un {id}</h1>
                    </div>
                    <input 
                        type="text"  
                        placeholder='Name'
                        className='form-input'
                        {...register("name", { required: true })}
                    />
                    {errors.name && <p className='form-warning'>This field is empty or is invalid name</p>}

                    <input 
                        type="email"  
                        placeholder='Email'
                        className='form-input'
                        {...register("email", { required: true, pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/ })}
                    />
                    {errors.email && <p className='form-warning'>This field is empty or is invalid email</p>}

                    <div className='form-input--number'>
                        <div>
                            <input 
                                type="number"  
                                placeholder='Phone'
                                className='form-input'
                                {...register("phone", { required: true, maxLength: 10, minLength: 10 })}
                            />
                            {errors.phone && <p className='form-warning'>This field is empty or is invalid phone</p>}
                        </div>

                        <div>
                            <input 
                                type="number"  
                                placeholder='Age 18 - 100'
                                className='form-input'
                                {...register("age", { required: true, min: 18, max: 100 })}
                            />
                            {errors.age && <p className='form-warning'>This field is empty or is invalid age</p>}
                        </div>

                    </div>
                    <button className='form-button'>Submit</button>
                </div>
                <div className='ligthBox' style={{ display: isShow === true ? '' : 'none' }}>
                    <span>
                        Tu información fue enviada con éxito, estaremos en contacto
                        contigo
                    </span>
                </div>
            </form>
        </div> 
    );
}

export default Form;