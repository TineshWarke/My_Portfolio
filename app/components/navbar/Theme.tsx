const themes = [
  "Synthwave",
  "Luxury",
  "Sunset",
  "Coffee",
  "Cyberpunk",
  "Winter",
  "Forest",
];

const Theme = () => (
  <ul className="z-[1] rounded-box bg-base-100 p-2 shadow-2xl">
    {themes.map((theme) => (
      <li key={theme}>
        <input
          type="radio"
          name="theme-dropdown"
          className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
          aria-label={theme}
          value={theme.toLowerCase()}
        />
      </li>
    ))}
  </ul>
);

export default Theme;
