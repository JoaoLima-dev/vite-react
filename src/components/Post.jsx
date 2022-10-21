import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1680&q=80"
          />
          <div className={styles.authorinfo}>
            <strong>Kath</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="10-10 at 15:18" dateTime="2022-10-10">
          Posted an hour ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Hello!{""} 😁</p>

        <p>
          I just finished another project!. I made on NLW Return,held by
          Rocketseat. The project name is DoctorCare
        </p>

        <p>
          <a href="">👉 {""} jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#newproject</a>
          {""}
          <a href="">#nlw</a>
          {""}
          <a href="">#rocketseat</a>
          {""}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Give your feedback</strong>

        <textarea placeholder="Comment the post" />

        <footer>
          <button type="submit"> Post </button>
        </footer>
      </form>
    </article>
  );
}
