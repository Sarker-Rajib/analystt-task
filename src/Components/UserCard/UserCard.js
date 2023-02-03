import React from 'react';
import { Button } from 'react-bootstrap';

const UserCard = ({ user }) => {
    const { id, name, address, company } = user;

    const handleDetails = (id) => {
        fetch()
    };
    return (
        <div className='col-12 p-3'>
            <div className="row border p-2">
                <div className="col-md-4 col-xl-3">
                    <p>{company.name}</p>
                </div>
                <div className="col-md-4 col-xl-3">
                    <p>Contact</p>
                    <p className='m-0'>{name}</p>
                </div>
                <div className="col-md-4 col-xl-2">
                    <p>City</p>
                    <p>{address?.city}</p>
                </div>
                <div className="col-md-4 col-xl-2">
                    <p>Street</p>
                    <p>{address?.street}</p>
                </div>
                <div className="col-md-4 col-xl-2">
                    <Button
                        onClick={() => handleDetails(id)}
                        className='m-1'>View Details</Button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;