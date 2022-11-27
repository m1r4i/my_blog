import Link from 'next/link';

const WeatherCard = ({ weather }) => {
  return (
    <div className="row-start-1 row-end-4">
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">今日の天気(大阪)</h2>
        <p className="mt-2 text-gray-600">天気: {weather.weather[0].main}</p>
        <p className="mt-2 text-gray-600">気温: {weather.main.temp}℃</p>
        <p className="mt-2 text-gray-600">湿度: {weather.main.humidity}%</p>

      </div>
    </div>
  </div>
  );
};

export default WeatherCard;