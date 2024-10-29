const user = {
  name: "Иван",
  lastname: "Иванов",
  id: "1",
  email: "ii@mail.ru",
  about: "тут я раскажу о себе",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&w=300&q=80"
};

// const users = {
//   0: {name: "Вано", lastname: "Смиронидзе", id: 4, email: "vs@mail.ru", about: "тут я раскажу о себе", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80" },
//   1: {name: "Кира", lastname: "Петрова", id: 77, email: "kp@mail.ru", about: "тут я раскажу о себе", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80" },
//   2: {name: "Маша", lastname: "Сидорова", id: 15, email: "ms@mail.ru", about: "тут я раскажу о себе", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&w=300&q=80" },
//   3: {name: "Петя", lastname: "Петухов", id: 3, email: "pp@mail.ru", about: "тут я раскажу о себе", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80" },
//   4: {name: "Глаша", lastname: "Коровина", id: 40, email: "gk@mail.ru", about: "тут я раскажу о себе", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80" },
// }

let users = [];
export function getUser(userId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}

export async function getUsers() {
  let response = await fetch("http://feer.p-host.in/getUsers");
  users = await response.json();
  console.log(users);
  return users;
}