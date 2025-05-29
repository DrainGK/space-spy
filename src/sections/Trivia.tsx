import { useState, useEffect } from 'react';

interface TriviaItem {
  date: string;
  title: string;
  text: string;
}

const Trivia = () => {
  const [trivia, setTrivia] = useState<TriviaItem[]>([]);
  const [displayCount, setDisplayCount] = useState(3);
  const [page, setPage] = useState(0);

  const pageSize = 8;
  const totalPages = Math.ceil(trivia.length / pageSize);

  useEffect(() => {
    const fetchTrivia = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}trivia.json`);
        const data: TriviaItem[] = await response.json();
        setTrivia(data);
      } catch (error) {
        console.error('Failed to load trivia:', error);
      }
    };

    fetchTrivia();
  }, []);

  // if there’s no trivia at all, show the “coming soon” state
  if (trivia.length === 0) {
    return (
      <section
        className="bg-[#DC2F02] flex flex-col w-full items-center pt-30 pb-30 relative"
        id="trivia"
      >
        <img
          src="/hp/assets/Trivia_title.svg"
          className="w-[409px] h-auto object-cover"
          alt="trivia title"
        />
        <img
          src="/hp/assets/trivia.webp"
          alt="trivia"
          className="mx-auto mt-15"
        />
        <p className="text-center text-2xl text-white mt-5 font-ufo">
          coming soon
        </p>
      </section>
    );
  }

  // decide which items to show, just like in News
  const itemsToShow =
    displayCount < pageSize
      ? trivia.slice(0, displayCount)
      : trivia.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <section
      className="bg-[#DC2F02] flex flex-col w-full items-center pt-30 pb-30 relative"
      id="trivia"
    >
      <img
        src="/hp/assets/Trivia_title.svg"
        className="w-[409px] h-auto object-cover"
        alt="trivia title"
      />

      <img
          src="/hp/assets/trivia.webp"
          alt="trivia"
          className="mx-auto my-15"
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

      {displayCount < pageSize && trivia.length > displayCount && (
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

      {displayCount >= pageSize && trivia.length > pageSize && (
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

    </section>
  );
};

export default Trivia;
