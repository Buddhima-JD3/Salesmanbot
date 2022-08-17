import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import '../../client/home/chome.css'
import { Link } from 'react-router-dom';
import Footer from '../../../layouts/footer';
import Header from '../../../layouts/header';
import owner from '../../../apis/modules/owner'
import { useDropzone } from "react-dropzone";
import { Formik, Form, Field } from 'formik'
import { ProductSchema } from "../../../validations";


const EditProduct = () => {
    const { id } = useParams();
    const [files, setFiles] = useState([]);
    const [description, setDesctription] = useState('');
    const [category, setCategory] = useState('A');
    const [products, setProducts] = useState([])

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

    const deleteProduct = async () => {
        try {
            if (window.confirm("Are you sure want to delete this item?")) {
                await owner.deleteProduct(id)
            } else {
                window.location = '/homeowner'
            }
            window.location = '/homeowner'
        } catch (e) {

        }
    }

    const getProduct = async () => {
        try {
            const arr = await owner.getProduct(id)
            setProducts(arr.data)
            console.log(products)
        } catch (e) {

        }
    }

    useEffect(() => {
        getProduct();
    }, [id])

    const updateProduct = async (product) => {
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

            await owner.updateProduct(id, formdata)

            window.location = '/homeowner'
        } catch (e) {

        }
    }

    return (
        <div>
            <Header />
            <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />

            <div class="container" >
                <div className='shopc'>
                    <h1>EDIT PRODUCT</h1>
                    <p><Link to="/homeowner">Home</Link> / Edit Product</p>
                </div>
                <Formik initialValues={{
                    stock: products.stock,
                    size: products.size,
                    category: products.category,
                    price: products.price,
                    sku: products.sku,
                    description: products.description,
                    name: products.name,
                }}
                    // || {
                    //     stock: products.stock,
                    //     size: products.size,
                    //     category: products.category,
                    //     price: products.price,
                    //     sku: products.sku,
                    //     description: products.description,
                    //     name: products.name
                    // }}
                    enableReinitialize={true}
                    validationSchema={ProductSchema}
                    onSubmit={values => {
                        updateProduct(values)
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
                                <Field type="text" id="size" name="size" className="form-control"
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
                                <textarea className="form-control" id="description" name="description" rows="5" defaultValue={products.description} placeholder="Enter Product Description"
                                    onChange={(e) => { setDesctription(e.target.value) }}></textarea >

                            </div>
                            <div hidden={filepath.length > 0} {...getRootProps({ style })}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop your image file here, or click to select files</p>
                            </div>

                            <h4>File Details</h4>
                            <ul>{filepath}</ul>
                            <div className='d-flex justify-content-center'>
                                <center>
                                    <button style={{ marginRight: '10px' }} type="submit" className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-download" viewBox="0 0 16 16">
                                        <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                                        <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
                                    </svg> Update</button>

                                    <button type="submit" className="btn btn-danger" onClick={deleteProduct}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg> Delete </button>
                                </center>
                            </div>
                            <br />
                            <br />
                        </Form>
                    )}
                </Formik>
            </div>
            <Footer />
        </div>
    )
}

export default EditProduct;