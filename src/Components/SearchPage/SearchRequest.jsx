import { useState } from "react"
import styles from "./SearchRequest.module.css"
import Calendar from "react-calendar"
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
export const SearchRequest = () => {
    const [destination, setDestination] = useState("")
    const [initvalue, onInitChange] = useState(new Date());
    const [endvalue, onEndChange] = useState(new Date());
    const [intiDate, setInitDate] = useState(false)
    const [endDate, setEndDate] = useState(false)
    // const [selector, setSelector] = useState(false)
    const [currentMonth, currentDay, currentDayNum] = endDatePicker(initvalue.getDay(), initvalue.getMonth(), initvalue.getDate())
    const [endMonth, endDay, endDayNum] = endDatePicker(endvalue.getDay(), endvalue.getMonth(), endvalue.getDate())

    const [adults, setAdults] = useState(2)
    const [children, setChildren] = useState(0)
    const [rooms, setRooms] = useState(2)

    const [adult, setAdult] = useState(false)
    const [child, setChild] = useState(false)
    const [room, setRoom] = useState(false)

    const handleInitDate = () => {
        setInitDate(!intiDate)
        setEndDate(false)
        // setSelector(false)

    }
    const handleEndDate = () => {
        setInitDate(false)
        setEndDate(!endDate)
        // setSelector(false)

    }
    //计算入住天数
    const calculateStayDuration = () => {
        const oneDay = 24 * 60 * 60 * 1000; // 一天的毫秒数
        const startDate = new Date(initvalue.getFullYear(), initvalue.getMonth(), initvalue.getDate());
        const endDate = new Date(endvalue.getFullYear(), endvalue.getMonth(), endvalue.getDate());
        const stayDuration = Math.round(Math.abs((endDate - startDate) / oneDay));
        return stayDuration;
    };
    // const handleSelector = () => {
    //     setInitDate(false)
    //     setEndDate(false)
    //     setSelector(!selector)
    // }

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
    const handleAdult = () => {
        setAdult(!adult)
        setChild(false)
        setRoom(false)
    }
    const handleChild = () => {
        setAdult(false)
        setChild(!child)
        setRoom(false)
    }
    const handleRoom = () => {
        setAdult(false)
        setChild(false)
        setRoom(!room)
    }
    const history = useHistory();
    const handleSearch = () => {
        history.push(`/search/${destination}`);
        window.location.reload();
        setDestination("")
        setAdults(1)
        setChildren(0)
        setRooms(1)

    }



    return <div className={styles.SearchRequestContainer}>

        <p>
            搜索
        </p>
        <div className={styles.destination}>
            <p>目的地</p>
            <div>
                <svg aria-hidden="true" fill="#838181" focusable="false" height="20" role="presentation" width="20" viewBox="0 0 24 24"><path d="M17.464 6.56a8.313 8.313 0 1 1-15.302 6.504A8.313 8.313 0 0 1 17.464 6.56zm1.38-.586C16.724.986 10.963-1.339 5.974.781.988 2.9-1.337 8.662.783 13.65c2.12 4.987 7.881 7.312 12.87 5.192 4.987-2.12 7.312-7.881 5.192-12.87zM15.691 16.75l7.029 7.03a.75.75 0 0 0 1.06-1.06l-7.029-7.03a.75.75 0 0 0-1.06 1.06z"></path></svg>
                <input type="text" placeholder="搜索你的目的城市" onChange={(e) => setDestination(e.target.value)} />
            </div>
        </div>
        <div className={styles.startDate}>
            <p>入住日期</p>
            <div>
                <svg aria-hidden="true" fill="#838181" focusable="false" height="20" role="presentation" width="20" viewBox="0 0 24 24"><path d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5zM7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zm10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0z"></path></svg>
                <input type="text" placeholder="Mon 30 Aug" onClick={handleInitDate} value={`${currentDay} ${currentMonth}${currentDayNum}日`} />
                <svg aria-hidden="true" fill="#838181" focusable="false" height="18" role="presentation" width="18" viewBox="0 0 24 24"><path d="M18 9.45c0 .2-.078.39-.22.53l-5 5a1.08 1.08 0 0 1-.78.32 1.1 1.1 0 0 1-.78-.32l-5-5a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0L12 13.64l4.72-4.72a.74.74 0 0 1 1.06 0 .73.73 0 0 1 .22.53zm-5.72 4.47zm-.57 0z"></path></svg>
            </div>



        </div>
        <div className={styles.endDate}>
            <p>离店日期</p>
            <div>
                <svg aria-hidden="true" fill="#838181" focusable="false" height="20" role="presentation" width="20" viewBox="0 0 24 24"><path d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5zM7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zm10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0z"></path></svg>
                <input type="text" placeholder="Mon 30 Aug 2021" onClick={handleEndDate} value={`${endDay} ${endMonth}${endDayNum}日`} />
                <svg aria-hidden="true" fill="#838181" focusable="false" height="18" role="presentation" width="18" viewBox="0 0 24 24"><path d="M18 9.45c0 .2-.078.39-.22.53l-5 5a1.08 1.08 0 0 1-.78.32 1.1 1.1 0 0 1-.78-.32l-5-5a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0L12 13.64l4.72-4.72a.74.74 0 0 1 1.06 0 .73.73 0 0 1 .22.53zm-5.72 4.47zm-.57 0z"></path></svg>
            </div>
        </div>
        <div className={styles.stay}>
            <p>
                入住<span>{calculateStayDuration()}</span>晚
            </p>

            <div>
                <input type="text" placeholder="2 adults" value={`${adults} 成人`} onClick={handleAdult} />
                <svg height="16" fill="#838181" width="16" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M12 20.09a1.24 1.24 0 0 1-.88-.36L6 14.61a.75.75 0 1 1 1.06-1.06L12 18.49l4.94-4.94A.75.75 0 0 1 18 14.61l-5.12 5.12a1.24 1.24 0 0 1-.88.36zm6-9.46a.75.75 0 0 0 0-1.06l-5.12-5.11a1.24 1.24 0 0 0-1.754-.006l-.006.006L6 9.57a.75.75 0 0 0 0 1.06.74.74 0 0 0 1.06 0L12 5.7l4.94 4.93a.73.73 0 0 0 .53.22c.2 0 .39-.078.53-.22z"></path></svg>
            </div>
        </div>
        <div className={styles.children}>
            <div>
                <input type="text" placeholder="No children" value={`${children} 儿童`} onClick={handleChild} />
                <svg className={styles.svg} height="16" width="16" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M12 20.09a1.24 1.24 0 0 1-.88-.36L6 14.61a.75.75 0 1 1 1.06-1.06L12 18.49l4.94-4.94A.75.75 0 0 1 18 14.61l-5.12 5.12a1.24 1.24 0 0 1-.88.36zm6-9.46a.75.75 0 0 0 0-1.06l-5.12-5.11a1.24 1.24 0 0 0-1.754-.006l-.006.006L6 9.57a.75.75 0 0 0 0 1.06.74.74 0 0 0 1.06 0L12 5.7l4.94 4.93a.73.73 0 0 0 .53.22c.2 0 .39-.078.53-.22z"></path></svg>
            </div>
            <div>
                <input type="text" placeholder="rooms" value={`${rooms} 房间`} onClick={handleRoom} />
                <svg className={styles.svg} height="16" width="16" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M12 20.09a1.24 1.24 0 0 1-.88-.36L6 14.61a.75.75 0 1 1 1.06-1.06L12 18.49l4.94-4.94A.75.75 0 0 1 18 14.61l-5.12 5.12a1.24 1.24 0 0 1-.88.36zm6-9.46a.75.75 0 0 0 0-1.06l-5.12-5.11a1.24 1.24 0 0 0-1.754-.006l-.006.006L6 9.57a.75.75 0 0 0 0 1.06.74.74 0 0 0 1.06 0L12 5.7l4.94 4.93a.73.73 0 0 0 .53.22c.2 0 .39-.078.53-.22z"></path></svg>
            </div>
        </div>
        <div className={styles.lower}>
            <div>
                <input type="checkbox" />
                <p>我要出差</p>
            </div>
            <div>
                <svg aria-hidden="true" fill="black" focusable="false" height="14" role="presentation" width="14" viewBox="0 0 24 24"><path d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
            </div>

        </div>
        <div className={styles.button}>
                <button onClick={handleSearch}>搜索</button>
        </div>
        <div className={styles.cal}>
            {
                intiDate &&


                <div className={styles.calenderItem}>
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
                    <Calendar
                        onChange={onEndChange}
                        value={endvalue}
                        className={styles.cal1}

                    />
                </div>
            }
        </div>
        {
            adult && <div className={styles.adultSelect} >
                <div>
                    <button onClick={() => handleAdults(-1)}>-</button>
                    <button onClick={() => handleAdults(1)} >+</button>
                </div>
            </div>
        }
        {
            child && <div className={styles.childSelect}>
                <div>
                    <button onClick={() => handleChildren(-1)}>-</button>
                    <button onClick={() => handleChildren(1)}>+</button>
                </div>
            </div>
        }
        {
            room && <div className={styles.roomSelect}>

                <div>
                    <button onClick={() => handleRooms(-1)}>-</button>
                    <button onClick={() => handleRooms(1)}>+</button>
                </div>
            </div>
        }

    </div>


}

function endDatePicker(D, M, day) {
    var month = [];
    for (let i = 0; i < 12; i++) {
        month.push(0)
    }
    month[0] = "1月";
    month[1] = "2月";
    month[2] = "3月";
    month[3] = "4月";
    month[4] = "5月";
    month[5] = "6月";
    month[6] = "7月";
    month[7] = "8月";
    month[8] = "9月";
    month[9] = "10月";
    month[10] = "11月";
    month[11] = "12月";

    var weekday = [];
    for (let i = 0; i < 7; i++) {
        weekday.push(0)
    }
    weekday[0] = "周六";
    weekday[1] = "周一";
    weekday[2] = "周二";
    weekday[3] = "周三";
    weekday[4] = "周四";
    weekday[5] = "周五";
    weekday[6] = "周六";
    var currentDay = weekday[D];

    var currentMonth = month[M];

    // var currentDayNum = day

    return [currentMonth, currentDay, day]
}

export default SearchRequest;