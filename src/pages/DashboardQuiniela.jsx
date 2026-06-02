import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';

export default function DashboardQuiniela() {
  const [activeTab, setActiveTab] = useState('pronosticar');
  const [partidos, setPartidos] = useState([]);
  const [tablaGeneral, setTablaGeneral] = useState([]);
  const [todosLosPronosticos, setTodosLosPronosticos] = useState([]);

  // --- VARIABLE MANUAL PARA EL RESULTADO DEL MUNDIAL ---
  const marcadorMundial = {
    partido: "MÉXICO VS SUDAFRICA",
    marcador: "0 - 0"
  };

  // --- CANDADO: NO RECIBE MODIFICACIONES DESPUÉS DEL 11 DE JUNIO ---
  const FECHA_LIMITE = new Date('2026-06-11T23:59:59');
  const esTiempoLimite = new Date() > FECHA_LIMITE;

  useEffect(() => {
    cargarDatos();
  }, []);

  async function cargarDatos() {
    // 1. Cargar todos los partidos
    const { data: dataPartidos } = await supabase
      .from('partidos')
      .select('*')
      .order('fecha_hora', { ascending: true });
    if (dataPartidos) setPartidos(dataPartidos);

    // 2. Cargar tabla general de puntos
    const { data: dataUsuarios } = await supabase
      .from('usuarios')
      .select('nombre, puntos_totales')
      .order('puntos_totales', { ascending: false });
    if (dataUsuarios) setTablaGeneral(dataUsuarios);

    // 3. Cargar todos los pronósticos para la pestaña de "Todos"
    const { data: dataTodos } = await supabase
      .from('pronosticos')
      .select('pronostico_local, pronostico_visitante, usuarios(nombre), partidos(equipo_local, equipo_visitante)');
    if (dataTodos) setTodosLosPronosticos(dataTodos);
  }

  return (
    <>
      <header className="header-vino">
        <h1>Quiniela Copa Mundial de Fútbol 2026</h1>
        <div className="card" style={{marginTop: '20px', border: '1px solid var(--accent)'}}>
          <p style={{fontSize: '14px', color: 'var(--text-muted)'}}>{marcadorMundial.partido}</p>
          <div className="marcador-grande">{marcadorMundial.marcador}</div>
          <p style={{fontSize: '12px', color: 'var(--accent)'}}>ÚLTIMO MARCADOR MUNDIAL</p>
        </div>
      </header>

      <nav className="tabs">
        <button className={activeTab === 'pronosticar' ? 'active' : ''} onClick={() => setActiveTab('pronosticar')}>Pronosticar</button>
        <button className={activeTab === 'todos' ? 'active' : ''} onClick={() => setActiveTab('todos')}>Todos</button>
        <button className={activeTab === 'anteriores' ? 'active' : ''} onClick={() => setActiveTab('anteriores')}>Resultados</button>
        <button className={activeTab === 'tabla' ? 'active' : ''} onClick={() => setActiveTab('tabla')}>Ranking</button>
      </nav>

      <div className="container">
        {/* PESTAÑA 1: PRONOSTICAR */}
        {activeTab === 'pronosticar' && (
          <div className="card">
            <h2>{esTiempoLimite ? "Quiniela Cerrada" : "Tus Pronósticos"}</h2>
           {partidos.map(p => (
              <div key={p.id} className="fila-partido">
                <span style={{flex: 1}}>{p.equipo_local} vs {p.equipo_visitante}</span>
                <div>
                  <input type="number" className="input-goles" disabled={esTiempoLimite} placeholder="0" />
                  <input type="number" className="input-goles" disabled={esTiempoLimite} placeholder="0" />
                  <button className="btn-guardar" disabled={esTiempoLimite} onClick={() => alert("Pronóstico guardado")}>Ok</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PESTAÑA 2: TODOS LOS PRONÓSTICOS */}
        {activeTab === 'todos' && (
          <div className="card">
            <h2>Transparencia Global</h2>
            <table>
              <thead><tr><th>Usuario</th><th>Partido</th><th>Prono</th></tr></thead>
              <tbody>
                {todosLosPronosticos.map((pr, i) => (
                  <tr key={i}>
                    <td>{pr.usuarios?.nombre}</td>
                    <td>{pr.partidos?.equipo_local} vs {pr.partidos?.equipo_visitante}</td>
                    <td><strong>{pr.pronostico_local} - {pr.pronostico_visitante}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* PESTAÑA 3: RESULTADOS FINALIZADOS */}
        {activeTab === 'anteriores' && (
          <div className="card">
            <h2>Resultados Finalizados</h2>
            <table>
              <thead><tr><th>Partido</th><th>Marcador</th></tr></thead>
              <tbody>
                {partidos.filter(p => p.estado === 'finalizado').map(p => (
                  <tr key={p.id}>
                    <td>{p.equipo_local} vs {p.equipo_visitante}</td>
                    <td className="accent-text"><strong>{p.goles_local} - {p.goles_visitante}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* PESTAÑA 4: RANKING */}
        {activeTab === 'tabla' && (
          <div className="card">
            <h2>Ranking de Puntos</h2>
            <table>
              <tbody>
                {tablaGeneral.map((u, i) => (
                  <tr key={i}>
                    <td>{i+1}. {u.nombre}</td>
                    <td style={{textAlign: 'right'}}><strong>{u.puntos_totales} pts</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}