import { useEffect, useState } from "react";

export const useFetchSpecies = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: null,
    error: null,
  });

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((response) => response.json())
      .then((species) => {
        const textBlue = species["flavor_text_entries"].filter(
          (text) =>
            text.language.name === "en" &&
            (text.version.name === "sword" ||
              text.version.name === "lets-go-eevee")
        );
        const textRed = species["flavor_text_entries"].filter(
          (text) =>
            text.language.name === "en" &&
            (text.version.name === "shield" ||
              text.version.name === "lets-go-eevee")
        );

        setState({
          species,
          textBlue: textBlue[0]["flavor_text"].replace("\\", " "),
          textRed: textRed[0]["flavor_text"].replace("\\", " "),
          loading: null,
          error: null,
        });
      })
      .catch((error) =>
        setState({
          data: null,
          loading: null,
          error,
        })
      );
  }, [url]);

  return state;
};
