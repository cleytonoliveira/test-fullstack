import uolLogo from "/uolLogo.png";

export default function Header() {
  return (
    <header>
      <h1 style={{ background: "#1a1a1a" }}>
        <img
          src={uolLogo}
          alt="UOL - Seu universo online"
          width={190}
          height={68}
        />
      </h1>
      <section>
        <h2>Icon Painel de clientes</h2>
      </section>
    </header>
  );
}
