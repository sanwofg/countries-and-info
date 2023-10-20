import { useState } from "react"
// import datas from "./data.json"
import Main from "./Main"
import img1 from "./night-mode.png"
import { MODE, REGION,SEARCH } from "./action"
import { connect } from "react-redux"
// import { Link } from "react-router-dom"


function Filter({mode, dispatch, datas}){
   
    const info = datas.map(country =>{
        return <Main key = {country.name}
         {...country}   />
      })

      
      
    return(
        <div className={mode? "App":"App2"}>

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
            <div className="row">
                 <input className={mode? "search":"search2"} placeholder="Search a counrty" onChange={(e)=>dispatch({type:SEARCH, payload: e.target.value })}/> 

                 <select className={mode? "selection":"selections"} onChange={(e)=>dispatch({type:REGION, payload:e.target.value})}>
                    <option value={'Africa'}> Africa</option>
                    <option value={'Europe'}>Europe</option>
                    <option value={'Americas'}>Americas</option>
                    <option value={'Asia'}>Asia</option>
                    
                 </select>
            </div>
            
            <div className="all">
                    {info.length >0?
                        info:
                        <div className="empty">NO COUNTRY MATCHED YOUR SEARCH</div>
                    }
                {/* <Link to="/infopage">
                </Link> */}
                
            </div>
        </div>
    )
}
const mapStateToProps =(data)=>{
    return{ mode:data.color, datas:data.data1}
}
export default connect(mapStateToProps)(Filter)