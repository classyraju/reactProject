import React,{Component} from 'react';
import {ErrorMessage, useFormik} from 'formik';
import * as yup from'yup'


//const validate = values=>
//{
  //var errors ={};
  //if(!values.name)
  //{
  //  errors.name="name is required"
  //}
  //else if(values.name.length >15)
  //{
    // errors.name ="maximum 15 characters only"
  //}
  //else if(values.name.length < 3)
  //{
    // errors.name="minimum 3 character required"
  //}
  //return errors;
//}
const App =()=>
{
  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      confirmPassword:''
    },
    onSubmit:(userInputData)=>
    {
     console.log(userInputData)
    },
    validationSchema:yup.object({
      name:yup.string()
      .strict()
      .trim()
      .required("Name is required")
      .min(3,"minimum 3 character required")
      .max(15,"Maximum 15 character required"),

      email:yup.string()
      .email()
      .required("email is required"),

      password:yup.string()
      .required("password is required"),
     confirmPassword:yup.string()
       .oneOf([yup.ref('password'), null],"confirm password and password must be same")
      .required("confirm password is required")
    })
  })
 
  return(
    <div class ="container">
      <div className ="jumbotron">
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <div class= "form-group">
        <label>Name</label>
        <input type = "text"
        class="form-control"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}/>
        {
          formik.errors.name ?
          <div class="text-danger"> {formik.errors.name}</div>
          :null
        }
      </div>

      <div class= "form-group">
        <label>Email</label>
        <input type = "text"
        class="form-control"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}/>
        {
          formik.errors.email ?
          <div class="text-danger"> {formik.errors.email}</div>
          :null
        }
      </div>

      <div class= "form-group">
        <label>password</label>
        <input type = "text"
        class="form-control"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}/>
        {
          formik.errors.password ?
          <div class="text-danger"> {formik.errors.password}</div>
          :null
        }
        </div>

        <div class= "form-group">
        <label>confirm password</label>
        <input type = "text"
        class="form-control"
        name="confirmPassword"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}/>
        {
          formik.errors.confirmPassword ?
          <div class="text-danger"> {formik.errors.confirmPassword}</div>
          :null
        }
        </div>
        
        <button class= "btn btn-primary">Submit</button>
      </form>
    </div>
     
    </div>
  )
}

export default App;
