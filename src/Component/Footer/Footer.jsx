import React from 'react';
import classes from "./Footer.module.css";
import { TbWorld } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className={classes.btn_button}>
    <a href="#header"><p>Back to Top</p></a>
</div>


            <div className={classes.outer_wrapper}>
                <div className={classes.footer_container}>
                    <div className={classes.footer_wrapper}>
                        <div>
                            <h3>Get to Know Us</h3>
                            <ul>
                                <li><Link to="">Careers</Link></li>
                                <li><Link to="">Amazon and Our Planet</Link></li>
                                <li><Link to="">Investor Relation</Link></li>
                                <li><Link to="">Press Releases</Link></li>
                                <li><Link to="">Amazon Science</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Make Money with Us</h3>
                            <ul>
                                <li><Link to="">Sell on Amazon Business</Link></li>
                                <li><Link to="">Supply on Amazon</Link></li>
                                <li><Link to="">Become an Affiliate</Link></li>
                                <li><Link to="">Advertise Your Products</Link></li>
                                <li><Link to="">Host an Amazon Hub</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Amazon Payment Products</h3>
                            <ul>
                                <li><Link to="">Amazon.ca Rewards Mastercard</Link></li>
                                <li><Link to="">Shop with Points</Link></li>
                                <li><Link to="">Reload Your Balance</Link></li>
                                <li><Link to="">Amazon Currency Converter</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Let Us Help You</h3>
                            <ul>
                                <li><Link to="">Shipping Rates & Policies</Link></li>
                                <li><Link to="">Amazon Prime</Link></li>
                                <li><Link to="">Returns Are Easy</Link></li>
                                <li><Link to="">Manage Your Content and Devices</Link></li>
                                <li><Link to="">Customer Service</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={classes.ft_footer}>
                    <Link to="/" className={classes.footer_logo}>
                        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                    </Link>
                    <Link to="/">
                        <TbWorld /> <p className={classes.flag}>English</p>
                    </Link>
                    <Link to="/" className={classes.footer_language}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Canada_flag_icon.png/800px-Canada_flag_icon.png?20200402074802" alt="Language" />
                        <p>Canada</p>
                    </Link>
                </div>
                <div className={classes.footer_content}>
                <div className={classes.footer_column}>
                    <ul>
                        <div>
                            <li><h3><a href="#">Amazon Music</a></h3></li>
                            <li><a href="#">Stream millions of songs</a></li>
                        </div>
                        <div>
                            <li><h3><a href="#">Goodreads</a></h3></li>
                            <li><a href="#">Book reviews & recommendations</a></li>
                        </div>
                    </ul>
                </div>
                <div className={classes.footer_column}>
                    <ul>
                        <div>
                            <li><h3><a href="#">Amazon Advertising</a></h3></li>
                            <li><a href="#">Find, attract and engage customers</a></li>
                        </div>
                        <div>
                            <li><h3><a href="#">IMDb</a></h3></li>
                            <li><a href="#">Movies, TV & Celebrities</a></li>
                        </div>
                        <div>
                            <li><h3><a href="#">Whole Foods Market</a></h3></li>
                            <li><a href="#">We Believe in Real Food</a></li>
                        </div>
                    </ul>
                </div>
                <div className={classes.footer_column}>
                    <ul>
                        <div>
                            <li><h3><a href="#">Amazon Business</a></h3></li>
                            <li><a href="#">Everything for your business</a></li>
                        </div>
                        <div>
                            <li><h3><a href="#">Amazon Photos</a></h3></li>
                            <li><a href="#">Unlimited Photo Storage Free With Prime</a></li>
                        </div>
                        <div>
                            <li><h3><a href="#">Amazon Renewed</a></h3></li>
                            <li><a href="#">Like-new products you can trust</a></li>
                        </div>
                    </ul>
                </div>
                <div className={classes.footer_column}>
                    <ul>
                        <div>
                            <li><h3><a href="#">Amazon Drive</a></h3></li>
                            <li><a href="#">Cloud storage from Amazon</a></li>
                        </div>
                        <div>
                            <li><h3><a href="#">Shopbop</a></h3></li>
                            <li><a href="#">Designer Fashion Brands</a></li>
                        </div>
                        <div>
                            <li><h3><a href="#">Blink</a></h3></li>
                            <li><a href="#">Smart Security for Every Home</a></li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className={classes.footer_bottom}>
                <div>
                    <p>Conditions of Use | Privacy Notice | Interest-Based Ads</p>
                    <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
                </div>
                <div>
                <p style={{color: '#999999' }}>Amazon.com.ca ULC | 40 King Street W 47th Floor, Toronto, Ontario, Canada</p>
                </div>
                <div>Developed by: Abyu Ezezew</div>
        </div>
        </div>
        </>
    )
    }

    export default Footer