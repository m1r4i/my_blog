import fs from 'fs';
import Head from 'next/head';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';



export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`posts/${params.id}.md`, 'utf-8');
  const { data, content } = matter(file);
  return { props: { frontMatter: data, content } };
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
  console.log('paths:', paths);
  return {
    paths,
    fallback: false,
  };
}

const Post = ({ frontMatter, content }) => {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | About me, Mirai.</title>
      </Head>

      <div className="bg-white py-12 lg:py-10">
        <div className="mx-auto max-w-7xl px-3 lg:px-4">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-indigo-600">{frontMatter.category}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{frontMatter.title}</p>
            <p className="mx-auto mt-1 max-w-2xl text-lg leading-8 text-gray-600">{frontMatter.date}</p>
            <div className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-left">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Post;
