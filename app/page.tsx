import { FetchNumber } from "./_components/FetchNumber";
import { HomePageFeed } from "./_components/HomePageFeed";

const HomePage = () => (
  <main>
    <h1 className="text-2xl mb-4 font-bold">Clean Error Catching 👇</h1>
    <FetchNumber />

    <h1 className="text-2xl mb-4 mt-10 font-bold">Data Loading Layer👇</h1>
    <HomePageFeed />
  </main>
);

export default HomePage;
