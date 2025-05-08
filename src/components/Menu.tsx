import { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Bouton pour ouvrir le menu */}
      {!isOpen && (
        <button onClick={handleToggleMenu} className="fixed top-4 right-4 z-50">
          {/* Remplace par ton SVG */}
          <img src="/hp/assets/menu.svg" alt="Menu" className="w-[70px] h-[50px]" />
        </button>
      )}

      {/* Menu fullscreen */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-10 z-40 flex items-center justify-center">
          <div className="w-[90%] h-[90%] bg-white rounded-xl p-8 flex flex-col items-center justify-center gap-6 relative">
            <button
              onClick={handleToggleMenu}
              className="absolute top-4 right-4 text-black text-2xl font-bold"
            >
              ✕
            </button>
            <a href="#youtube" className="text-2xl hover:underline">Youtube</a>
            <a href="#arasuji" className="text-2xl hover:underline">あらすじ</a>
            <a href="#news" className="text-2xl hover:underline">ニュース</a>
            <a href="#character" className="text-2xl hover:underline">キャラクター</a>
            <a href="#trivia" className="text-2xl hover:underline">Trivia</a>
            <a href="#question" className="text-2xl hover:underline">Question</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
