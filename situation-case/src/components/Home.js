import Feed from "./Feed";

const Home = ({ posts, fetchErr, isLoading }) => {
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchErr && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchErr}
        </p>
      )}
      {!isLoading &&
        !fetchErr &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p className="statusMsg">No posts to display</p>
        ))}
    </main>
  );
};

export default Home;
