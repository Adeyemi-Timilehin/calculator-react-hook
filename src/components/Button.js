import "./Button.css";
const isoperator=(val)=>{
    return !isNaN(val) 
}
const Button =(props)=>(<div className={` button-wrapper ${isoperator(props.children) ?null : 'operator'}`} onClick={()=>props.handleclick(props.children)}>{props.children}</div>)
export default Button