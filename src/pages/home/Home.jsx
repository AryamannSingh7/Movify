import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Anime from "./Anime/Anime";
import Drama from "./Drama/Drama";
import Horror from "./Horror/Horror";
import Comedy from "./comedy/Comedy";
import Romance from "./Romance/Romance";
import SciFi from "./scifi/SciFi";
import Thriller from "./Thriller/Thriller";
import Adventure from "./Adventure/Adventure";
import Action from "./action/Action";
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      <Anime />
      <Action />
      <Adventure />
      <Comedy />
      <Drama />
      <Horror />
      <Romance />
      <SciFi />
      <Thriller />
    </div>
  );
};

export default Home;
