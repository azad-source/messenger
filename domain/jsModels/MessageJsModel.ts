export interface MessageJsModel {
  text: string;
  date: Date;
  userId: number;
  isEdited?: boolean;
  isViewed?: boolean;
  isRead?: boolean;
}
