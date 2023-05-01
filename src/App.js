import { useEffect, useState } from "react";
import { TvShowAPI } from "./api/Tv-Show";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./api/Config";
import TvShowDetails from "./Components/TvShowDetails/TvShowDetails";
import LoGo from "./Components/LOGO/Logo";
import logoImg from "./assets/images/logo.png";
import TvShowItem from "./Components/TvShowListItem.js/TvShowItem";

function App() {
  const [currentTvShow, setCurrentTvShow] = useState();

  async function fetchPopular() {
    const popularTvShowList = await TvShowAPI.fetchPopular();
    if (popularTvShowList.length > 0) {
      setCurrentTvShow(popularTvShowList[0]);
    }
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  const getCSS = () => {
    if (currentTvShow) {
      return {
        backgroundImage: `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.1),
          rgba(0, 0, 0, 0.8)
        ), url("${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}")`,
      };
    } else {
      return {
        background: "black",
      };
    }
  };

  return (
    <div className={s.main_container} style={getCSS()}>
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <LoGo
              img={logoImg}
              title="Watowatch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTvShow && <TvShowDetails tvShow={currentTvShow} />}
      </div>
      <div className={s.recommended_tv_show}>
        {currentTvShow && (
          <>
            <TvShowItem
              tvShow={currentTvShow}
              onClick={(tvShow) => {
                console.log("i have been clicked", tvShow);
              }}
            />
            <TvShowItem
              tvShow={currentTvShow}
              onClick={(tvShow) => {
                console.log("i have been clicked", tvShow);
              }}
            />
            <TvShowItem
              tvShow={currentTvShow}
              onClick={(tvShow) => {
                console.log("i have been clicked", tvShow);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
