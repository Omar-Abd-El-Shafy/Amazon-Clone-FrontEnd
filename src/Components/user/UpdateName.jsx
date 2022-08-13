// import React from 'react';
// import Loading from '../Components/Loading/Loading';
// import { userSliceActions } from '../Redux/userSlice';
// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { IoSendOutline } from 'react-icons/io5';
// import { Helmet } from 'react-helmet-async';
// import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';

// const Profile = () => {
//   const user = useSelector((state) => state.user.loggedInUser.user);
//   const token = useSelector((state) => state.user.loggedInUser.token);
//   const { loading, error } = useSelector((state) => state.user);
//   console.log(token);
//   // props.funcNav(false);
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   console.log(name, email);
//   const updateHandler = (e) => {
//     e.preventDefault();
//     dispatch(userSliceActions.update({ name, email }));
//   };

//   return (
//     <Container style={{ maxWidth: '600px' }}>
//       {loading ? (
//         <Loading />
//       ) : error ? (
//         error.message
//       ) : (
//         <>
//           <Helmet>{user.name}</Helmet>
//           <h1 className="my-3">hello {user.name}</h1>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label className="mb-1 w-50 m-auto">Name</Form.Label>
//               <InputGroup onChange={(e) => setName(e.target.value)}>
//                 <Form.Control
//                   placeholder={user.name}
//                   aria-label="Recipient's username"
//                   aria-describedby="basic-addon2"
//                 />
//                 <Button variant="warning" id="button-addon2">
//                   Edit
//                 </Button>
//               </InputGroup>
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label className="mb-1 w-50 m-auto">email</Form.Label>
//               <InputGroup onChange={(e) => setEmail(e.target.value)}>
//                 <Form.Control
//                   placeholder={user.email}
//                   aria-label="Recipient's username"
//                   aria-describedby="basic-addon2"
//                 />
//                 <Button variant="warning" id="button-addon2">
//                   Edit
//                 </Button>
//               </InputGroup>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label className="mb-1 w-50 m-auto">password</Form.Label>
//               <InputGroup>
//                 <Form.Control
//                   placeholder="New Password"
//                   aria-label="Recipient's username"
//                   aria-describedby="basic-addon2"
//                 />
//                 <Button variant="warning" id="button-addon2">
//                   Edit
//                 </Button>
//               </InputGroup>
//             </Form.Group>
//             <Button
//               onClick={updateHandler}
//               type="submit"
//               className="mb-3 bg-warning text-black border-0 "
//             >
//               Update
//             </Button>
//           </Form>
//         </>
//       )}
//     </Container>
//   );
// };
// export default Profile;
