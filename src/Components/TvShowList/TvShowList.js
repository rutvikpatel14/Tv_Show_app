import TvShowItem from "../TvShowListItem/TvShowItem";
import s from "./style.module.css";

export default function TvShowList({ tvShowList,onClickItem }) {
  return (
    <div>
      <div className={s.title}>You'll probably like:</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={s.span} key={tvShow.id}>
              
              <TvShowItem tvShow={tvShow} onClick={onClickItem}/>
            </span>
          );
        })}
      </div>
    </div>
  );
}
