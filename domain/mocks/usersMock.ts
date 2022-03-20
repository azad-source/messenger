import avatar from "@assets/images/avatar.png";
import { UserJsModel } from "@domain/jsModels/UserJsModel";

export const usersMock: UserJsModel[] = [
  { id: 101, name: "Иванов Иван" },
  { id: 102, name: "Петров Петр", avatar },
  { id: 103, name: "Александров Александр Александрович" },
  { id: 104, name: "Васильев Василий Васильевич", avatar },
  { id: 105, name: "Николаев Николай Николаевич" },
  { id: 106, name: "Сережа", avatar },
  { id: 107, name: "Анатолий" },
];
