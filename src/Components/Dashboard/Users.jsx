import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSliceActions } from "../../Redux/userSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Users() {
    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    // get all users from the store
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    console.log(user);
    const userinfo = useSelector((state) => state.user.loggedInUser);
    if (!user) {
        navigate("/login");
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userSliceActions.getAllUsers({ token: loggedInUser.token }));
    }, [dispatch, loggedInUser.token]);
    return (
        <div className="container">
            <p></p>
            <div className="row">
                <div className="col-md-12">
                    <h1>Users</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
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
