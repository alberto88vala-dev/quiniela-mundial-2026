import React, { useState } from 'react';

export default function QuinielaManual() {
  const [activeTab, setActiveTab] = useState('pronosticar');
  const [pronosticadorActivo, setPronosticadorActivo] = useState('betin');

  // RESULTADOS OFICIALES (Agrega aquí los nuevos partidos)
  const resultadosOficiales = {
    73: { regular: "0 - 1" }, // Canadá vs Sudáfrica
    76: { regular: "2 - 1" }, // Brasil vs Japón
    74: { regular: "1 - 1", penales: "3 - 4" }, // Alemania vs Paraguay
    75: { regular: "1 - 1", penales: "2 - 3" }, // Países Bajos vs Marruecos
    78: { regular: "1 - 2" }, // Costa de marfil vs Noruega
    77: { regular: "3 - 0" }, // Francia vs Suecia 
    79: { regular: "2 - 0" }, // México vs Ecuador
    80: { regular: "2 - 1" }, // Inglaterra vs RD Congo
    82: { regular: "2 - 2", penales: "3 - 2" }, // Bélgica vs Senegal
    };

  const partidos = [
    { id: 73, local: "Sudáfrica", visita: "Canadá", fase: "Dieciseisavos" },
    { id: 76, local: "Brasil", visita: "Japón", fase: "Dieciseisavos" },
    { id: 74, local: "Alemania", visita: "Paraguay", fase: "Dieciseisavos" },
    { id: 75, local: "Paises Bajos", visita: "Marruecos", fase: "Dieciseisavos" },
    { id: 78, local: "Costa de marfil", visita: "Noruega", fase: "Dieciseisavos" },
    { id: 77, local: "Francia", visita: "Suecia", fase: "Dieciseisavos" },
    { id: 79, local: "México", visita: "Ecuador", fase: "Dieciseisavos" },
    { id: 80, local: "Inglaterra", visita: "RD Congo", fase: "Dieciseisavos" },
    { id: 82, local: "Bélgica", visita: "Senegal", fase: "Dieciseisavos" },
    { id: 81, local: "USA", visita: "Bosnia", fase: "Dieciseisavos" },
    { id: 84, local: "España", visita: "Austria", fase: "Dieciseisavos" },
    { id: 83, local: "Portugal", visita: "Croacia", fase: "Dieciseisavos" },
    { id: 85, local: "Suiza", visita: "Argelia", fase: "Dieciseisavos" },
    { id: 88, local: "Australia", visita: "Egipto", fase: "Dieciseisavos" },
    { id: 86, local: "Argentina", visita: "Cabo Verde", fase: "Dieciseisavos" },
    { id: 87, local: "Colombia", visita: "Ghana", fase: "Dieciseisavos" },
    // FASES SIGUIENTES (Se resuelven solas)
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

  const banderas = {
    "México": "🇲🇽", "Sudáfrica": "🇿🇦", "Japón": "🇯🇵", "Alemania": "🇩🇪", "Paraguay": "🇵🇾",
    "Paises Bajos": "🇳🇱", "Marruecos": "🇲🇦", "Costa de marfil": "🇨🇮", "Noruega": "🇳🇴",
    "Francia": "🇫🇷", "Suecia": "🇸🇪", "Ecuador": "🇪🇨", "Inglaterra": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "RD Congo": "🇨🇩",
    "Bélgica": "🇧🇪", "Senegal": "🇸🇳", "USA": "🇺🇸", "Bosnia": "🇧🇦", "España": "🇪🇸", 
    "Austria": "🇦🇹", "Portugal": "🇵🇹", "Croacia": "🇭🇷", "Suiza": "🇨🇭", "Argelia": "🇩🇿", 
    "Australia": "🇦🇺", "Egipto": "🇪🇬", "Argentina": "🇦🇷", "Cabo Verde": "🇨🇻", "Colombia": "🇨🇴", 
    "Ghana": "🇬🇭", "Canadá": "🇨🇦", "Brasil": "🇧🇷"
  };

  const participantes = [
    { id: 'alberto_j', nombre: 'Alberto', campeon: 'ALEMANIA' },
    { id: 'lola', nombre: 'Lola', campeon: 'ESPAÑA' },
    { id: 'les', nombre: 'Leslie', campeon: 'PAISES BAJOS' },
    { id: 'javier', nombre: 'Javier', campeon: 'FRANCIA' },
    { id: 'betin', nombre: 'Betin', campeon: 'PORTUGAL' },
    { id: 'fernanda', nombre: 'Fernanda', campeon: 'FRANCIA' },
    { id: 'carmen', nombre: 'Carmen', campeon: 'PAISES BAJOS' },
    { id: 'vicente', nombre: 'Vicente', campeon: 'PORTUGAL' },
    { id: 'ulises', nombre: 'Ulises', campeon: 'ARGENTINA' },
    { id: 'nayeli', nombre: 'Nayeli', campeon: 'NORUEGA' },
    { id: 'monse', nombre: 'Monse', campeon: 'PAISES BAJOS' },
    { id: 'axel', nombre: 'Axel', campeon: 'PORTUGAL' },
    { id: 'jose', nombre: 'José', campeon: 'FRANCIA' },
    { id: 'adrian', nombre: 'Adrian', campeon: 'PORTUGAL' },
    { id: 'jessica', nombre: 'Jessica', campeon: 'ARGENTINA' },
    { id: 'dahara', nombre: 'Dahara', campeon: 'FRANCIA' },
    { id: 'lady', nombre: 'Lady', campeon: 'PAISES BAJOS' },
    { id: 'tsuki', nombre: 'Tsuki', campeon: 'ARGENTINA' }
  ];

  // Base de datos de pronósticos (Actualizada)
  const diccionariosPronosticos = {
    alberto_j: { 73: "2 - 1", 76: "2 - 2", 74: "3 - 1", 75: "2 - 0", 78: "0 - 3", 77: "3 - 1", 79: "2 - 1", 80: "2 - 0", 82: "4 - 1", 81: "3 - 1", 84: "2 - 0", 83: "1 - 1", 85: "1 - 0", 88: "1 - 2", 86: "3 - 0", 87: "2 - 0", 89: "2 - 2", 90: "1 - 3", 91: "1 - 1", 92: "2 - 1", 93: "3 - 2", 94: "1 - 2", 95: "2 - 0", 96: "0 - 2", 97: "2 - 2", 98: "3 - 1", 99: "0 - 1", 100: "2 - 1", 101: "1 - 2", 102: "1 - 1", 103: "2 - 1", 104: "2 - 1" },
    lola: { 73: "2 - 1", 76: "4 - 1", 74: "5 - 1", 75: "3 - 2", 78: "1 - 2", 77: "2 - 1", 79: "2 - 1", 80: "3 - 1", 82: "1 - 1", 81: "2 - 2", 84: "4 - 1", 83: "2 - 2", 85: "2 - 0", 88: "2 - 1", 86: "2 - 2", 87: "2 - 0", 89: "2 - 2", 90: "1 - 2", 91: "2 - 2", 92: "2 - 1", 93: "2 - 3", 94: "1 - 1", 95: "3 - 0", 96: "2 - 2", 97: "2 - 2", 98: "2 - 1", 99: "1 - 1", 100: "2 - 2", 101: "1 - 2", 102: "1 - 2", 103: "2 - 1", 104: "2 - 1" },
    les: { 73: "2 - 3", 76: "3 - 4", 74: "3 - 0", 75: "2 - 1", 78: "0 - 2", 77: "3 - 2", 79: "2 - 1", 80: "2 - 2", 82: "2 - 2", 81: "1 - 2", 84: "2 - 2", 83: "3 - 1", 85: "1 - 1", 88: "2 - 0", 86: "1 - 2", 87: "1 - 2", 89: "3 - 2", 90: "1 - 2", 91: "1 - 1", 92: "1 - 2", 93: "2 - 2", 94: "1 - 1", 95: "1 - 2", 96: "2 - 1", 97: "1 - 2", 98: "2 - 1", 99: "2 - 1", 100: "1 - 1", 101: "2 - 1", 102: "1 - 0", 103: "3 - 1", 104: "2 - 1" },
    javier: { 73: "2 - 1", 76: "3 - 2", 74: "2 - 0", 75: "2 - 1", 78: "0 - 3", 77: "3 - 1", 79: "2 - 1", 80: "2 - 0", 82: "1 - 1", 81: "2 - 0", 84: "3 - 1", 83: "3 - 1", 85: "2 - 1", 88: "1 - 2", 86: "4 - 0", 87: "2 - 1", 89: "2 - 3", 90: "2 - 0", 91: "3 - 2", 92: "2 - 2", 93: "3 - 3", 94: "1 - 2", 95: "3 - 0", 96: "1 - 2", 97: "3 - 1", 98: "3 - 1", 99: "2 - 1", 100: "3 - 1", 101: "2 - 2", 102: "2 - 3", 103: "2 - 2", 104: "3 - 2" },
    betin: { 73: "1 - 2", 76: "1 - 1", 74: "2 - 0", 75: "2 - 2", 78: "1 - 3", 77: "3 - 1", 79: "2 - 0", 80: "3 - 1", 82: "2 - 1", 81: "3 - 0", 84: "1 - 0", 83: "3 - 1", 85: "2 - 1", 88: "1 - 2", 86: "3 - 0", 87: "2 - 1", 89: "1 - 3", 90: "0 - 2", 91: "2 - 2", 92: "1 - 0", 93: "2 - 1", 94: "2 - 0", 95: "3 - 0", 96: "1 - 3", 97: "2 - 0", 98: "2 - 0", 99: "1 - 2", 100: "2 - 2", 101: "2 - 2", 102: "0 - 2", 103: "3 - 0", 104: "1 - 1" },
    fernanda: { 73: "1 - 2", 76: "2 - 1", 74: "3 - 1", 75: "3 - 2", 78: "2 - 2", 77: "3 - 1", 79: "2 - 1", 80: "3 - 2", 82: "1 - 1", 81: "1 - 2", 84: "3 - 1", 83: "2 - 1", 85: "2 - 1", 88: "2 - 2", 86: "2 - 3", 87: "3 - 1", 89: "4 - 3", 90: "2 - 4", 91: "3 - 1", 92: "2 - 1", 93: "3 - 2", 94: "1 - 3", 95: "1 - 3", 96: "2 - 2", 97: "3 - 2", 98: "4 - 1", 99: "2 - 3", 100: "2 - 2", 101: "3 - 1", 102: "2 - 1", 103: "3 - 2", 104: "4 - 2" },
    carmen: { 73: "1 - 0", 76: "2 - 2", 74: "2 - 0", 75: "2 - 1", 78: "0 - 2", 77: "2 - 1", 79: "2 - 1", 80: "1 - 0", 82: "2 - 2", 81: "2 - 0", 84: "1 - 0", 83: "2 - 0", 85: "0 - 0", 88: "1 - 1", 86: "1 - 0", 87: "0 - 0", 89: "3 - 3", 90: "0 - 3", 91: "3 - 2", 92: "1 - 0", 93: "2 - 2", 94: "1 - 0", 95: "2 - 1", 96: "2 - 1", 97: "2 - 2", 98: "2 - 1", 99: "1 - 2", 100: "3 - 0", 101: "2 - 0", 102: "1 - 3", 103: "0 - 2", 104: "3 - 1" },
    vicente: { 73: "1 - 1", 76: "2 - 2", 74: "2 - 1", 75: "3 - 2", 78: "1 - 2", 77: "3 - 1", 79: "2 - 1", 80: "3 - 1", 82: "1 - 1", 81: "2 - 0", 84: "3 - 2", 83: "2 - 1", 85: "0 - 0", 88: "1 - 3", 86: "4 - 1", 87: "2 - 1", 89: "0 - 1", 90: "1 - 2", 91: "3 - 1", 92: "0 - 0", 93: "2 - 1", 94: "1 - 1", 95: "1 - 1", 96: "0 - 1", 97: "1 - 1", 98: "2 - 1", 99: "2 - 2", 100: "3 - 2", 101: "0 - 1", 102: "1 - 2", 103: "3 - 3", 104: "1 - 0" },
    ulises: { 73: "1 - 2", 76: "2 - 1", 74: "3 - 1", 75: "3 - 1", 78: "1 - 2", 77: "3 - 0", 79: "1 - 1", 80: "3 - 0", 82: "2 - 0", 81: "3 - 1", 84: "3 - 0", 83: "3 - 0", 85: "1 - 1", 88: "1 - 0", 86: "3 - 1", 87: "2 - 1", 89: "3 - 0", 90: "1 - 1", 91: "2 - 1", 92: "1 - 2", 93: "1 - 0", 94: "0 - 2", 95: "2 - 1", 96: "1 - 1", 97: "2 - 1", 98: "2 - 0", 99: "2 - 1", 100: "1 - 2", 101: "2 - 1", 102: "1 - 2", 103: "1 - 1", 104: "2 - 1" },
    nayeli: { 73: "1 - 2", 76: "2 - 2", 74: "3 - 1", 75: "3 - 2", 78: "1 - 3", 77: "3 - 0", 79: "2 - 1", 80: "2 - 0", 82: "3 - 2", 81: "3 - 0", 84: "2 - 1", 83: "2 - 2", 85: "3 - 1", 88: "2 - 3", 86: "2 - 1", 87: "3 - 1", 89: "3 - 3", 90: "1 - 3", 91: "2 - 2", 92: "1 - 2", 93: "2 - 1", 94: "2 - 0", 95: "2 - 1", 96: "2 - 2", 97: "2 - 3", 98: "2 - 2", 99: "3 - 2", 100: "2 - 1", 101: "2 - 1", 102: "3 - 2", 103: "2 - 2", 104: "2 - 3" },
    monse: { 73: "1 - 2", 76: "2 - 1", 74: "4 - 0", 75: "2 - 1", 78: "1 - 2", 77: "3 - 0", 79: "2 - 1", 80: "2 - 0", 82: "2 - 1", 81: "3 - 0", 84: "2 - 0", 83: "2 - 1", 85: "1 - 0", 88: "1 - 1", 86: "3 - 1", 87: "2 - 1", 89: "1 - 2", 90: "1 - 3", 91: "0 - 2", 92: "1 - 3", 93: "1 - 1", 94: "0 - 2", 95: "3 - 0", 96: "2 - 0", 97: "2 - 2", 98: "1 - 0", 99: "2 - 3", 100: "2 - 0", 101: "2 - 0", 102: "1 - 3", 103: "3 - 0", 104: "2 - 0" },
    axel: { 73: "1 - 2", 76: "2 - 1", 74: "3 - 0", 75: "3 - 2", 78: "1 - 1", 77: "3 - 1", 79: "1 - 0", 80: "2 - 0", 82: "1 - 1", 81: "2 - 0", 84: "3 - 1", 83: "2 - 0", 85: "1 - 1", 88: "1 - 2", 86: "3 - 0", 87: "2 - 0", 89: "0 - 2", 90: "0 - 3", 91: " - 0", 92: "2 - 1", 93: "1 - 0", 94: "1 - 2", 95: "3 - 1", 96: "2 - 0", 97: "3 - 2", 98: "2 - 2", 99: "0 - 2", 100: "3 - 1", 101: "1 - 2", 102: "2 - 0", 103: "3 - 2", 104: "1 - 0" },
    jose: { 73: "1 - 2", 76: "3 - 1", 74: "2 - 0", 75: "2 - 1", 78: "1 - 3", 77: "2 - 0", 79: "2 - 0", 80: "2 - 0", 82: "2 - 2", 81: "1 - 1", 84: "2 - 0", 83: "2 - 1", 85: "1 - 1", 88: "1 - 2", 86: "3 - 0", 87: "3 - 2", 89: "1 - 2", 90: "1 - 2", 91: "2 - 1", 92: "2 - 2", 93: "2 - 1", 94: "1 - 1", 95: "2 - 0", 96: "1 - 2", 97: "3 - 1", 98: "2 - 1", 99: "2 - 1", 100: "2 - 2", 101: "2 - 1", 102: "1 - 2", 103: "3 - 2", 104: "0 - 2" },
    adrian: { 73: "1 - 2", 76: "2 - 3", 74: "2 - 1", 75: "2 - 1", 78: "1 - 0", 77: "3 - 1", 79: "1 - 2", 80: "2 - 0", 82: "3 - 2", 81: "3 - 0", 84: "2 - 1", 83: "2 - 2", 85: "2 - 1", 88: "2 - 2", 86: "3 - 0", 87: "2 - 1", 89: "0 - 2", 90: "1 - 3", 91: "1 - 2", 92: "0 - 2", 93: "2 - 1", 94: "3 - 2", 95: "3 - 1", 96: "1 - 2", 97: "2 - 2", 98: "3 - 1", 99: "1 - 2", 100: "3 - 2", 101: "2 - 3", 102: "0- 2", 103: "4 - 3", 104: "2 - 1" },
    jessica: { 73: "0 - 2", 76: "2 - 2", 74: "2 - 0", 75: "1 - 1", 78: "1 - 2", 77: "0 - 3", 79: "1 - 1", 80: "2 - 0", 82: "2 - 1", 81: "1 - 2", 84: "0 - 1", 83: "1 - 2", 85: "0 - 1", 88: "1 - 3", 86: "0 - 2", 87: "1 - 1", 89: "1 - 1", 90: "2 - 1", 91: "1 - 1", 92: "1 - 1", 93: "1 - 1", 94: "2 - 0", 95: "1 - 1", 96: "2 - 1", 97: "1 - 2", 98: "1 - 2", 99: "1 - 1", 100: "2 - 1", 101: "2 - 1", 102: "1 - 1", 103: "2 - 1", 104: "1 - 1" },
    dahara: { 73: "1 - 2", 76: "3 - 2", 74: "3 - 0", 75: "2 - 0", 78: "1 - 3", 77: "2 - 1", 79: "3 - 1", 80: "1 - 0", 82: "1 - 0", 81: "1 - 0", 84: "2 - 0", 83: "0 - 1", 85: "0 - 2", 88: "0 - 1", 86: "3 - 1", 87: "2 - 0", 89: "1 - 2", 90: "0 - 2", 91: "2 - 3", 92: "2 - 2", 93: "1 - 2", 94: "0 - 1", 95: "3 - 1", 96: "1 - 2", 97: "3 - 2", 98: "0 - 2", 99: "2 - 2", 100: "2 - 2", 101: "3 - 1", 102: "1 - 2", 103: "0 - 2", 104: "3 - 2" },
    lady: { 73: "0 - 2", 76: "2 - 1", 74: "2 - 2", 75: "2 - 0", 78: "0 - 2", 77: "1 - 0", 79: "2 - 1", 80: "2 - 0", 82: "0 - 0", 81: "2 - 0", 84: "1 - 0", 83: "1 - 0", 85: "0 - 1", 88: "1 - 3", 86: "0 - 2", 87: "1 - 2", 89: "3 - 0", 90: "3 - 2", 91: "1 - 0", 92: "1 - 0", 93: "1 - 0", 94: "3 - 0", 95: "1 - 2", 96: "1 - 2", 97: "3 - 2", 98: "1 - 2", 99: "1 - 2", 100: "1 - 1", 101: "0 - 2", 102: "2 - 0", 103: "3 - 2", 104: "3 - 1" },
    tsuki: { 73: "1 - 2", 76: "2 - 0", 74: "3 - 1", 75: "2 - 1", 78: "1 - 2", 77: "3 - 0", 79: "2 - 0", 80: "2 - 1", 82: "2 - 0", 81: "2 - 1", 84: "2 - 0", 83: "2 - 1", 85: "1 - 0", 88: "1 - 2", 86: "4 - 0", 87: "2 - 0", 89: "1 - 2", 90: "0 - 1", 91: "2 - 0", 92: "1 - 0", 93: "1 - 2", 94: "2 - 1", 95: "3 - 0", 96: "0 - 1", 97: "2 - 1", 98: "2 - 1", 99: "2 - 1", 100: "2 - 0", 101: "2 - 1", 102: "1 - 2", 103: "2 - 1", 104: "2 - 3" }
  };

  // Función recursiva para llaves y ganadores
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

  // Lógica de Puntos
  const calcularPuntos = (prono, real) => {
    if (!prono || !real || prono === "-" || real === "-") return 0;
    const [pL, pV] = prono.split(' - ').map(Number);
    const [rL, rV] = real.regular.split(' - ').map(Number);
    if (pL === rL && pV === rV) return 2;
    const pronoTendencia = pL > pV ? 'Local' : pL < pV ? 'Visita' : 'Empate';
    const realTendencia = rL > rV ? 'Local' : rL < rV ? 'Visita' : 'Empate';
    return pronoTendencia === realTendencia ? 1 : 0;
  };

  const tablaRanking = participantes.map(p => {
    let puntosTotales = 0;
    Object.keys(resultadosOficiales).forEach(id => {
        const prono = diccionariosPronosticos[p.id]?.[id] || "-";
        puntosTotales += calcularPuntos(prono, resultadosOficiales[id]);
    });
    return { nombre: p.nombre, puntos: puntosTotales };
  }).sort((a, b) => b.puntos - a.puntos);

  // Lógica de estilos visuales
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

  // Info del último partido
  const ultimoId = Object.keys(resultadosOficiales).pop();
  const ultimoResultado = ultimoId ? resultadosOficiales[ultimoId] : null;
  const partidoUltimo = ultimoId ? partidos.find(p => p.id === parseInt(ultimoId)) : null;
  const localUltimo = partidoUltimo ? resolverEquipo(partidoUltimo.local) : "";
  const visitaUltimo = partidoUltimo ? resolverEquipo(partidoUltimo.visita) : "";

  return (
    <>
      <style>{`
        :root {
          --green-olive: #1E330D; 
          --warm-white: #FAF0E6;
          --amarillo: #FCD116;
          --azul: #59B3E4;
          --blanco: #FFFFFF;
          --rojo: #E53935;
          --verde: #62B557;
          --text-dark: #333333;
        }
        
        body { background-color: var(--warm-white); color: var(--text-dark); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; }
        .app-container { max-width: 1000px; margin: 0 auto; padding: 20px; }

        .header-organic {
          background-color: rgba(30, 51, 13, 0.95); border-radius: 40px 10px 40px 10px;
          padding: 30px 20px; text-align: center; margin-bottom: 30px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3); border: 3px solid var(--amarillo);
          backdrop-filter: blur(10px); color: var(--blanco); 
        }

        .header-title {
          font-size: 2.8rem; margin: 0; font-weight: 900; letter-spacing: 2px;
          color: var(--amarillo); text-shadow: 3px 3px 0px rgba(0,0,0,0.6); text-transform: uppercase;
        }

        .organic-card {
          background-color: rgba(30, 51, 13, 0.9); backdrop-filter: blur(12px);
          border-radius: 10px 40px 10px 40px; padding: 30px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3); border: 2px solid var(--azul); color: var(--blanco); 
        }

        .tab-button {
          background: transparent; color: var(--text-dark); border: 2px solid var(--text-dark);
          border-radius: 25px 5px 25px 5px; padding: 12px 25px; font-weight: 800; cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); margin: 5px;
        }
        .tab-button:hover { color: var(--green-olive); border-color: var(--green-olive); transform: translateY(-2px); }
        .tab-button.active {
          background: var(--green-olive); color: var(--amarillo); border-color: var(--green-olive);
          box-shadow: 0 6px 15px rgba(30, 51, 13, 0.4);
        }

        .participant-btn {
          padding: 10px 20px; font-size: 0.95rem; border-radius: 15px 5px 15px 5px;
          cursor: pointer; font-weight: bold; white-space: nowrap; transition: all 0.3s ease;
          background: rgba(255,255,255,0.08); color: var(--blanco); border: 1px solid transparent; margin: 4px;
        }
        .participant-btn:hover { background: rgba(89, 179, 228, 0.2); color: var(--azul); }
        .participant-btn.active {
          background: var(--azul); color: var(--green-olive); 
          box-shadow: 0 4px 12px rgba(89, 179, 228, 0.4); transform: scale(1.05);
        }

        .champion-badge {
          display: inline-block; margin-top: 10px; padding: 5px 15px;
          background: rgba(252, 209, 22, 0.2); border: 1px solid var(--amarillo);
          border-radius: 20px; color: var(--amarillo); font-weight: 800; letter-spacing: 1px;
        }

        .match-row {
          display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;
          gap: 15px; padding: 18px 10px; border-bottom: 2px dotted rgba(255,255,255,0.15);
          transition: background 0.3s; border-radius: 12px;
        }
        .match-row:hover { background: rgba(255,255,255,0.08); }
        .fase-divider {
          grid-column: 1 / -1; text-align: center; color: var(--azul); 
          font-weight: 900; letter-spacing: 2px; margin-top: 20px; padding: 10px; 
          background: rgba(0,0,0,0.2); border-radius: 5px; text-transform: uppercase;
        }

        .score-box {
          padding: 8px 16px; border-radius: 8px 18px 8px 18px; font-weight: 900;
          font-size: 1.1rem; text-align: center; background: rgba(0,0,0,0.4); 
          box-shadow: inset 0 2px 5px rgba(0,0,0,0.4);
        }
        
        .score-pending { border: 2px solid var(--blanco); color: var(--blanco); }
        .score-exact { border: 2px solid var(--verde); color: var(--verde); background: rgba(98, 181, 87, 0.15); } 
        .score-tendency { border: 2px solid var(--azul); color: var(--azul); background: rgba(89, 179, 228, 0.15); }
        .score-fail { border: 2px solid var(--rojo); color: var(--rojo); background: rgba(229, 57, 53, 0.15); }
        .score-empty { border: 2px solid #aaa; color: #ccc; }
        
        @media (max-width: 600px) {
          .header-title { font-size: 2rem; }
          .app-container { padding: 10px; }
          .organic-card { padding: 15px; border-radius: 10px 25px 10px 25px; }
          .match-row { padding: 12px 5px; gap: 8px; }
          .score-box { font-size: 0.9rem; padding: 6px 12px; }
          .participant-btn { font-size: 0.8rem; padding: 8px 12px; }
          .tab-button { padding: 10px 15px; font-size: 0.85rem; }
          .match-row span b { font-size: 0.9rem !important; }
        }
      `}</style>

      <div className="app-container">
        
        {/* CABECERA Y ÚLTIMO RESULTADO */}
        <header className="header-organic">
          <h1 className="header-title">QUINIELA 2026</h1>
          {partidoUltimo && (
            <div style={{
              background: 'rgba(255,255,255,0.1)', border: '2px solid var(--azul)',
              borderRadius: '15px', padding: '10px 20px', display: 'inline-block', marginTop: '15px'
            }}>
              <p style={{ margin: '0', fontSize: '0.8rem', color: 'var(--blanco)' }}>Último partido:</p>
              <p style={{ margin: '0', fontWeight: 'bold' }}>
                {banderas[localUltimo]} {localUltimo} {ultimoResultado.regular} {visitaUltimo} {banderas[visitaUltimo]}
              </p>
              {ultimoResultado.penales && (
                <p style={{ margin: '0', fontSize: '0.7rem', color: 'var(--amarillo)' }}>
                  (Penales: {ultimoResultado.penales})
                </p>
              )}
            </div>
          )}
        </header>

        {/* NAVEGACIÓN */}
        <nav style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px', flexWrap: 'wrap' }}>
          <button className={`tab-button ${activeTab === 'pronosticar' ? 'active' : ''}`} onClick={() => setActiveTab('pronosticar')}>⚽ Pronósticos</button>
          <button className={`tab-button ${activeTab === 'anteriores' ? 'active' : ''}`} onClick={() => setActiveTab('anteriores')}>📅 Resultados</button>
          <button className={`tab-button ${activeTab === 'tabla' ? 'active' : ''}`} onClick={() => setActiveTab('tabla')}>🏆 Ranking</button>
          <button className={`tab-button ${activeTab === 'comparativa' ? 'active' : ''}`} onClick={() => setActiveTab('comparativa')}>📊 Comparativa</button>
        </nav>

        {/* PESTAÑA: PRONOSTICAR */}
        {activeTab === 'pronosticar' && (
          <div className="organic-card">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px' }}>
              {participantes.map(p => (
                <button 
                  key={p.id}
                  onClick={() => setPronosticadorActivo(p.id)} 
                  className={`participant-btn ${pronosticadorActivo === p.id ? 'active' : ''}`}>
                  {p.nombre}
                </button>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <h3 style={{ margin: 0, color: 'var(--amarillo)', fontSize: '1.4rem'}}>
                Pronósticos de {participantes.find(p => p.id === pronosticadorActivo)?.nombre}
              </h3>
              <div className="champion-badge">
                🏆 CAMPEÓN: {participantes.find(p => p.id === pronosticadorActivo)?.campeon}
              </div>
            </div>

            {partidos.map((p, index) => {
              const prono = diccionariosPronosticos[pronosticadorActivo]?.[p.id] || "-";
              const showFase = index === 0 || partidos[index - 1].fase !== p.fase;
              const localName = resolverEquipo(p.local);
              const visitaName = resolverEquipo(p.visita);
              const style = getScoreStyle(prono, p.id);
              const resReal = resultadosOficiales[p.id];

              return (
                <React.Fragment key={p.id}>
                  {showFase && <div className="fase-divider">{p.fase}</div>}
                  <div className="match-row">
                    <span style={{ textAlign: 'right', fontSize: '1rem', color: 'var(--blanco)' }}>
                      {banderas[localName] || "⏱️"} <b style={{fontSize: '1rem'}}>{localName}</b>
                    </span>

                    <div className={`score-box ${style}`}>{prono}</div>

                    <span style={{ textAlign: 'left', fontSize: '1rem', color: 'var(--blanco)' }}>
                      <b style={{fontSize: '1rem'}}>{visitaName}</b> {banderas[visitaName] || "⏱️"}
                    </span>
                    
                    <span style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', marginTop: '5px' }}>
                      Partido {p.id} 
                      {resReal && (
                        <span style={{ marginLeft: '10px', fontWeight: 'bold', color: style === 'score-exact' ? 'var(--verde)' : style === 'score-tendency' ? 'var(--azul)' : 'var(--rojo)' }}>
                          (Real: {resReal.regular})
                        </span>
                      )}
                    </span>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* PESTAÑA: RESULTADOS */}
        {activeTab === 'anteriores' && (
          <div className="organic-card">
             <h3 style={{textAlign: 'center', marginBottom: '20px', color: 'var(--amarillo)', fontSize: '1.4rem'}}>Resultados Oficiales Eliminatoria</h3>
             {partidos.map((p, index) => {
               const resReal = resultadosOficiales[p.id];
               const showFase = index === 0 || partidos[index - 1].fase !== p.fase;
               const localName = resolverEquipo(p.local);
               const visitaName = resolverEquipo(p.visita);

               return (
                <React.Fragment key={p.id}>
                  {showFase && <div className="fase-divider">{p.fase}</div>}
                  <div className="match-row">
                    <span style={{ textAlign: 'right', fontSize: '1rem', color: 'var(--blanco)' }}>
                      {banderas[localName] || "⏱️"} <b style={{fontSize: '1rem'}}>{localName}</b>
                    </span>

                    <div style={{ textAlign: 'center' }}>
                      <div className={`score-box ${resReal ? 'score-exact' : 'score-empty'}`}>
                        {resReal ? resReal.regular : "0 - 0"}
                      </div>
                      {resReal?.penales && <span style={{display:'block', fontSize:'0.7rem', color:'var(--amarillo)', marginTop:'4px'}}>Pen: {resReal.penales}</span>}
                      <span style={{fontSize: '0.7rem', fontWeight: 'bold', color: resReal ? 'var(--verde)' : 'rgba(255,255,255,0.5)', display: 'block', marginTop: '6px', letterSpacing: '1px'}}>
                         {resReal ? "FINALIZADO" : "POR DEFINIR"}
                      </span>
                    </div>

                    <span style={{ textAlign: 'left', fontSize: '1rem', color: 'var(--blanco)' }}>
                      <b style={{fontSize: '1rem'}}>{visitaName}</b> {banderas[visitaName] || "⏱️"}
                    </span>
                  </div>
                </React.Fragment>
               );
             })}
          </div>
        )}

        {/* PESTAÑA: TABLA RANKING */}
        {activeTab === 'tabla' && (
          <div className="organic-card">
            <h3 style={{textAlign: 'center', marginBottom: '20px', color: 'var(--amarillo)', fontSize: '1.4rem'}}>Tabla Fase Final</h3>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
              <thead>
                <tr style={{borderBottom: '3px solid var(--azul)', textAlign: 'left'}}>
                  <th style={{padding: '12px', color: 'var(--azul)'}}>Pos.</th>
                  <th style={{padding: '12px', color: 'var(--azul)'}}>Participante</th>
                  <th style={{padding: '12px', textAlign: 'right', color: 'var(--azul)'}}>Puntos</th>
                </tr>
              </thead>
              <tbody>
                {tablaRanking.map((p, i) => (
                  <tr key={i} style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                    <td style={{padding: '15px 12px', fontWeight: '900', color: i < 3 ? 'var(--amarillo)' : 'var(--blanco)', fontSize: '1.1rem'}}>{i + 1}</td>
                    <td style={{padding: '15px 12px', fontSize: '1.1rem', fontWeight: '600', color: 'var(--blanco)'}}>{p.nombre}</td>
                    <td style={{padding: '15px 12px', textAlign: 'right', fontWeight: '900', color: 'var(--verde)', fontSize: '1.3rem'}}>{p.puntos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* PESTAÑA: COMPARATIVA */}
        {activeTab === 'comparativa' && (
          <div className="organic-card">
            <h3 style={{textAlign: 'center', marginBottom: '20px', color: 'var(--amarillo)', fontSize: '1.4rem'}}>Comparativa Fase Final</h3>
            
            <div style={{ width: '100%', overflowX: 'auto', paddingBottom: '15px' }}>
              <table style={{width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: '900px'}}>
                <thead>
                  <tr>
                    <th style={{ padding: '12px', textAlign: 'left', backgroundColor: 'rgba(30, 51, 13, 1)', borderBottom: '3px solid var(--azul)', borderRight: '1px solid rgba(255,255,255,0.2)', color: 'var(--azul)' }}>
                      Partido
                    </th>
                    {participantes.map(p => (
                      <th key={p.id} style={{ padding: '12px', whiteSpace: 'nowrap', borderBottom: '3px solid var(--azul)', textAlign: 'center', color: 'var(--azul)' }}>
                        {p.nombre}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {partidos.map(p => {
                    const resReal = resultadosOficiales[p.id];
                    const localName = resolverEquipo(p.local);
                    const visitaName = resolverEquipo(p.visita);

                    return (
                      <tr key={p.id}>
                        <td style={{ padding: '12px', textAlign: 'left', whiteSpace: 'nowrap', backgroundColor: 'rgba(30, 51, 13, 1)', borderRight: '1px solid rgba(255,255,255,0.2)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <span style={{fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', display: 'block'}}>Partido {p.id} ({p.fase})</span>
                          {banderas[localName] || "⏱️"} <span style={{fontSize: '0.9rem', color: 'var(--blanco)'}}><b>{localName}</b> vs <b>{visitaName}</b></span> {banderas[visitaName] || "⏱️"}
                          {resReal && (
                            <span style={{display: 'block', fontSize: '0.8rem', color: 'var(--verde)', marginTop: '4px', fontWeight: 'bold'}}>
                              Real: {resReal.regular} {resReal.penales ? `(P: ${resReal.penales})`:''}
                            </span>
                          )}
                        </td>
                        
                        {participantes.map(part => {
                          const prono = diccionariosPronosticos[part.id]?.[p.id] || "-";
                          let colorProno = 'var(--blanco)'; 
                          if (resReal && prono !== "-") {
                            const puntos = calcularPuntos(prono, resReal);
                            if (puntos === 2) colorProno = 'var(--verde)'; 
                            else if (puntos === 1) colorProno = 'var(--azul)'; 
                            else colorProno = 'var(--rojo)'; 
                          } else if (!resReal && prono === "-") {
                            colorProno = 'rgba(255,255,255,0.5)'; 
                          }

                          return (
                            <td key={part.id} style={{ padding: '12px', fontWeight: '900', color: colorProno, whiteSpace: 'nowrap', borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: '1rem' }}>
                              {prono}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </>
  );
}