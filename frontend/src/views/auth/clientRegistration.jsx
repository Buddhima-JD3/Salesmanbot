import React, {useState} from "react";
import './login.css';
import auth from "../../apis/modules/auth";
import {SignupSchema} from "../../validations";
import {Field, Form, Formik} from "formik";
import card from './Rectangle.png'
import bot from './bot.png'

export default function ClientRegistration(){
    const [error, setError] = useState("");

    const register = async (data)=>{
        try{
            const payload = {
                name:data.name,
                email:data.email,
                password:data.password, passwordConfirm:data.passwordConfirm
            }
            await auth.register(payload)
            window.location = '/login'
        }catch (e){
            setError('Your email is already exists!!')
        }
    }

    return(
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Register Page</title>
                <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
            </head>

            <body style={{paddingTop: '3em'}}>
            <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
                <div class="container">
                    <div class="card login-card">
                        <div class="row no-gutters">
                        <div class="col-md-6" style={{backgroundColor: "#28303F"}}>
                                <p class="login-card-description" style={{marginTop: "140px"}}>Hi, I'm Alice!</p>
                                <img src={bot} alt="" class="login-card-img" style={{marginLeft: "150px", marginTop: "-10px"}}/>
                                <button type="submit" class="btn btn-block login-btn mb-4" style={{width: "200px", borderRadius: "50px", marginLeft: "177px", marginTop: "25px"}}>SIGN UP</button>
                                </div>
                            <div class="col-md-5">
                                <div class="card-body">
                                    {/* <div class="logo">
                                        <a href="/"><img src={bot} alt="Logo" /></a>
                                    </div> */}
                                    <p class="login-card-description" style={{color: "black", marginLeft: "50px", width: "325px", marginTop: "10px"}}>Signup to your account</p>
                                    <Formik
                                        initialValues={{
                                            name:'',
                                            email: '',
                                            mobile: '',
                                            password:'',
                                            passwordConfirm:''
                                        }}
                                        validationSchema={SignupSchema}
                                        onSubmit={values => {
                                            register(values)
                                        }}
                                    >
                                        {({ errors, touched }) => (
                                            <Form style={{marginLeft: "50px", width: "900px", marginTop: "50px"}}>
                                                <div>
                                                    <Field type="text" name="name" id="name" class="form-control"
                                                           placeholder="Name"/>
                                                    {errors.name && touched.name ?
                                                        <p id={"login-error"} className="text-danger">{errors.name}</p> : null}
                                                </div>
                                                <div>
                                                    <Field type="email" name="email" id="email" class="form-control" placeholder="Email address" />
                                                    {errors.email && touched.email ? <p id={"login-error"} class="text-danger">{errors.email}</p> : null}
                                                </div>
                                                <div>
                                                    <Field type="text" name="phone" id="phone" class="form-control" placeholder="Phone Number" />
                                                    {errors.email && touched.email ? <p id={"login-error"} class="text-danger">{errors.email}</p> : null}
                                                </div>
                                                <div>
                                                    <Field type="password" name="password" id="password" class="form-control" placeholder="Password" />
                                                    {errors.password && touched.password ? <p id={"login-error"} class="text-danger">{errors.password}</p> : null}
                                                </div>
                                                <div>
                                                    <Field type="password" name="passwordConfirm" id="passwordConfirm" class="form-control"
                                                           placeholder="Confirm Password"/>
                                                    {errors.passwordConfirm && touched.passwordConfirm ?
                                                        <p id={"login-error"} className="text-danger">{errors.passwordConfirm}</p> : null}
                                                        {error ? <p id={"login-error"} class="text-danger">{error}</p> : null}
                                                </div>

                                                <button type="submit" class="btn btn-block login-btn mb-4">Register</button>
                                            </Form>
                                        )}
                                    </Formik>
                                    <p class="login-card-footer-text" style={{textAlign: "center", marginLeft: "50px", width: "325px"}}>Already have an account? <a href="/login" class="text-reset">Login here</a></p>
                                </div>
                            </div>
                              
                        </div>
                    </div>
                </div>
            </main>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
            </body>
        </>

    )
}
