import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

export default function DeleteLabAppoinment() {

    const { id } = useParams();
    const log = useRef(true);
    const navigate = useNavigate();


    useEffect(function () {

        if (log.current) {
            function DeleteLabAppoinment() {


                axios.delete("http://localhost:8071/pha/delete/" + id).then(function (res) {
                    //log.current = false;
                    alert("Delete Successfull");


                }).catch(function (err) {
                    alert("delete Fail");
                    alert(err);
                });
                //log = false;


            }
            DeleteLabAppoinment();


        }

    }, []);



}