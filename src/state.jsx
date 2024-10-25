const user = {
  name: "Иван",
  lastname: "Иванов",
  id: "1",
  email: "ii@mail.ru",
  about: "тут я раскажу о себе",
  avatar: "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg"
};

const users = {
  0: {name: "Ваня", lastname: "Смирнов"},
  1: {name: "Коля", lastname: "Петров"},
  2: {name: "Маша", lastname: "Сидорова"},
  3: {name: "Петя", lastname: "Петухов"},
  4: {name: "Глаша", lastname: "Коровина"},
}

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}