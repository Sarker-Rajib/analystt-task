import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const UserCard = ({ user }) => {
    const { id, name, address, company } = user;
    const [details, setDetails] = useState();

    const handleDetails = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    };

    console.log(details);

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
                    {
                        details ?
                            <Button
                                onClick={() => setDetails(null)}
                                className='m-1 btn-warning'>View Less</Button>
                            :
                            <Button
                                onClick={() => handleDetails(id)}
                                className='m-1'>View Details</Button>
                    }
                </div>

                {
                    details && <>
                        <div>
                            <hr />
                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-2">
                                        <h6>Contact person</h6>
                                        <p>{details.name}</p>
                                    </div>
                                    <div className="mb-2">
                                        <h6>email</h6>
                                        <p>{details.email}</p>
                                    </div>
                                    <div className="mb-2">
                                        <h6>Phone</h6>
                                        <p>{details.phone}</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-2">
                                        <h6>Address</h6>
                                        <p>{details?.address?.street}</p>

                                    </div>

                                    <div className="mb-2">
                                        <h6>City</h6>
                                        <p>{details?.address?.city}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default UserCard;