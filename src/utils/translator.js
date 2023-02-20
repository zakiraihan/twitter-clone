import { v4 as uuidv4 } from "uuid";

const translate = async (text, from = "id", to = "en") => {
  const res = await fetch(
    `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${to}`, 
    {
      method: "POST",
      body:JSON.stringify([{
        'text': text
      }]),
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.REACT_APP_TRANSLATE_KEY,
        // location required if you're using a multi-service or regional (not global) resource.
        'Ocp-Apim-Subscription-Region': process.env.REACT_APP_TRANSLATE_LOCATION,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
      }
    }
  );

  const data = await res.json();
  if (res.ok) {
    return ({
      isError: false,
      translatedFrom: supportedLanguage[data[0].detectedLanguage.language],
      translatedText: data[0].translations[0].text,
    })
  }
  
  return ({
    isError: true,
    error: data.error
  });
}

const supportedLanguage = {
  "af": "Afrikaans",
  "sq": "Albanian",
  "ar": "Arabic",
  "hy": "Armenian",
  "bg": "Bulgarian",
  "ca": "Catalan",
  "zh-Hans": "Chinese Simplified",
  "zh-Hant": "Chinese Traditional",
  "hr": "Croatian",
  "cs": "Czech",
  "da": "Danish",
  "dv": "Divehi",
  "nl": "Dutch",
  "en": "English",
  "et": "Estonian",
  "fi": "Finnish",
  "fr": "French",
  "ka": "Georgian",
  "de": "German",
  "el": "Greek",
  "gu": "Gujarati",
  "ht": "Haitian Creole",
  "he": "Hebrew",
  "hi": "Hindi",
  "hu": "Hungarian",
  "is": "Icelandic",
  "id": "Indonesian",
  "iu": "Inuktitut",
  "ga": "Irish",
  "it": "Italian",
  "ja": "Japanese",
  "km": "Khmer",
  "tlh-Latn": "Klingon",
  "tlh-Piqd": "Klingon (plqaD)",
  "ko": "Korean",
  "ku": "Kurdish (Central)",
  "lo": "Lao",
  "lv": "Latvian",
  "lt": "Lithuanian",
  "mk": "Macedonian",
  "ms": "Malay (Latin)",
  "mt": "Maltese",
  "mn-Mong": "Mongolian (Traditional)",
  "my": "Myanmar",
  "nb": "Norwegian",
  "ps": "Pashto",
  "fa": "Persian",
  "pl": "Polish",
  "pt": "Portuguese (Brazil)",
  "ro": "Romanian",
  "ru": "Russian",
  "sr-Cyrl": "Serbian (Cyrillic)",
  "sr-Latn": "Serbian (Latin)",
  "sk": "Slovak",
  "sl": "Slovenian",
  "so": "Somali (Arabic)",
  "es": "Spanish",
  "sw": "Swahili (Latin)",
  "sv": "Swedish",
  "ty": "Tahitian",
  "th": "Thai",
  "tr": "Turkish",
  "uk": "Ukrainian",
  "ur": "Urdu",
  "uz": "Uzbek (Latin",
  "vi": "Vietnamese",
  "cy": "Welsh",
  "yua": "Yucatec Maya"
}

export {
  translate
}