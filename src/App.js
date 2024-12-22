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

const projectsData = [
  {
    title: "Quick Chat",
    category: "A one to one chatting application",
    image: chat,
    url: "https://github.com/armangupta910/Quick-Chat-Android-App"
  },
  {
    title: "Email Scheduler",
    category: "Schedule Bulk Emails using an Excel Sheet",
    image: email,
    url: "https://github.com/armangupta910/Email-Scheduler"
  },
  {
    title: "WeSplit",
    category: "An expense management application between friends",
    image: wesplit,
    url: "https://github.com/armangupta910/WeSplit"
  },
  {
    title: "Quick Bite",
    category: "An end to end food ordering application",
    image: quickbite,
    url: "https://github.com/armangupta910/Canteen-IITJ"
  },
  {
    title: "Codestur",
    category: "A youtube channel content application along with tutorial notes",
    image: codestur,
    url: "https://github.com/armangupta910/CodeStur"
  },
  {
    title: "TED X IITJodhpur",
    image: tedx,
    category: "Official TED X IITJodhpur website for user registration and entry",
    url: "https://github.com/armangupta910/TEDx_IITJodhpur"
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
