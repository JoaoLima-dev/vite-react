import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/JoaoLima-dev.png",
      name: "João Lima",
      role: "React Dev",
    },
    content: [
      { type: "paragraph", content: "Hello! 😁" },
      {
        type: "paragraph",
        content:
          "I just finished another project!. I made on NLW Return,held by Rocketseat. The project name is DoctorCare",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-10-10"),
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1680&q=80"',
      name: "Kath Connor",
      role: "React Dev",
    },
    content: [
      { type: "paragraph", content: "Hello! 😁" },
      {
        type: "paragraph",
        content:
          "I just finished another project!. I made on NLW Return,held by Rocketseat. The project name is DoctorCare",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-10-12"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((posts) => {
            return (
              <Post 
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
