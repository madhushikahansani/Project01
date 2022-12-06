import React,{useState} from 'react';

function Profile() {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [emailA,setEmailA] = useState("");
    const [phoneNo,setPhoneNo] = useState("");
    const [country,setCountry] = useState("");
    const [language,setLanguage] = useState("");
    
    const handleFirstName = (event)=>{
        //firstname = event.target.value;
        setFirstName(event.target.value);
    }
    const handleLastName = (event)=>{
        //firstname = event.target.value;
        setLastName(event.target.value);
    }
    const handleEmail = (event)=>{
        //firstname = event.target.value;
        setEmailA(event.target.value);
    }
    
    const handlePhoneNo = (event)=>{
        //firstname = event.target.value;
        setPhoneNo(event.target.value);
    }
    const handleCountry = (event)=>{
        //firstname = event.target.value;
        setCountry(event.target.value);
    }
    const handleLanguage = (event)=>{
        //firstname = event.target.value;
        setLanguage(event.target.value);
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
    const languages = [
        {
            name:"English",
            value:"english"
        },
        {
            name:"Arabic",
            value:"arabic"
        }
    ]

    const handleSubmit = () =>{
        console.log("First Name: "+firstName);
        console.log("Last Name : "+lastName);
        console.log("Email :"+ emailA);
        console.log("Phone No:"+phoneNo);
        console.log(" Country :"+ country);
        console.log("Language:"+language); 
    }
  return (
 <div>
  <div className="wrapper bg-white mt-sm-5">
    <h4 className="pb-4 border-bottom">Profile settings</h4>
    {/* <div className="d-flex align-items-start py-3 border-bottom">
        <img src={""}
            className="img" alt=""/>
        <div className="pl-sm-4 pl-2" id="img-section">
            <b className='sp'>Profile Photo</b>
            <p className='sp'>Accepted file type .png. Less than 1MB</p>
            <button className="btn button border mt-4 "><b>Upload</b></button>
        </div>
    </div> */}
    <div className="py-2">
        <div className="row py-2">
            <div className="col-md-6">
                <label for="firstname">First Name</label>
                <input type="text" value={firstName} onChange={handleFirstName} className="bg-light form-control" placeholder="Steve"/>
            </div>
            <div className="col-md-6 pt-md-0 pt-3">
                <label for="lastname">Last Name</label>
                <input type="text" value={lastName} onChange={handleLastName} className="bg-light form-control" placeholder="Smith"/>
            </div>
        </div>
        <div className="row py-2">
            <div className="col-md-6">
                <label for="email">Email Address</label>
                <input type="text" value={emailA} onChange={handleEmail} className="bg-light form-control" placeholder="steve_@email.com"/>
            </div>
            <div className="col-md-6 pt-md-0 pt-3">
                <label for="phone">Phone Number</label>
                <input type="tel" value={phoneNo} onChange={handlePhoneNo} className="bg-light form-control" placeholder="+1 213-548-6015"/>
            </div>
        </div>
        <div className="row py-2">
            <div className="col-md-6">
                <label for="country">Country</label>
                <select name="country" id="country" className="bg-light" onChange={handleCountry}>
                    <option value={''} selected>--Select--</option>
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
            </div>
            <div className="col-md-6 pt-md-0 pt-3" id="lang">
                <label for="language">Language</label>
                <div className="arrow">
                    <select name="language" id="language" className="bg-light" onChange={handleLanguage}>
                        <option value={''} selected>--Select --</option>
                        {
                           languages.map((item,index) =>{
                            return(
                                <option value={item.value}>
                                    {item.name}
                                </option>
                            )
                        }) 
                        }
                    </select>
                </div>
            </div>
        </div>
        <div className="py-3 pb-4 border-bottom">
            <button className="btn btn-primary" onClick={ handleSubmit}>Save Changes</button>
            <button className="btn border sp ">Cancel</button>
        </div>
        <div className="d-sm-flex align-items-center pt-3" id="deactivate">
            <div>
                <b>Deactivate your account</b>
                <p>Details about your company account and password</p>
            </div>
            <div className="ml-auto">
                <button className="btn danger">Deactivate</button>
            </div>
        </div>
    </div>
</div>
 </div>
  )
}

export default Profile;