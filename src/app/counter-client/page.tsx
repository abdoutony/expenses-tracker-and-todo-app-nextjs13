import CountForm from "../../components/counter/count-from";
import { getCountAsync } from "@/lib/counter";

const Home = async () => {
  const count = await getCountAsync();
  return (
    <div className="container mx-auto max-w-lg p-4">
      <CountForm count={count} />
    </div>
  );
};

export default Home;
