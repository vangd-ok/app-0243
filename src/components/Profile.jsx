import styles from "./Profile.module.css"

const mailStyle = {
  color: "blue",
  fontSize: 2 + "rem"
}

export const Profile = (props) => {
       
  let userId = window.location.pathname.split("/")[2];
  let user = props.function(userId);
  console.log(userId);
  
  return (
    <>
      <h3>Страница с профилем</h3>
      <div className="row">
        <div className="col-md-8">
          <h4 className={styles.name}>Фамилия имя: <span>{user.lastname} {user.name}</span></h4>
          <p className={styles.id} >Id: <span>{user.id}</span></p>
          <p style={mailStyle}>Email: <span>{user.email}</span></p>
          <p style={{color: "red", fontStyle: "italic", fontSize: 24}}>Обо мне: <span>{user.about}</span></p>
        </div>
        <div className="col-md-4">
          <img className={styles.img} src={user.avatar} alt="" />
        </div>
      </div>
    </>
  );
};