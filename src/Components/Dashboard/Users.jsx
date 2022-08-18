import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSliceActions } from "../../Redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Users() {
    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    // console.log(loggedInUser);
    // get all users from the store
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    if (!user) {
        navigate("/login");
    }
    const dispatch = useDispatch();
    // dispatch(userSliceActions.getAllUsers({ token: loggedInUser.token }));
    // get all users
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("https://amazon-clone-deploy.herokuapp.com/user/allUsers", {
                headers: {
                    "x-access-token": `${loggedInUser.token}`,
                },
            })
            .then((res) => {
                setUsers(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [loggedInUser.token]);
    // let userList =

    return (
        <div className="container">
            <p></p>
            <div className="row">
                <div className="col-md-12">
                    <h2>
                        total users:{" "}
                        <span className=" text-warning">{users.length}</span>
                    </h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role ? "Admin" : "User"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
{
    /* {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role ? "Admin" : "User"}</td>
                                    <td>
                                        {loggedInUser.user.role === true ? (
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => {
                                                    console.log(user.id);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        ) : null}
                                    </td>
                                </tr>
                            ))} */
}
//     console.log(loggedInUser);
//     return (
//         <div>
//             <h1>Users</h1>
//             <h2>{loggedInUser.user.name}</h2>
//         </div>
//     );
// }
