
import React, { useState } from 'react'
import { IoIosClose } from 'react-icons/io';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from 'react-router-dom';
import './SearchLink.css';

const SearchLink = ({ display, getDisplay, handleSearch, searchProducts }) => {
    const useStyles = makeStyles((theme) => ({
        search: {
            position: 'relative',
            borderRadius: '24px',
            border: '1px solid #000',
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            marginBottom: '2em',
            [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 1),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'grey',
        },
        inputRoot: {
            color: 'inherit',
            paddingLeft: `calc(2em + ${theme.spacing(4)}px)`,
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            transition: theme.transitions.create('width'),
            marginBottom: '2em',
            [theme.breakpoints.up('md')]: {
            width: '20ch',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className="searchLink__container">
            <div className="searchLink">
                <IoIosClose className="searchLink__close" size={32} onClick={() => getDisplay(!display)}/>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search Product"
                        onChange={handleSearch}
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                
                <div className="popup__message__container">
                    { searchProducts.map((product,index) => {
                        return (
                            <Redirect to={`products/${product.id}`} onClick={() => getDisplay(!display)}><p key={index} style={{marginBottom: '0.5em'}} exact path>{product.name}</p></Redirect>
                        )
                    })}
         
                </div>
            </div>
        </div>
    )
}

export default SearchLink;
