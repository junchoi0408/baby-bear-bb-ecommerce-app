import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import History from "./History/History";
import './Profile.css';

const Profile = ({ auth, db, getDocs, collection }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetchOrder();
    }, []);

    const fetchOrder = async () => {
        const orderHistory = await getDocs(collection(db, auth.currentUser.uid));
        console.log(orderHistory);
        orderHistory.forEach((doc) => {
            const newOrder = [ doc.data() ]
            setOrder(newOrder);
          });
        setIsLoading(false);
    }

    const history = useHistory();
    const onLogOutClick = async () => {
        const auth = getAuth();
        signOut(auth).then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.error(error)
        });
        history.push("/")
    }

    return (
        <>
            {
                isLoading ? 
                    <div>"Loading..."</div> 
                : 
                    <>
                        <div className="page__container">
                            <span style={{fontSize: '30px'}}>Order History</span>
                        </div>
                        <hr className="hr--small" style={{marginBottom: '2em'}}/>
                        <div className="history__container">
                            { order.length > 0 ? order.map((order, index) => {
                                return <History key={index} orderId={order.orderId} orderDate={order.orderDate} orderPrice={order.orderPrice} />
                            }) : "No order" }
                            <div style={{ display: "flex", justifyContent:"center", alignItems:"center"}}>
                                <button className="home__container" onClick={onLogOutClick} style={{ padding: "1em 2em"}}>Log Out</button>
                            </div> 
                            
                        </div> 
                    </>
            }
        </>
    )
}

export default Profile;
