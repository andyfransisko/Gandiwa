import React from 'react'
import Fade from 'react-reveal/Fade'

import '../../App.css'
import '../../Video.css'
import '../../Assets/CSS/Home/HomeContent6.css'

import Video1 from '../../Assets/Images/video/samsat-cikande.mp4'
import Video2 from '../../Assets/Images/video/Samsat-Surabaya-Barat.mp4'
import Video3 from '../../Assets/Images/video/Samsat-Palangkaraya.mp4'
import Video4 from '../../Assets/Images/video/Samsat-Surabaya-Timur.mp4'

class HomeContent6 extends React.Component {

    constructor(){
        super()
        this.state = {
            checkedVideo1: true,
            checkedVideo2: false,
            checkedVideo3: false,
            checkedVideo4: false
        }
        this.handleCheckVideo1 = this.handleCheckVideo1.bind(this);
        this.handleCheckVideo2 = this.handleCheckVideo2.bind(this);
        this.handleCheckVideo3 = this.handleCheckVideo3.bind(this);
        this.handleCheckVideo4 = this.handleCheckVideo4.bind(this);
    }

    handleCheckVideo1 = () => {
        this.setState({
            checkedVideo1: true,
            checkedVideo2: false,
            checkedVideo3: false,
            checkedVideo4: false
        });
    }

    handleCheckVideo2 = () => {
        this.setState({
            checkedVideo1: false,
            checkedVideo2: true,
            checkedVideo3: false,
            checkedVideo4: false
        });
    }

    handleCheckVideo3 = () => {
        this.setState({
            checkedVideo1: false,
            checkedVideo2: false,
            checkedVideo3: true,
            checkedVideo4: false
        });
    }

    handleCheckVideo4 = () => {
        this.setState({
            checkedVideo1: false,
            checkedVideo2: false,
            checkedVideo3: false,
            checkedVideo4: true
        });
    }

    render(){
        return (
            <section>
                <div className="home-sixth-container">
                    <div className="home-sixth-bg" />
                    <div className="home-sixth-header">
                        <Fade bottom>
                            <h2>
                                Expand Your Brand Potential
                            </h2>
                        </Fade>
                    </div>
                    
                    <div className="home-sixth-video">
                        <div>
                            <div class="grid-row reverse video-gallery">
                                <input type="radio" value="1" name="video-list" id="video-1" 
                                checked={this.state.checkedVideo1}
                                onClick={this.handleCheckVideo1} />
                                <label for="video-1">
                                    <span className="label-1">
                                        Cikande
                                    </span>
                                </label>
                                <input type="radio" value="2" name="video-list" id="video-2"
                                checked={this.state.checkedVideo2}
                                onClick={this.handleCheckVideo2} />
                                <label for="video-2">
                                    <span className="label-1">
                                        Surabaya Selatan   
                                    </span>
                                </label>
                                <input type="radio" value="3" name="video-list" id="video-3"
                                checked={this.state.checkedVideo3}
                                onClick={this.handleCheckVideo3} />
                                <label for="video-3">
                                    <span className="label-1">
                                        Palangkaraya
                                    </span>
                                </label>
                                <input type="radio" value="4" name="video-list" id="video-4"
                                checked={this.state.checkedVideo4}
                                onClick={this.handleCheckVideo4} />
                                <label for="video-4">
                                    <span className="label-1">
                                        Surabaya Timur
                                    </span>
                                </label>
 
                                <div class="video video-1">
                                    <video src={Video1} controls muted />
                                </div>

                                <div class="video video-2">
                                    <video src={Video2} controls muted />
                                </div>

                                <div class="video video-3">
                                    <video src={Video3} controls muted />
                                </div>

                                <div class="video video-4">
                                    <video src={Video4} controls muted />
                                </div>

                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeContent6