import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Rating from "./rating"

class Info extends Component {

    constructor(props){
        super(props)
        console.log(this.props)
        this.state={
            defaultRating:0,
            value:0,
            data:"",
            list:["Overview","Prerequisites","Visa & Logistics","Testimonials"]
        }
    }

    handleChange = (event, value) => {
        this.setState({ value });
      };

    render() {
        return (
            <div style={styles.container}>
                <div>
                    <Paper elevation={0} square >
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            >
                            <Tab label="Overview" href="#overview" />
                            <Tab label="Prerequisites" href="#prerequisites"/>
                            <Tab label="Visa & Logistics" href="#visa"/>
                            <Tab label="Testimonials" href="#testimonials"/>
                        </Tabs>
                    </Paper>
                    <div style={{height:1, backgroundColor:"#ddd"}} />
                </div>
                <div id="overview" style={styles.overviewContainer}>
                    <b style={styles.titleText}>Overview</b>
                    <b style={styles.subTitleText}>Organisation</b>
                    <p style={styles.dataText}>{this.props.data.branch.organisation.name}</p>
                    <p style={styles.dataText}>{this.props.data.location}</p>
                    <b style={styles.subTitleText}>Role Description</b>
                    <p style={styles.dataText}>{this.props.data.description}</p>
                    <b style={styles.subTitleText}>Main Activities</b>
                    <div>
                    {this.props.data.role_info.learning_points_list.map(item => 
                        <div style={{display:'flex', flexDirection:"row", alignItems:"center", marginTop:20}}>
                            <div style={styles.bullets} />{" "+item}
                        </div>)}
                    </div>
                    <div style={styles.seperator} />
                </div>
                
                <div id="prerequisites">
                    <b style={styles.titleText}>Prerequisites</b>
                    <div style={styles.seperator}></div>

                    <div style={{display:"flex", flexDirection:"row"}}>
                        <b style={styles.subTitleText}>Backgrounds</b>
                        <div style={{width:"100%",marginLeft:50}}>
                            <p style={styles.subDataText}>Preferred</p>
                            {this.props.data.backgrounds.map(item => 
                                <p style={styles.dataText}>
                                    {item.name}
                                </p>)}
                            <p style={{marginTop:40}} />
                            <div style={styles.seperator} />
                        </div>
                    </div>

                    <div style={{display:"flex", flexDirection:"row"}}>
                        <b style={styles.subTitleText}>Skills</b>
                        <div style={{width:"100%",marginLeft:110}}>
                            <p style={styles.subDataText}>Required</p>
                                {this.props.data.skills.map(item => 
                                    item.option === "required"
                                    ?   <p style={styles.dataText}>
                                            {item.name}
                                        </p> :<div /> 
                                )}
                            <p style={styles.subDataText}>Preferred</p>
                                {this.props.data.skills.map(item =>
                                    item.option === "preferred"
                                    ?   <p style={styles.dataText}>
                                            {item.name}
                                        </p> :<div />   
                                )}
                            <p style={{marginTop:40}} />
                            <div style={styles.seperator} />
                        </div>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <b style={styles.subTitleText}>Citizenships</b>
                        <div style={{width:"100%",marginLeft:60}}>
                            <p style={styles.subDataText}>Preferred</p>
                            {this.props.data.nationalities.map(item => 
                                <p style={styles.dataText}>
                                    {item.name}
                                </p>)}
                            <p style={{marginTop:40}} />
                            <div style={styles.seperator} />
                        </div>
                    </div>

                    <div style={{display:"flex", flexDirection:"row"}}>
                        <b style={styles.subTitleText}>Languages</b>
                        <div style={{width:"100%",marginLeft:70}}>
                            <p style={styles.subDataText}>Preferred</p>
                            {this.props.data.languages.map(item => 
                                <p style={styles.dataText}>
                                    {item.name}
                                </p>)}
                            <p style={{marginTop:40}} />
                            <p style={{marginTop:40}} />
                            <div style={styles.seperator} />
                        </div>
                    </div>

                    <div style={{display:"flex", flexDirection:"row"}}>
                        <b style={styles.subTitleText}>Study Levels</b>
                        <div style={{width:"100%",marginLeft:75}}>
                            <p style={styles.subDataText}>Preferred</p>
                            <p style={styles.dataText}>Level Goes Here</p>
                            <p style={{marginTop:40}} />
                        </div>
                    </div>
                </div>

                <div style={styles.seperator} />

                <div id="selection">
                    <b style={styles.titleText}>Selection Process</b>
                    <p style={styles.dataText}>{this.props.data.role_info.selection_process}</p>
                </div>

                <div style={styles.seperator} />

                <div id="visa">
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <b style={styles.subTitleText}>Working Hours</b>
                        <div style={{width:"100%",marginLeft:50}}>
                            <p style={styles.dataText}>sample</p>
                            <p style={styles.dataText}>sample</p>
                            <p style={{marginTop:40}} />
                            <div style={styles.seperator} />
                        </div>
                    </div>

                    <div style={{display:"flex", flexDirection:"row"}}>
                        <b style={styles.subTitleText}>Logistics</b>
                        <div style={{width:"100%",marginLeft:75}}>
                            <div>
                                {this.props.data.logistics_info.computerProvided === "undefined"
                                    ? 
                                    <div style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                                        <img style={{height:16, width:16, marginRight:10}} src="./error.png" />
                                        <p style={styles.dataText}>Computer Provided</p>
                                        <p style={styles.dataText}>sample</p>
                                    </div>
                                    : 
                                    <div style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                                        <img style={{height:16, width:16, marginRight:10}} src="./success.png" />
                                        <p style={styles.dataText}>Computer Provided</p>
                                        <p style={styles.dataText}>{this.props.data.logistics_info.computerProvided}</p>
                                    </div>
                                }
                            </div>

                            <div>
                                {this.props.data.logistics_info.accommodation_covered === "false"
                                    ? 
                                    <div style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                                        <img style={{height:16, width:16, marginRight:10}} src="./error.png" />
                                        <p style={styles.dataText}>Accomodation Provided</p>
                                        <p style={styles.dataText}>Not Provided</p>
                                    </div>
                                    : 
                                    <div style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                                        <img style={{height:16, width:16, marginRight:10}} src="./success.png" />
                                        <p style={styles.dataText}>Accomodation Provided</p>
                                        <p style={styles.dataText}>{this.props.data.logistics_info.accommodation_covered}</p>
                                    </div>
                                }
                            </div>

                            <div>
                                {this.props.data.logistics_info.food_weekends === "false"
                                    ? 
                                    <div style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                                        <img style={{height:16, width:16, marginRight:10}} src="./error.png" />
                                        <p style={styles.dataText}>Food Provided</p>
                                        <p style={styles.dataText}>Not Provided</p>
                                    </div>
                                    : 
                                    <div style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                                        <img style={{height:16, width:16, marginRight:10}} src="./success.png" />
                                        <p style={styles.dataText}>Food Provided</p>
                                        <p style={styles.dataText}>{this.props.data.logistics_info.food_covered}</p>
                                    </div>
                                }
                            </div>
                            <p style={{marginTop:40}} />
                            <div style={styles.seperator} />
                        </div>
                    </div>

                    <div style={{display:"flex", flexDirection:"row"}}>
                        <b style={styles.subTitleText}>Visa</b>
                        <div style={{width:"100%",marginLeft:110}}>
                            <p style={styles.subDataText}>Visa Type</p>
                            <p style={styles.dataText}>{this.props.data.legal_info.visa_type}</p>

                            <p style={styles.subDataText}>Visa Duration</p>
                            <p style={styles.dataText}>{this.props.data.legal_info.visa_duration}</p>

                            <p style={styles.subDataText}>Visa Link</p>
                            <p style={styles.dataText}>{this.props.data.legal_info.visa_link}</p>

                            <p style={{marginTop:40}} />
                            <div style={styles.seperator} />
                        </div>
                    </div>

                    <div style={{display:"flex", flexDirection:"row"}}>
                        <b style={styles.subTitleText}>Health Insurance</b>
                        <div style={{width:"100%",marginLeft:45}}>
                            <p style={styles.dataText}>{this.props.data.legal_info.health_insurance_info}</p>
                            <p style={{marginTop:40}} />
                            <div style={styles.seperator} />
                        </div>
                    </div>

                    <div style={{display:"flex", flexDirection:"row"}}>
                        <b style={styles.subTitleText}>Host AIESEC office</b>
                        <div style={{width:"100%",marginLeft:35}}>
                            <p style={styles.dataText}>sample</p>
                            <p style={{marginTop:40}} />
                            <div style={styles.seperator} />
                        </div>
                    </div>

                    <div style={{display:"flex", flexDirection:"row"}}>
                        <b style={styles.subTitleText}>Location</b>
                        <div style={{width:"100%",marginLeft:80}}>
                            <p style={styles.dataText}>sample</p>
                            <p style={{marginTop:40}} />
                        </div>
                    </div>
                </div>

                <div id="testimonials">
                    <div style={styles.seperator} />
                    <b style={styles.titleText}>Testimonials</b>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        {this.props.data.reviews.scorecard === null 
                            ? <Rating rate={this.props.data.reviews.scorecard} />
                            : <Rating rate={this.props.data.reviews.scorecard} />
                        }
                    </div>
                    <div style={styles.seperator} />
                </div>
                <div>
                    <p style={{marginTop:40}} />
                    <b style={styles.titleText}>Leadership development</b>
                </div>
            </div>
        );
    }
}

const styles = {
    container:{
        //display:'flex',
        flexDirection:"column"
    },

    tabContainer:{
        display:"flex",
        flexDirection:"row"
    },

    overviewContainer:{
        display:"flex",
        flexDirection:"column"
    },

    seperator:{
        display:"flex", 
        height:1, 
        backgroundColor:"#dddddd",
        marginTop:10,
        marginBottom:10
    },

    titleText:{
        fontSize:20,
        marginTop:10,
        color:"#505050"
    },
    subTitleText:{
        fontSize:16,
        marginTop:10,
        color:"#505050"
    },
    dataText:{
        fontSize:14,
        marginTop:5,
        marginBottom:5,
        color:"#505050"
    },
    subDataText:{
        fontSize:14,
        marginTop:12,
        marginBottom:0,
        color:"#a49b9b"
    },

    bullets:{
        height:8,
        width:8, 
        borderRadius:4, 
        backgroundColor:"#505050",
        marginRight:10,
        marginLeft:40
    }
}

export default Info;