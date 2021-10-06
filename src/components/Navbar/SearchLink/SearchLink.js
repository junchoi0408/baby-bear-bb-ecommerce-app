import { getByDisplayValue } from '@testing-library/dom';
import React, { useState } from 'react'
import { IoIosClose } from 'react-icons/io';
import './SearchLink.css';

const SearchLink = ({ display, getDisplay }) => {
    
    return (
        <div className="searchLink__container">
            <div className="searchLink">
                <IoIosClose className="popUp__close" size={32} onClick={() => getDisplay(!display)}/>
                <div className="popup__message__container">
                    <h3>We are still in the development phase.</h3><br/>
                    <h3>Please do not use real credit card number.</h3><br/>
                    <p>We are sorry for the incovience.</p>
                </div>
            </div>
        </div>
    )
}

export default SearchLink;
