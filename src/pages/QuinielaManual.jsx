import React, { useState } from 'react';

export default function QuinielaManual() {
  const [activeTab, setActiveTab] = useState('pronosticar');
  const [pronosticadorActivo, setPronosticadorActivo] = useState('alberto');

  const marcadorMundial = {
    partido: "🇲🇽 MÉXICO VS SUDAFRICA",
    resultado: "1 - 1"
  };

  const partidos = [
    { id: 1, local: "🇲🇽 México", visita: "🇿🇦 Sudáfrica", fecha: "11 Jun 12:30" },
    { id: 2, local: "🇰🇷 Corea del Sur", visita: "🇨🇿 República Checa", fecha: "11 Jun 19:45" },
    { id: 3, local: "🇨🇦 Canadá", visita: "🇧🇦 Bosnia y Herzegovina", fecha: "12 Jun 12:45" },
    { id: 4, local: "🇺🇸 Estados Unidos", visita: "🇵🇾 Paraguay", fecha: "12 Jun 18:40" },
    { id: 5, local: "🇶🇦 Catar", visita: "🇨🇭 Suiza", fecha: "13 Jun 12:45" },
    { id: 6, local: "🇧🇷 Brasil", visita: "🇲🇦 Marruecos", fecha: "13 Jun 15:40" },
    { id: 7, local: "🇭🇹 Haití", visita: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia", fecha: "13 Jun 18:45" },
    { id: 8, local: "🇦🇺 Australia", visita: "🇹🇷 Turquía", fecha: "13 Jun 21:45" },
    { id: 9, local: "🇩🇪 Alemania", visita: "🇨🇼 Curazao", fecha: "14 Jun 10:45" },
    { id: 10, local: "🇨🇮 Costa de Marfil", visita: "🇪🇨 Ecuador", fecha: "14 Jun 16:45" },
    { id: 11, local: "🇳🇱 Países Bajos", visita: "🇯🇵 Japón", fecha: "14 Jun 13:40" },
    { id: 12, local: "🇸🇪 Suecia", visita: "🇹🇳 Túnez", fecha: "14 Jun 19:45" },
    { id: 13, local: "🇧🇪 Bélgica", visita: "🇪🇬 Egipto", fecha: "15 Jun 12:45" },
    { id: 14, local: "🇮🇷 Irán", visita: "🇳🇿 Nueva Zelanda", fecha: "15 Jun 18:45" },
    { id: 15, local: "🇸🇦 Arabia Saudita", visita: "🇺🇾 Uruguay", fecha: "15 Jun 15:45" },
    { id: 16, local: "🇪🇸 España", visita: "🇨🇻 Cabo Verde", fecha: "15 Jun 09:45" },
    { id: 17, local: "🇫🇷 Francia", visita: "🇸🇳 Senegal", fecha: "16 Jun 12:45" },
    { id: 18, local: "🇮🇶 Irak", visita: "🇳🇴 Noruega", fecha: "16 Jun 15:45" },
    { id: 19, local: "🇦🇷 Argentina", visita: "🇩🇿 Argelia", fecha: "16 Jun 18:40" },
    { id: 20, local: "🇦🇹 Austria", visita: "🇯🇴 Jordania", fecha: "16 Jun 21:45" },
    { id: 21, local: "🇺🇿 Uzbekistán", visita: "🇨🇴 Colombia", fecha: "17 Jun 19:45" },
    { id: 22, local: "🇵🇹 Portugal", visita: "🇨🇩 RD Congo", fecha: "17 Jun 10:45" },
    { id: 23, local: "🇬🇭 Ghana", visita: "🇵🇦 Panamá", fecha: "17 Jun 16:45" },
    { id: 24, local: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra", visita: "🇭🇷 Croacia", fecha: "17 Jun 13:40" },
    { id: 25, local: "🇨🇿 República Checa", visita: "🇿🇦 Sudáfrica", fecha: "18 Jun 09:45" },
    { id: 26, local: "🇲🇽 México", visita: "🇰🇷 Corea del Sur", fecha: "18 Jun 18:30" },
    { id: 27, local: "🇨🇭 Suiza", visita: "🇧🇦 Bosnia y Herzegovina", fecha: "18 Jun 12:45" },
    { id: 28, local: "🇨🇦 Canadá", visita: "🇶🇦 Catar", fecha: "18 Jun 15:45" },
    { id: 29, local: "🇧🇷 Brasil", visita: "🇭🇹 Haití", fecha: "19 Jun 18:10" },
    { id: 30, local: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia", visita: "🇲🇦 Marruecos", fecha: "19 Jun 15:45" },
    { id: 31, local: "🇹🇷 Turquía", visita: "🇵🇾 Paraguay", fecha: "19 Jun 20:45" },
    { id: 32, local: "🇺🇸 Estados Unidos", visita: "🇦🇺 Australia", fecha: "19 Jun 12:45" },
    { id: 33, local: "🇩🇪 Alemania", visita: "🇨🇮 Costa de Marfil", fecha: "20 Jun 13:45" },
    { id: 34, local: "🇪🇨 Ecuador", visita: "🇨🇼 Curazao", fecha: "20 Jun 17:45" },
    { id: 35, local: "🇳🇱 Países Bajos", visita: "🇸🇪 Suecia", fecha: "20 Jun 10:40" },
    { id: 36, local: "🇹🇳 Túnez", visita: "🇯🇵 Japón", fecha: "20 Jun 21:45" },
    { id: 37, local: "🇳🇿 Nueva Zelanda", visita: "🇪🇬 Egipto", fecha: "21 Jun 18:45" },
    { id: 38, local: "🇧🇪 Bélgica", visita: "🇮🇷 Irán", fecha: "21 Jun 12:45" },
    { id: 39, local: "🇺🇾 Uruguay", visita: "🇨🇻 Cabo Verde", fecha: "21 Jun 15:45" },
    { id: 40, local: "🇪🇸 España", visita: "🇸🇦 Arabia Saudita", fecha: "21 Jun 09:40" },
    { id: 41, local: "🇳🇴 Noruega", visita: "🇸🇳 Senegal", fecha: "22 Jun 17:40" },
    { id: 42, local: "🇫🇷 Francia", visita: "🇮🇶 Irak", fecha: "22 Jun 14:45" },
    { id: 43, local: "🇦🇷 Argentina", visita: "🇦🇹 Austria", fecha: "22 Jun 10:45" },
    { id: 44, local: "🇯🇴 Jordania", visita: "🇩🇿 Argelia", fecha: "22 Jun 20:45" },
    { id: 45, local: "🇨🇴 Colombia", visita: "🇨🇩 RD Congo", fecha: "23 Jun 19:40" },
    { id: 46, local: "🇵🇹 Portugal", visita: "🇺🇿 Uzbekistán", fecha: "23 Jun 10:45" },
    { id: 47, local: "🇵🇦 Panamá", visita: "🇭🇷 Croacia", fecha: "23 Jun 16:45" },
    { id: 48, local: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra", visita: "🇬🇭 Ghana", fecha: "23 Jun 13:45" },
    { id: 49, local: "🇨🇿 República Checa", visita: "🇲🇽 México", fecha: "24 Jun 18:30" },
    { id: 50, local: "🇿🇦 Sudáfrica", visita: "🇰🇷 Corea del Sur", fecha: "24 Jun 18:30" },
    { id: 51, local: "🇨🇭 Suiza", visita: "🇨🇦 Canadá", fecha: "24 Jun 12:45" },
    { id: 52, local: "🇧🇦 Bosnia y Herzegovina", visita: "🇶🇦 Catar", fecha: "24 Jun 12:45" },
    { id: 53, local: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia", visita: "🇧🇷 Brasil", fecha: "24 Jun 15:45" },
    { id: 54, local: "🇲🇦 Marruecos", visita: "🇭🇹 Haití", fecha: "24 Jun 15:45" },
    { id: 55, local: "🇹🇷 Turquía", visita: "🇺🇸 Estados Unidos", fecha: "25 Jun 19:45" },
    { id: 56, local: "🇵🇾 Paraguay", visita: "🇦🇺 Australia", fecha: "25 Jun 19:45" },
    { id: 57, local: "🇨🇼 Curazao", visita: "🇨🇮 Costa de Marfil", fecha: "25 Jun 13:40" },
    { id: 58, local: "🇪🇨 Ecuador", visita: "🇩🇪 Alemania", fecha: "25 Jun 13:40" },
    { id: 59, local: "🇯🇵 Japón", visita: "🇸🇪 Suecia", fecha: "25 Jun 16:45" },
    { id: 60, local: "🇹🇳 Túnez", visita: "🇳🇱 Países Bajos", fecha: "25 Jun 16:45" },
    { id: 61, local: "🇪🇬 Egipto", visita: "🇮🇷 Irán", fecha: "26 Jun 20:45" },
    { id: 62, local: "🇳🇿 Nueva Zelanda", visita: "🇧🇪 Bélgica", fecha: "26 Jun 20:45" },
    { id: 63, local: "🇨🇻 Cabo Verde", visita: "🇸🇦 Arabia Saudita", fecha: "26 Jun 17:40" },
    { id: 64, local: "🇺🇾 Uruguay", visita: "🇪🇸 España", fecha: "26 Jun 17:40" },
    { id: 65, local: "🇸🇳 Senegal", visita: "🇮🇶 Irak", fecha: "26 Jun 12:45" },
    { id: 66, local: "🇳🇴 Noruega", visita: "🇫🇷 Francia", fecha: "26 Jun 12:45" },
    { id: 67, local: "🇩🇿 Argelia", visita: "🇦🇹 Austria", fecha: "27 Jun 19:45" },
    { id: 68, local: "🇯🇴 Jordania", visita: "🇦🇷 Argentina", fecha: "27 Jun 19:45" },
    { id: 69, local: "🇨🇴 Colombia", visita: "🇵🇹 Portugal", fecha: "27 Jun 17:10" },
    { id: 70, local: "🇨🇩 RD Congo", visita: "🇺🇿 Uzbekistán", fecha: "27 Jun 17:10" },
    { id: 71, local: "🇵🇦 Panamá", visita: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra", fecha: "27 Jun 14:40" },
    { id: 72, local: "🇭🇷 Croacia", visita: "🇬🇭 Ghana", fecha: "27 Jun 14:40" }
  ];
  const participantes = [
    { id: 'alberto', nombre: 'Alberto' },
    { id: 'fernanda', nombre: 'Fernanda' },
    { id: 'alberto_jesus', nombre: 'Alberto Jesús' },
    { id: 'vicente', nombre: 'Vicente' },
    { id: 'dolores', nombre: 'Dolores' },
    { id: 'leslie', nombre: 'Leslie' }
  ];

  const diccionariosPronosticos = {
    alberto: {
      1: "2 - 0", 2: "1 - 2", 3: "1 - 1", 4: "2 - 1", 5: "0 - 3", 6: "2 - 2", 7: "1 - 4", 8: "2 - 2", 
      9: "4 - 0", 10: "1 - 1", 11: "1 - 1", 12: "2 - 1", 13: "1 - 0", 14: "2 - 0", 15: "0 - 3", 16: "4 - 0", 
      17: "3 - 1", 18: "0 - 2", 19: "3 - 1", 20: "2 - 0", 21: "1 - 3", 22: "1 - 0", 23: "2 - 2", 24: "2 - 1", 
      25: "2 - 1", 26: "1 - 1", 27: "3 - 1", 28: "1 - 0", 29: "3 - 0", 30: "1 - 2", 31: "2 - 1", 32: "1 - 2", 
      33: "3 - 1", 34: "1 - 0", 35: "2 - 2", 36: "0 - 2", 37: "0 - 2", 38: "1 - 0", 39: "4 - 0", 40: "2 - 0", 
      41: "1 - 0", 42: "3 - 0", 43: "7 - 0", 44: "0 - 1", 45: "1 - 1", 46: "3 - 1", 47: "1 - 3", 48: "2 - 2", 
      49: "2 - 1", 50: "1 - 2", 51: "2 - 1", 52: "0 - 1", 53: "1 - 2", 54: "2 - 0", 55: "0 - 3", 56: "2 - 2", 
      57: "1 - 2", 58: "3 - 3", 59: "1 - 3", 60: "3 - 3", 61: "1 - 0", 62: "0 - 3", 63: "0 - 1", 64: "2 - 2", 
      65: "0 - 0", 66: "2 - 1", 67: "1 - 3", 68: "0 - 3", 69: "1 - 2", 70: "1 - 1", 71: "3 - 3", 72: "3 - 0"
    },
    fernanda: {
      1: "3 - 1", 2: "2 - 1", 3: "1 - 1", 4: "1 - 0", 5: "0 - 2", 6: "2 - 1", 7: "1 - 3", 8: "1 - 2", 
      9: "4 - 0", 10: "1 - 1", 11: "2 - 3", 12: "2 - 0", 13: "1 - 1", 14: "1 - 1", 15: "0 - 3", 16: "3 - 0", 
      17: "2 - 0", 18: "0 - 2", 19: "3 - 1", 20: "1 - 0", 21: "0 - 3", 22: "2 - 1", 23: "1 - 1", 24: "2 - 0", 
      25: "2 - 1", 26: "2 - 1", 27: "2 - 0", 28: "3 - 1", 29: "4 - 0", 30: "0 - 2", 31: "1 - 1", 32: "1 - 0", 
      33: "2 - 0", 34: "2 - 0", 35: "2 - 0", 36: "0 - 2", 37: "1 - 2", 38: "2 - 0", 39: "2 - 0", 40: "3 - 0", 
      41: "1 - 3", 42: "4 - 0", 43: "2 - 1", 44: "1 - 2", 45: "2 - 1", 46: "3 - 0", 47: "0 - 1", 48: "3 - 0", 
      49: "1 - 2", 50: "1 - 2", 51: "1 - 1", 52: "1 - 1", 53: "0 - 3", 54: "2 - 0", 55: "2 - 2", 56: "1 - 0", 
      57: "0 - 2", 58: "1 - 2", 59: "1 - 1", 60: "0 - 2", 61: "0 - 1", 62: "0 - 2", 63: "1 - 1", 64: "2 - 1", 
      65: "1 - 0", 66: "1 - 2", 67: "1 - 2", 68: "0 - 3", 69: "1 - 2", 70: "1 - 1", 71: "0 - 3", 72: "2 - 0"
    },
    alberto_jesus: {},
    vicente: {},
    dolores: {},
    leslie: {}
  };

  // --- AQUÍ PONES LOS RESULTADOS REALES CONFORME SUCEDAN ---
  // Si un partido no está aquí, el sistema asume que no se ha jugado ("POR DEFINIR")
  const resultadosOficiales = {
    // Ejemplo: 1: "2 - 0", 
    // Ejemplo: 2: "1 - 1",
    1: "2 - 1",
    2: "1 - 2"
  };

  // --- LÓGICA DE PUNTOS ---
  const calcularPuntos = (prono, real) => {
    if (!prono || !real) return 0;
    
    // Separar los goles
    const [pL, pV] = prono.split(' - ').map(Number);
    const [rL, rV] = real.split(' - ').map(Number);

    // 1. ¿Le atinó al marcador exacto? (2 puntos)
    if (pL === rL && pV === rV) return 2;

    // 2. ¿Le atinó a la tendencia? (1 punto)
    const pronoTendencia = pL > pV ? 'Local' : pL < pV ? 'Visita' : 'Empate';
    const realTendencia = rL > rV ? 'Local' : rL < rV ? 'Visita' : 'Empate';
    
    if (pronoTendencia === realTendencia) return 1;

    // 3. Falló todo (0 puntos)
    return 0;
  };

  // --- GENERAR LA TABLA DE RANKING ---
  const tablaRanking = participantes.map(participante => {
    let puntosTotales = 0;
    const pronosticosUsuario = diccionariosPronosticos[participante.id];

    // Revisar cada partido que ya tiene resultado oficial
    Object.keys(resultadosOficiales).forEach(matchId => {
      const prono = pronosticosUsuario[matchId];
      const real = resultadosOficiales[matchId];
      puntosTotales += calcularPuntos(prono, real);
    });

    return { nombre: participante.nombre, puntos: puntosTotales };
  }).sort((a, b) => b.puntos - a.puntos); // Ordenar de mayor a menor


  const nombreActivo = participantes.find(p => p.id === pronosticadorActivo)?.nombre;

  return (
    <div className="container">
      <header className="header-vino" style={{textAlign: 'center', padding: '20px'}}>
        <h1>QUINIELA 2026</h1>
        <div className="card">
          <p>{marcadorMundial.partido}</p>
          <h2 style={{color: 'var(--accent)'}}>{marcadorMundial.resultado}</h2>
        </div>
      </header>

      <nav className="tabs">
        <button className={activeTab === 'pronosticar' ? 'active' : ''} onClick={() => setActiveTab('pronosticar')}>Pronósticos</button>
        <button className={activeTab === 'anteriores' ? 'active' : ''} onClick={() => setActiveTab('anteriores')}>Resultados</button>
        <button className={activeTab === 'tabla' ? 'active' : ''} onClick={() => setActiveTab('tabla')}>Ranking</button>
      </nav>

      {/* PESTAÑA: PRONÓSTICOS */}
      {activeTab === 'pronosticar' && (
        <div className="card">
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {participantes.map(participante => (
              <button 
                key={participante.id}
                onClick={() => setPronosticadorActivo(participante.id)} 
                style={{ 
                  padding: '8px 16px', background: pronosticadorActivo === participante.id ? 'var(--accent)' : '#333', 
                  color: pronosticadorActivo === participante.id ? '#000' : '#fff', border: 'none', borderRadius: '5px', 
                  cursor: 'pointer', fontWeight: 'bold', flexGrow: 1, textAlign: 'center'
                }}>
                {participante.nombre}
              </button>
            ))}
          </div>

          <h3 style={{textAlign: 'center', marginBottom: '20px', color: 'var(--accent)'}}>
            Pronósticos
          </h3>

          {partidos.map(p => {
            const marcadorMostrado = diccionariosPronosticos[pronosticadorActivo][p.id] || "0 - 0";
            return (
              <div key={p.id} className="fila-partido" style={{display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #333'}}>
                <span>{p.fecha} | {p.local} vs {p.visita}</span>
                <div style={{textAlign: 'right'}}>
                  <span style={{display: 'block', fontWeight: 'bold', fontSize: '1.1rem'}}>{marcadorMostrado}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* PESTAÑA: RESULTADOS */}
      {activeTab === 'anteriores' && (
        <div className="card">
          <h3 style={{textAlign: 'center', marginBottom: '20px', color: 'var(--text-muted)'}}>Resultados Oficiales</h3>
          {partidos.map(p => {
            // Verifica si el partido ya tiene un resultado en el diccionario oficial
            const resultadoOficial = resultadosOficiales[p.id];
            
            return (
              <div key={p.id} className="fila-partido" style={{display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #333'}}>
                <span>{p.fecha} | {p.local} vs {p.visita}</span>
                <div style={{textAlign: 'center'}}>
                  <span style={{display: 'block', fontWeight: 'bold'}}>{resultadoOficial ? resultadoOficial : "0 - 0"}</span>
                  <span style={{fontSize: '10px', color: resultadoOficial ? '#28a745' : 'var(--accent)'}}>
                    {resultadoOficial ? "FINALIZADO" : "POR DEFINIR"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* PESTAÑA: RANKING */}
      {activeTab === 'tabla' && (
        <div className="card">
          <h3 style={{textAlign: 'center', marginBottom: '20px', color: 'var(--accent)'}}>Tabla General de Puntos</h3>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{borderBottom: '2px solid var(--accent)', textAlign: 'left'}}>
                <th style={{padding: '10px'}}>Pos.</th>
                <th style={{padding: '10px'}}>Participante</th>
                <th style={{padding: '10px', textAlign: 'right'}}>Puntos</th>
              </tr>
            </thead>
            <tbody>
              {tablaRanking.map((participante, i) => (
                <tr key={i} style={{borderBottom: '1px solid #333'}}>
                  <td style={{padding: '10px', fontWeight: 'bold', color: 'var(--text-muted)'}}>{i + 1}</td>
                  <td style={{padding: '10px'}}>{participante.nombre}</td>
                  <td style={{padding: '10px', textAlign: 'right', fontWeight: 'bold', color: 'var(--accent)', fontSize: '1.2rem'}}>
                    {participante.puntos}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}