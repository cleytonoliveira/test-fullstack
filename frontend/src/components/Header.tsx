import uolLogo from "/uolLogo.png";

export default function Header() {
  return (
    <header>
      <h1 className="bg-nero flex justify-center py-4">
        <img
          src={uolLogo}
          alt="UOL - Seu universo online"
          width={190}
          height={68}
        />
      </h1>
    </header>
  );
}
