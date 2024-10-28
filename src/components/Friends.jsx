const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.name} {props.lastname}</td>
      <td> ----- </td>
      <td> ----- </td>
    </tr>
  );
}

export const Friends = (props) => {
  let users = props.function();  
  let usersCount = Object.keys(users).length;
  let userRow = [];
  for (let i = 0; i < usersCount; i++) {
    userRow.push(<TableRow key={i} index={i} name={users[i].name} lastname={users[i].lastname}/>);
  }
  return (
    <div className="container-fluid">
      <div className="rou">
        <div className="col-12">
          <h3>Список друзей</h3>
          <p>Доп инфо</p>
        </div>
      </div>
      <div className="row">
      <table className="table table-bordered">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя и Фамилия</th>
          <th scope="col">Email</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {userRow}
      </tbody>
      </table>
      </div>
    </div>
  );
};