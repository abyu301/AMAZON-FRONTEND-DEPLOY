import React, { useContext } from 'react';
import classes from './Header.module.css';
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from "../../Utility/firebase";

function Header() {
    const [{ user, basket }, dispatch] = useContext(DataContext);
    const totalItem = basket?.reduce((amount, item) => {
        return item.amount + amount;
    }, 0);

    return (
        <section className={classes.fixed} id="header"> {/* Add id="header" here */}
            <section>
                <div className={classes.header__container}>
                    <div className={classes.logo__container}>
                        <Link to="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" /></Link>
                        <div className={classes.delivery}>
                            <span><SlLocationPin /></span>
                            <div>
                                <p>Delivered to</p>
                                <span>Canada</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.search}>
                        <select name="" id="">
                            <option value="">All</option>
                        </select>
                        <input type="text" placeholder='Search Amazon' />
                        <BsSearch size={40} />
                    </div>
                    <div className={classes.order__container}>
                        <Link to="" className={classes.language}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Canada_flag_icon.png/800px-Canada_flag_icon.png?20200402074802" alt="" />
                            <select name="" id="">
                                <option value="">EN</option>
                            </select>
                        </Link>
                        <Link to={!user && "/signin"}>
                            <div>
                                {user ? (
                                    <>
                                        <p className={classes.f12}>Hello  {user?.email?.split("@")[0]} </p>
                                        <span onClick={() => auth.signOut()}>Sign Out</span>
                                    </>
                                ) : (
                                    <>
                                        <p className={classes.f12}>Hello,  Sign In</p>
                                        <span>Account & Lists</span>
                                    </>
                                )}
                            </div>
                        </Link>
                        <Link to="/orders">
                            <p className={classes.f12}>returns</p>
                            <span>& Orders</span>
                        </Link>
                        <Link to="/cart" className={classes.cart}>
                            <BiCart size={35} />
                            <span>{totalItem}</span>
                        </Link>
                    </div>
                </div>
            </section>
            <LowerHeader />
        </section>
    );
}

export default Header;
