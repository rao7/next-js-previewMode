import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    <Link href="posts">
        See Posts page
      </Link>

      <section>
      <p><samp>Preview mode Post page url<br/><i>/api/preview/posts</i></samp></p>
      <p><samp>Publish mode Post page url<br/><i>/api/publish/posts</i></samp></p>
      </section>
    </main>
  );
}
