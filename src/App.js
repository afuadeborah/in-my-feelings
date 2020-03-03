import React, { Component } from 'react';
import './App.css';

// Custom Imports 
import Header from './components/Header';
import DateForm from './components/DateForm';
import JournalEntry from './components/JournalEntry';
import MoodContainer from './components/MoodContainer';
import axios from 'axios';
import moment from 'moment';




class App extends Component {
  constructor(){
    super();

    this.state = {
      
      albumInfo: [],

      result: [],

    }
  }




  // Axios API Call
  componentDidMount (){
    const apiKey = 'a0b4a2a68217ad3b52fe53e7b7ba0679';

    axios({
        url: 'http://ws.audioscrobbler.com/2.0/',
        method: 'GET',
        responseType: 'json',
        params: {
            api_key: apiKey,
            method: 'artist.gettopalbums',
            artist: 'drake',
            format: 'json'
        }  
    }).then((response) => {

// Manipulate information from the API call 
        const albumArray = response.data.topalbums.album

        const newAlbumArray = [...albumArray];


// Grab the six albums I want to work with
        const sixArray = newAlbumArray.slice(1,7);
        // go into this and add on a mood porperty

// Duplicate the original array and add the mood as a new object
        const newSixArray = [...sixArray];

          newSixArray.map((entry) => {
            
            if(entry.name === "Views"){
              return entry.albumMood = "Happy";

            } else if (entry.name === "Take Care"){
              return entry.albumMood = "Upset";

            } else if (entry.name === "Thank Me Later"){
              return entry.albumMood = "Unsure";

            } else if (entry.name === "Nothing Was the Same"){
              return entry.albumMood = "Confident";

            } else if (entry.name === "Scorpion"){
              return entry.albumMood = "Angry";

            } else if (entry.name === "More Life"){
              return entry.albumMood = "Romantic";
            }

              return newSixArray;
        });

        console.log(newSixArray);
       
        
        this.setState({
                albumInfo: newSixArray,
            })
    })
}

// Display album that corresponds with mood and set to state

 displayAlbumResult = (userSelectedMood) => {
   const finalResult = this.state.albumInfo.filter((album) => {
    return album.albumMood === userSelectedMood;

   })

   this.setState({
     result: finalResult,
   })   
 }
 
  startOver = () => {



    this.setState({
      result: [],
    })
  }




  render (){
    
    return (

    <div className="App wrapper">
      <Header />

      
      <DateForm  />

      <JournalEntry 
       time={moment().format("h A")}
       date={moment().format("MMMM D")}
        
      />
      
      <div className="mood-entry">
        <h2>Choose a mood below.</h2>
        <div className="mood-container">
          <MoodContainer 
            childMood={this.displayAlbumResult}
          />
        </div>
      </div>


      <div className="album-container">

          {/* Go into state that we set with the new array and map over it  */}
          {this.state.result.map((album, index) => {
            return(
              <div key={index} className="result-box" >
                  <h2>So you're feeling {album.albumMood}? Listen to</h2>
                  <h3>{album.name}</h3>
                  <img src={album.image[3]["#text"]} alt={`Cover of ${album.name}`}/>
              </div>
            );

          })}

      </div>
    </div>
    );
  }
  
}

export default App;


// The constructor is a method that’s automatically called during the creation of an object from a class.
// this used in constructor always refers to the constructor object and aLWAYS contains the props property

// Credits
// A big shoutout to the Gratitude Journal example by Alexandra Lim for a flow, and imports to help create this project






  // Get Info from DateForm
  // printDate = (e, selectDate) => {
  //   e.preventDefault();
    
  //   console.log('you grabbed the date from journal entry');
  //   console.log(selectDate);
  // }

 

  //INFO
//name: albumArray[index].name
//image: albumArray[index].image[3]."#text"
    // put this info into the image url
