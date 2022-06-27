import React from 'react'

 const  Rating= ({value, text})=>{
  return (
    <div className='rating'>
        <i
        className={
            value >= 1
            ? "fas fa-star"
            : value >= 0.5
            ? "fas fa-star-half-alt"
            : "far fa=star"
        }></i>
         <i className={
            value >= 2
            ? "fas fa-star"
            : value >= 1.5
            ? "fas fa-star-half-alt"
            : "far fa=star"
        }></i>
        <i className={
            value >= 2
            ? "fas fa-star"
            : value >= 1.5
            ? "fas fa-star-half-alt"
            : "far fa=star"
        }></i>
        <i className={
            value >= 2
            ? "fas fa-star"
            : value >= 1.5
            ? "fas fa-star-half-alt"
            : "far fa=star"
        }></i>
        <i className={
            value >= 2
            ? "fas fa-star"
            : value >= 1.5
            ? "fas fa-star-half-alt"
            : "far fa=star"
        }></i>
        <i className={
            value >= 2
            ? "fas fa-star"
            : value >= 1.5
            ? "fas fa-star-half-alt"
            : "far fa=star"
        }></i>
        <span>{text && text}</span>
        
    </div>
  )
}
export default Rating;
