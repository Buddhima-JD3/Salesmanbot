import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../layouts/footer';
import Header from '../../../layouts/header';
import './payment.css';
import SoloAlert from 'soloalert'
import axios from 'axios';
import AuthContext from '../../../context/AuthContext';
import { useCart } from 'react-use-cart';

const Payment = (props) => {
    const transfer_amount = props.total;
    const [card_no, setcard_no] = useState('')
    const [card_cvc, setcard_cvc] = useState('')
    const [exp_date, setexp_date] = useState('')
    const [card_holder_name, setcard_holder_name] = useState('')
    const [balance, setbalance] = useState(100)
    const [postalCode, setpostalCode] = useState(0)
    const { loggedIn } = useContext(AuthContext);


    const {
        emptyCart,
    } = useCart();

    async function sentPayment(e) {
        e.preventDefault()
        try {
            const user_id = loggedIn._id
            const newDetails = {
                postalCode, card_holder_name, exp_date, card_cvc, card_no, user_id, transfer_amount
            }
            const data = (await axios.post("http://localhost:5001/cart-payment", newDetails))
            console.log(data)
            SoloAlert.alert({
                title: "Oops!",
                body: "you purchase was success",
                icon: "success",
                theme: "dark",
                useTransparency: true,
                onOk: function () {
                    emptyCart()
                    window.location.reload(false);
                },
            });


        } catch (e) {
            console.log(e.response.data.message)
            SoloAlert.alert({
                title: "Oops!",
                body: e.response.data.message,
                icon: "error",
                theme: "dark",
                useTransparency: true,
                onOk: function () {

                },
            });
        }

    }
    return (
        <div>
            <Header />
            <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />
            <div class="container" >
                <div className='shopc'>
                    <h1>CARD PAYMENT</h1>
                    <p><Link to="/homeclient">Home</Link> / Cart / Card Payment</p>
                </div>
                <div class="container py-3">
                    <div class="row">
                        <div class="col-12 col-sm-8 col-md-6 mx-auto">
                            <div id="pay-invoice" class="card">
                                <div class="card-body">
                                    <div class="card-title">
                                        <h2 class="text-center">Pay Invoice</h2>
                                    </div>
                                    <hr />
                                    <form action="">
                                        <input type="hidden" id="x_first_name" name="x_first_name" value="" />
                                        <input type="hidden" id="x_last_name" name="x_last_name" value="" />
                                        <input type="hidden" id="x_card_num" name="x_card_num" value="" />
                                        <input type="hidden" id="x_exp_date" name="x_exp_date" value="" />
                                        <div class="form-group text-center">
                                            <ul class="list-inline">
                                                <li class="list-inline-item"><i class="text-muted fa fa-cc-visa fa-2x"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-cc-mastercard fa-2x"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-cc-amex fa-2x"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-cc-discover fa-2x"></i></li>
                                            </ul>
                                        </div>
                                        <div class="form-group">
                                            <label>Payment amount</label>
                                            <h2>LKR {transfer_amount}</h2>
                                        </div>
                                        <div class="form-group has-success">
                                            <label for="cc-name" class="control-label">Name on Card</label>
                                            <input id="cc-name" name="cc-name" type="text" class="form-control cc-name valid" data-val="true" data-val-required="Please enter the name on card" autocomplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name-error"
                                                onChange={(e) => { setcard_holder_name(e.target.value) }} />
                                            <span class="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true"></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="cc-number" class="control-label">Card Number</label>
                                            <input id="cc-number" name="cc-number" type="number" class="form-control cc-number identified visa" data-val="true" data-val-required="Please enter the card number" data-val-cc-number="Please enter a valid card number" autocomplete="cc-number"
                                                onChange={(e) => { setcard_no(e.target.value) }} />
                                            <span class="help-block" data-valmsg-for="cc-number" data-valmsg-replace="true"></span>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="cc-exp" class="control-label">Expiration</label>
                                                    <input id="cc-exp" name="cc-exp" type="text" class="form-control cc-exp" data-val="true" data-val-required="Please enter the card expiration" data-val-cc-exp="Please enter a valid month and year" placeholder="MM / YY" autocomplete="cc-exp"
                                                        onChange={(e) => { setexp_date(e.target.value) }} />
                                                    <span class="help-block" data-valmsg-for="cc-exp" data-valmsg-replace="true"></span>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <label for="x_card_code" class="control-label">Security code</label>
                                                <div class="input-group">
                                                    <input id="x_card_code" name="x_card_code" type="Number" class="form-control cc-cvc" data-val="true" data-val-required="Please enter the security code" data-val-cc-cvc="Please enter a valid security code" placeholder="CVV" autocomplete="off"
                                                        onChange={(e) => { setcard_cvc(e.target.value) }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="x_zip" class="control-label">Postal code</label>
                                            <input id="x_zip" name="x_zip" type="text" class="form-control" data-val="true" data-val-required="Please enter the ZIP/Postal code" autocomplete="postal-code"
                                                onChange={(e) => { setpostalCode(e.target.value) }} />
                                            <span class="help-block" data-valmsg-for="x_zip" data-valmsg-replace="true"></span>
                                        </div>
                                        <div>
                                            <button onClick={(e) => { sentPayment(e) }} id="payment-button" type="submit" class="btn btn-lg btn-success btn-block">
                                                <i class="fa fa-lock fa-lg"></i>&nbsp;
                                                <span id="payment-button-amount">Pay Now</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Payment;