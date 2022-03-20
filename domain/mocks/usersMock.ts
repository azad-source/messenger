import avatar from "@assets/images/avatar.png";
import { UserJsModel } from "@domain/jsModels/UserJsModel";

export const usersMock: UserJsModel[] = [
  { name: "Иванов Иван" },
  { name: "Петров Петр", avatar },
  { name: "Александров Александр Александрович" },
  { name: "Васильев Василий Васильевич", avatar },
  { name: "Николаев Николай Николаевич" },
  { name: "Сережа", avatar },
  { name: "Анатолий" },
];
