import { PostProvider } from "./contexts/PostContext";
import HomePage from "./pages/HomePage";
export const metadata = {
  title:"Treinos em Casa - Seu Guia Fitness Completo",
  description:"Dicas, treinos e guias para você conquistar o corpo dos sonhos sem sair de casa."
}
export default function Home() {
  return (
    <PostProvider>  <HomePage/></PostProvider>
    
  );
}
