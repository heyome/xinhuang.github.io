import React from 'react';
import Education from './Education';
import Experience from './Experience';
import './App.css';
import ProfilePic from './ProfilePic';

function App() {
  return (
    <div className="App">
      <header>
      <ProfilePic />
        <h1>Xin Huang</h1>
        <p>488 University Ave, Toronto, ON, M5G 0C1</p>
        <p>Phone: 226-338-8183</p>
        <p>Email: x352huan@uwaterloo.ca</p>
        <p>GitHub: <a href="https://github.com/heyome">heyome</a></p>
      </header>
      
      <section>
        <h2>Education</h2>
        <Education 
          university="Northeastern University, Khoury College of Computer Sciences"
          degree="Bachelor of Science in Computer Science and Biology"
          date="Dec 2020"
        />
        <Education 
          university="University of Waterloo, Department of Electrical and Computer Engineering"
          degree="Master of Engineering (MEng) in Electrical and Computer Engineering, Specialized in AI"
          date="Dec 2022"
        />
      </section>

    

      <section>
        <h2>Experience</h2>
        <Experience 
          company="Lichtman Lab at Harvard University Cambridge, MA"
          role="Research Assistant"
          duration="Jul 2019 - Dec 2019"
          link="https://pytorchconnectomics.github.io/datasets/proj/mitoem/index.html"
          responsibilities={[
            'Adopted PyTorch to implement machine learning algorithms with traced data to improve auto-segmentation of mitochondria.'
          ]}
/>

        <Experience 
          company="Haining Zhenxin Fabric Co., Hangzhou, China"
          role="Full Stack Developer"
          duration="Jan 2021 – Dec 2022"
          responsibilities={[
            'Built a full-stack web-based management system for a Chinese fabric company, increasing operational efficiency and providing a user-friendly and logistic interface to employees.',
          ]}
        />

        <Experience 
          company="SASLAB"
          role="Co-Founder"
          duration="Jan 2023 - Present"
          link="https://www.saslab.ca/"
          responsibilities={[
            'Co-founded an advertising and software solutions company.',
            'Oversaw the development and implementation of software solutions for clients.',
            'Managed advertising campaigns to promote our services and attract new clients.',
            ]}
/>


      </section>
      
    </div>
  );
}



export default App;
