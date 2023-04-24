import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function AddLabAppoinment() {


    const navigate = useNavigate();


    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [town, setTown] = useState("")
    const [address, setAddress] = useState("");
    const [file_path, setImage] = useState("");
    const status = "Pending";




    function handleImage(e) {
        console.log(e.target.files);
        setImage(e.target.files[0])

    }





    //should pass event
    function btnClick(e) {

        e.preventDefault();


        const formData = new FormData();

        formData.append('title', title);
        formData.append('name', name);
        formData.append('age', age);
        formData.append('email', email);
        formData.append('telephone', telephone);
        formData.append('town', town);
        formData.append('address', address);
        formData.append('file_path', file_path);
        formData.append('status', status);


        axios.post("http://localhost:8071/pha/add", formData).then(function () {

            alert("Success!!");
            successModel();


        }).catch(function (err) {

            alert(err);
            unsuccessModel()

        })
 


    }

    function successModel() {

        const modelBtn = document.getElementById("model-btn")
        modelBtn.click();

    }
    function unsuccessModel() {

        const modelBtn = document.getElementById("model-btn-unsuccess")
        modelBtn.click();

    }



    return (

        <div>
            <section id="hero" class="d-flex align-items-center " style={{
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                backgroundSize: 'cover',
                position: 'center',
                maxWidth: '100%'

            }}>

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

                


                <form name="Addform" method="post" encType="multipart/form-data" className="container was-validated" style={{ backgroundColor: "#bbbdbb", borderRadius: '10px', opacity: '0.85' }}><br />

                    <h3 className="text-primary"><b>Make A Lab Test Appoinments</b></h3>

                    <div class="row">

                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Title</b></label>
                            <input name="fname" type="text" className="form-control" id="firstName" placeholder="First Name" onChange={function (e) { setTitle(e.target.value); }} required />
                        </div><br />

                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Name</b></label>
                            <input name="lname" type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={function (e) { setName(e.target.value); }} required />
                        </div><br />

                    </div>
                    <div class="row">

                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Age</b></label>
                            <input name="age" type="number" className="form-control" id="age" placeholder="age" onChange={function (e) { setAge(e.target.value); }} required />
                        </div><br />

                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>E-mail</b></label>
                            <input name="email" type="email" className="form-control" id="email" placeholder="E-mail" onChange={function (e) { setEmail(e.target.value); }} required />
                        </div><br />

                    </div>
                    <div class="row">



                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Telephone</b></label>
                            <input name="telephone" type="text" className="form-control" id="telephone" placeholder="07XXXXXXXXX" onChange={function (e) { setTelephone(e.target.value); }} required />
                        </div><br />

                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Town</b></label>
                            <input name="text" type="text" className="form-control" id="email" placeholder="E-mail" onChange={function (e) { setTown(e.target.value); }} required />
                        </div><br />

                    </div>
                    <div class="row">

                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Address</b></label>
                            <input name="text" type="text" className="form-control" id="email" placeholder="E-mail" onChange={function (e) { setAddress(e.target.value); }} required />
                        </div><br />



                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="formFileMultiple" class="form-label"><b>Priscription</b></label>
                            <input class="form-control" type="file" id="formFileMultiple" multiple name="file_path" onChange={handleImage} required />
                        </div><br />

                    </div>




                    <div class="row d-flex justify-content-center">

                        <button type="submit" className="btn btn-danger col-md-4 mt-0 mt-md-0 mr-5" >Cancel</button>
                        <button type="submit" className="btn btn-success col-md-4 mt-0 mt-md-0" onClick={btnClick}>Submit</button><br />

                    </div><br />
                </form><br /><br />

                

            </section >
        </div >

    );
}