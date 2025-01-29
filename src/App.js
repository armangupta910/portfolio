import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import chat from './images/chat.png'
import wesplit  from './images/wesplit.jpg'
import quickbite from './images/quickbite.jpg';
import codestur from './images/codestur.jpg';
import tedx from './images/ted.png';
import email from './images/email.webp'
import video from './images/video.webp'

const projectsData = [
  {
    "title": "Camava",
    "category": "An instant one-to-one video calling application based on WebRTC",
    "image": video,
    "url": "https://github.com/armangupta910/Video-Call",
    "liveUrl": "https://34.30.175.132:3000/",
    "type": "web"
  },
  {
    "title": "Quick Chat",
    "category": "A one to one chatting application based on Websockets",
    "image": chat,
    "url": "https://github.com/armangupta910/Quick-Chat-Android-App",
    "liveUrl": "https://appetize.io/app/b_g3xm4msuv5ilczdhcw5tgzoray",
    "type": "mobile"
  },
  {
    "title": "Email Scheduler",
    "category": "Bulk Email Scheduler built using quartz scheduler and MySQL",
    "image": email,
    "url": "https://github.com/armangupta910/Email-Scheduler",
    "liveUrl": "http://34.131.206.50:8080/",
    "type": "web"
  },
  {
    "title": "WeSplit",
    "category": "An expense management application between friends and family",
    "image": wesplit,
    "url": "https://github.com/armangupta910/WeSplit",
    "liveUrl": "https://appetize.io/app/b_a2frcvkygfllrypvrbsltwzvwi", //Email Scheduler
    "type": "mobile"
  },
  {
    "title": "Quick Bite",
    "category": "An end to end food ordering application built on Firebase and Kotlin",
    "image": quickbite,
    "url": "https://github.com/armangupta910/Canteen-IITJ",
    "liveUrl": "https://appetize.io/app/b_zjswp2cziswwxqrazmmi3pylzy",
    "type": "mobile"
  },
  {
    "title": "Codestur",
    "category": "A youtube channel content application to access videos along with tutorial notes",
    "image": codestur,
    "url": "https://github.com/armangupta910/CodeStur",
    "liveUrl": "https://appetize.io/app/b_go4wpxllaacfgfnlqylase6m2m",
    "type": "mobile"
  },
  {
    "title": "TED X IITJodhpur",
    "category": "Official TED X IITJodhpur website for user registration and entry",
    "image": tedx,
    "url": "https://github.com/armangupta910/TEDx_IITJodhpur",
    "liveUrl": "https://tedx.iitj.ac.in/",
    "type": "web"
  }
];

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  
  
  
  

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio projects={projectsData} />
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
