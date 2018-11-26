import React, { Component } from 'react';

class TitleBar extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div>
                    <img 
                        style={styles.titleImage} 
                        src="https://cdn-expa.aiesec.org/assets/images/aiesec-logo-white-blue.svg" />
                </div>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <p style={styles.textStyle}>For Organisation</p>
                    <p style={styles.textStyle}>Help</p>
                    <div style={{backgroundColor:"#fff", width:2, marginTop:20, marginBottom:20}} />
                    <button style={styles.exploreButton}>Explore</button>
                    <p style={styles.textStyle}>Sign Up</p>
                </div>
            </div>
        );
    }
}

const styles = {
    container:{
      display:"flex",
      width:"100%",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    },
    titleImage:{
      width:180,
      height:40,
      marginLeft:20,
    },

    exploreButton:{
        display:"flex",
        backgroundColor:"#00b9ff",
        color:"#fff",
        alignItems:"center",
        justifyContent:"center",
        height:30,
        width:80,
        border:"none",
        borderRadius:5,
        margin:20
    },
    textStyle:{
      color:"#fff",
      margin:20,
    }
  }

export default TitleBar;