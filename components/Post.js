import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className="row-start-1 row-end-4">
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{post.frontMatter.title} - <small>{post.frontMatter.date}</small></h2>
        <p className="mt-2 text-gray-600"><span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{post.frontMatter.category}</span></p>
        <p className="mt-2 text-gray-600">{post.frontMatter.smallTalk}</p>
      </div>
      <div className="flex justify-end mt-4">
      <Link href={`/post/${post.slug}`} className="text-xl font-medium text-indigo-500">読む</Link>
      </div>
    </div>
  </div>
  );
};

export default PostCard;