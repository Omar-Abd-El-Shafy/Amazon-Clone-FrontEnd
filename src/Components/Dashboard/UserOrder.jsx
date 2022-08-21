import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetOrdersAdminQuery } from "../../Redux/Api";
export default function UserOrder() {
    const loggedInUser = useSelector((state) => state.user?.loggedInUser);
    const { userID } = useParams();
    const { data } = useGetOrdersAdminQuery({
        token: loggedInUser.token,
        id: userID,
    });
    // console.log(data);
    return (
        <div>
            <h3>User Order</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>User bill</th>
                        <th>Payment Method</th>
                        <th>User Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((order) => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.products[0].productBrief.name}</td>
                            <td>{order.products[0].quantity}</td>
                            <td>{order.bill}</td>
                            <td>{order.paymentMethod}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
