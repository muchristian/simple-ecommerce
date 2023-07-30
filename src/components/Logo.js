const Logo = ({ title }) => {
  return (
    <a href="/" className=" cursor-pointer">
      <h1 className="flex flex-col">
        <span className="text-xl text-palette-primary font-primary font-bold tracking-tight pt-1">
          {title}
        </span>
      </h1>
    </a>
  );
};

export default Logo;
