
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { user } from '../../Redux/CrudSlice/CrudSlice';
export default function UserDetails() {
    const dispatch = useDispatch();
    const {users}= useSelector((state) => state.Crud);
    useEffect(() => {
          dispatch(user());
        },[dispatch]);
        console.log("users",users);
  return (
    
    <div>
      <h1>Profile Details</h1>
    
        <div>
          {/* <h3>Cart #{cart.id}</h3> */}
          <ul>
            { users &&  (
              <li key={users.id}>
                <img src={users.image} alt={users.title} />
               
                <div>FirstName: {users.firstName}</div>
                <div>LastName: {users.lastName}</div>
                <div>Email: {users.email}</div>
                <div>Gender:{users.gender}</div>
               <div> bloodGroup:{users.bloodGroup}</div>
               {/* <h1>Address Details</h1>
               <div> Address:{users.address.address}</div>
               <div> City:{users.address.city}</div> */}

               
              </li>
            )}
          </ul>
        </div>
    
    </div>
  )
}
