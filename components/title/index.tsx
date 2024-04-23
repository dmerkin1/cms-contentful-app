const Title = ({ title, titleSize }: any) => {
  const TitleTag = titleSize || "h2";
  return (
    <TitleTag className="w-full text-center mb-8 text-5xl md:text-5xl font-bold tracking-tighter leading-tight my-5">
      {title}
    </TitleTag>
  );
};

export default Title;
