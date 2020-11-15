import logo, { ReactComponent } from './logo.svg';
import './App.css';
import React from 'react'
import { FaPlusCircle , FaMinusCircle} from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
// BsArrowRepeat
import { IoIosCart } from "react-icons/io";

class App extends React.Component {
  state = {
    counters_array:[0,0,0,0],
    flags_array:[0,0,0,0],
    items:0,
  };

increment = (my_index)=>{
    var sum =0;
    this.setState(({counters_array , flags_array , items})=>{
    const new_array_counters = [...counters_array]
    const new_flags_array = [...flags_array]
    new_array_counters[my_index] = new_array_counters[my_index]+1;
    if(new_array_counters[my_index]>0){
          new_flags_array[my_index] = 1
    }
    else{
      new_flags_array[my_index] = 0
    }
    for (let index = 0; index < new_flags_array.length; index++) {
      sum+=new_flags_array[index];
      
    }
    
    console.log(new_flags_array)
    console.log(sum)

    return{
      counters_array : new_array_counters,
      flags_array : new_flags_array,
      items : sum ,
    }
  })
    // this.setState(({counter})=> ({ counter: counter + 1 }));
};

decrement = (my_index)=>{
  var sum = 0;
  this.setState(({counters_array , flags_array})=>{
  const new_array_counters = [...counters_array]
  const new_flags_array = [...flags_array]
    new_array_counters[my_index] = new_array_counters[my_index]-1;
    if(new_array_counters[my_index]>0){
          new_flags_array[my_index] = 1
    }
    else{
      new_flags_array[my_index] = 0
    }
    for (let index = 0; index < new_flags_array.length; index++) {
      sum+=new_flags_array[index];
      
    }
    
    console.log(new_flags_array)
    console.log(sum)

    return{
      counters_array : new_array_counters,
      flags_array : new_flags_array,
      items : sum ,
    }
})
  // this.setState(({counter})=> ({ counter: counter + 1 }));
};

clear = (e)=>{
  this.setState(({counters_array , flags_array })=>{
    const new_array_counters = [...counters_array]
    const new_flags_array = [...flags_array]
    for(var i=0 ; i<new_array_counters.length ; i++){
      new_array_counters[i] = 0;

    }
    for(var i=0 ; i<new_flags_array.length ; i++){
      new_flags_array[i] = 0;

    }

  return{
    counters_array : new_array_counters,
    flags_array : new_flags_array,
    items : 0,
  }
})
};

// clear = (e)=>{
//   this.setState(({counters_array})=>{
//     {counters_array.map((counter , index) =>{

//       counters_array[index] = 0 ;
//     }
   
//    }
//    return{
//     counters_array : counters_array
//   }
// })
// };

// increment = (e)=>{
//   this.setState((prevState)=> {
//     return{ counter: prevState.counter + 1 }
//   });
// };


  render(){
    const {counters_array} = this.state;
    return(
      <>
        <Items_label value={this.state.items} />
        <table className="base_table">
        <tr><td><Button clear={this.clear} /></td></tr>
        
        {counters_array.map((counter , index) =>(
           <tr><td>
           <Counter index={index} flag={this.state.flags_array[index]} addedValue={index+1} counter={counter} increment={this.increment} decrement={this.decrement}/>
           </td></tr>
        )
        )

        }
        
        </table>
        
        {/* <Counter addedValue={1} counter={counter} increment={this.increment}/>
        <Counter addedValue={2} counter={counter} increment={this.increment}/>
        <Counter addedValue={3} counter={counter} increment={this.increment}/> */}

      </>

    );
  }
}

function Counter (props){

const { index,counter , increment , decrement , flag} = props;

  return(
    <>
    <table>
      <tr>
      <td> <label className={`${( counter ? "label" : "zero_label")}`}>{( !counter ? "Zero" : counter )}</label></td>
      <td> <button className="inc_btn"  onClick={() => increment(index)} ><FaPlusCircle color="white" /></button> </td>
      <td> <button className={`dec_btn ${( !flag ? "dis" : "not_dis")}`}  disabled={!flag} onClick={() => decrement(index)}><FaMinusCircle color="white" /></button></td>
      </tr>
      </table>
    </>
  )
    
  // className={"dec_btn" + ( !flag ? "dis" : "not_dis")}
}

function Button (props){

  const { clear } = props;
  
    return(
      <>
        <button className="reset_btn" onClick={clear} ><FiRefreshCw className="arrow" color="white"/></button> 
        {/* <FiRefreshCw className="arrow" color="white"/> */}
      </>
    )
      
    
  }

  function Items_label (props){
    const {value} = props
      return(
        <div className="header">
            <IoIosCart size="1.4em"/>

            <label><div className="items_count">{value}</div> <span className="items_span"> Items </span></label>

        </div>
      )
        
      
    }

export default App;


// (flags_array)=>{
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//   }

// }