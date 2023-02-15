import { format, formatDistanceToNow } from 'date-fns';
import enIE from 'date-fns/locale/en-IE';
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({author, publishedAt, content}) {
  const publishedDateFormatted = format(publishedAt, "dd'-'LLLL 'at' HH:mm'h'", {
    locale: enIE,
    
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enIE,
    addSuffix: true,
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type == 'link'){
            return <p><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Give your feedback</strong>

        <textarea placeholder="Comment the post" />

        <footer>
          <button type="submit"> Post </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
