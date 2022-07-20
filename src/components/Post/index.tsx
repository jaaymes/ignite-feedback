import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./Post.module.css";

interface IPost {
  author?: string;
  content?: string;
}

export const Post: React.FC<IPost> = ({ author, content }: IPost) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar source="https://github.com/jaaymes.png" />
          <div className={styles.authorInfo}>
            <strong>Jaymes Costa</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="20 de Julho às 12:00 " dateTime="2022-07-20 12:00:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉<a href="#">Jaymes Costa</a>
        </p>
        <p>
          <a href="">#novoprojeto </a>
          <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form action="" className={styles.commentsForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
};
