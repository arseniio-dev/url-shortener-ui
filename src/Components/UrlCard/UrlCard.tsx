import React from "react";
import classes from "./UrlCard.module.scss";

type Props = {
  shortUrl: string;
  longUrl: string;
  clicks: string;
};

const UrlCard = ({ shortUrl, longUrl, clicks }: Props) => {
  return (
    <div className={classes.UrlCard}>
      <div className={classes.UrlCard__leftContainer}>
        <div className={classes.UrlCard__shortURL}>
          <a href={`http://localhost:3100/${shortUrl}`}>{shortUrl}</a>
        </div>
        <div className={classes.UrlCard__longURL}>{longUrl}</div>
      </div>
      <div className={classes.UrlCard__clicks}>
        <span>{clicks}</span>
      </div>
    </div>
  );
};

export default UrlCard;
