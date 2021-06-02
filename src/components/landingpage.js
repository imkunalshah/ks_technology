import React,{Component } from 'react'
import web1 from './../images/web1.png';
import android from './../images/android.png';
import cloud from './../images/cloud.png';
class Landingpage extends Component {
    render() {
        return (
            <div className="Top">
                <img id="top_cloud" className="cloud" src={cloud} alt="top-cloud"/>
                <img id="top_android" className="android" src={android} alt="android-img"/>
                <h1 id="name">I'm Kunal</h1>
                <p id="work">an Android Developer and a Web Developer</p>
                <img id="bottom_cloud" className="cloud" src={cloud} alt="middle-cloud"/>
                <img id="bottom_android" className="android" src={android} alt="middle-android"/>
                <img id="Web" className="web" src={web1} alt="web-img"/>
            </div>
        )
    }
}
export default Landingpage;