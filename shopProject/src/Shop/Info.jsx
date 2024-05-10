import "./Info.css"
import Proptypes from "prop-types"
function Info(props){
    return (
        <>
        <div className="container">
           
           <div>
              <img src={props.img} alt="" height={300} />
              <h3>Category Name</h3>
              <h3>{props.price}</h3>
              <s>$ 1230.00</s>
           </div>
        </div>
        </>
    )
}
Info.propTypes = {
    img: Proptypes.string,
    price : Proptypes.string
}

export default Info;