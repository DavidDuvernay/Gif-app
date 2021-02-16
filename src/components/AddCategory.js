import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories, categories } ) => {
 
    const [inputValue, setInputValue] = useState('');

    const handleinputChange = ( e ) => {
        
        setInputValue( e.target.value )
    };

    const handleSubmit =( e ) => {
        e.preventDefault();

        setCategories(categories => [ inputValue, ...categories]);
        setInputValue('');
    };

    return (
        <form onSubmit = { handleSubmit }>

            <input
                type = "text"
                value = { inputValue }
                onChange = { handleinputChange }
            /> 

        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};