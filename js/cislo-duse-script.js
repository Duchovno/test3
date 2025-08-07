function spocitejCislo() {
  const jmeno = document.getElementById("jmeno").value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();

  const znameni = parseInt(document.getElementById("znameni").value);
  const nahodne = Math.floor(Math.random() * 20) + 1;

  let soucetJmena = 0;
  let detailJmena = "";

  for (let i = 0; i < jmeno.length; i++) {
    const kod = jmeno.charCodeAt(i);
    if (kod >= 65 && kod <= 90) {
      const hodnota = kod - 64;
      soucetJmena += hodnota;
      detailJmena += `${jmeno[i]}(${hodnota}) `;
    }
  }

  const soucetCislicJmena = soucetJmena.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  const mezisoucet = soucetCislicJmena + znameni;
  const soucetMezisoucet = mezisoucet.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  const finalniSoucet = soucetMezisoucet + nahodne;
  const vysledneCislo = ((finalniSoucet - 1) % 20) + 1;

  document.getElementById("vysledek").innerHTML =
    `<div class="final-number" id="animovaneCislo">
      <strong style="font-size: 6rem; color: #FFD700">?</strong>
    </div>`;

  const vyklad = vyznamy[vysledneCislo] || "Toto číslo má dnes pro tebe zvláštní význam. Pozoruj, co se děje.";
  const vykladHTML =
    `<div class="step" style="font-size: 1.3rem; font-style: italic; margin-bottom: 2rem;">
      ✨ <strong>Výklad čísla dne:</strong><br>${vyklad}
    </div>`;
  document.getElementById("vysledek").innerHTML += vykladHTML;

  let counter = 0;
  const animace = setInterval(() => {
    const nahodneCislo = Math.floor(Math.random() * 20) + 1;
    document.getElementById("animovaneCislo").innerHTML =
      `<strong style="font-size: 6rem; color: #FFD700">${nahodneCislo}</strong>`;
    counter++;
    if (counter > 25) {
      clearInterval(animace);
      document.getElementById("animovaneCislo").innerHTML =
        `<strong style="font-size: 6rem; color: #FFD700">${vysledneCislo}</strong>`;
      zobrazVysledek(jmeno, detailJmena, soucetJmena, soucetCislicJmena, nahodne, mezisoucet, soucetMezisoucet, znameni, finalniSoucet, vysledneCislo);
    }
  }, 80);
}

function zobrazVysledek(jmeno, detailJmena, soucetJmena, soucetCislicJmena, nahodne, mezisoucet, soucetMezisoucet, znameni, finalniSoucet, vysledneCislo) {
  const vysledekHTML = `
    <div class="step">🔠 <span class="highlight">Tvoje jméno:<br></span> ${jmeno}</div>
    <div class="step">🔢 <span class="highlight">Číselné hodnoty písmen:<br></span> ${detailJmena}</div>
    <div class="step">➕ <span class="highlight">Číslo tvého jména:<br></span> ${soucetJmena} → <strong>${soucetCislicJmena}</strong></div>
    <div class="step">🌌 <span class="highlight">Znamení:<br></span> <strong>${znameni}</strong></div>
    <div class="step">🧮 <span class="highlight">${soucetCislicJmena} + ${znameni} = ${mezisoucet} →</span> <strong>${soucetMezisoucet}</strong></div>
    <div class="step">🎲 <span class="highlight">Číslo dne:<br></span> <strong>${nahodne}</strong></div>
    <div class="step">🧠 <span class="highlight">Celkem:</span> ${soucetMezisoucet} + ${nahodne} = <strong>${finalniSoucet}</strong></div>
    <div class="step">🔁 <span class="highlight">Dorovnání výsledku →</span> <br>Tvoje magické číslo dne je: <br><strong style="font-size: 2rem; color: #FFD700">${vysledneCislo}</strong></div>
  `;
  document.getElementById("vysledek").innerHTML += vysledekHTML;
}
