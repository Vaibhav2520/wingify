import React, { useEffect, useState } from "react";
import Background from "../images/Rectangle 10.png";
import "../styles/login.scss";
import invertedBackground from "../images/invertedRectangle 10.png"



const Login = () => {
  const [email , setEmail] = useState();
  const [date , setDate] = useState(1);
  const [month, setMonth] = useState("January");
  const [year ,setYear] = useState("1973");
  const [password, setPassword] = useState();
  const [companyType , setCompanyType] = useState();
  const [errorHandler , setErrorHandler] = useState({
    email:false,
    date:false,
    month:false,
    year:false,
    password:false,
    companyType:false,
  })
  const checkEmpty = (field) =>{
    return field===undefined || field===null || field==="";
  } 
  const handleSubmit = () =>{

    const tempHandler = {
      email:checkEmpty(email),
      date:checkEmpty(date),
      month:checkEmpty(month),
      year:checkEmpty(year),
      password:checkEmpty(password),
      companyType:checkEmpty(companyType)
    }

    setErrorHandler(tempHandler)
  }

  useEffect(() =>{
    console.log(errorHandler)
  },[errorHandler])
   return (
    <div>
      <img src={Background} alt="Background" className="background" />
      <div className="main-section">
        <div className="main-container">
          <div className="left-container">
            <div className="main-content">
            <h1>Sample heading</h1>
            <span>
              1. Lorem ipsum dolor sit amet consectetur
              <br/>
              2. Adipisicing elit tempore dolorem
              <br/>
              3. Laborum distinctio incidunt quae voluptas tempore dolorem
            </span>
            </div>
          </div>
          <div className="right-container">
          <div className="form-wrapper">
            <h2>Create an account</h2>
            <div className="email">
              <b className="heading">Enter your email</b>
              <input className={  errorHandler.email ? "input error-input" :"input"} value={email} onChange = { (e) =>{
                  setEmail(e.target.value)
              }
              }/>
              <span >{errorHandler.email ? "Please enter your email" :""}</span>
            </div>
            <br />
            <br />
            <b>
              Date of birth <span>(optional)</span>
            </b>
            <div className="dob-container">
              <div className="dob-date">
                <span className="date">Date</span>
                <input
                  type="number"
                  max={31}
                  min={1}
                  className={errorHandler.date ? "date-input error-input" :"date-input"}
                  value={date}
                  onChange = {
                    (e) => {
                      setDate(e.target.value)
                    }
                  }
                />
           
              </div>
              <div className="dob-month">
                <span className="month">Month</span>
                <select className={errorHandler.month ? "month-input error-input" :"month-input"} onChange={(e) =>{
                  setMonth(e.target.value)
                }}>
                  <option value="January">January</option>
                  <option value="Febuary">Febuary</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">
                  July
                  </option>
                  <option value="August"> August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
              <div className="dob-year">
                <span className="year">Year</span>
                <select className={errorHandler.year ? "year-input error-input" :"year-input"} onChange={(e) => {
                      setYear(e.target.value)
                }}>
                  <option value="1973">1973</option>
                  <option value="1972">1972</option>
                  <option value="1971">1971</option>
                  <option value="1970">1970</option>
                  <option value="1969">1969</option>
                  <option value="1968">1968</option>
                </select>
              </div>
              <span >{errorHandler.date || errorHandler.month || errorHandler.year ? "Please enter your date of birth" :""}</span>
            </div>
            <br />
            <br />
            <div className="email">
              <b>Choose a strong password</b>
              <input className={  errorHandler.password ? "input error-input" :"input"} type="password" value={password} onChange={(e) =>{
                setPassword(e.target.value)
              }}/>
            <span >{errorHandler.password ? "Please enter your password" :""}</span>
            </div>
            <br />
            <br />
            <b>Are you an agency or individual?</b>
            <br/>
            <div className="radio">
              <div>
                <input type="radio" value="Indiviual" name="company"  onChange={(e) =>{
                  setCompanyType(e.currentTarget.value)
                  
                }}/>
                <label>Indiviual</label>
              </div>
              <div>
                <input type="radio" value="Agency" name="company" onChange={(e) =>{
                  setCompanyType(e.currentTarget.value) }}/>
                <label>Agency</label>
              </div>
            </div>
              <span >{errorHandler.companyType? "Please enter your companyType" :""}</span>
            <button className="button" onClick={handleSubmit}>Submit</button>
          </div>
          <div className="image-wrapper">
      <img src={invertedBackground} alt="Background" className="background-bottom" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
