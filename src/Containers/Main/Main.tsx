import React, { useEffect, useState, Suspense } from "react";
import UrlCard from "../../Components/UrlCard/UrlCard";
import classes from "./Main.module.scss";
import { getUrls } from "../../API/api";
import Loader from "../../Components/UI/Loader/Loader";

interface IUrl {
  shortUrl: string;
  longUrl: string;
  clicks: string;
}

const Main = () => {
  const [urls, setUrls] = useState<IUrl[]>([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUrls()
      .then((response) => {
        setUrls(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div className={classes.Main__links_container}>
        {isLoading ? (
          <Loader />
        ) : (
          urls.map((item, index) => {
            return (
              <div key={index}>
                <UrlCard
                  shortUrl={item.shortUrl}
                  longUrl={item.longUrl}
                  clicks={item.clicks}
                />
                {item.shortUrl}
              </div>
            );
          })
        )}
      </div>
    </Suspense>
  );
};

export default Main;
