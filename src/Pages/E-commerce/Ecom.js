import React, { useState } from 'react'
import Wstyle from './Ecom.module.css'

import { WarehouseData } from './JsonData'

function Ecom() {

    // SearchBar
    const [searchInput, setsearchInput] = useState('');

    // filter
    const [head, setHead] = useState("null");
    const [filterVal, setvalue] = useState("null");

    var filterarray = []

    return (
        <div className={Wstyle.mainWrapper}>

            <div className={Wstyle.WH_FilterhBar}>
                {/*-------------------Search Bar Code--------------------*/}
                <div className={Wstyle.searchBar}>
                    <input type="text" placeholder="Search via Name and City" onChange={e => { setsearchInput(e.target.value) }}
                    />
                </div>
                {/*---------------Search Bar Code Ends Here--------------*/}

                {/*----------------------radio Filters------------------*/}
                <div className={Wstyle.radio_Filter}>

                    {/*---------------------------------------------------------------------------
                    ----------------------------------City Filter---------------------------------
                    -----------------------------------------------------------------------------*/}
                    <div className={Wstyle.WH_Filter}>
                        <div className={Wstyle.Filter_Trigger}>
                            <span>Select City</span>
                        </div>

                        <div className={Wstyle.Filter_DropDown}>

                            <label>
                                <input type="radio" name="City" onChange={() => { setHead("city"); setvalue("Delhi") }} />
                                Delhi
                            </label>

                            <label>
                                <input type="radio" name="City" onChange={() => { setHead("city"); setvalue("Chennai"); }} />
                                Chennai
                            </label>

                            <label>
                                <input type="radio" name="City" onChange={() => { setHead("city"); setvalue("Indore") }} />
                                Indore
                            </label>

                            <label>
                                <input type="radio" name="City" onChange={() => { setHead("city"); setvalue("Mumbai"); }} />
                                Mumbai
                            </label>

                            <label>
                                <input type="radio" name="City" onChange={() => { setHead("city"); setvalue("Bangalore"); }} />
                                Bangalore
                            </label>

                            <label>
                                <input type="radio" name="City" onChange={() => { setHead("city"); setvalue("Guwahati"); }} />
                                Guwahati
                            </label>

                        </div>
                    </div>
                    {/*----------------------------------------------------------------------------
                    ------------------------------City Filter Ends Here----------------------------
                    -----------------------------------------------------------------------------*/}



                    {/*----------------------------------------------------------------------------
                    ------------------------------Cluster Filter Code-------------------------------
                    ---------------------------------------------------------------------------*/}
                    <div className={Wstyle.WH_Filter}>

                        <div className={Wstyle.Filter_Trigger}>
                            <span>Select&nbsp;Cluster</span>
                        </div>

                        <div className={Wstyle.Filter_DropDown}>

                            <label>
                                <input type="radio" name="Cluster" onChange={() => { setHead("cluster"); setvalue("cluster-a-1"); }} />
                                cluster-a-1
                            </label>

                            <label>
                                <input type="radio" name="Cluster" onChange={() => { setHead("cluster"); setvalue("cluster-a-2"); }} />
                                cluster-a-2
                            </label>

                            <label>
                                <input type="radio" name="Cluster" onChange={() => { setHead("cluster"); setvalue("cluster-a-21"); }} />
                                cluster-a-21
                            </label>

                            <label>
                                <input type="radio" name="Cluster" onChange={() => { setHead("cluster"); setvalue("cluster-a-32"); }} />
                                cluster-a-32
                            </label>

                            <label>
                                <input type="radio" name="Cluster" onChange={() => { setHead("cluster"); setvalue("cluster-v-2"); }} />
                                cluster-v-2
                            </label>
                        </div>
                    </div>
                    {/*----------------------------------------------------------------------------
                    ------------------------Cluster Filter Code Ends Here--------------------------
                    ----------------------------------------------------------------------------*/}



                    {/*----------------------------------------------------------------------------
                    ---------------------------------Type Filter Code------------------------------               
                    ----------------------------------------------------------------------------*/}
                    <div className={Wstyle.WH_Filter}>

                        <div className={Wstyle.Filter_Trigger}>
                            <span>Select Type</span>
                        </div>

                        <div className={Wstyle.Filter_DropDown}>
                            <label>
                                <input type="radio" name="Type" onChange={() => { setHead("type"); setvalue("Warehouse Service"); }} />
                                Warehouse Service
                            </label>

                            <label>
                                <input type="radio" name="Type" onChange={() => { setHead("type"); setvalue("Leasable Space"); }} />
                                Leasable Space
                            </label>
                        </div>
                    </div>
                    {/*---------------------------------------------------------------------------        
                    ---------------------------------Type Filter Code-----------------------------         
                    ---------------------------------------------------------------------------*/}



                    {/*--------------------------------------------------------------------------
                    ---------------------------registration Filter Code--------------------------               
                    --------------------------------------------------------------------------*/}
                    <div className={Wstyle.WH_Filter}>

                        <div className={Wstyle.Filter_Trigger}>
                            <span>Registration</span>
                        </div>

                        <div className={Wstyle.Filter_DropDown}>
                            <label>
                                <input type="radio" name="Registration" onChange={() => { setHead("is_registered"); setvalue("true"); }} />
                                Is Registered
                            </label>

                            <label>
                                <input type="radio" name="Registration" onChange={() => { setHead("is_registered"); setvalue("false"); }} />
                                Is Not Registered
                            </label>
                        </div>

                    </div>

                    {/*--------------------------------------------------------------------------
                    ---------------------registration Filter Code Ends Here----------------------               
                    --------------------------------------------------------------------------*/}

                </div>
                {/*-----------------radio Filters Edns Here--------------*/}

            </div>

            {/*------------------------------------------------------------------
            -----------------------------Content Area Code------------------------
            --------------------------------------------------------------------*/}
            <div className={Wstyle.WH_Content_Wrapper}>

                {searchInput === ''
                    ?
                    // -------------------------------------------------------------
                    // -----------------------Filter Result-------------------------
                    // -------------------------------------------------------------
                    head && filterVal === 'null' ?
                        WarehouseData.map(
                            (items, key) => {
                                return (
                                    DataRetriver(items, key)
                                )
                            }
                        ) :
                        filterarray.length === 0 ?
                            WarehouseData.filter((val) => {
                                if (val[head] === filterVal) {
                                    console.log("sabse")
                                    return val && filterarray.push(val);
                                }
                            })
                                .map(
                                    (items, key) => {
                                        return (
                                            DataRetriver(items, key)
                                        )
                                    }
                                )
                            :
                            filterarray.filter((val) => {
                                if (val[head] === filterVal) {
                                    console.log("andar")
                                    return val && filterarray.push(val);
                                }
                            })
                                .map(
                                    (items, key) => {
                                        return (
                                            DataRetriver(items, key)
                                        )
                                    }
                                )
                    :
                    // -------------------------------------------------------------
                    // -----------------------Search Result-------------------------
                    // -------------------------------------------------------------
                    WarehouseData.filter((val) => {
                        if (searchInput === '') {
                            return val
                        } else if (val.name.toLowerCase().includes(searchInput.toLowerCase())) {
                            return val
                        } else if (val.city.toLowerCase().includes(searchInput.toLowerCase())) {
                            return val
                        }
                    }).map(
                        (items, key) => {
                            return (
                                DataRetriver(items, key)
                            )
                        }
                    )
                }

            </div>
        </div >
    )
}

export default Ecom

function DataRetriver(items, key) {
    return (

        <div className={Wstyle.Wh_Box} key={key}>
            <img src="https://i.postimg.cc/KvCL4DWH/warehouse.webp" alt="WareHouse_DefaultIMG" />
            <h1>{items.name}</h1>
            <div className={Wstyle.Wh_ContentBox}>
                <p><b>City:</b> {items.city}</p>
                <p><b>Type:</b> {items.type}</p>
                <p><b>Cluster:</b> {items.cluster}</p>
                <p><b>Space Available:</b> {items.space_available}sq ft</p>
                <p><b>Is Registered:</b> {items.is_registered === "true" ? <span>Yes</span> : <span>No</span>}</p>
            </div>
        </div>

    );
}