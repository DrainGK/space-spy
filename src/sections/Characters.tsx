
const Characters = () => {
  return (
    <section className='bg-[rgb(0,164,245)] w-full flex flex-col items-cente pt-20 pb-10 relative' id="character">

        <div className="relative w-[342px] h-[342px] mx-auto mb-15">
            {/* Étoile noire */}
            <img
              className="absolute inset-0 w-full h-full object-contain z-0"
              src="/assets/star_2.svg"
              alt="star-title"
            />

            {/* Personnages */}
            <img
              src="/assets/character_title.webp"
              alt="title"
              className="absolute inset-0 w-full h-full object-contain z-10"
            />

            {/* Texte centré */}
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-20 w-[90%] text-center py-3 font-ufo text-3xl text-[#FDD717] bg-white rounded-lg shadow-md"
              style={{ textShadow: '0px 4px 0 rgba(55, 6, 23, 1)' }}>
              キャラクター
            </p>
          </div>

        <p className="font-ufo text-4xl text-white pl-5 pb-5">ブラ</p>
        <div className="bg-[#FDD717] w-9/10 font-yusei rounded-br-4xl py-5 relative mb-30">
          <p className="w-7/10 px-5 pb-2 text-sm">
            ありとあらゆるスパイ技術を体得し身体的能力に秀でた知的 生命体。普段はおっとりしているが興奮状態に入ると、誰も手 が付けられない凶暴さ見せることも!  食欲・性欲・睡眠欲を兼ね備えた超エリート。見た目とは裏腹に 超能力やテレパシーを使いこなす。
          </p>
          <img className="ml-2" src="/assets/pres_bura.png" alt="bura" height={117} width={282}/>
          <img className="absolute -top-1/4 -right-1/2" src="/assets/bura_front.webp" alt="bura" height={420} width={350}/>
        </div>

        <p className="font-ufo text-4xl text-white px-5 pb-5 ml-auto">スッピ</p>
        <div className="bg-[#FDD717] w-9/10 font-yusei rounded-bl-4xl py-5 relative mb-30 ml-auto">
          <p className="w-7/10 px-5 pb-2 text-sm ml-auto">
          ありとあらゆるスパイ技術を体得し知的能力に秀でた知的生命体。 性格的にせっかちな面があり神経質。 知的指数は高いのだが、咄嗟の判断に脆い面あり。 見た目とは裏腹に超能力やテレパシーを使いこなす。
          </p>
          <img className="ml-auto px-2" src="/assets/pres_suppi.webp" alt="suppi" height={117} width={282}/>
          <img className="absolute -top-1/2 -left-1/2" src="/assets/suppi_front.webp" alt="suppi" height={420} width={350}/>
        </div>

        <p className="font-ufo text-4xl text-white pl-5 pb-5">OYAKATA</p>
        <div className="bg-[#FDD717] w-9/10 font-yusei rounded-br-4xl py-5 relative">
          <p className="w-7/10 px-5 pb-2 text-sm">
          基本、脇役だが、時代を問わず建築現場を切り盛りする親分的存在。 時に主役を射止めてしまうほどの存在感は、それもまた人生、その ありがたみを教えてくれる。
          </p>
          <img className="ml-2" src="/assets/pres_oyakata.webp" alt="bura" height={117} width={282}/>
          <img className="absolute -top-1/2 -right-1/2" src="/assets/oyakata_front.webp" alt="bura" height={420} width={350}/>
        </div>

        <img src="/assets/arrow.svg" alt="arrow" className="absolute  bottom-0 z-5" />

        <ul className="font-alpha text-white text-5xl block z-10 w-full text-center mt-20">
          <li className="ml-18">TRIVIA</li>
          <li className="ml-10">TRIVIA</li>
          <li className="ml-2">TRIVIA</li>
          <li className="mr-2">TRIVIA</li>
          <li className="mr-10">TRIVIA</li>
        </ul>

        <div className="flex z-10 absolute bottom-0 translate-y-1/3">
          <img src="/assets/granma.webp" alt="grandma" width={107} height={168}/>
          <img src="/assets/grandpa.webp" alt="grandpa" width={205} height={216}/>
          <img src="/assets/oyakata_cloud.webp" alt="oyakata on the cloud" width={134} height={206}/>
        </div>

    </section>
  )
}

export default Characters