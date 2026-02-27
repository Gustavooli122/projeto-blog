import { PostProvider } from "./contexts/PostContext";
import HomePage from "./pages/HomePage";
export const metadata = {
  title:"Evolução dev",
  description:"Dicas, estratégias e guias para você conquistar o nivel de mentalidade de um dev profissional."
}
export default function Home() {
  return (
    <PostProvider>  <HomePage/></PostProvider>
    
  );
}
