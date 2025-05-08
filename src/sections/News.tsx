

const News = () => {

    const news = [
        {
            date: "2025/05/02",
            title: "親方、意図せず市長選挙に圧勝！",
            text: "建築現場で安全管理をテーマにした即興の演説をした親方が、市民の心を掴み97％の得票率で市長選挙に当選。「安全な足場と美味しい弁当を約束する」と意気込みを語った。"
        },
        {
            date: "2025/04/01",
            title: "チンパ博士、宇宙最大の謎『洗濯機で消える靴下』を解明",
            text: "チンパ博士は「地球の洗濯機から消えた靴下は、実はファンデ星に送られており、現地ではおしゃれな帽子として流行している」と衝撃の事実を公表。"
        },
        {
            date: "2025/03/14",
            title: "ブラ、興奮しすぎて東京のラーメン品切れ騒動",
            text: "興奮状態になったブラが、東京都内のコンビニからインスタントラーメンを全て宇宙船内にテレポートしてしまう事件が発生。当局は「ラーメンの回収に全力を尽くす」と呼びかけている。"
        },
    ]
    
  return (
    <section className='py-10 flex flex-col items-center relative' id="news">
        <img src="/hp/assets/news_title.svg" alt="news title" className='mb-30 block z-10'/>
        <ul className='w-9/10 flex flex-col gap-y-5'>
            {news.map((item, index)=>(
                <li className='flex flex-col gap-y-2' key={index}>
                    <div className='flex justify-between text-white text-xs font-ufo'>
                        <p>{item.date}</p>
                        <p>{item.title}</p>
                    </div>
                    <p className='font-yusei  text-[#370617] text-xs bg-[#FFBA08] rounded-sm py-3 px-5 shadow-[8px_8px_0_#370617]'>
                        {item.text}
                    </p>
                </li>
            ))}
        </ul>
        <p className='font-ufo text-2xl text-white mt-10'>more...</p>
        <img className='absolute z-1 top-0 left-0 -translate-x-1/4 -translate-y-1/3' src="/hp/assets/planet_3.webp" alt="" />
        <img className='absolute z-5 top-0 left-0 -translate-x-1/3 -translate-y-3/4' src="/hp/assets/spy_2_2.webp" alt="" />
        <img className='absolute z-5 top-0 right-0 translate-x-3/5 -translate-y-3/5' src="/hp/assets/spy_1_2.webp" alt="" />
    </section>
  )
}

export default News