import styles from "./Profile.module.css"

const mailStyle = {
  color: "blue",
  fontSize: 2 + "rem"
}

export const Profile = () => {
  return (
    <>
      <h3>Страница с профилем</h3>;
      <div className="row">
        <div className="col-md-8">
          <h4 className={styles.name}>Фамилия имя: <span>Ваня Иванов</span></h4>
          <p className={styles.id} >Id: <span>2</span></p>
          <p style={mailStyle}>Email: <span>ii@ya.ru</span></p>
          <p style={{color: "red", fontStyle: "italic", fontSize: 24}}></p>
          <p>Обо мне: <span>Я расскажу о себе</span></p>
        </div>
        <div className="col-md-4">
          <img className={styles.img} src="https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg" alt="" />
        </div>
      </div>
    </>
  );
};