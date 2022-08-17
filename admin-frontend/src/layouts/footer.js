import React from "react";
import './footer.css';

export default function Footer() {

    return (
        <center>
            <footer>
                <div className="wrapper">
                    <small>&copy;2022 <strong>Future Mart Pvt.Ltd</strong>, All Rights Reserved</small>
                    <nav className="footer-nav">
                        <a href="#">Back to Top</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy</a>
                    </nav>
                </div>
            </footer>
        </center>
    )
}