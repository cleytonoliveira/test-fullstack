type SubtitleProps = {
  title: string;
  text: string;
};

export const Subtitle: React.FC<SubtitleProps> = ({ title, text }) => {
  return (
    <section>
      <h3>{title}</h3>
      <p>{text}</p>
    </section>
  );
};
