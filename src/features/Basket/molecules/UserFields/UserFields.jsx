import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { REMOVE_GOODS_ALL } from "../../../../constants";
import styles from "./UserFields.module.scss";

const UserFields = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [adres, setAdres] = useState("");
  const [phone, setPhone] = useState("");

  const userHandler = (val) => setUser(val);
  const emailHandler = (val) => setEmail(val);
  const adresHandler = (val) => setAdres(val);
  const phoneHandler = (val) => setPhone(val);

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setUser("");
    setEmail("");
    setAdres("");
    setAdres("");
    alert("Спасибо за заявку!");
    dispatch({
      type: REMOVE_GOODS_ALL,
    });
  };

  return (
    <div className={styles.userfields}>
      <form action="" onSubmit={(e) => onSubmitHandler(e)}>
        <div className={styles.formControl}>
          <div className={styles.title}>Введите данные</div>
        </div>
        <div className={styles.formControl}>
          <input
            type={"text"}
            className={styles.input}
            required
            value={user}
            onChange={(e) => userHandler(e.target.value)}
            placeholder={"ФИО"}
            name={"name"}
          />
        </div>
        <div className={styles.formControl}>
          <input
            type={"tel"}
            required
            className={styles.input}
            value={phone}
            onChange={(e) => phoneHandler(e.target.value)}
            placeholder={"Телефон"}
            name={"phone"}
          />
        </div>
        <div className={styles.formControl}>
          <input
            type={"email"}
            required
            className={styles.input}
            value={email}
            onChange={(e) => emailHandler(e.target.value)}
            placeholder={"Email"}
            name={"email"}
          />
        </div>
        <div className={styles.formControl}>
          <input
            type={"adres"}
            className={styles.input}
            required
            value={adres}
            onChange={(e) => adresHandler(e.target.value)}
            placeholder={"Адрес"}
            name={"adres"}
          />
        </div>
        <div className={styles.formControl}>
          <button className={styles.submit} type={"submit"}>
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserFields;
