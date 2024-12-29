import profstyle from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={profstyle.profile}>
      <div className={profstyle.mainInfo}>
        <img className={profstyle.img} src={image} alt={name} />
        <p className={profstyle.name}>{name}</p>
        <p className={profstyle.tag}>{tag}</p>
        <p className={profstyle.location}>{location}</p>
      </div>
      <ul>
        <li>
          <span className={profstyle.stats}>Followers</span>
          <span className={profstyle.digits}>{stats.followers}</span>
        </li>
        <li>
          <span className={profstyle.stats}>Views</span>
          <span className={profstyle.digits}>{stats.views}</span>
        </li>
        <li>
          <span className={profstyle.stats}>Likes</span>
          <span className={profstyle.digits}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
