import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import './Slider.css';

const Slider = ({ content }) => {
    console.log(content)

    const useStyles = makeStyles(() => ({
        card: {
            margin: '0px 25px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        } 
    }));

    const classes = useStyles();

    return (       
        <>
            {  content &&
                <Card className={classes.card}>
                    <img id={content.id} src={content.url} alt={content.description}/>
                </Card>

            }
        </>
    );
}

export default Slider;