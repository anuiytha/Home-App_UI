import React, { useState, useEffect } from 'react';
import useContentful from "./config/contentful";
import { useNavigate } from "react-router-dom";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from 'react-use-cart';
// import ImageUpload from './FileUploadApp';
import BannerCard from './components/bannercard';


const Home = () => {
    const { addItem } = useCart();

    const chefId = localStorage.getItem("Chef_Id");
    const Name_Chef = localStorage.getItem("Chef_Name")
    console.log("chef_Id = ", chefId)
    const [chefName, setchefName] = useState([]);
    const [menu, setmenu] = useState([]);
    const [allMenu, setallmenu] = useState([]);
    console.log("chefName", chefName)
    const router = useNavigate();

    const [Banner, setBanner] = useState([]);
    const { getBanner } = useContentful();

    useEffect(() => {
        const getChefName = async () => {
            try {
                console.log("Inside try ");
                const token = localStorage.getItem("token");
                console.log("token", token)
                const response = await fetch(
                    `http://localhost:5000/api/v1/chef_Info`,
                    {
                        headers: {
                            Authorization: `${token}`,
                        },
                    }
                );
                const chefData = await response.json();
                setchefName(chefData.data)
            } catch (error) {
                console.error("Error fetching Chef Name", error);
            }
        };

        getChefName();

        const getmenu = async () => {
            try {
                console.log("Inside try of getmenu");
                const token = localStorage.getItem("token");
                const res = await fetch(
                    `http://localhost:5000/api/v1/getmenu/id`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
                );
                const menudata = await res.json();
                setmenu(menudata.data)
            } catch (error) {
                console.error("Error fetching Menu", error);
            }
        };
        console.log(getmenu());

        const getallmenu = async () => {
            try {
                console.log("Inside try of getallmenu");
                const token = localStorage.getItem("token");
                const res = await fetch(
                    `http://localhost:5000/getmenu`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
                );
                const allmenudata = await res.json();
                setallmenu(allmenudata.data)
            } catch (error) {
                console.error("Error fetching allMenu", error);
            }
        };

        console.log(getallmenu());

        getallmenu();


        getBanner().then((response) => setBanner(response));

    }, []);

    const getStarRating = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<i key={i} className="fas fa-star text-warning"></i>);
            } else if (i - rating < 1) {
                stars.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>);
            } else {
                stars.push(<i key={i} className="far fa-star text-warning"></i>);
            }
        }
        return stars;
    };

    const FoodCard = ({ food }) => (
        <div className="food-item">
            <img src={food.image_path} className="card-img-top" alt={food.Item_Name} />
            <div className="card-body">
                <h5 className="card-title">{food.Item_Name}</h5>
                <p className="card-text">{food.Item_Category}</p>
                <p className="card-text">{food.Item_Desc}</p>
                <p className="rating">{getStarRating(food.Item_rating)}</p>
                <p className="card-text">${food.Item_Price}</p>
            </div>
        </div>
    );

    return (
        <>
            {/* <div className="homepage"> */}
            <div className="overlay">
                <div className="right-text-username">Welcome {Name_Chef}</div>
                <div className="right-text">
                    <a className="login-link" href="/Login">Login</a>
                </div>
                <div className="left-text-cart">
                    <a className="login-link" href="/cart"><FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white' }} /></a>
                </div>
                <div className="left-text">
                    <h5 className="card-title">Experimenting?</h5>
                    <p className="card-text">"There is no sincerer love than the love of food."
                        — George Bernard Shaw</p>
                    <a href="/addDish" className="btn btn-secondary">Would love to add your dish?</a>
                </div>
            </div>


            {Banner.map((homeBanner, index) => (
                <BannerCard key={index} homeBanner={homeBanner} />
            ))}
            {/* </div> */}

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Your Dishes List</a>
                </li>
            </ul>

            <div className="card-container">
                {allMenu.map(food => (
                    <div className="card" style={{ width: '18rem' }} key={food.Item_Id}>
                        <div className="card-body">
                            <FoodCard className="food-item" food={food} />
                            <div className="d-flex justify-content-center mt-3">
                                <button className="btn btn-success" onClick={() => addItem(food)}>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Sidebar />
            {/* <ImageUpload /> */}
        </>
    );
}

export default Home;
