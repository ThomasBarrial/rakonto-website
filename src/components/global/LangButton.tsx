import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import React from 'react';

function LangButton() {
  const { selectedLanguage, setSelectedLanguage } =
    useSelectedLanguagesFromStore();
  return (
    <div className="flex  relative">
      <button
        onClick={() => setSelectedLanguage('En')}
        className="mr-2"
        type="button"
      >
        EN
      </button>
      <button onClick={() => setSelectedLanguage('Fr')} type="button">
        FR
      </button>
      <span
        className={`h-[1px] w-5/12 bg-primary absolute bottom-0 left-0 transform  ${
          selectedLanguage === 'En' ? 'translate-x-0' : 'translate-x-[135%]'
        } duration-300 ease-in-out`}
      />
    </div>
  );
}

export default LangButton;
