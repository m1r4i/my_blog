// pages/index.tsx
import { useState } from 'react';
import Head from 'next/head';
import matter from 'gray-matter';
import fs from 'fs';
import PostList from '../components/PostList';
import WorkList from '../components/WorkList';
import Awards from '../components/Awards';
import Aboutme from '../components/Aboutme';

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  const sortedPosts = posts.sort((a, b) =>
    new Date(a.frontMatter.date) > new Date(b.frontMatter.date) ? -1 : 1
  );

  const workfiles = fs.readdirSync('works');
  const works = workfiles.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`works/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  const sortedWorks = works.sort((a, b) =>
    new Date(a.frontMatter.date) > new Date(b.frontMatter.date) ? -1 : 1
  );


  return {
    props: {
      posts: sortedPosts,
      works: sortedWorks,
    },
  };
};

export default function Home({ posts, works }) {
  const [tab, setTab] = useState('posts');

  return (
    <div className="bg-white py-12 min-h-screen">
      <Head>
        <title>About me, Mirai.</title>
      </Head>

      {/* Tab Menu */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex space-x-6 border-b mb-2">
          {['posts', 'works', 'awards', 'about'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-1 text-lg font-medium border-b-2 transition ${
                tab === t
                  ? 'border-sky-500 text-sky-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {t === 'posts'
                ? 'Posts'
                : t === 'works'
                ? 'Works'
                  : t === 'awards'
                    ? 'Awards & Certification'
                    : 'About'}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {tab === 'posts' && <PostList posts={posts} />}
      {tab === 'works' && <WorkList works={works} />}
      {tab === 'awards' && ( <Awards /> )}
      {tab === 'about' && ( <Aboutme /> )}
    </div>
  );
}