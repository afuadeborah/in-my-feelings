import React, { Component }  from 'react';



class IntroForm extends Component {

    constructor(){
        super();

        this.state = {

            selectDate: "",

            toggleJournal: "true"

        }

 
    }


// Grab date from main page and extract the value
  handleName = (e) => {

    const inputName = e.target.value;

    this.props.userName(inputName);

    this.setState({
      selectDate: inputName,
      toggleJournal: !this.state.toggleJournal
      
    })
    console.log(inputName);
}



   


    // render (){
 
        
    //     return (
    //         // <div className="date-entry">

                
    //         //     <form className="enter-info" >

    //         //         <label htmlFor="enter-name">What's My Name?</label>

    //         //         <input 
    //         //             type="text" 
    //         //             id="enter-name" 
    //         //             placeholder="Name" 
    //         //             required
    //         //             value={this.state.selectDate}
    //         //             onChange = {this.handleName}
    //         //             tabIndex="0"
    //         //         />
    //         //         {/* <input 
    //         //             type="text" 
    //         //             id="date-select" 
    //         //             placeholder="MM-DD-YYYY" 
    //         //             required
    //         //             value={this.state.selectDate}
    //         //             onChange = {this.handleDate}
    //         //             tabIndex="0"
    //         //         /> */}

    //         //         <button 
    //         //         onClick={this.handleName}
    //         //         style={({display: this.state.toggleJournal ? "block" : "none"})}
    //         //         type="submit"
    //         //         tabIndex="0"
    //         //         >Go</button>

    //         //     </form>
    //         //         {/* {this.state.selectDate ? <h3>{this.state.selectDate}</h3> : null} */}
                    

    //         // </div>
    //     );
    // }
}




export default IntroForm;




//{this.state.selectDate ? <h3>{this.state.selectDate}</h3> : null } 