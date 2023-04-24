import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";




export default function UpdateBuy() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [title,  setTitle] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [town, setTown] = useState("")
    const [address, setAddress] = useState("");
    const [file_path, setImage] = useState("");
    const [status, setStatus] = useState("");



    useEffect(function () {

        alert(id)

        function getLabAppoinment() {
            axios.get("http://localhost:8071/pha/getonePharmacy/" + id).then((res) => {

                setTitle(res.data.title);
                setName(res.data.name);
                setAge(res.data.age);
                setEmail(res.data.email);
                setTelephone(res.data.telephone);;
                setTown(res.data.town);
                setAddress(res.data.address);
                setImage(res.data.file_path);
                setStatus(res.data.status)


            }).catch(function (err) {
                alert("data not fech");
                alert(err);
            });
        }
        getLabAppoinment();

    }, []);



    function btnClick(e) {

        e.preventDefault();

        const updateLabAppoinment = {
            title,
            name,
            age,
            email,
            telephone,
            town,
            address,
            file_path,
            status

        }
        console.log(updateLabAppoinment);

        axios.put("http://localhost:8071/pha/update/" + id, updateLabAppoinment).then(function () {

            alert("Status Updated");


        }).catch(function () {

            alert("Student Not Updated");

        })

    }


    return (



        <div className="container">

            <div>
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="false">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">

                                <img className="row" alt="logo" style={{ width: "100px" }} />
                                <h5 class="modal-title mt-4 pr-5" id="exampleModalLongTitle"><b>Appoinment Success</b></h5>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="rounded border border-success pb-2">
                                    <h2 className="text-primary">Comfirmation E-mail send<br />With Details</h2>
                                    <h4 className="text-success">Please Check Your Email</h4>
                                    <img style={{ width: "50px" }} />
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-success btn-lg btn-block" data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="exampleModalCenterUnsucces" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="false">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">

                            <div class="modal-header">
                                <img className="row" alt="logo" style={{ width: "100px" }} />

                                <h5 class="modal-title" id="exampleModalLongTitle">Doctor Appoinment UnSuccess</h5>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>

                            </div>
                            <div class="modal-body">

                                <div class="rounded border border-success">
                                    <h2 className="text-primary">Please Try Again</h2><br />
                                    <img style={{ width: "50px" }} />
                                </div>

                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <button type="button" id="model-btn" data-toggle="modal" data-target="#exampleModalCenter">hhhhhhhhh</button>

            <button type="button" id="model-btn-unsuccess" data-toggle="modal" data-target="#exampleModalCenterUnsucces">jtytjt</button>


            <form name="Addform" method="post" encType="multipart/form-data" className="container was-validated" style={{ backgroundColor: "#bbbdbb", borderRadius: '10px', opacity: '0.85' }}><br />

                <h3 className="text-primary"><b>Make A Lab Test Appoinments</b></h3>

                <div class="row">

                    <div className="form-group col-md-6 mt-3 mt-md-0">
                        <label for="name"><b>Title</b></label>
                        <input name="fname" type="text" className="form-control" id="firstName" placeholder="First Name" value={title} onChange={function (e) { setTitle(e.target.value); }} required />
                    </div><br />

                    <div className="form-group col-md-6 mt-3 mt-md-0">
                        <label for="name"><b>Name</b></label>
                        <input name="lname" type="text" className="form-control" id="lastName" placeholder="Last Name" value={name} onChange={function (e) { setName(e.target.value); }} required />
                    </div><br />

                </div>
                <div class="row">

                    <div className="form-group col-md-6 mt-3 mt-md-0">
                        <label for="name"><b>Age</b></label>
                        <input name="age" type="number" className="form-control" id="age" placeholder="age" value={age} onChange={function (e) { setAge(e.target.value); }} required />
                    </div><br />

                    <div className="form-group col-md-6 mt-3 mt-md-0">
                        <label for="name"><b>E-mail</b></label>
                        <input name="email" type="email" className="form-control" id="email" placeholder="E-mail" value={email} onChange={function (e) { setEmail(e.target.value); }} required />
                    </div><br />

                </div>
                <div class="row">



                    <div className="form-group col-md-6 mt-3 mt-md-0">
                        <label for="name"><b>Telephone</b></label>
                        <input name="telephone" type="text" className="form-control" id="telephone" placeholder="07XXXXXXXXX" value={telephone} onChange={function (e) { setTelephone(e.target.value); }} required />
                    </div><br />

                    <div className="form-group col-md-6 mt-3 mt-md-0">
                        <label for="name"><b>Town</b></label>
                        <input name="text" type="text" className="form-control" id="email" placeholder="E-mail" value={town} onChange={function (e) { setTown(e.target.value); }} required />
                    </div><br />

                </div>
                <div class="row">

                    <div className="form-group col-md-6 mt-3 mt-md-0">
                        <label for="name"><b>Address</b></label>
                        <input name="text" type="text" className="form-control" id="email" placeholder="E-mail" value={address} onChange={function (e) { setAddress(e.target.value); }} required />
                    </div><br />



                    <div className="form-group col-md-6 mt-3 mt-md-0">
                        <label for="status"><b>Status</b></label>
                        <input name="text" type="text" className="form-control" id="email" placeholder="" value={status} onChange={function (e) { setStatus(e.target.value); }} required />
                    </div><br />

                </div>




                <div class="row d-flex justify-content-center">

                    <button type="submit" className="btn btn-danger col-md-4 mt-0 mt-md-0 mr-5" >Cancel</button>
                    <button type="submit" className="btn btn-success col-md-4 mt-0 mt-md-0" onClick={btnClick}>Submit</button><br />

                </div><br />
            </form><br /><br />



            <button type="submit" className="btn col-md-4 mt-0 mt-md-0 d-up-btn-update" onClick={btnClick}>Update</button>
            <br />

        </div >
    );
}