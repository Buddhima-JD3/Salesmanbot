import * as Yup from "yup";

export const SigningForm = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('required'),
    password: Yup.string()
        .min(8, 'password must be at least 8 character')
        .max(50, 'Too Long!')
        .required('required'),
});

export const SignupSchema = Yup.object().shape({
<<<<<<< HEAD
    name:Yup.string().required('required'),
=======
    name: Yup.string().required('required'),
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
    email: Yup.string().email('Invalid email').required('required'),
    password: Yup.string()
        .min(8, 'password must be at least 8 character')
        .max(50, 'Too Long!')
        .required('required'),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'passwords must match')
        .required('required'),
});

export const ProductSchema = Yup.object().shape({
<<<<<<< HEAD
    name:Yup.string().required('required'),
    stock:Yup.string().required('required'),
    size:Yup.number().required('required'),
    // category:Yup.string().required('required'),
    price:Yup.string().required('required'),
    sku:Yup.string().required('required'),
=======
    name: Yup.string().required('required'),
    stock: Yup.string().required('required'),
    size: Yup.number().required('required'),
    // category:Yup.string().required('required'),
    price: Yup.string().required('required'),
    sku: Yup.string().required('required'),
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
    // description:Yup.string().required('required'),
});