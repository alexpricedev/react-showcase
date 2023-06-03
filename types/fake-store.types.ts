export interface FakeStoreUser {
  email: string;
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
}

export interface FakeStoreItem {
  title: string;
  description: string;
  image: string;
}
