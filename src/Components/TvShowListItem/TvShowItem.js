import { SMALL_COVER } from "../../api/Config";
import s from "./style.module.css";

const MAX_TITLE_CHAR = 20;

export default function TvShowItem({ tvShow, onClick }) {

  const click_ = () => {
    onClick(tvShow);
  };
  
  return (
    <div onClick={click_}className={s.container}>
      <img
        className={s.img}
        alt={tvShow.name}
        src={SMALL_COVER + tvShow.backdrop_path}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
}
