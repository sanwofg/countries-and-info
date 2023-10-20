import React from 'react'
import img1 from "./night-mode.png"
import { connect } from 'react-redux'
import { MODE } from './action'
import { Link } from "react-router-dom";


function infopage({mode, dispatch}) {
  return (
    <div>
        <div className={mode? "header":"header2"}>
            <div> 
                <p>Where in the world</p>
            </div>
            <div>
                <button onClick={()=> dispatch({type:MODE})}>
                    <img className="mode-img" src={img1}/> 
                </button>
            </div>
        </div>

        <div>
            {/* <Link to="/infopage">
                <button>
                    back
                </button>
            </Link> */}
            
        </div>

        <div className='flag-info'>
            <div>
                <img/>
            </div>
            <div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    </div>
  )
}
const mapStateToProps = (data)=>{
    return{ mode: data.color}
}
export default connect(mapStateToProps) (infopage)