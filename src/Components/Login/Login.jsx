import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Users from "../../Utils/User";
const Login = () => {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const handleChange = (e) => {
    setEmail(e.target.value);
    let str = e.target.value;
    if (str.includes("@") && str.includes(".")) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const usersData = localStorage.getItem('users');
    const users = usersData ? JSON.parse(usersData) : [];

    // 检查邮箱地址和密码是否正确
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    // 检查邮箱地址和密码是否正确
    if (matchedUser) {
      localStorage.setItem('login', 'true');
      window.location.href = 'http://localhost:3000/';
      alert("您已成功登录");
    } else {
      alert('用户名或密码错误');
    }
  };
  

  return (
    <div className={styles.login}>
      <div className={styles.nav}>
        <Link to="/">
          <svg
            viewBox="0 0 256 48"
            xmlns="http://www.w3.org/2000/svg"
            className="icon-logo"
            width="110"
            height="24"
          >

            <title>Booking.com</title>

            <g fill="none">
              <path
                fill="#FFF"
                d="M17.592 25.92c-.001-2.637-1.668-4.268-4.244-4.268h-3.61c-1.158.163-1.683.866-1.683 2.225v5.906l5.293.007c2.618 0 4.243-1.161 4.244-3.87zm-9.537-9.529h4.764c2.677 0 3.63-1.702 3.63-3.48 0-2.335-1.392-3.73-3.714-3.73h-2.71c-1.354.087-1.97.785-1.97 2.247v4.963zm15.76 9.96c0 5.605-4.279 9.519-10.903 9.519H2v-28c.02-1.785 1.872-3.585 3.64-3.652h7.137c5.96 0 9.81 3.004 9.81 7.984 0 3.26-1.628 5.144-2.599 5.981l-.836.717.957.541c2.323 1.31 3.706 3.892 3.706 6.91zm126.32-2.676c0-5.095-2.75-5.689-4.81-5.689-4.16 0-4.48 4.189-4.48 5.473 0 2.917 1.26 6.031 4.82 6.031 2.04 0 4.47-1.01 4.47-5.815zm5.91-10.937l-.02 20.994c0 8.007-5.98 10.852-11.52 10.852-2.69 0-5.66-.726-7.95-1.945l-.45-.239.73-1.87.51-1.287c.56-1.388 1.37-1.734 2.75-1.315 1.06.384 2.64.811 4.38.811 3.57 0 5.54-1.689 5.54-4.745v-.638l-.51.376c-1.29.988-2.93 1.473-5 1.473-6.06 0-10.29-4.76-10.29-11.575 0-6.819 4.09-11.402 10.17-11.402 3.06 0 4.94 1.081 5.99 1.993l.3.261.18-.35c.47-.902 1.42-1.394 2.66-1.394h2.53zM69.707 24.184c0-3.711-2.296-6.307-5.57-6.307-3.26 0-5.529 2.596-5.529 6.307 0 3.714 2.27 6.312 5.53 6.312 3.326 0 5.57-2.538 5.57-6.312zm6.381 0c0 6.87-5.036 11.856-11.95 11.856-6.904 0-11.91-4.986-11.91-11.856 0-6.866 5.006-11.853 11.91-11.853 6.914 0 11.95 4.987 11.95 11.853zm31.357 11.493V16.281c0-2.34-1.11-3.475-3.42-3.475l-2.56-.01.02 17.704h-.02l.02 5.37h5.96v-.193zm17.06-23.399c-3.33 0-5.45 1.487-6.64 2.74l-.4.405-.14-.55c-.35-1.344-1.53-2.085-3.3-2.085h-2.86l.02 22.895h6.04V25.131c0-1.032.14-1.926.41-2.744.72-2.473 2.36-4.009 4.89-4.009 2.03 0 3.2 1.075 3.2 3.854v9.971c0 2.37 1.47 3.48 3.83 3.48h2.23V21.261c0-5.786-1.96-8.983-7.28-8.983zM93.436 24.777a5.596 5.596 0 0 0-.902-1.275l-.208-.221.22-.212c.316-.335.64-.731.951-1.191l6.087-9.083h-7.389l-4.573 7.104c-.259.381-.782.573-1.564.573H84.48V7.045C84.48 4.36 82.642 3 80.84 3h-2.426l.006 32.691h6.06v-9.508h1.15c.745 0 1.253.086 1.488.492l3.611 6.843c1.007 1.857 2.014 2.173 3.906 2.173h5.016l-3.736-6.203-2.479-4.711zm-49.788-.593c0-3.711-2.29-6.307-5.569-6.307-3.26 0-5.526 2.596-5.526 6.307 0 3.714 2.266 6.312 5.526 6.312 3.326 0 5.57-2.538 5.57-6.312zm6.38 0c0 6.87-5.026 11.856-11.949 11.856-6.897 0-11.902-4.986-11.902-11.856 0-6.866 5.005-11.853 11.902-11.853 6.923 0 11.948 4.987 11.948 11.853zM100.764 6.81c0-2.106 1.7-3.81 3.78-3.81 2.09 0 3.79 1.704 3.79 3.81 0 2.101-1.7 3.807-3.79 3.807-2.08 0-3.78-1.706-3.78-3.807z"
              ></path>
              <path
                fill="#0896FF"
                d="M189.08 28.067c-.02.021-2.7 2.848-6.21 2.848-3.21 0-6.45-1.974-6.45-6.377 0-3.808 2.51-6.467 6.11-6.467 1.17 0 2.49.421 2.7 1.127l.03.12c.48 1.601 1.93 1.683 2.21 1.683l3.41.004v-2.984c0-3.936-4.99-5.364-8.35-5.364-7.18 0-12.39 5.017-12.39 11.927 0 6.905 5.15 11.918 12.26 11.918 6.16 0 9.51-4.068 9.54-4.111l.18-.219-2.69-4.487-.35.382zm57.35-15.41c-2.7 0-5.18 1.27-6.85 3.393l-.47.601-.37-.672c-1.21-2.203-3.28-3.322-6.17-3.322-3.02 0-5.04 1.693-5.99 2.701l-.61.666-.24-.88c-.34-1.267-1.47-1.966-3.17-1.966h-2.5l-.02 22.806h5.97V25.917c0-.881.11-1.754.33-2.669.59-2.432 2.22-5.046 4.96-4.786 1.69.164 2.51 1.474 2.51 4.004v13.518h5.63V25.917c0-1.104.11-1.927.35-2.755.51-2.32 2.58-4.703 5.23-4.703 1.91 0 2.91 1.086 2.91 4.007v10.183c0 2.305 1.35 3.335 3.64 3.335h2.42l.01-14.56c0-5.817-2.55-8.767-7.57-8.767zm-40.77.386c-6.9 0-12.31 4.988-12.31 11.855s5.41 11.856 12.31 11.856c6.92 0 11.95-4.989 11.95-11.856s-5.03-11.855-11.95-11.855zm-45.35 19.403c0-2.106 1.69-3.81 3.78-3.81s3.79 1.704 3.79 3.81c0 2.102-1.7 3.808-3.79 3.808s-3.78-1.706-3.78-3.808zm45.35-1.237c-3.26 0-5.53-2.598-5.53-6.311 0-3.712 2.27-6.308 5.53-6.308 3.27 0 5.57 2.596 5.57 6.308 0 3.773-2.24 6.311-5.57 6.311z"
              ></path>
            </g>
          </svg>
        </Link>
        <img
          className={styles.buiavatarimage}
          src="https://t-cf.bstatic.com/design-assets/assets/v3.68.0/images-flags/Cn@3x.png" alt="China's-flag"

        ></img>
      </div>

      <div className={styles.form}>
        <h2 className={styles.formheading}>登录一个账号</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">邮箱地址</label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="email"
            name="email"
            id="email"
            autoFocus
          />
          {showPassword ? (
            <div>
              <label htmlFor="password1">密码</label>
              <input
                className={styles.input}
                type="password"
                name="password1"
                id="password1"
                onChange={handlePasswordChange}
              />
            </div>
          ) : null}
          <input
            className={styles.button}
            type="submit"
            defaultValue="登录"
          />
        </form>
      </div>

      
      <div className={styles.line1}>
        <hr />
        <p className={styles.p1}>
          登录或者注册账户，代表您同意我们的{" "}
          <span style={{ color: "blue" }}>《条款和条件》</span> 和{" "}
          <span style={{ color: "blue" }}>《隐私政策》</span>
        </p>
        <hr />
      </div>
      <div className={styles.line1}>
        <p className={styles.p1}>All rights reserved.</p>
        <p className={styles.p1}>Copyright (2006-2023) – Booking.com™</p>
      </div>



    </div>
  );
};

export default Login;

export const Logout = () => {
  const logoutres = () => {
    console.log("logout");
  };

  return <div className={styles.signButton}>
    <button>登出</button>

  </div>

}


