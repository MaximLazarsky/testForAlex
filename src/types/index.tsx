export interface IOwner {
  login: string;
  avatar_url: string;
}

export interface IRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  owner: IOwner;
}
