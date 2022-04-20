import React,{useState} from 'react';
import CommonInput from './CommonInput';

export default function Modal() {
    const [name,setName]=useState();
    const [nameErr,setNameErr]=useState();
    const [email,setEmail]=useState();
    const [emailErr,setEmailErr]=useState();
    const [phone,setPhone]=useState();
    const [phoneErr,setPhoneErr]=useState();
    const [webSite,setWebSite]=useState();
    const [webSiteErr,setWebSiteErr]=useState();

const handleName=(event)=>{
    setName(event.target.value);
    let valid=event.target.value
    if(!valid){
        setNameErr(' This filed is required')
    }else{
        setNameErr('')
    }
}

const handleEmail=(event)=>{
    setEmail(event.target.value);
    let valid=event.target.value
    if(!valid){
        setEmailErr('This field is required')
    }else{
        setEmailErr('');
    }
}
const handlePhone=(event)=>{
    setPhone(event.target.value);
    let valid=event.target.value
    if(!valid){
        setPhoneErr('This field is required')
    }else{
        setPhoneErr('');
    }
}
const handleWebsite=(event)=>{
       setWebSite(event.target.value);
       let valid=event.target.value;
       if(!valid){
           setWebSiteErr('This field is required')
       } else{
           setWebSiteErr('')
       }
}

const handleSubmit=(e)=>{
    e.preventDefault();
}
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
           <CommonInput fields={[
              {
                name:'Name',
                type: "text",
                onchange:handleName,
                value: name,
                err: nameErr,
              },
              {
                name:'Email',
                type: "email",
                onchange:handleEmail,
                value: email,
                err: emailErr,
              },
              {
                name:'Phone',
                type: "text",
                onchange: handlePhone,
                value: phone,
                err: phoneErr,
              },
              {
                name:'Website',
                type: "text",
                onchange:handleWebsite,
                value: webSite,
                err: webSiteErr,
              },
            ]}/>
            </form>
    </div>
  )
}
