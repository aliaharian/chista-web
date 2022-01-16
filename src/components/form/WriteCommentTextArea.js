import React from "react"

const WriteCommentTextArea = ({
  input,
  label,
  meta: { touched, error },
  placeholder,
  ...custom
}) => (
    <div style={{backgroundColor:"rgb(22,65,255,.05)",borderRadius:"16px",border:'none',padding:"19px",margin:"18px auto"}}>
      <div style={{marginBottom:"5"}}><span style={{fontFamily:"chistaYekanR",fonSize:14,color:"#536B88"}}>ثبت دیدگاه</span><span style={{fontFamily:"yekanLight",fonSize:13,color:"#92A4BB",marginRight:"5px"}}>(به عموم نمایش داده خواهد شد )</span></div>
  <textArea
    rows={3}
    type="text"
    value={input.value}
    onChange={(event)=>{input.onChange(event.target.value)}}
    style={
        {
            '-webkit-appearance': 'none',
            border: 'none',
            background: 'transparent',
            fontFamily: 'yekan',
            width:"100%",
            outline: "none"
        }}
  />
    </div>
)

export default WriteCommentTextArea
