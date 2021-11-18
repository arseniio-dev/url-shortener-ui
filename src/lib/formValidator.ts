const regexScheme = /^(.{1,9}.\/\/)(.+)/;
// const regexURL = /^(ftp|http|https):\/\/[^ "]+$/;

const isContainsScheme = (url: string): boolean => {
  return regexScheme.test(url);
};

const getScheme = (url: string): Array<string> => {
  let x = regexScheme.exec(url);
  return x ? [x[1], x[2]] : ["", ""];
};

export const validateUrlHelper = (scheme: string, url: string) => {
  // {scheme: str, url: str}

  const init = {
    scheme: "",
    url: "",
  };

  if (isContainsScheme(url)) {
    [init.scheme, init.url] = getScheme(url);
  } else if (scheme !== "" && scheme !== "https://" && url !== "") {
    [init.scheme, init.url] = [scheme, url];
  } else {
    [init.scheme, init.url] = ["https://", url];
  }
  return init;
};
// ------- LEGACY -------
// export default validateUrl = (formInput, scheme, leastURl) => {
//   if (leastURl === "") {
//     setScheme("");
//   }
//   if (isContainsScheme(formInput)) {
//     setScheme(getScheme(formInput)[0]);
//     setInput(getScheme(formInput)[1]);
//     if (scheme === "" && !isContainsScheme(formInput)) {
//       setScheme("https://");
//     } else {
//       setScheme(getScheme(formInput)[0]);
//     }
//   }
//   if (scheme === "" && !isContainsScheme(formInput)) {
//     setScheme("https://");
//   }
// };
