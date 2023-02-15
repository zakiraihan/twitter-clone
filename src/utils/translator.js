const translate = async (text, from = "auto", to = "en") => {
  const res = await fetch("https://libretranslate.com/translate", {
    method: "POST",
    body: JSON.stringify({
      q: "\"Tidakkah kita melihat, manusia justru diuji dari apa yang paling diinginkannya?\"",
      source: from,
      target: to,
      format: "text",
      api_key: ""
    }),
    headers: { "Content-Type": "application/json" }
  });

  const translationJson = await res.json();
  console.log(translationJson)
  return translationJson.translatedText;
}

export {
  translate
}