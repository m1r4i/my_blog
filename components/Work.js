import Link from 'next/link';

const WorkCard = ({ post }) => {
  return (
    <div className="h-full flex flex-col justify-between bg-white shadow-lg rounded-lg p-6 transition hover:shadow-xl">
      <div>
        <h2 className="text-gray-800 text-xl font-semibold mb-2">
          {post.frontMatter.title}
        </h2>
        <small className="text-gray-500 text-sm block mb-1">
          {post.frontMatter.date}
        </small>
        <p className="text-sm text-blue-800 bg-blue-100 inline-block px-2 py-0.5 rounded font-medium mb-2">
          {post.frontMatter.category}
        </p>
        <p className="text-gray-600 text-sm">
          {post.frontMatter.smallTalk}
        </p>
      </div>
      <div className="mt-4 text-right">
        <Link
          href={`/work/${post.slug}`}
          scroll={false}
          className="text-indigo-500 hover:text-indigo-700 font-medium"
        >
          読む →
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;
