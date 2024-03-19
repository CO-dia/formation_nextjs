import ResourceHighlight from "@/components/ResourceHighlight";
import { resources } from "../../api/data";
import { GetServerSideProps } from "next";

const Home = ({repo}) => {
  return (
    <main>   
      <ResourceHighlight resources={resources}/>
    </main>
  );
}

/* export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/hello')
  const repo = await res.json()
  // Pass data to the page via props
  return { props: { repo } }
}) satisfies GetServerSideProps<{ repo }> */

export default Home;
