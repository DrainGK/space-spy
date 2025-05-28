import { useState, useEffect } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const Faq = () => {
  const [faq, setFaq] = useState<FaqItem[]>([]);
  const [displayCount, setDisplayCount] = useState(3);
  const [page, setPage] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const pageSize = 5;
  const totalPages = Math.ceil(faq.length / pageSize);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}faq.json`);
        const data: FaqItem[] = await res.json();
        setFaq(data);
      } catch (err) {
        console.error("Failed to load FAQ:", err);
      }
    };
    fetchFaq();
  }, []);

  // Choix des items à afficher
  const itemsToShow =
    displayCount < pageSize
      ? faq.slice(0, displayCount)
      : faq.slice(page * pageSize, (page + 1) * pageSize);

  const handleToggle = (origIndex: number) => {
    setExpandedIndex(prev => (prev === origIndex ? null : origIndex));
  };

  return (
    <section
      className="relative w-full flex flex-col items-center bg-[#FFBA08] border-4 border-[#FAA307] py-20"
      id="question"
    >
      <img
        src="/hp/assets/bolt_top.svg"
        alt="bolt top"
        className="absolute top-0"
      />
      <img
        src="/hp/assets/bolt_top.svg"
        alt="bolt top"
        className="absolute bottom-0"
      />
      <img src="/hp/assets/faq_title.webp" alt="faq title" />

      <div className="w-full flex flex-col items-center gap-y-10 mt-20">
        {itemsToShow.map((item, idx) => {
          const origIndex =
            displayCount < pageSize ? idx : page * pageSize + idx;
          const isExpanded = expandedIndex === origIndex;

          return (
            <div
              key={origIndex}
              className="w-9/10 bg-white rounded-2xl p-5 flex flex-col gap-y-4 shadow-[8px_8px_0_#00A4F5]"
              onClick={() => handleToggle(origIndex)}
            >
              <span className="flex justify-between items-center font-yusei font-bold">
                <p className="text-sm text-[#371206]">{item.question}</p>
                <img
                  src="/hp/assets/arrow_up.svg"
                  alt="arrow up"
                  className={`transition-transform ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </span>
              <p
                className={`text-sm text-[#373737] ${
                  isExpanded ? "block" : "hidden"
                }`}
              >
                {item.answer}
              </p>
            </div>
          );
        })}
      </div>

      {/* MORE */}
      {displayCount < pageSize && faq.length > displayCount && (
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

      {/* PAGINATION + LESS */}
      {displayCount >= pageSize && faq.length > pageSize && (
        <div className="mt-10 flex flex-col items-center gap-y-4">
          <div className="flex items-center gap-x-5 text-white text-sm font-ufo">
            <button
              className={`px-4 py-2 bg-[#370617] rounded shadow ${
                page === 0 ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={() => {
                setExpandedIndex(null);
                setPage(p => Math.max(p - 1, 0));
              }}
            >
              Prev
            </button>
            <span>
              {page + 1} / {totalPages}
            </span>
            <button
              className={`px-4 py-2 bg-[#370617] rounded shadow ${
                page === totalPages - 1
                  ? "opacity-50 pointer-events-none"
                  : ""
              }`}
              onClick={() => {
                setExpandedIndex(null);
                setPage(p => Math.min(p + 1, totalPages - 1));
              }}
            >
              Next
            </button>
          </div>
          <button
            className="font-ufo text-2xl text-white"
            onClick={() => {
              setDisplayCount(3);
              setPage(0);
              setExpandedIndex(null);
            }}
          >
            less…
          </button>
        </div>
      )}
    </section>
  );
};

export default Faq;
