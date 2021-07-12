import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      // const { data } = await axios.post(
      //   'https://translation.googleapis.com/language/translate/v2',
      //   {},
      //   {
      //     params: {
      //       q: debouncedText,
      //       target: language.value,
      //       key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
      //     },
      //   }
      // );
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    
      const { data } = await axios.post(
        'http://ssmt.iiit.ac.in/onemt',
        {headers},
        {
          params: {
            text: debouncedText, 
            lang:"hin", 
            Tlang :language.value, 
            mode: "BaseLine - V5",
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h3 className="ui header">{translated}</h3>
    </div>
  );
};

export default Convert;
