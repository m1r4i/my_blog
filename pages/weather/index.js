//Loading Components and Styles
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'


//Loading modules
import Link from 'next/link';

const getWeather =  async () => {
    const appid = 'TOKEN HERE'
    try {
      const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Sayama&appid=`+appid+`&lang=ja&units=metric`)
          .then(data => data.json())
      return weather;
    } catch (e) {
      return [];
    }
  }

export const getServerSideProps = async () => {

  const weather = await getWeather();

  return {
    props: {
      weather,
    },
  };
};

function Home({ weather }) {
  const sunrise = new Date(weather.sys.sunrise);
  const sunset = new Date(weather.sys.sunset);

  const sunrise_time = sunrise.getHours()+":"+sunrise.getMinutes();
  const sunset_time = sunset.getHours()+":"+sunset.getMinutes();

  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
    <div>
      <h2 className="text-gray-800 text-3xl font-semibold">みずおかあおい居住地の天気</h2>
      <p className="mt-2 text-gray-600">天気: {weather.weather[0].main} - {weather.weather[0].description}</p>
      <p className="mt-2 text-gray-600">気温: {weather.main.temp}℃</p>
      <p className="mt-2 text-gray-600">体感気温: {weather.main.feels_like}℃</p>
      <p className="mt-2 text-gray-600">気圧: {weather.main.pressure}hPa</p>
      <p className="mt-2 text-gray-600">湿度: {weather.main.humidity}%</p>
      <p className="mt-2 text-gray-600">視程: {weather.visibility}m</p>
    </div>
  </div>
  )
}

export default Home;
