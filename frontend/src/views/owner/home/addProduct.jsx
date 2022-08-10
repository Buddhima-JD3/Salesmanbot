import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../layouts/footer';
import Header from '../../../layouts/header';
import owner from '../../../apis/modules/owner'
import { useDropzone } from "react-dropzone";
import { Formik, Form, Field } from 'formik'
import { ProductSchema } from "../../../validations";

const Home_Owner = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const baseStyle = {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "90px",
        borderWidth: 2,
        borderRadius: 2,
        borderColor: "#A9A9B0",
        borderStyle: "dashed",
        marginBottom: "20px",
        backgroundColor: "#ffffff",
        color: "default",
        outline: "none",
        transition: "border .24s ease-in-out",
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const activeStyle = {
        borderColor: "#2196f3",
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const acceptStyle = {
        borderColor: "#00e676",
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const rejectStyle = {
        borderColor: "#ff1744",
    };

    const [files, setFiles] = useState([]);
    const [description, setDesctription] = useState('');
    const [category, setCategory] = useState('A');


    //This is used to drag and drop image
    const { acceptedFiles, getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, open } = useDropzone({
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });

    //This is used style drag and drop image
    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [baseStyle, isDragActive, activeStyle, isDragAccept, acceptStyle, isDragReject, rejectStyle]
    );
    const filepath = acceptedFiles.map((file) => (
        <li key={file.name}>
            {file.name} - {file.size} bytes
        </li>
    ));

    //Save product
    const addProduct = async (product) => {
        try {
            console.log(acceptedFiles[0])
            let formdata = new FormData();
            formdata.append("photo", acceptedFiles[0]);
            formdata.append("name", product.name);
            formdata.append("description", description);
            formdata.append("price", product.price);
            formdata.append("sku", product.sku);
            formdata.append("size", product.size);
            formdata.append("stock", product.stock);
            formdata.append("category", category);

            await owner.createProduct(formdata)

            window.location = '/homeowner'
        } catch (e) {

        }
    }


    return (
        <>
            <Header />
            <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />
            <div className='container'>
                <div className='shopc'>
                    <h1>ADD PRODUCT</h1>
                    <p><Link to="/homeowner">Home</Link> / Add Product</p>
                </div>
                <Formik initialValues={{
                    stock: '',
                    size: '',
                    category: '',
                    price: '',
                    sku: '',
                    description: '',
                    name: '',
                }}
                    validationSchema={ProductSchema}
                    onSubmit={values => {
                        addProduct(values)
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-group">
                                        <label style={{ fontWeight: 'bold', color: '#5D5D5D' }} className="form-label">*Product Name</label>
                                        <Field type="text" name="name" id="name" class="form-control" placeholder="Product name" />
                                        {errors.name && touched.name ? <p id={"login-error"} class="text-danger mt-1">{errors.name}</p> : null}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <label style={{ fontWeight: 'bold', color: '#5D5D5D' }}
                                            className="form-label">*SKU</label>
                                        <Field type="text" id="sku" name="sku" className="form-control"
                                            placeholder="Enter SKU" />
                                        {errors.sku && touched.sku ?
                                            <p id={"login-error"} className="text-danger mt-1">{errors.sku}</p> : null}
                                    </div>
                                </div>
                            </div>
                            <div className="form-outline mb-4">
                                <label style={{ fontWeight: 'bold', color: '#5D5D5D' }}
                                    className="form-label">*Quantity</label>
                                <Field type="number" id="size" name="size" className="form-control"
                                    placeholder="Enter Quantity" />
                                {errors.size && touched.size ?
                                    <p id={"login-error"} className="text-danger mt-1">{errors.size}</p> : null}
                            </div>
                            <div className="form-outline mb-4">
                                <label style={{ fontWeight: 'bold', color: '#5D5D5D' }} className="form-label">*Price</label>
                                <Field type="number" id="price" name="price" className="form-control" placeholder="Enter Price" />
                                {errors.price && touched.price ?
                                    <p id={"login-error"} className="text-danger mt-1">{errors.price}</p> : null}
                            </div>
                            <div className="form-outline mb-4">
                                <label style={{ fontWeight: 'bold', color: '#5D5D5D' }} className="form-label">*Stock</label>
                                <Field type="number" id="stock" name="stock" className="form-control" placeholder="Enter Stock Quantity" />
                                {errors.stock && touched.stock ?
                                    <p id={"login-error"} className="text-danger mt-1">{errors.stock}</p> : null}
                            </div>
                            <div className="form-outline mb-4">
                                <label style={{ fontWeight: 'bold', color: '#5D5D5D' }} className="form-label">*Description</label>
                                <textarea className="form-control" id="description" name="description" rows="5" placeholder="Enter Product Description"
                                    onChange={(e) => { setDesctription(e.target.value) }}></textarea >

                            </div>
                            <div hidden={filepath.length > 0} {...getRootProps({ style })}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop your image file here, or click to select files</p>
                            </div>

                            <h4>File Details</h4>
                            <ul>{filepath}</ul>
                            <center>
                                <button type="submit" className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-plus-fill" viewBox="0 0 16 16">
                                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm.5 4v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
                                </svg> Add Product</button>
                            </center>
                            <br />
                        </Form>
                    )}
                </Formik>
            </div>
            <Footer />
        </>
    );
};

export default Home_Owner;