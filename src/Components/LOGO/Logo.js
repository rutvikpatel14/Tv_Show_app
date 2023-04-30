import s from "./style.module.css";

export default function LoGo({title,subtitle,img}) {
  return (
    <>
      <div className={s.container}>
        <img className={s.img} src={img} alt="logo"/>
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </>
  );
}
