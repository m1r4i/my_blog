import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="h-full">
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;
