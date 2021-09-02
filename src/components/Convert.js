import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text = "Hi" }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async() => {
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
      //   const options = {
      //     headers: {"content-type": "application/json"}
      // }
      // axios.defaults.headers={};
      // axios.defaults.headers={"content-type": "application/json"};
      
      //   const { data } = await axios.post(
      //     'https://www.cfilt.iitb.ac.in/en-mr',

      //     {
      //       data: `{
      //         "text": "${debouncedText}",
      //           "source_language": "en",
      //           "target_language": "mr"
      //       }`,
      //     }
      //   );

      var url = "https://www.cfilt.iitb.ac.in/en-mr";

      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          let tdata = JSON.parse(xhr.responseText);
          console.log(tdata);
          setTranslated(tdata.data);
        }
      };

      var data = `{
        "text": "${debouncedText}",
        "source_language": "en",
        "target_language": "mr"
      }
      `;

      xhr.send(data);
      console.log(data);
      //console.log(xhr.responseText);
      //setTranslated(data.data.translations[0].translatedText);
      // setTranslated(data.data);
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
