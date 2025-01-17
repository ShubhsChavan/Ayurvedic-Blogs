import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p, key) => (
        <Post post={p} key={key} />
      ))}
    </div>
  );
}
