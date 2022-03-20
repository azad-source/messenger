import { ImageSourcePropType } from "react-native";

export interface UserJsModel {
  id: number;
  name: string;
  avatar?: ImageSourcePropType;
}
