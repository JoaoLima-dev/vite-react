import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1680&q=80" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="10-10 at 15:18" dateTime="2022-10-10">
                About an hour ago
              </time>
            </div>

            <button title="Delete Comment">
                <Trash size={24}/>
            </button>
          </header>

          <p>Great Davon, congratulations!! 😁😁😁</p>
        </div>

        <footer>
            <button>
            <ThumbsUp />
            Like <span>20</span>

            </button>
        </footer>
      </div>
    </div>
  );
}
