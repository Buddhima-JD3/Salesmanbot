import React from 'react';

const adminpanal = () => {
    return (
        <div className={"body-div admin-panel-main con-mid"}>
            <div className={"admin-card-container"}>

                <div style={{width: "100%", textAlign: "right"}}>
                    <h5 className={"admin-panel-heading"}>Admin Panel_</h5>
                </div>
                <div className={"row"} style={{minHeight: "352px"}}>
                    <div className={"col alice-col con-mid"}>
                        <img src={"/img/bot.png"} alt={"alice bot"} className={"alice-img"}/>
                        <p className={"alice-text"}>Hi! I'm Alice...</p>
                    </div>

                    <div className={"col"}>
                        <div className={"row"}>

                            <div className={"col admin-card"}>
                                <a href="./products" style={{textDecoration: "none"}}>
                                    <p className="card-text mbr-fonts-style display-4">26</p>
                                    <h2 className="card-title mbr-fonts-style display-5 d-flex justify-content-left text-center">Products</h2>
                                </a>
                            </div>

                            <div className={"col admin-card"}>
                                <a href="./orders" style={{textDecoration: "none"}}>
                                    <p className="card-text mbr-fonts-style display-4">10</p>
                                    <h2 className="card-title mbr-fonts-style display-5">Orders</h2>
                                </a>
                            </div>

                         {/*   <div className={"col admin-card"}>
                                <a href="./customers" style={{textDecoration: "none"}}>
                                    <p className="card-text mbr-fonts-style display-4">5</p>
                                    <h2 className="card-title mbr-fonts-style display-5">Inventory</h2>
                                </a>
                            </div>
                        */}
                        </div>
                        <div className={"row"}>

                            <div className={"col admin-card"}>
                                <a href="./users" style={{textDecoration: "none"}}>
                                    <p className="card-text mbr-fonts-style display-4">3</p>
                                    <h2 className="card-title mbr-fonts-style display-5">Users</h2>
                                </a>
                            </div>

                            <div className={"col admin-card"}>
                                <a href="./itemsold" style={{textDecoration: "none"}}>
                                    <p className="card-text mbr-fonts-style display-4">16</p>
                                    <h2 className="card-title mbr-fonts-style display-5">Item Sold</h2>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default adminpanal;