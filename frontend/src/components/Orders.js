import React from 'react'

const Orders = ()=> {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
   <div className='table-responsive'>
       <table className='table'>
           <thead>
               <tr>
                   <th>ID</th>
                   <th>STATUS</th>
                   <th>DATE</th>
                   <th>TOTAL</th>
               </tr>
           </thead>
           <tbody>
               <tr className={"alert-success"}>
                   <td>
                       <a href={'/'} className="link">
                           1
                       </a>
                   </td>
                   <td>Not paid</td>
                   <td>Dec 12 2021</td>
                   <td>$34</td>
               </tr>
               <tr className={"alert-success"}>
                   <td>
                       <a href={'/'} className="link">
                           2
                       </a>
                   </td>
                   <td>paid</td>
                   <td>Dec 12 2021</td>
                   <td>$234</td>
               </tr>
           </tbody>
       </table>
   </div>
   </div>
  )
}
export default Orders
