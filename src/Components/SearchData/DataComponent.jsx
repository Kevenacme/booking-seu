import React from "react";
import styles from "../SearchData/DataComponent.module.css";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const DataComponent = ({ url, id, view, price, name, city, distance, bedSize, roomSize, cancelationPolicy, cancellation, reviews, rating, breakFast, availability, availableRooms, discountedPrice }) => {
  const lab = "查看可订项";
  const history = useHistory();
  const handleButtonClick = () => {
    history.push(`/search/${city}/${id}`);
  };
  return (
    <div className={styles.maindiv}>
      <div className={styles.imgdiv}>
        <img src={url} alt="imageofHotel" />
      </div>
      <div className={styles.datadiv}>
        <h5 className={styles.h5}>{name}</h5>

        <div>
          <p
            style={{
              color: "#0071C2",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {city}
          </p>
          <p
            style={{
              color: "#0071C2",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {/* Show on map */}
          </p>
          <p>离中心地区{distance}km</p>
        </div>
        <h5 style={{ padding: "0", marginTop: "4px", marginBottom: "6px" }}>
          {roomSize}
        </h5>
        <p style={{ padding: "0", margin: "0", fontSize: "13px" }}>{bedSize}</p>
        <h5
          style={{
            color: "green",
            padding: "0",
            marginTop: "6px",
            marginBottom: "0",
          }}
        >
          早餐 {breakFast}
        </h5>
        <h5
          style={{
            color: "green",
            padding: "0",
            marginTop: "3px",
            marginBottom: "0",
          }}
        >
          {cancellation} 取消 • {cancelationPolicy}
        </h5>
        <p
          style={{
            padding: "0",
            margin: "0",
            fontSize: "13px",
            color: "green",
            marginTop: "6px",
          }}
        >
          {/*You can cancel later, so lock in this great price today!*/}
        </p>
        <h5 style={{ color: "brown", padding: "0", marginTop: "2px" }}>
          只有 {availableRooms} 间房剩余
        </h5>
      </div>
      <div>
        <div style={{ display: "flex", float: "right" }}>
          <div style={{ marginRight: "3px" }}>
            <h5 style={{ padding: "0", margin: "0", marginTop: "5px", fontSize: "16px", textAlign: "right" }}>
              {view}
            </h5>
            <p
              style={{
                padding: "0",
                margin: "0",
                color: "gray",
                fontSize: "13px",
              }}
            >
              {reviews} 评论
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#003580",
              color: "white",
              padding: "10px",
              marginLeft: "5px",
              // width: "30px",
              fontWeight: "bold",
              borderRadius: "5px 5px 5px 5px",
            }}
          >
            {rating}
          </div>
        </div>

        <div style={{ marginTop: "75px", textAlign: "right" }}>
          <p
            style={{
              padding: "0",
              margin: "0",
              color: "gray",
              fontSize: "13px",
            }}
          >

          </p>
          <p style={{ margin: "0", padding: "0" }}>
            <span
              style={{
                color: "red",
                textDecoration: "line-through",
                fontSize: "14px",
              }}
            >
              {price}
            </span>
            <span style={{ fontSize: "22px", fontWeight: "600" }}> {discountedPrice}元</span>
          </p>
          <p
            style={{
              padding: "0",
              margin: "0",
              color: "gray",
              fontSize: "13px",
            }}
          >
            {/*tax and all*/}
          </p>
          
          <button onClick={handleButtonClick}
            style={{
              backgroundColor: "#0071C2",
              color: "white",
              border: "none",
              borderRadius: "3px",
              padding: "15px",
              marginTop: "10px",
              cursor: "pointer",
              
            } }
          >
            {lab}
          </button>

        </div>
      </div>
    </div>
  );
};

export { DataComponent };
