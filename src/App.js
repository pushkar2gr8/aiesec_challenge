import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import './App.css';
import TitleBar from './TitleBar';
import Info from './Info'
import moment from "moment"
import "react-datepicker/dist/react-datepicker.css";



class App extends Component {

  constructor(){
    super()
    this.state={
      isVisible:true,
      progress:false,
      isLoading:true,
      data:"",
      val:"",

      //form data
      title:"",
      applications_close_date:"",
      earliest_start_date:"",
      latest_end_date:"",
      description:"",
      backgrounds:[],
      skills:[],
      selection_process:"",
      salary:"",
      city:"",
    }
  }

  componentWillMount(){
    this.getData()
  }

  getData = async() =>{
    await fetch("http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/6124?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c&only=data",
    {
      method: 'GET'
    })
    .then(data => data.json())
    .then(jsonData => this.setState({
      isLoading:false,
      data:jsonData
    }))
    .catch(error => alert(error))
  }

  patchData = async() => {

    alert("loading")
    await fetch("http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/6124?"+
    "access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c"+
    "&opportunity_id=6124"+
    "&opportunity[title]="+this.state.title+
    "&opportunity[applications_close_date]="+this.state.applications_close_date+
    "&opportunity[earliest_start_date]="+this.state.earliest_start_date+
    "&opportunity[description]="+this.state.description+
    "&opportunity[role_info][selection_process]="+this.state.selection_process+
    "&opportunity[specifics_info][salary]="+this.state.salary+
    "&opportunity[role_info][city]="+this.state.city,{
      method:"PATCH"
    })
    .then(data => data.json())
    .then(jsonData => {
      this.setState({
        data:jsonData
      })
    })
    .catch(error => alert(error))
  }

  render() {
    if(this.state.isLoading){
      return(
        <div style={{display:"flex", alignItems:"center"}}>
          Loading
        </div>
      )
    }else{
      return (
        <div style={styles.container}>
          <div style={styles.titleContainer}>
            <div style={{width:"100%", backgroundColor:"#000000CC"}}>
              <TitleBar />
              <div style={styles.titleInfo}>
                <b style={styles.titleInfoText}>{this.state.data.title}</b>
                <div style={styles.titleInfoLocationContainer}>
                  <img style={{height:24, width:24}} src="./location.png"></img>
                  <p style={{fontSize:20,marginLeft:10, color:"#fff"}}>{this.state.data.location}</p>
                </div>
                <button style={styles.titleInfoButton}>
                  <p style={{fontSize:20, margin:5}}>Login to Apply</p>
                </button>
                <p style={{color:"#fff", margin:10}}>{this.state.data.status}</p>
              </div>
            </div>
          </div>
          
          <div style={styles.contentContainer}>
            <div>
              <Info data={this.state.data}/>
            </div>
            <div 
              className="shadow"
              style={{height:760, paddingLeft:20, paddingRight:20}}>

                <b style={{display:"flex",justifyContent:"center", color:"#00b9ff", fontSize:"25", marginTop:10}}>
                  {this.state.data.branch.organisation.name}
                </b>

                <b style={styles.formTitleText}>Title</b>
                <div style={styles.editText}>
                  <input 
                    required
                    disabled={this.state.isVisible}
                    placeholder="Title"
                    type="text"
                    onChange={(e) => this.setState({
                      title:e.target.value
                    })}/>
                </div>

                <b style={styles.formTitleText}>Start Date</b>
                <div style={styles.editText}>
                    <input 
                      type="date"
                      required={this.state.isVisible}
                      disabled={this.state.isVisible}
                      placeholder="Select Start Date"
                      onChange={(date) => this.setState({
                        earliest_start_date:date
                      })} />
                </div>

                <b style={styles.formTitleText}>End Date</b>
                <div style={styles.editText}>
                  <input 
                      type="date"
                      required={this.state.isVisible}
                      disabled={this.state.isVisible}
                      placeholder="Select End Date"
                      onChange={(date) => this.setState({
                        applications_close_date:date
                      })} />
                </div>

                <b style={styles.formTitleText}>Description</b>
                <div style={styles.editText}>
                  <input 
                    required
                    disabled={this.state.isVisible}
                    placeholder="Description"
                    type="text"
                    onChange={(e) => this.setState({
                      description:e.target.value
                    })}/>
                </div>

                <b style={styles.formTitleText}>Background</b>
                <div style={styles.editText}>
                  <input 
                    required
                    disabled={this.state.isVisible}
                    placeholder="Background"
                    type="text"
                    onBlur={() => this.setState({
                      backgrounds:this.state.backgrounds.concat({option:"preferred",name:this.state.val})
                    })}
                    onChange={(e) => this.setState({
                      val: e.target.value
                    })}/>
                </div>

                <b style={styles.formTitleText}>Skills</b>
                <div style={styles.editText}>
                  <input 
                    required
                    disabled={this.state.isVisible}
                    placeholder="Skills"
                    type="text"
                    onBlur={() => this.setState({
                      skills:this.state.skills.concat({option:"preferred",name:this.state.val})
                    })}
                    onChange={(e) => this.setState({
                      val: e.target.value
                    })}/>
                </div>

                <b style={styles.formTitleText}>Selection Process</b>
                <div style={styles.editText}>
                  <input 
                    required
                    disabled={this.state.isVisible}
                    placeholder="Selection Process"
                    type="text"
                    onChange={(e) => this.setState({
                      selection_process:e.target.value
                    })}/>
                </div>

                <b style={styles.formTitleText}>Salary</b>
                <div style={styles.editText}>
                  <input 
                    required
                    disabled={this.state.isVisible}
                    placeholder="salary"
                    type="number"
                    onChange={(e) => this.setState({
                      salary:parseInt(e.target.value)
                    })}/>
                </div>

                <b style={styles.formTitleText}>City</b>
                <div style={styles.editText}>
                  <input 
                    required
                    disabled={this.state.isVisible}
                    placeholder="City"
                    type="text"
                    onChange={(e) => this.setState({
                      city:e.target.value
                    })}/>
                </div>

                <div style={{display:"flex", justifyContent:"space-between", margin:20}}>
                    <button style={styles.saveButton} onClick={() => this.patchData()}>
                      Save
                    </button>
                    <button style={styles.editButton} onClick={() => this.setState({
                      isVisible:!this.state.isVisible
                    })}>
                      Edit
                    </button>
                </div>
            </div>
          </div>
          
          <div style={{display:"flex",marginLeft:130}}>
            <p>Our mission is to enable youth to develop four leadership qualities through our experiences and impact the world for the better.</p>
          </div>

          <div style={{display:"flex", justifyContent:"center"}}>
            <div className="shadow" style={styles.videoContainer}>
              <div style={{display:"flex", height:400,alignItems:"center" ,backgroundColor:'#fec845'}}>
                <iframe src="https://player.vimeo.com/video/208095252" width="500" height="300" frameborder="0" allowfullscreen>
                </iframe>
              </div>

              <div style={{marginLeft:30, marginRight:30}}>
                <i style={{textAlign:"center"}}>
                  While interning/volunteering abroad is a challenging experience in itself, we aim to develop a set of leadership qualities within you through our support and guidance.
                </i>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", marginTop:20}}>
                  <div style={{display:"flex", flexDirection:"column", margin:5}}>
                    <img style={{height:50, width:50, borderRadius:25, alignSelf:"center"}} 
                      src="https://cdn-expa.aiesec.org/assets/images/ldm/LDM-05.png"/>
                    <p style={styles.dataText}>
                      Self-Awareness
                    </p>
                  </div>

                  <div style={{display:"flex", flexDirection:"column", margin:5}}>
                    <img style={{height:50, width:50, borderRadius:25, alignSelf:"center"}} 
                      src="https://cdn-expa.aiesec.org/assets/images/ldm/LDM-01.png"/>
                    <p style={styles.dataText}>
                    Empowering Others
                    </p>
                  </div>

                  <div style={{display:"flex", flexDirection:"column", margin:5}}>
                    <img style={{height:50, width:50, borderRadius:25, alignSelf:"center"}} 
                      src="https://cdn-expa.aiesec.org/assets/images/ldm/LDM-07.png"/>
                    <p style={styles.dataText}>
                    World Citizen
                    </p>
                  </div>

                  <div style={{display:"flex",flexDirection:"column", margin:5}}>
                    <img style={{height:50, width:50, borderRadius:25, alignSelf:"center"}} 
                      src="https://cdn-expa.aiesec.org/assets/images/ldm/LDM-03.png"/>
                    <p style={styles.dataText}>
                    Solution Oriented
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.programsContainer}>
            <div style={styles.programItem}>
              <div className="shadow" style={styles.programSubItem}>
                <b style={styles.subTitleText}>Outgoing Preparation Seminar</b>
                <p style={styles.dataText}>Before going abroad, a seminar will be hosted by your local office which includes goal and expectation setting to prepare you.</p>
              </div>
            </div>

            <div style={styles.programItem}>
              <div className="shadow" style={styles.programSubItem}>
                <b style={styles.subTitleText}>Incoming Preparation Seminar</b>
                <p style={styles.dataText}>Upon arrival, a seminar will be hosted by the local office to revisit your goals & expectations and support you with localization.</p>
              </div>
            </div>

            <div style={styles.programItem}>
              <div className="shadow" style={styles.programSubItem}>
                <b style={styles.subTitleText}>Experience Support</b>
                <p style={styles.dataText}>The local office abroad will provide personal & professional training. This may include one-on-one conversations, group learning or workshops. </p>
              </div>
            </div>
          </div>

          <div style={styles.similarOpportunities}>
            <i style={styles.similarTitleText}>Similar opportunities</i> 
          </div>
        </div>
      );
    }
  }
}

const styles = {
  container:{
    display:"flex",
    flexDirection:"column",
    overflow:"auto"
  },

  saveButton:{height:40, width:100, backgroundColor:"#00b9ff", color:"#fff", border:"none"},

  editButton:{height:40, width:100, backgroundColor:"red", color:"#fff", border:"none"},

  titleContainer:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    backgroundPosition:"center",
    backgroundImage:`url('https://cdn-expa.aiesec.org/gis-img/gt_default.png')`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
  },

  titleInfoLocationContainer:{
    display:"flex", 
    flexDirection:"row", 
    alignItems:"center"
  },

  editText:{
    display:"flex", 
    width:"100%",
    justifyContent:"center"
  },

  titleInfoText:{
    fontSize:40, 
    color:"#fff"
  },

  titleInfoButton:{
    height:60, 
    width:200, 
    borderRadius:4,
    border:"none",
    color:"#037ef3", 
    backgroundColor:"#fff"
  },

  contentContainer:{
    display:'flex',
    flexDirection:"row", 
    justifyContent:"center",
    position:"sticky"
  },

  videoContainer:{ 
    display:"flex", 
    flexDirection:"row",
    width:1080,
    height:400,
    margin:20, 
    alignItems:"center",
    justifyContent:"center"
  },

  dataText:{
    fontSize:14,
    marginTop:5,
    marginBottom:5,
    textAlign:"center",
    color:"#505050"
  },

  programsContainer:{
    display:"flex", 
    flexDirection:'row', 
    justifyContent:"space-between", 
    justifyContent:"center"
  },

  subTitleText:{
    fontSize:16,
    marginTop:10,
    color:"#505050"
  },

  formTitleText:{
    display:"flex",
    fontSize:14,
    marginTop:20
  },

  programItem:{
    backgroundColor:"#52aeee", 
    borderRadius:5,  
    margin:5
  },

  programSubItem:{
    height:210, 
    width:340, 
    marginTop:10,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center", 
    backgroundColor:"#fff"
  },

  similarOpportunities:{
    display:"flex",
    justifyContent:"center",
    backgroundColor:"#f9f9f9",
    marginTop:50
  },

  similarTitleText:{
    fontSize:30,
    color:"#505050",
    marginTop:20
  },

  titleInfo:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center", 
    marginTop:40,
    marginBottom:40
  }
}

export default App;

