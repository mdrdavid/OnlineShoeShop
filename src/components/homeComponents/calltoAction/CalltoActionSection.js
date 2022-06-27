import React from 'react'

const  CalltoActionSection= () =>{
  return (
    <div className='subscription-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-xs-12'>
                    <div className='subscribe-head'>
                        <h1>DO you need more tips</h1>
                        <p>Signup for free and get the latest tips</p>
                        <form className='form-section'>
                            <input type="text" name='email'
                            placeholder='Your email...'/>
                            <input type="submit" name="subscribe" value="Yes i want"/>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default CalltoActionSection