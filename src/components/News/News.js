import React from 'react';
import './News.css';

const News = () => {
    return (
        <div>
            <div className="page__container">
                <span style={{fontSize: '30px'}}>News</span>
            </div>
            <hr className="hr--small"/>
            <div className="news__container">
                <span>We are currently developing our news page.</span><br/>
                <span>Please visit the news page later!</span>
            </div>
        </div>
    )
}

export default News;
