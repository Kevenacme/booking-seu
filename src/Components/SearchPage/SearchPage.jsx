import { useState } from "react";
import { HotelData } from "../../Utils/HotelData";
import FooterBlue from "../Footer/FooterBlue";
import { Navbar } from "../Navbar/Navbar";
import { DataComponent } from "../SearchData/DataComponent";
import { FilterFeature } from "./FilterFeature";
import { SearchRequest } from "./SearchRequest";
import styles from "./SearchRequest.module.css"
//import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router'
import { useEffect } from "react";
import { Pagination } from 'antd';
export const SearchPage = () => {
    const param = useParams();
    const [showData, setShowData] = useState(HotelData)
    const [price, setPrice] = useState(false)
    const [star, setStar] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const hotelsPerPage = 5;
    const indexOfLastHotel = currentPage * hotelsPerPage;
    const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
    const currentHotels = showData.slice(indexOfFirstHotel, indexOfLastHotel);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    // const [policy, setPolicy] = useState(false)
    const filterPrice = (e) => {

        if (e.target.name === "price") {
            if (Number(e.target.value) === 1000) {

                const filteredAbove1500 = HotelData.filter((el) => {

                    return (Number(el.price) > 1000 && el.city === String(param.destination))
                })
                setShowData([...filteredAbove1500])
            }
            else if (Number(e.target.value) === 500) {

                const filteredAbove1500 = HotelData.filter((el) => {

                    return ((Number(el.price) >= 500) && (Number(el.price) < 1000) && el.city === String(param.destination));
                })
                setShowData([...filteredAbove1500])
            }
            else if (Number(e.target.value) === 0) {

                const filteredAbove1500 = HotelData.filter((el) => {

                    return (Number(el.price) <= 500 && el.city === String(param.destination))
                })
                setShowData([...filteredAbove1500])
            }

            //setPrice(!price)
        }
        else {
            setShowData(HotelData)
        }
        /// console.log(e.target.value, e.target.checked, e.target.name);


    }
    const filterStar = (e) => {

        if (e.target.name === "star") {
            const filteredAbove1500 = HotelData.filter((el) => {

                return (Number(el.rating) === Number(e.target.value) && el.city === String(param.destination))
            })
            setShowData([...filteredAbove1500])
        }



    }
    const filterPolicy = (e) => {
        if (e.target.name = "policy") {

            if (e.target.value === "cancellation") {

                const filteredAbove1500 = HotelData.filter((el) => {

                    return (el.cancellation === "免费" && el.city === String(param.destination))
                })
                setShowData([...filteredAbove1500])
            }
            if (e.target.value === "breakFast") {

                const filteredAbove1500 = HotelData.filter((el) => {

                    return (el.breakFast === "包含" && el.city === String(param.destination))
                })
                setShowData([...filteredAbove1500])
            }
        }
    }
    const filterSearch = () => {

        const sendData = HotelData.filter((el) => {
            return el.city === String(param.destination)
        })
        setShowData(sendData)
    }

    useEffect(() => {
        filterSearch();
    }, []);

    return <>
        <div>
            <Navbar />
        </div>
        <div className={styles.serachPageContainer} >
            <div className={styles.left}>
                <SearchRequest />
                <FilterFeature filterPrice={filterPrice} filterStar={filterStar} filterPolicy={filterPolicy} />
            </div>

            <div className={styles.hotelListContainer}>
                {/* <ul className={styles.listOfHotels} > */}

                {
                    currentHotels.map((e, i) => {
                        // console.log(e.url);


                        return <DataComponent url={e.url}
                            key={e.id}
                            name={e.name} city={e.city} distance={e.distance}
                            bedSize={e.bedSize} roomSize={e.roomSize}
                            cancelationPolicy={e.cancelationPolicy}
                            cancellation={e.cancellation}
                            reviews={e.reviews}
                            rating={e.rating}
                            breakFast={e.breakFast}
                            availability={e.availability}
                            availableRooms={e.availableRooms}
                            price={e.price}
                            discountedPrice={e.discountedPrice}
                            id={e.id}
                            view={e.view}
                        />


                    })
                }

                {/* </ul> */}

            </div>

        </div>
        <div className={styles.paginationStyle}>
        <Pagination
            current={currentPage}
            pageSize={hotelsPerPage}
            total={showData.length}
            onChange={handlePageChange}
        />
        </div>
        
        <FooterBlue />

    </>
}