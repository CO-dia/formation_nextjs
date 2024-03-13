import ResourceHighlight from "@/components/ResourceHighlight";
import { resources } from "../../api/data";

export default function Home() {

  return (
    <main>   
      <ResourceHighlight resources={resources}/>
    </main>
  );
}
