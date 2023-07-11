import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/AuthRedux";
import Compose from "./Compose";
import styles from "./Home.module.css";

const Home = () => {
  const totalUnreadEmails = useSelector((state) => state.auth.unReadEmails);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const [showCompose, setShowCompose] = useState(false);

  const handleCompose = () => {
    setShowCompose(true);
  };

  const handleCloseCompose = () => {
    setShowCompose(false);
  };

  const handleSendEmail = (email) => {
    console.log(email);
  };

  return (
    <div className={styles.container}>
      <h1>MailBox</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.composeBtn} onClick={handleCompose}>
          Compose +
        </button>
        {showCompose && (
          <Compose onClose={handleCloseCompose} onSend={handleSendEmail} />
        )}
      </div>
      <ul className={styles.options}>
        <li>
          <Link className={styles.inbox} to="/">
            Inbox
            <span>{totalUnreadEmails}</span>
          </Link>
        </li>
        <li>
          <Link to="/sent">Sent</Link>
        </li>
        <li>
          <Link to="/draft">Draft</Link>
        </li>
        <button onClick={logoutHandler}>Logout</button>
      </ul>
    </div>
  );
};

export default Home;
