import React from 'react'
import {Link} from "react-router-dom"


const Pagination= ()=> {
  return (
      <nav>
    <ul className='pagination justify-content-center'>
        <li className={"page-item active"}>
            <Link className="page-link" t0={"#"}>1</Link>
        </li>
        <li className={"page-item active"}>
            <Link className="page-link" t0={"#"}>1</Link>
        </li>
        <li className={"page-item active"}>
            <Link className="page-link" t0={"#"}>1</Link>
        </li>
        <li className={"page-item active"}>
            <Link className="page-link" t0={"#"}>1</Link>
        </li>
        <li className={"page-item active"}>
            <Link className="page-link" t0={"#"}>1</Link>
        </li>
     </ul>
        
    </nav>
  )
}
export default Pagination
