import React, {useState} from 'react';
//const ContactUs = () => {
function ContactUs(){
    const [firstname,setFirstName] = useState("");
    //let firstname = "";
    const [lastname, setLastName] = useState("");
    const [country,setCountries] = useState("");
    const [subject,setSubject] =useState("");

    const handleFirstName = (event)=>{
        //firstname = event.target.value;
        setFirstName(event.target.value);
    }
    const handleLastName = (event)=>{
    setLastName(event.target.value);
    }
    const handleSubmit = () =>{
        console.log("First Name: "+ firstname);
        console.log("Last Name : "+lastname);
        console.log(" Country :"+ country);
        console.log("Subject :"+ subject);
    }
    const countries = [
        {
            name:"USA",
            value: "usa"
        },
        {
            name:"Canada",
            value:"anada"
        },
        {
            name:"Australia",
            value:"australia"
        }
    ]
    const handleCountry =(event) =>{
       setCountries(event.target.value);
    }
    const handleSubject= (event) =>{
        setSubject(event.target.value);
    }
        return(
            <div>
                    <div className='container'>
                        <div className='con-center'>
                        <h2>Contact Us</h2>
                        <p>Swing by for a cup of coffee, or leave us a message:</p>
                        </div>
                        <div className='row'>
                            <div className="column">
                            <img src={require('./tech.jpg')} className="about-team"/>
                            </div> 
                            <div className="column">
                                <form>
                                <label for="fname">First Name</label>
                                 <input type="text" 
                                        id="fname" 
                                        name="firstname" 
                                        value={firstname}
                                        onChange={handleFirstName}
                                        placeholder="Your name.."/>   
                                 <label for="lname">Last Name</label>
                                 <input type="text" 
                                        id="lname" name="lastname" 
                                        value={lastname}
                                        onChange={handleLastName}
                                        placeholder="Your last name.."/>
                                  <label for="country">Country</label>
                                    <select id="country" 
                                            name="country"
                                            onChange={handleCountry}>
                                            <option value={""}>--Select--</option>
                                                {
                                                    countries.map((item,index) =>{
                                                        return(
                                                            <option value={item.value}>
                                                                {item.name}
                                                            </option>
                                                        )
                                                    })
                                                }
                                    </select> 
                                    <label for="subject">Subject</label>
                                    <textarea id="subject" 
                                              name="subject"
                                              placeholder="Write something.."
                                              onChange={handleSubject} >
                                    </textarea>
                                    <input type="button" 
                                            value="Submit"
                                            onClick={handleSubmit}/>
                                </form>
                            </div>
                        </div>  
                        
                    </div>

                
            </div>
        )
    }

export default ContactUs;
