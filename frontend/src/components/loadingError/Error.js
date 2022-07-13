import React from  "react"

const Message = ({variant, children}) =>{
return <div className={`alert ${variant}`}
style={{padding: "15px", 
textAlign: "start", 
width: "100%",
}}>{children}</div>
};
export default Message;