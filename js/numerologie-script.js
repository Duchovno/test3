const cisloEl = document.getElementById('cislo');
const vyznamEl = document.getElementById('vyznam');
const btn = document.getElementById('generuj');

const vyznamy = {
  1: "Síla vůle, nové začátky, nezávislost.",
  2: "Spolupráce, citlivost, harmonie.",
  3: "Kreativita, komunikace, radost.",
  4: "Stabilita, pracovitost, disciplína.",
  5: "Svoboda, změna, dobrodružství.",
  6: "Láska, odpovědnost, péče.",
  7: "Intuice, moudrost, duchovní růst.",
  8: "Moc, úspěch, materializace.",
  9: "Soucit, završení, humanitární smysl."
};

function getDnesniDatum() {
  return new Date().toISOString().split("T")[0];
}

function zobrazCislo(cislo) {
  cisloEl.textContent = cislo;
  vyznamEl.textContent = vyznamy[cislo];
}

const ulozeneCislo = localStorage.getItem("cisloDne");
const ulozenyDatum = localStorage.getItem("datumCisla");
const dnes = getDnesniDatum();

if (ulozeneCislo && ulozenyDatum === dnes) {
  zobrazCislo(ulozeneCislo);
  btn.disabled = true;
  btn.textContent = "Zítra znova ✨";
}

btn.addEventListener("click", () => {
  const cislo = Math.floor(Math.random() * 9) + 1;
  localStorage.setItem("cisloDne", cislo);
  localStorage.setItem("datumCisla", dnes);
  zobrazCislo(cislo);
  btn.disabled = true;
  btn.textContent = "Zítra znova ✨";
});
