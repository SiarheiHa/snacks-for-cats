const Feature = ({ text }: { text: string }) => {
  const arrOfWords = text.split(' ');
  const firstWord = arrOfWords[0];
  const isNumericStr = !Number.isNaN(Number(firstWord));
  if (isNumericStr) {
    return (
      <span>
        <b>{firstWord} </b>
        {arrOfWords.slice(1).join(' ')}
      </span>
    );
  }
  return <span>{text}</span>;
};

export { Feature };
