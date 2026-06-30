import React, { useState } from 'react';

export default function QuinielaManual() {
  const [activeTab, setActiveTab] = useState('pronosticar');
  const [pronosticadorActivo, setPronosticadorActivo] = useState('betin');

  const resultadosOficiales = {
    73: { regular: "1 - 0" },
    76: { regular: "2 - 1" },
    74: { regular: "1 - 1", penales: "3 - 4" },
    75: { regular: "1 - 1" }
  };

  const partidos = [
    { id: 73, local: "Sudáfrica", visita: "Canadá", fase: "Dieciseisavos" },
    { id: 76, local: "Brasil", visita: "Japón", fase: "Dieciseisavos" },
    { id: 74, local: "Alemania", visita: "Paraguay", fase: "Dieciseisavos" },
    { id: 75, local: "Paises Bajos", visita: "Marruecos", fase: "Dieciseisavos" },
    { id: 78, local: "Costa de marfil", visita: "Noruega", fase: "Dieciseisavos" },
    { id: 77, local: "Francia", visita: "Suecia", fase: "Dieciseisavos" },
    { id: 79, local: "Ecuador", visita: "México", fase: "Dieciseisavos" },
    { id: 80, local: "Inglaterra", visita: "RD Congo", fase: "Dieciseisavos" },
    { id: 82, local: "Bélgica", visita: "Senegal", fase: "Dieciseisavos" },
    { id: 81, local: "USA", visita: "Bosnia", fase: "Dieciseisavos" },
    { id: 84, local: "España", visita: "Austria", fase: "Dieciseisavos" },
    { id: 83, local: "Portugal", visita: "Croacia", fase: "Dieciseisavos" },
    { id: 85, local: "Suiza", visita: "Argelia", fase: "Dieciseisavos" },
    { id: 88, local: "Australia", visita: "Egipto", fase: "Dieciseisavos" },
    { id: 86, local: "Argentina", visita: "Cabo Verde", fase: "Dieciseisavos" },
    { id: 87, local: "Colombia", visita: "Ghana", fase: "Dieciseisavos" },
    { id: 89, local: "G-74", visita: "G-77", fase: "Octavos" },
    { id: 90, local: "G-73", visita: "G-75", fase: "Octavos" },
    { id: 91, local: "G-76", visita: "G-78", fase: "Octavos" },
    { id: 92, local: "G-79", visita: "G-80", fase: "Octavos" },
    { id: 93, local: "G-83", visita: "G-84", fase: "Octavos" },
    { id: 94, local: "G-81", visita: "G-82", fase: "Octavos" },
    { id: 95, local: "G-86", visita: "G-88", fase: "Octavos" },
    { id: 96, local: "G-85", visita: "G-87", fase: "Octavos" },
    { id: 97, local: "G-89", visita: "G-90", fase: "Cuartos" },
    { id: 98, local: "G-93", visita: "G-94", fase: "Cuartos" },
    { id: 99, local: "G-91", visita: "G-92", fase: "Cuartos" },
    { id: 100, local: "G-95", visita: "G-96", fase: "Cuartos" },
    { id: 101, local: "G-97", visita: "G-98", fase: "Semifinal" },
    { id: 102, local: "G-99", visita: "G-100", fase: "Semifinal" },
    { id: 103, local: "P-101", visita: "P-102", fase: "3er Lugar" },
    { id: 104, local: "G-101", visita: "G-102", fase: "Final" }
  ];

  const banderas = { "México": "🇲🇽", "Sudáfrica": "🇿🇦", "Japón": "🇯🇵", "Alemania": "🇩🇪", "Paraguay": "🇵🇾", "Paises Bajos": "🇳🇱", "Marruecos": "🇲🇦", "Costa de marfil": "🇨🇮", "Noruega": "🇳🇴", "Francia": "🇫🇷", "Suecia": "🇸🇪", "Ecuador": "🇪🇨", "Inglaterra": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "RD Congo": "🇨🇩", "Bélgica": "🇧🇪", "Senegal": "🇸🇳", "USA": "🇺🇸", "Bosnia": "🇧🇦", "España": "🇪🇸", "Austria": "🇦🇹", "Portugal": "🇵🇹", "Croacia": "🇭🇷", "Suiza": "🇨🇭", "Argelia": "🇩🇿", "Australia": "🇦🇺", "Egipto": "🇪🇬", "Argentina": "🇦🇷", "Cabo Verde": "🇨🇻", "Colombia": "🇨🇴", "Ghana": "🇬🇭", "Canadá": "🇨🇦", "Brasil": "🇧🇷" };
  const participantes = [
    { id: 'alberto_j', nombre: 'Alberto', campeon: 'ALEMANIA' }, { id: 'lola', nombre: 'Lola', campeon: 'ESPAÑA' }, { id: 'les', nombre: 'Leslie', campeon: 'PAISES BAJOS' }, { id: 'javier', nombre: 'Javier', campeon: 'FRANCIA' }, { id: 'betin', nombre: 'Betin', campeon: 'PORTUGAL' }, { id: 'fernanda', nombre: 'Fernanda', campeon: 'FRANCIA' }, { id: 'carmen', nombre: 'Carmen', campeon: 'PAISES BAJOS' }, { id: 'vicente', nombre: 'Vicente', campeon: 'PORTUGAL' }, { id: 'ulises', nombre: 'Ulises', campeon: 'ARGENTINA' }, { id: 'nayeli', nombre: 'Nayeli', campeon: 'NORUEGA' }, { id: 'monse', nombre: 'Monse', campeon: 'PAISES BAJOS' }, { id: 'axel', nombre: 'Axel', campeon: 'PORTUGAL' }, { id: 'jose', nombre: 'José', campeon: 'FRANCIA' }, { id: 'adrian', nombre: 'Adrian', campeon: 'PORTUGAL' }, { id: 'jessica', nombre: 'Jessica', campeon: 'ARGENTINA' }, { id: 'dahara', nombre: 'Dahara', campeon: 'FRANCIA' }, { id: 'lady', nombre: 'Lady', campeon: 'PAISES BAJOS' }, { id: 'tsuki', nombre: 'Tsuki', campeon: 'ARGENTINA' }
  ];

  const diccionariosPronosticos = {
    alberto_j: { 73: "2 - 1", 76: "2 - 2", 74: "3 - 1", 75: "2 - 0", 78: "0 - 3", 77: "3 - 1", 79: "2 - 1", 80: "2 - 0", 82: "4 - 1", 81: "3 - 1", 84: "2 - 0", 83: "1 - 1", 85: "1 - 0", 88: "1 - 2", 86: "3 - 0", 87: "2 - 0", 89: "2 - 1", 90: "3 - 1", 91: "1 - 2", 92: "1 - 3", 93: "2 - 1", 94: "2 - 2", 95: "0 - 0", 96: "2 - 2", 97: "2 - 2", 98: "3 - 1", 99: "0 - 1", 100: "2 - 1", 101: "1 - 2", 102: "1 - 1", 103: "2 - 1", 104: "2 - 1" }
    // (Asegúrate de copiar todos los pronósticos de la imagen aquí...)
  };

  const resolverEquipo = (idOrPlaceholder) => {
    if (!idOrPlaceholder.startsWith('G-') && !idOrPlaceholder.startsWith('P-')) return idOrPlaceholder;
    const isLoser = idOrPlaceholder.startsWith('P-');
    const matchId = parseInt(idOrPlaceholder.replace('G-', '').replace('P-', ''));
    const res = resultadosOficiales[matchId];
    if (!res) return idOrPlaceholder;
    const [sL, sV] = res.regular.split(' - ').map(Number);
    const match = partidos.find(p => p.id === matchId);
    let ganador;
    if (sL === sV && res.penales) {
      const [pL, pV] = res.penales.split(' - ').map(Number);
      ganador = pL > pV ? match.local : match.visita;
    } else {
      ganador = sL > sV ? match.local : match.visita;
    }
    const localReal = resolverEquipo(match.local);
    const visitaReal = resolverEquipo(match.visita);
    if (isLoser) return (ganador === match.local) ? visitaReal : localReal;
    return ganador === match.local ? localReal : visitaReal;
  };

  const getScoreStyle = (prono, matchId) => {
    const real = resultadosOficiales[matchId];
    if (!real || !prono || prono === "-") return 'score-pending';
    const [pL, pV] = prono.split(' - ').map(Number);
    const [rL, rV] = real.regular.split(' - ').map(Number);
    if (pL === rL && pV === rV) return 'score-exact';
    const pTend = pL > pV ? 'Local' : pL < pV ? 'Visita' : 'Empate';
    const rTend = rL > rV ? 'Local' : rL < rV ? 'Visita' : 'Empate';
    return pTend === rTend ? 'score-tendency' : 'score-fail';
  };

  return (
    <>
      <style>{`
        :root { --green-olive: #1E330D; --amarillo: #FCD116; --azul: #59B3E4; --rojo: #E53935; --verde: #62B557; }
        body { background-color: #FAF0E6; font-family: sans-serif; }
        .organic-card { background-color: var(--green-olive); color: white; padding: 20px; border-radius: 20px; border: 2px solid var(--azul); }
        .score-exact { background: rgba(98, 181, 87, 0.3) !important; border: 1px solid var(--verde); }
        .score-tendency { background: rgba(89, 179, 228, 0.3) !important; border: 1px solid var(--azul); }
        .score-fail { background: rgba(229, 57, 53, 0.3) !important; border: 1px solid var(--rojo); }
        .participant-btn { padding: 8px 12px; margin: 3px; border-radius: 8px; border: 1px solid var(--azul); background: transparent; color: white; cursor: pointer; }
        .participant-btn.active { background: var(--azul); }
        .match-row { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 10px; border-bottom: 1px solid #444; }
        .score-box { background: #000; padding: 5px; border-radius: 5px; text-align: center; }
      `}</style>

      <div className="app-container">
        <header className="organic-card" style={{textAlign:'center', marginBottom:'20px'}}>
          <h1>QUINIELA 2026</h1>
          {Object.keys(resultadosOficiales).pop() && (
            <div style={{border:'1px solid var(--azul)', padding:'10px', borderRadius:'10px'}}>
              Último: {resolverEquipo(partidos.find(p=>p.id==Object.keys(resultadosOficiales).pop()).local)} {resultadosOficiales[Object.keys(resultadosOficiales).pop()].regular} {resolverEquipo(partidos.find(p=>p.id==Object.keys(resultadosOficiales).pop()).visita)}
            </div>
          )}
        </header>

        <div style={{textAlign:'center', marginBottom:'20px'}}>
          {['pronosticar','comparativa'].map(t => <button className={`participant-btn ${activeTab===t?'active':''}`} onClick={()=>setActiveTab(t)}>{t.toUpperCase()}</button>)}
        </div>

        {activeTab === 'pronosticar' && (
          <div className="organic-card">
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
              {participantes.map(p => <button key={p.id} className={`participant-btn ${pronosticadorActivo===p.id?'active':''}`} onClick={()=>setPronosticadorActivo(p.id)}>{p.nombre}</button>)}
            </div>
            {partidos.map(p => {
              const style = getScoreStyle(diccionariosPronosticos[pronosticadorActivo][p.id], p.id);
              return <div key={p.id} className="match-row">
                <div>{resolverEquipo(p.local)}</div>
                <div className={`score-box ${style}`}>{diccionariosPronosticos[pronosticadorActivo][p.id]}</div>
                <div>{resolverEquipo(p.visita)}</div>
              </div>
            })}
          </div>
        )}
      </div>
    </>
  );
}