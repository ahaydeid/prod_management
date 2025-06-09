export const ButtonSapa = () => {
  function sapa() {
    return alert("Hallo Hadi");
  }
  return (
    <button className="px-10 py-3 bg-amber-300 hover:bg-amber-500 cursor-pointer" onClick={() => sapa()}>
      Ini tombol
    </button>
  );
};
