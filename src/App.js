import { useEffect, useState } from "react";
import { TvShowAPI } from "./api/Tv-Show";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./api/Config";
import TvShowDetails from "./Components/TvShowDetails/TvShowDetails";
import LoGo from "./Components/LOGO/Logo";
import logoImg from "./assets/images/logo.png";
// import TvShowItem from "./Components/TvShowListItem.js/TvShowItem";
import  TvShowList  from "./Components/TvShowList/TvShowList";

function App() {
  const [currentTvShow, setCurrentTvShow] = useState();
  const [recommandationList, setRecommandation] = useState([]);

  async function fetchPopular() {
    const popularTvShowList = await TvShowAPI.fetchPopular();
    if (popularTvShowList.length > 0) {
      setCurrentTvShow(popularTvShowList[0]);
    }
  }
  async function fetchRecommandation(tvShowId) {
    const recommandationListResp = await TvShowAPI.fetchRecommandation(
      tvShowId
    );
    if (recommandationListResp.length > 0) {
      setRecommandation(recommandationListResp.slice(0, 10));
    }
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  useEffect(() => {
    if (currentTvShow) {
      fetchRecommandation(currentTvShow.id);
    }
  }, [currentTvShow]);


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
        {currentTvShow && <TvShowList tvShowList={recommandationList} />}
      </div>
    </div>
  );
}

export default App;
