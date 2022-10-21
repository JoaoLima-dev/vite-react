import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

import styles from './App.module.css';


function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post
        author="Joao Lima"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tempora quaerat autem repellat, hic blanditiis illo nobis dolorum sit at inventore eum, ipsam accusantium commodi voluptatum eos? Maiores, quisquam quod."
      />

      <Post
        author='Jose'
        content= "Post muito bacana"
      />
        </main>
      </div>
    </div>
  );
}

export default App;
