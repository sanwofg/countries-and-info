import { connect } from "react-redux"

function Main(props, {mode}){
    

    return(

        <div className={mode? "container" : "containers"}>
            <div className="flag-div">
                <img className="flag" src={props.flags.png}/>
            </div>
            <div >
                <p className="name"> {props.name}</p>
                <p className="population"> Population: {props.population}</p>
                <p className="region"> Region: {props.region}</p>
                <p className="capital"> Capital: {props.capital}</p>
            </div>
        </div>
      
    )
}
const mapStateToProps =(data)=>{
    return {mode: data.color}
}
export default connect(mapStateToProps)(Main);