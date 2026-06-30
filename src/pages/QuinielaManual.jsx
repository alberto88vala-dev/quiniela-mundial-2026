import React, { useState } from 'react';

export default function QuinielaManual() {
  const [activeTab, setActiveTab] = useState('pronosticar');
  const [pronosticadorActivo, setPronosticadorActivo] = useState('betin');

  // REGISTRA AQUÍ LOS RESULTADOS. 
  // Usa "regular" para los 90 min (esto es lo que da los puntos).
  // Si hubo penales, añade la propiedad "penales".
  const resultadosOficiales = {
    73: { regular: "1 - 0" },
    76: { regular: "2 - 1" },
    74: { regular: "1 - 1", penales: "3 - 4" },
    75: { regular: "1 - 1" },
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
    { id: 'alberto_j', nombre: 'Alberto J. Becerra', campeon: 'ALEMANIA' },
    { id: 'lola', nombre: 'Lola', campeon: 'ESPAÑA' },
    { id: 'les', nombre: 'Leslie', campeon: 'PAISES BAJOS' },
    { id: 'javier', nombre: 'Javier', campeon: 'FRANCIA' },
    { id: 'betin', nombre: 'Betin', campeon: 'PORTUGAL' },
    { id: 'fernanda', nombre: 'Fernanda Curiel', campeon: 'FRANCIA' },
    { id: 'carmen', nombre: 'Carmen', campeon: 'PAISES BAJOS' },
    { id: 'vicente', nombre: 'Vicente Ortiz', campeon: 'PORTUGAL' },
    { id: 'ulises', nombre: 'Ulises Ortíz', campeon: 'ARGENTINA' },
    { id: 'nayeli', nombre: 'Nayeli Simón', campeon: 'NORUEGA' },
    { id: 'monse', nombre: 'Monse', campeon: 'PAISES BAJOS' },
    { id: 'axel', nombre: 'Axel Rojo', campeon: 'PORTUGAL' },
    { id: 'jose', nombre: 'José Cruz', campeon: 'FRANCIA' },
    { id: 'adrian', nombre: 'Adrian', campeon: 'PORTUGAL' },
    { id: 'jessica', nombre: 'Jessica', campeon: 'ARGENTINA' },
    { id: 'dahara', nombre: 'Dahara', campeon: 'FRANCIA' },
    { id: 'lady', nombre: 'Lady', campeon: 'PAISES BAJOS' },
    { id: 'tsuki', nombre: 'Tsuki', campeon: 'ARGENTINA' }
  ];

  const diccionariosPronosticos = {
    alberto_j: { 73: "2 - 1", 76: "2 - 2", 74: "3 - 1", 75: "2 - 0", 78: "0 - 3", 77: "3 - 1", 79: "2 - 1", 80: "2 - 0", 82: "4 - 1", 81: "3 - 1", 84: "2 - 0", 83: "1 - 1", 85: "1 - 0", 88: "1 - 2", 86: "3 - 0", 87: "2 - 0", 89: "2 - 1", 90: "3 - 1", 91: "1 - 2", 92: "1 - 3", 93: "2 - 1", 94: "2 - 2", 95: "0 - 0", 96: "2 - 2", 97: "2 - 2", 98: "3 - 1", 99: "0 - 1", 100: "2 - 1", 101: "1 - 2", 102: "1 - 1", 103: "2 - 1", 104: "2 - 1" },
    lola: { 73: "2 - 1", 76: "4 - 1", 74: "5 - 1", 75: "3 - 2", 78: "1 - 2", 77: "2 - 1", 79: "3 - 1", 80: "1 - 1", 82: "2 - 2", 81: "4 - 1", 84: "2 - 2", 83: "2 - 0", 85: "2 - 1", 88: "2 - 2", 86: "2 - 0", 87: "2 - 1", 89: "2 - 2", 90: "1 - 2", 91: "2 - 2", 92: "2 - 1", 93: "3 - 1", 94: "1 - 3", 95: "0 - 2", 96: "2 - 2", 97: "2 - 2", 98: "2 - 1", 99: "1 - 1", 100: "2 - 2", 101: "1 - 2", 102: "1 - 2", 103: "2 - 1", 104: "2 - 1" },
    les: { 73: "2 - 3", 76: "3 - 4", 74: "3 - 0", 75: "2 - 1", 78: "0 - 3", 77: "2 - 3", 79: "2 - 2", 80: "1 - 2", 82: "2 - 2", 81: "1 - 2", 84: "2 - 2", 83: "3 - 1", 85: "1 - 1", 88: "2 - 0", 86: "1 - 2", 87: "1 - 2", 89: "3 - 2", 90: "1 - 2", 91: "1 - 1", 92: "1 - 2", 93: "2 - 1", 94: "1 - 1", 95: "2 - 2", 96: "1 - 1", 97: "2 - 2", 98: "2 - 1", 99: "1 - 1", 100: "1 - 2", 101: "1 - 1", 102: "0 - 3", 103: "1 - 2", 104: "1 - 1" },
    javier: { 73: "2 - 1", 76: "3 - 2", 74: "2 - 0", 75: "2 - 1", 78: "0 - 2", 77: "3 - 1", 79: "2 - 1", 80: "2 - 0", 82: "1 - 1", 81: "2 - 0", 84: "3 - 1", 83: "3 - 1", 85: "1 - 1", 88: "2 - 4", 86: "0 - 2", 87: "1 - 2", 89: "2 - 3", 90: "2 - 0", 91: "3 - 2", 92: "2 - 2", 93: "3 - 1", 94: "1 - 3", 95: "0 - 2", 96: "3 - 1", 97: "3 - 1", 98: "3 - 1", 99: "2 - 1", 100: "3 - 1", 101: "2 - 2", 102: "2 - 2", 103: "3 - 2", 104: "3 - 2" },
    betin: { 73: "1 - 2", 76: "1 - 1", 74: "2 - 0", 75: "2 - 2", 78: "1 - 3", 77: "1 - 2", 79: "0 - 3", 80: "1 - 2", 82: "1 - 3", 81: "0 - 1", 84: "0 - 3", 83: "1 - 2", 85: "1 - 1", 88: "2 - 3", 86: "0 - 2", 87: "1 - 1", 89: "3 - 0", 90: "2 - 2", 91: "2 - 2", 92: "1 - 0", 93: "2 - 1", 94: "2 - 0", 95: "3 - 0", 96: "1 - 3", 97: "2 - 0", 98: "2 - 0", 99: "1 - 2", 100: "2 - 2", 101: "2 - 0", 102: "2 - 3", 103: "0 - 1", 104: "1 - 1" },
    fernanda: { 73: "1 - 2", 76: "2 - 1", 74: "3 - 1", 75: "3 - 2", 78: "2 - 3", 77: "1 - 1", 79: "1 - 2", 80: "1 - 1", 82: "1 - 1", 81: "2 - 3", 84: "1 - 2", 83: "1 - 2", 85: "2 - 2", 88: "3 - 3", 86: "1 - 4", 87: "3 - 2", 89: "4 - 3", 90: "2 - 4", 91: "3 - 1", 92: "1 - 2", 93: "1 - 3", 94: "1 - 3", 95: "2 - 2", 96: "2 - 3", 97: "2 - 4", 98: "1 - 2", 99: "3 - 2", 100: "2 - 3", 101: "1 - 2", 102: "1 - 2", 103: "3 - 2", 104: "4 - 2" },
    carmen: { 73: "1 - 0", 76: "2 - 2", 74: "2 - 0", 75: "1 - 0", 78: "2 - 2", 77: "2 - 1", 79: "1 - 1", 80: "1 - 0", 82: "2 - 2", 81: "0 - 1", 84: "1 - 0", 83: "2 - 0", 85: "0 - 1", 88: "1 - 1", 86: "0 - 0", 87: "0 - 0", 89: "3 - 3", 90: "0 - 3", 91: "3 - 2", 92: "1 - 0", 93: "2 - 2", 94: "1 - 0", 95: "2 - 1", 96: "2 - 1", 97: "2 - 1", 98: "1 - 1", 99: "2 - 1", 100: "3 - 0", 101: "2 - 0", 102: "1 - 3", 103: "0 - 2", 104: "3 - 1" },
    vicente: { 73: "1 - 1", 76: "2 - 2", 74: "2 - 1", 75: "3 - 2", 78: "1 - 2", 77: "3 - 2", 79: "1 - 3", 80: "1 - 1", 82: "1 - 1", 81: "2 - 0", 84: "3 - 2", 83: "2 - 1", 85: "0 - 0", 88: "1 - 3", 86: "4 - 1", 87: "2 - 1", 89: "0 - 1", 90: "1 - 2", 91: "3 - 1", 92: "0 - 0", 93: "2 - 1", 94: "3 - 1", 95: "0 - 1", 96: "1 - 1", 97: "1 - 2", 98: "1 - 2", 99: "2 - 2", 100: "3 - 2", 101: "0 - 1", 102: "1 - 2", 103: "3 - 3", 104: "1 - 0" },
    ulises: { 73: "1 - 2", 76: "2 - 2", 74: "2 - 3", 75: "3 - 1", 78: "2 - 1", 77: "3 - 0", 79: "1 - 1", 80: "3 - 2", 82: "0 - 3", 81: "1 - 3", 84: "0 - 3", 83: "0 - 1", 85: "1 - 1", 88: "1 - 0", 86: "3 - 1", 87: "2 - 1", 89: "3 - 0", 90: "1 - 1", 91: "2 - 1", 92: "2 - 1", 93: "1 - 2", 94: "0 - 2", 95: "2 - 1", 96: "1 - 2", 97: "1 - 2", 98: "2 - 1", 99: "2 - 4", 100: "1 - 2", 101: "1 - 2", 102: "2 - 1", 103: "1 - 1", 104: "2 - 1" },
    nayeli: { 73: "1 - 2", 76: "2 - 2", 74: "3 - 1", 75: "3 - 1", 78: "2 - 3", 77: "3 - 0", 79: "2 - 1", 80: "2 - 0", 82: "3 - 2", 81: "3 - 0", 84: "2 - 2", 83: "2 - 1", 85: "3 - 2", 88: "2 - 1", 86: "3 - 1", 87: "3 - 1", 89: "3 - 3", 90: "1 - 1", 91: "2 - 2", 92: "2 - 2", 93: "0 - 1", 94: "2 - 2", 95: "0 - 2", 96: "1 - 2", 97: "2 - 2", 98: "3 - 2", 99: "1 - 2", 100: "2 - 1", 101: "1 - 3", 102: "2 - 2", 103: "2 - 2", 104: "2 - 3" },
    monse: { 73: "1 - 2", 76: "2 - 1", 74: "4 - 0", 75: "2 - 1", 78: "1 - 2", 77: "3 - 0", 79: "2 - 1", 80: "2 - 0", 82: "2 - 1", 81: "3 - 0", 84: "2 - 0", 83: "1 - 2", 85: "0 - 1", 88: "1 - 3", 86: "1 - 2", 87: "1 - 0", 89: "1 - 2", 90: "1 - 3", 91: "0 - 2", 92: "1 - 2", 93: "1 - 3", 94: "1 - 1", 95: "0 - 2", 96: "0 - 2", 97: "2 - 1", 98: "0 - 2", 99: "3 - 2", 100: "3 - 2", 101: "0 - 2", 102: "0 - 3", 103: "3 - 0", 104: "2 - 0" },
    axel: { 73: "1 - 2", 76: "2 - 1", 74: "3 - 0", 75: "3 - 2", 78: "1 - 1", 77: "3 - 1", 79: "1 - 0", 80: "2 - 0", 82: "1 - 1", 81: "2 - 0", 84: "3 - 1", 83: "2 - 0", 85: "1 - 1", 88: "1 - 1", 86: "3 - 0", 87: "2 - 0", 89: "2 - 0", 90: "3 - 1", 91: "0 - 2", 92: "1 - 1", 93: "0 - 2", 94: "3 - 0", 95: "3 - 2", 96: "0 - 3", 97: "2 - 2", 98: "2 - 0", 99: "2 - 2", 100: "3 - 1", 101: "1 - 2", 102: "2 - 0", 103: "3 - 2", 104: "1 - 0" },
    jose: { 73: "1 - 2", 76: "3 - 1", 74: "2 - 0", 75: "2 - 1", 78: "1 - 3", 77: "2 - 0", 79: "2 - 0", 80: "2 - 2", 82: "1 - 1", 81: "2 - 0", 84: "2 - 1", 83: "1 - 1", 85: "1 - 2", 88: "3 - 0", 86: "3 - 2", 87: "1 - 1", 89: "2 - 1", 90: "2 - 1", 91: "2 - 1", 92: "2 - 2", 93: "1 - 1", 94: "1 - 2", 95: "1 - 1", 96: "2 - 3", 97: "1 - 2", 98: "1 - 2", 99: "1 - 1", 100: "2 - 1", 101: "2 - 1", 102: "1 - 2", 103: "0 - 2", 104: "2 - 1" },
    adrian: { 73: "1 - 2", 76: "2 - 3", 74: "2 - 1", 75: "2 - 1", 78: "1 - 0", 77: "3 - 1", 79: "1 - 2", 80: "2 - 0", 82: "3 - 2", 81: "3 - 0", 84: "2 - 1", 83: "2 - 2", 85: "2 - 1", 88: "2 - 2", 86: "3 - 0", 87: "2 - 1", 89: "0 - 2", 90: "1 - 3", 91: "1 - 2", 92: "0 - 2", 93: "2 - 1", 94: "3 - 2", 95: "3 - 1", 96: "1 - 2", 97: "2 - 3", 98: "1 - 1", 99: "2 - 3", 100: "2 - 3", 101: "0 - 2", 102: "4 - 3", 103: "2 - 1", 104: "2 - 1" },
    jessica: { 73: "0 - 2", 76: "2 - 2", 74: "2 - 0", 75: "1 - 1", 78: "1 - 2", 77: "0 - 3", 79: "1 - 1", 80: "2 - 0", 82: "2 - 1", 81: "1 - 2", 84: "0 - 1", 83: "1 - 2", 85: "0 - 1", 88: "1 - 3", 86: "0 - 2", 87: "1 - 1", 89: "1 - 1", 90: "2 - 1", 91: "1 - 1", 92: "1 - 1", 93: "1 - 1", 94: "2 - 0", 95: "1 - 1", 96: "2 - 1", 97: "1 - 2", 98: "1 - 2", 99: "1 - 1", 100: "2 - 1", 101: "2 - 1", 102: "1 - 1", 103: "2 - 1", 104: "1 - 1" },
    dahara: { 73: "1 - 2", 76: "3 - 2", 74: "3 - 0", 75: "2 - 0", 78: "1 - 3", 77: "2 - 1", 79: "3 - 1", 80: "1 - 0", 82: "1 - 0", 81: "1 - 0", 84: "2 - 0", 83: "0 - 1", 85: "0 - 2", 88: "0 - 1", 86: "3 - 1", 87: "2 - 0", 89: "1 - 2", 90: "0 - 2", 91: "2 - 3", 92: "2 - 2", 93: "1 - 2", 94: "0 - 1", 95: "3 - 1", 96: "2 - 3", 97: "2 - 0", 98: "2 - 2", 99: "2 - 2", 100: "2 - 3", 101: "1 - 1", 102: "2 - 0", 103: "2 - 3", 104: "2 - 1" },
    lady: { 73: "1 - 0", 76: "2 - 1", 74: "2 - 2", 75: "2 - 0", 78: "0 - 2", 77: "1 - 0", 79: "2 - 1", 80: "2 - 0", 82: "0 - 0", 81: "2 - 0", 84: "1 - 0", 83: "1 - 0", 85: "0 - 1", 88: "1 - 3", 86: "0 - 2", 87: "1 - 2", 89: "3 - 0", 90: "3 - 2", 91: "1 - 0", 92: "1 - 0", 93: "1 - 0", 94: "3 - 0", 95: "1 - 2", 96: "1 - 2", 97: "3 - 2", 98: "1 - 2", 99: "1 - 2", 100: "1 - 1", 101: "0 - 2", 102: "2 - 0", 103: "3 - 2", 104: "3 - 1" },
    tsuki: { 73: "1 - 2", 76: "2 - 0", 74: "3 - 1", 75: "2 - 1", 78: "1 - 0", 77: "3 - 0", 79: "2 - 0", 80: "2 - 1", 82: "2 - 0", 81: "2 - 1", 84: "2 - 1", 83: "0 - 1", 85: "0 - 1", 88: "1 - 1", 86: "2 - 0", 87: "2 - 1", 89: "2 - 0", 90: "1 - 2", 91: "0 - 1", 92: "0 - 1", 93: "2 - 2", 94: "1 - 3", 95: "0 - 0", 96: "1 - 2", 97: "1 - 2", 98: "1 - 1", 99: "2 - 1", 100: "2 - 1", 101: "1 - 2", 102: "1 - 2", 103: "2 - 1", 104: "2 - 1" }
  };

  // Lógica de resolución de llaves y puntos
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
    Object.keys(resultadosOficiales).forEach(id => puntosTotales += calcularPuntos(diccionariosPronosticos[p.id][id], resultadosOficiales[id]));
    return { nombre: p.nombre, puntos: puntosTotales };
  }).sort((a, b) => b.puntos - a.puntos);

  return (
    <>
      <style>{`
        :root { --green-olive: #1E330D; --warm-white: #FAF0E6; --amarillo: #FCD116; --azul: #59B3E4; --blanco: #FFFFFF; --rojo: #E53935; --text-dark: #333333; }
        body { background-color: var(--warm-white); color: var(--text-dark); font-family: sans-serif; margin: 0; }
        .app-container { max-width: 900px; margin: 0 auto; padding: 20px; }
        .organic-card { background-color: var(--green-olive); border-radius: 20px; padding: 20px; color: white; border: 2px solid var(--azul); }
        .tab-button { background: white; border: none; padding: 10px 20px; margin: 5px; border-radius: 10px; cursor: pointer; font-weight: bold; }
        .tab-button.active { background: var(--azul); color: white; }
        .match-row { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 10px; padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .score-box { background: rgba(0,0,0,0.3); padding: 5px 10px; border-radius: 5px; text-align: center; font-weight: bold; }
        .fase-header { grid-column: 1/-1; text-align: center; color: var(--amarillo); font-weight: bold; margin-top: 15px; border-top: 1px solid white; padding-top: 10px; }
      `}</style>
      <div className="app-container">
        <h1 style={{textAlign:'center'}}>QUINIELA 2026 - FASE FINAL</h1>
        <div style={{textAlign:'center', marginBottom:'20px'}}>
          {['pronosticar','anteriores','tabla','comparativa'].map(t => <button key={t} className={`tab-button ${activeTab===t?'active':''}`} onClick={()=>setActiveTab(t)}>{t.toUpperCase()}</button>)}
        </div>
        <div className="organic-card">
          {activeTab === 'pronosticar' && (
            <div>
              <select onChange={(e)=>setPronosticadorActivo(e.target.value)} value={pronosticadorActivo} style={{width:'100%', padding:'10px', borderRadius:'5px'}}>
                {participantes.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
              </select>
              <h3 style={{textAlign:'center'}}>🏆 Campeón: {participantes.find(p=>p.id===pronosticadorActivo)?.campeon}</h3>
              {partidos.map((p,i) => {
                const local = resolverEquipo(p.local), visita = resolverEquipo(p.visita);
                return (
                  <div key={p.id} className="match-row">
                    {i===0 || partidos[i-1].fase !== p.fase ? <div className="fase-header">{p.fase}</div> : null}
                    <div style={{textAlign:'right'}}>{banderas[local]} {local}</div>
                    <div className="score-box">{diccionariosPronosticos[pronosticadorActivo][p.id]}</div>
                    <div style={{textAlign:'left'}}>{visita} {banderas[visita]}</div>
                  </div>
                )
              })}
            </div>
          )}
          {activeTab === 'anteriores' && (
             partidos.map(p => resultadosOficiales[p.id] ? (
               <div key={p.id} className="match-row">
                 <div>{resolverEquipo(p.local)}</div>
                 <div className="score-box">{resultadosOficiales[p.id].regular} {resultadosOficiales[p.id].penales ? `(Pen: ${resultadosOficiales[p.id].penales})`:''}</div>
                 <div>{resolverEquipo(p.visita)}</div>
               </div>
             ) : null)
          )}
          {activeTab === 'tabla' && (
            tablaRanking.map((p,i) => <div key={i}>{i+1}. {p.nombre} - {p.puntos} pts</div>)
          )}
        </div>
      </div>
    </>
  );
}