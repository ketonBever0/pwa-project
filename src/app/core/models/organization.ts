import { TourChat } from "./tour-chat";

export type OrgUnitType = {
  id: string;
  name: string;
  type: string;
  description: string;
  isPrivate: boolean;
  members: string[];
};
