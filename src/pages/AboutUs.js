import React from 'react';
import Card from '../components/Card';
class AboutUs extends React.Component{
     data = [
        {
            id: 1,
            name:'Jane Doe',
            jobTitle:'CEO Founder',
            description:'Some text that describes me lorem ipsum ipsum lorem',
            email:'jane@example.com'
        },
        {
            id:2,
            name:'Mike Ross',
            jobTitle:'Art Director',
            description:'Some text that describes me lorem ipsum ipsum lorem',
            email:'mike@example.com'
        },
        {
            id:3,
            name:'John Doe',
            jobTitle:'Designer',
            description:'Some text that describes me lorem ipsum ipsum lorem',
            email:'john@example.com'
        },
        {
            id:4,
            name:'Kiran',
            jobTitle:'Senior Full stack Developer',
            description:'Some text that describes me lorem ipsum ipsum lorem',
            email:'kiran@example.com'
        }
    ]
    render(){
        return(
            <div>
              <h1 className="about-title">Our Team</h1>
                <p className="about-p">Some text about who we are and what we do.</p>
                <p className="about-m">Resize the browser window to see that this page is responsive by the way.</p>
                   
                        {
                           this.data.map((item,index)=>{
                                return(
                                    <Card id={item.id} name={item.name} jobTitle={item.jobTitle} description={item.description} email={item.email}/>
                                )
                           })
                        }
                    

                    
            </div>
        )
    }
}
export default AboutUs;