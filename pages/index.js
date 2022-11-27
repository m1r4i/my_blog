//Loading Components and Styles
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Post from '../components/Post';
import Weather from '../components/Weather';


//Loading modules
import Link from 'next/link';
import matter from 'gray-matter';
import fs from 'fs';


export const getServerSideProps = async () => {
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

  //ForecastAPI
  const appid = 'Your OpenWeatherMap AppId here';
  

  try {
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Osaka&appid=`+appid+`&lang=ja&units=metric`)
        .then(data => data.json())
    return {
        props: {
            weather,
            posts,
        }
    }
  } catch (e) {
      console.log(e)
      return {
          props: {
              weather: [],
              posts,
          }
      }
  }
};

function Home({ posts,weather }) {
  return (
    <div className="bg-white py-12 lg:py-10">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="grid grid-rows-3 grid-flow-col gap-4">

          <Weather weather={weather} />

          {posts.map((post) => (
            <Post key={post.slug} post={post} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Home;