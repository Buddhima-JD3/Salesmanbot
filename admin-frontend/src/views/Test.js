import React from 'react';
<<<<<<< HEAD
import { Formik, Form, Field } from 'formik';
=======
import {Field, Form, Formik} from 'formik';
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

<<<<<<< HEAD
export  const ValidationSchemaExample = () => (
=======
export const ValidationSchemaExample = () => (
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
    <div>
        <h1>Signup</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
<<<<<<< HEAD
            {({ errors, touched }) => (
                <Form>
                    <Field name="firstName" />
                    {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                    ) : null}
                    <Field name="lastName" />
                    {errors.lastName && touched.lastName ? (
                        <div>{errors.lastName}</div>
                    ) : null}
                    <Field name="email" type="email" />
=======
            {({errors, touched}) => (
                <Form>
                    <Field name="firstName"/>
                    {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                    ) : null}
                    <Field name="lastName"/>
                    {errors.lastName && touched.lastName ? (
                        <div>{errors.lastName}</div>
                    ) : null}
                    <Field name="email" type="email"/>
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);