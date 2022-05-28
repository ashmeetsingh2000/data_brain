import React, { useState } from 'react'

function Form() {

    // variables to store Form Data 
    const [Fname, setfname] = useState("")
    const [Lname, setlname] = useState("")
    var FullName = Fname + " " + Lname;

    const [Email, setemail] = useState("")
    const [Phn, setnumber] = useState("")

    const [Address, setaddress] = useState("")
    const [City, setcity] = useState("")
    const [Pincode, setpincode] = useState("")

    const [Uname, setuname] = useState("")
    const [Password, setpass] = useState("")

    // Data Array
    const [dataArr, setdataArr] = useState([]);

    // Form Submit
    const showData = (e) => {

        // upload Data
        if (Fname === '') {
            setdataArr(arr => [...arr, { "fname": FullName, "email": Email, "number": Phn, "address": Address, "city": City, "pincode": Pincode, "Uname": Uname, "password": Password }]);
        } else {
            alert("form empty")
        }
        // back to step 1
        let CurrentP = document.getElementById("submit_Step");
        let FirstP = document.getElementById("Personal_Details");
        CurrentP.classList.remove("active");
        FirstP.classList.add("active");

        e.preventDefault();

        // Cleaning Input Fields
        var inputs = document.getElementsByTagName("input")
        for (var index in inputs) {
            inputs[index].value = '';
            inputs[index].classList.remove("greenBorder")
        }

        // cleaning fields
        setfname('');
    };


    // Go to the next Step
    function nextStep(id) {
        let current = document.getElementById(id);
        let next_EL = current.nextElementSibling;

        current.classList.remove("active");
        next_EL.classList.add("active");
    }

    // Text validattion
    function validateText(id) {
        let inputField = document.getElementById(id);
        inputField.value === '' ?
            inputField.classList.remove("greenBorder") :
            inputField.classList.add("greenBorder")
    }

    // Number Validation
    function numberValidate(id) {
        let num_input = document.getElementById(id);
        let num_input_value = num_input.value;
        console.log(num_input_value.toString().length)

        if (num_input_value.toString().length === 10) {
            num_input.classList.remove("redBorder");
            num_input.classList.add("greenBorder")
        }
        else {
            num_input.classList.add("redBorder")
        }
    }

    return (
        <>
            <div className="formWrapper">
                <form onSubmit={showData}>

                    {/* First Name Last Name */}

                    <div className="multistep active" id="Personal_Details">
                        <h1>Personal Details</h1>
                        <input type="text" placeholder="Firt name" id="fname" onChange={(e) => { setfname(e.target.value); validateText("fname") }} />
                        <input type="text" placeholder="last name" id="lname" onChange={(e) => { setlname(e.target.value); validateText("lname") }} />

                        <div className="steps">
                            <p>Step - 1/4</p>
                            <span onClick={() => { nextStep("Personal_Details") }}>Next</span>
                        </div>
                    </div>

                    {/* Email and Phone Number */}

                    <div className="multistep" id="Contact_Details">
                        <h1>Contact Details</h1>
                        <input type="email" placeholder="email" onChange={(e) => { setemail(e.target.value) }} />
                        <input type="number" placeholder="number" id="phn_Number" onChange={(e) => { setnumber(e.target.value); numberValidate("phn_Number") }} />

                        <div className="steps">
                            <p>Step - 2/4</p>
                            <span onClick={() => { nextStep("Contact_Details") }}>Next</span>
                        </div>
                    </div>

                    {/* Address City Pincode*/}

                    <div className="multistep" id="Address_Details">
                        <h1>Address Details</h1>
                        <input type="text" placeholder="Address" id="address" onChange={(e) => { setaddress(e.target.value); validateText("address") }} />

                        <div className="city_Pincode">
                            <input type="text" placeholder="City" id="city" onChange={(e) => { setcity(e.target.value); validateText("city") }} />
                            <input type="number" placeholder="Pincode" id="pincode" onChange={(e) => { setpincode(e.target.value); validateText("pincode") }} />
                        </div>

                        <div className="steps">
                            <p>Step - 3/4</p>
                            <span onClick={() => { nextStep("Address_Details") }}>Next</span>
                        </div>

                    </div>

                    {/* Username Password */}

                    <div className="multistep" id="submit_Step">
                        <h1>Login Credentials</h1>
                        <input type="text" placeholder="Username" id="username" onChange={(e) => { setuname(e.target.value); validateText("username") }} />
                        <input type="password" placeholder="password" id="password" onChange={(e) => { setpass(e.target.value); validateText("password") }} />

                        <div className="steps">
                            <p>Step - 4/4</p>
                            <button type="submit">Submit</button>
                        </div>
                    </div>

                </form>
            </div>

            <table className='Form_table'>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Pincode</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataArr.map((items) => {
                            return (
                                <tr>
                                    <td>{items.fname}</td>
                                    <td>{items.email}</td>
                                    <td>{items.number}</td>
                                    <td>{items.address}</td>
                                    <td>{items.city}</td>
                                    <td>{items.pincode}</td>
                                    <td>{items.Uname}</td>
                                    <td>{items.password}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Form