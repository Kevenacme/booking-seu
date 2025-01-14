import styles from "./SearchDeals.module.css"
import React from "react"
import Calendar from 'react-calendar';
import { useState } from "react";
//import { countries } from "../../Utils/SuggitionItems";
import 'react-calendar/dist/Calendar.css';
//import { Searchbar } from "./Suggestion/Searchbar";
import { Link } from "react-router-dom";




export const SearchDeals = () => {
    const [destination, setDestination]=useState('');
    const [initvalue, onInitChange] = useState(new Date());
    const [endvalue, onEndChange] = useState(new Date());
    const [intiDate, setInitDate] = useState(false)
    const [endDate, setEndDate] = useState(false)
    const [selector, setSelector] = useState(false)
    const [currentMonth, currentDay, currentDayNum] = endDatePicker(initvalue.getDay(), initvalue.getMonth(), initvalue.getDate())
    const [endMonth, endDay, endDayNum] = endDatePicker(endvalue.getDay(), endvalue.getMonth(), endvalue.getDate())

    const [adults, setAdults] = useState(2)
    const [children, setChildren] = useState(0)
    const [rooms, setRooms] = useState(2)

   



    const handleInitDate = () => {
        setInitDate(!intiDate)
        setEndDate(false)
        setSelector(false)

    }
    const handleEndDate = () => {
        setInitDate(false)
        setEndDate(!endDate)
        setSelector(false)

    }
    const handleSelector = () => {
        setInitDate(false)
        setEndDate(false)
        setSelector(!selector)
    }

    const handleAdults = (v) => {
        setAdults((prev) => {
            let x = prev + v;
            if (x < 1) {
                return 1
            }
            else {
                return x
            }
        })
    }
    const handleChildren = (v) => {
        setChildren((prev) => {
            let x = prev + v;
            if (x < 0) {
                return 0
            }
            else {
                return x
            }
        })
    }
    const handleRooms = (v) => {

        setRooms((prev) => {
            let x = prev + v;
            if (x < 1) {
                return 1
            }
            else {
                return x
            }
        })
    }
    
    const handleDestinationChange =(e)=>{
          setDestination(e.target.value);
    }

    return <div className={styles.main}>

        <div className={styles.searchDealsContainer}>
            <div>

            </div>
            <div className={styles.uppertext}>
                <h3>
                    寻找下一站住宿
                </h3>
                <br></br>
                <p>
                    从民宿到公寓
                </p>
            </div>
            <div className={styles.searchDealsBars}>
                <div className={styles.search}>
                    <div className={styles.svgImg}>
                        <img src="https://cf.bstatic.com/static/img/cross_product_index/accommodation/07ca5cacc9d77a7b50ca3c424ecd606114d9be75.svg" alt="icon" />
                    </div>
                    <div className={styles.input}>

                        <div className={styles.SearchBarWrapper}>
                            <input className={styles.destinationinput} onChange={handleDestinationChange} placeholder="目的地?"></input>
                        </div>

                    </div>
                    <div className={styles.Cross}>
                        {/* < svg className={styles.svgCross} focusable="false" height="20" role="presentation" width="20" viewBox="0 0 24 24"><path d="M13.31 12l6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"></path></svg> */}
                    </div>
                </div>
                <div className={styles.calender}>
                    <div className={styles.calenderPermnantItems}>
                        <div>
                            <svg fill="#BDBDBD" focusable="false" height="20" role="presentation" width="20" viewBox="0 0 128 128"><path d="m112 16h-16v-8h-8v8h-48v-8h-8v8h-16c-4.4 0-8 3.9-8 8.7v86.6c0 4.8 3.6 8.7 8 8.7h96c4.4 0 8-3.9 8-8.7v-86.6c0-4.8-3.6-8.7-8-8.7zm0 95.3a1.1 1.1 0 0 1 -.2.7h-95.6a1.1 1.1 0 0 1 -.2-.7v-71.3h96zm-68-43.3h-12v-12h12zm0 28h-12v-12h12zm26-28h-12v-12h12zm0 28h-12v-12h12zm26 0h-12v-12h12zm0-28h-12v-12h12z" fillRule="evenodd"></path></svg>
                        </div>
                        <div onClick={handleInitDate}>
                           
                            <p>
                                {currentMonth}

                            </p>

                            <p>
                                {currentDayNum}

                            </p>
                           
                            -
                        </div>
                        <div>
                            -
                        </div>
                        <div onClick={handleEndDate}>
                            <p>
                                {endMonth}

                            </p>
                            <p>
                                {endDayNum}

                            </p>
                            

                        </div>
                    </div>
                    <div className={styles.cal}>


                        {
                            intiDate &&


                            <div className={styles.calenderItem}>
                                <p className={styles.datePicke}>入住日期</p>
                                <Calendar
                                    onChange={onInitChange}
                                    value={initvalue}
                                    className={styles.cal1}
                                />
                            </div>
                        }
                        {
                            endDate &&
                            <div className={styles.calenderItem2}>
                                <p className={styles.datePicke}>离店日期</p>
                                <Calendar
                                    onChange={onEndChange}
                                    value={endvalue}
                                    className={styles.cal1}
                                />
                            </div>
                        }
                    </div>
                </div>

                <div className={styles.selector}>
                    <div className={styles.manIcon}>
                        <img src="https://cf.bstatic.com/static/img/cross_product_index/guest/b2e5f2aa32b71ca0fc66aa671e4e958bcd69b7d0.svg" alt="manSVG" />
                    </div>
                    <div className={styles.selectorItems} onClick={() => handleSelector()}>
                        <p>
                            {adults} 成人
                        </p>
                        <p>
                            {children} 儿童
                        </p>
                        <p>
                            {rooms} 房间
                        </p>
                    </div>
                    <div>
                        <img src="https://cf.bstatic.com/static/img/cross_product_index/toggle/fb6f63d62231f9fe552d79b5448620b2e63c726e.svg" alt="corousel" />
                    </div>
                    {
                        selector &&

                        <div className={styles.selectorDropDown}>
                            <div className={styles.adult}>
                                <div>
                                    <h4>成人</h4>

                                </div>
                                <div >
                                    <div className={styles.button}>
                                        <button
                                            onClick={() => handleAdults(-1)}
                                        >-</button>
                                    </div>
                                    <div>
                                        <h4>{adults}</h4>
                                    </div>
                                    <div className={styles.button}>
                                        <button
                                            onClick={() => handleAdults(1)}
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.adult}>
                                <div>
                                    <h4>儿童</h4>
                                </div>
                                <div >
                                    <div className={styles.button}>
                                        <button
                                            onClick={() => handleChildren(-1)}
                                        >-</button>
                                    </div>
                                    <div>
                                        <h4>{children}</h4>
                                    </div>
                                    <div className={styles.button}>
                                        <button
                                            onClick={() => handleChildren(1)}
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.adult}>
                                <div>
                                    <h4>客房</h4>
                                </div>
                                <div >
                                    <div className={styles.button}>
                                        <button
                                            onClick={() => handleRooms(-1)}
                                        >-</button>
                                    </div>
                                    <div>
                                        <h4>{rooms}</h4>
                                    </div>
                                    <div className={styles.button}>
                                        <button
                                            onClick={() => handleRooms(1)}
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
                <div className={styles.button}>
                    <Link to={`/search/${destination}`}>
                        <button>搜索</button>
                    </Link>
                </div>
            </div>
            <div className={styles.lowerText}>
                <input type="checkbox" />
                <p>我要出差</p>
            </div>
        </div>
    </div>
}





function endDatePicker(D, M, day) {
    var month = [];
    for (let i = 0; i < 12; i++) {
        month.push(0)
    }
    month[0] = "1.";
    month[1] = "2.";
    month[2] = "3.";
    month[3] = "4.";
    month[4] = "5.";
    month[5] = "6.";
    month[6] = "7.";
    month[7] = "8.";
    month[8] = "9.";
    month[9] = "10";
    month[10] = "11.";
    month[11] = "12.";

    var weekday = [];
    for (let i = 0; i < 7; i++) {
        weekday.push(0)
    }
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thur";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    var currentDay = weekday[D];

    var currentMonth = month[M];

    // var currentDayNum = day

    return [currentMonth, currentDay, day]
}