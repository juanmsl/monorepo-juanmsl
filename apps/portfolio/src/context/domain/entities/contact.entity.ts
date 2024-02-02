import {QueryCollection} from "./content-full.entity.ts";

export type ContactEntity = {
  icon: string;
  name: string;
  url: string;
  username: string;
};

export type ContactsCollection = QueryCollection<ContactEntity>;
