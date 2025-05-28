import { useState, useEffect } from 'react';

interface NewsItem {
  date: string;
  title: string;
  text: string;
}

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [displayCount, setDisplayCount] = useState(3);
  const [page, setPage] = useState(0);

  const pageSize = 8;
  const totalPages = Math.ceil(news.length / pageSize);

  useEffect(() => {
    const fetchNews = async () => {
      try {
const response = await fetch(`${import.meta.env.BASE_URL}news.json`);
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Failed to load news:', error);
      }
    };

    fetchNews();
  }, []);

  const itemsToShow =
    displayCount < pageSize
      ? news.slice(0, displayCount)
      : news.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <section className="py-10 flex flex-col items-center relative" id="news">
      <img
        src="/hp/assets/news_title.svg"
        alt="news title"
        className="mb-30 block z-10"
      />

      <ul className="w-9/10 flex flex-col gap-y-5">
        {itemsToShow.map((item, idx) => (
          <li className="flex flex-col gap-y-2" key={idx}>
            <div className="flex justify-between text-white text-xs font-ufo">
              <p>{item.date}</p>
              <p>{item.title}</p>
            </div>
            <p className="font-yusei text-[#370617] text-xs bg-[#FFBA08] rounded-sm py-3 px-5 shadow-[8px_8px_0_#370617]">
              {item.text}
            </p>
          </li>
        ))}
      </ul>

      {displayCount < pageSize && news.length > displayCount && (
        <button
          className="font-ufo text-2xl text-white mt-10"
          onClick={() => {
            setDisplayCount(pageSize);
            setPage(0);
          }}
        >
          more…
        </button>
      )}

      {displayCount >= pageSize && news.length > pageSize && (
        <div className="mt-10 flex flex-col items-center gap-y-4">
          <div className="flex items-center gap-x-5 text-white text-sm font-ufo">
            <button
              className={`px-4 py-2 bg-[#370617] rounded shadow ${
                page === 0 ? 'opacity-50 pointer-events-none' : ''
              }`}
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
            >
              Prev
            </button>
            <span>
              {page + 1} / {totalPages}
            </span>
            <button
              className={`px-4 py-2 bg-[#370617] rounded shadow ${
                page === totalPages - 1 ? 'opacity-50 pointer-events-none' : ''
              }`}
              onClick={() =>
                setPage((p) => Math.min(p + 1, totalPages - 1))
              }
            >
              Next
            </button>
          </div>
          <button
            className="font-ufo text-2xl text-white"
            onClick={() => {
              setDisplayCount(3);
              setPage(0);
            }}
          >
            less…
          </button>
        </div>
      )}

      {/* décor */}
      <img
        className="absolute z-1 top-0 left-0 -translate-x-1/4 -translate-y-1/3"
        src="/hp/assets/planet_3.webp"
        alt=""
      />
      <img
        className="absolute z-5 top-0 left-0 -translate-x-1/3 -translate-y-3/4"
        src="/hp/assets/spy_2_2.webp"
        alt=""
      />
      <img
        className="absolute z-5 top-0 right-0 translate-x-3/5 -translate-y-3/5"
        src="/hp/assets/spy_1_2.webp"
        alt=""
      />
    </section>
  );
};

export default News;
