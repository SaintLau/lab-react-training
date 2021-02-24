import React from 'react';

function Rating({children}) {

    return(
        <div className="rating">
           {children >= 0.5 ? '★' : '☆'}
           {children >= 1.5 ? '★' : '☆'}
           {children >= 2.5 ? '★' : '☆'}
           {children >= 3.5 ? '★' : '☆'}
           {children >= 4.5 ? '★' : '☆'}
        </div>
    )

}

export default Rating;