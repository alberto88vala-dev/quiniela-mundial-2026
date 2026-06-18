import React, { useState } from 'react';

export default function QuinielaManual() {
  const [activeTab, setActiveTab] = useState('pronosticar');
  const [pronosticadorActivo, setPronosticadorActivo] = useState('betin');

  const marcadorMundial = {
    partido:  "Rep. Checa vs Sudáfrica",
    resultado: "1 - 0"
  };

  const partidos = [
    { id: 1, local: "México", visita: "Sudáfrica", fecha: "11 Jun 12:30" },
    { id: 2, local: "Rep. De Corea", visita: "Rep. Checa", fecha: "11 Jun 19:45" },
    { id: 3, local: "Canadá", visita: "Bosnia", fecha: "12 Jun 12:45" },
    { id: 4, local: "USA", visita: "Paraguay", fecha: "12 Jun 18:40" },
    { id: 5, local: "Catar", visita: "Suiza", fecha: "13 Jun 12:45" },
    { id: 6, local: "Brasil", visita: "Marruecos", fecha: "13 Jun 15:40" },
    { id: 7, local: "Haití", visita: "Escocia", fecha: "13 Jun 18:45" },
    { id: 8, local: "Australia", visita: "Turquía", fecha: "13 Jun 21:45" },
    { id: 9, local: "Alemania", visita: "Curazao", fecha: "14 Jun 10:45" },
    { id: 10, local: "Paises Bajos", visita: "Japón", fecha: "14 Jun 16:45" },
    { id: 11, local: "Costa de marfil", visita: "Ecuador", fecha: "14 Jun 13:40" },
    { id: 12, local: "Suecia", visita: "Túnez", fecha: "14 Jun 19:45" },
    { id: 13, local: "España", visita: "Cabo Verde", fecha: "15 Jun 12:45" },
    { id: 14, local: "Bélgica", visita: "Egipto", fecha: "15 Jun 18:45" },
    { id: 15, local: "Arabia Saudi", visita: "Uruguay", fecha: "15 Jun 15:45" },
    { id: 16, local: "IR Iran", visita: "Nueva Zelanda", fecha: "15 Jun 09:45" },
    { id: 17, local: "Francia", visita: "Senegal", fecha: "16 Jun 12:45" },
    { id: 18, local: "Irak", visita: "Noruega", fecha: "16 Jun 15:45" },
    { id: 19, local: "Argentina", visita: "Argelia", fecha: "16 Jun 18:40" },
    { id: 20, local: "Austria", visita: "Jordania", fecha: "16 Jun 21:45" },
    { id: 21, local: "Portugal", visita: "RD Congo", fecha: "17 Jun 19:45" },
    { id: 22, local: "Inglaterra", visita: "Croacia", fecha: "17 Jun 10:45" },
    { id: 23, local: "Ghana", visita: "Panamá", fecha: "17 Jun 16:45" },
    { id: 24, local: "Uzbekistán", visita: "Colombia", fecha: "17 Jun 13:40" },
    { id: 25, local: "Rep. Checa", visita: "Sudáfrica", fecha: "18 Jun 09:45" },
    { id: 26, local: "Suiza", visita: "Bosnia", fecha: "18 Jun 18:30" },
    { id: 27, local: "Canadá", visita: "Catar", fecha: "18 Jun 12:45" },
    { id: 28, local: "México", visita: "Rep. De Corea", fecha: "18 Jun 15:45" },
    { id: 29, local: "USA", visita: "Australía", fecha: "19 Jun 18:10" },
    { id: 30, local: "Escocia", visita: "Marruecos", fecha: "19 Jun 15:45" },
    { id: 31, local: "Brasil", visita: "Haití", fecha: "19 Jun 20:45" },
    { id: 32, local: "Turquía", visita: "Paraguay", fecha: "19 Jun 12:45" },
    { id: 33, local: "Paises Bajos", visita: "Suecia", fecha: "20 Jun 13:45" },
    { id: 34, local: "Alemania", visita: "Costa de Marfil", fecha: "20 Jun 17:45" },
    { id: 35, local: "Ecuador", visita: "Curazao", fecha: "20 Jun 10:40" },
    { id: 36, local: "Túnez", visita: "Japón", fecha: "20 Jun 21:45" },
    { id: 37, local: "España", visita: "Arabía Saudí", fecha: "21 Jun 18:45" },
    { id: 38, local: "Bélgica", visita: "Irán", fecha: "21 Jun 12:45" },
    { id: 39, local: "Uruguay", visita: "Cabo Verde", fecha: "21 Jun 15:45" },
    { id: 40, local: "Nueva Zelanda", visita: "Egipto", fecha: "21 Jun 09:40" },
    { id: 41, local: "Argentina", visita: "Austria", fecha: "22 Jun 17:40" },
    { id: 42, local: "Francia", visita: "Irak", fecha: "22 Jun 14:45" },
    { id: 43, local: "Noruega", visita: "Senegal", fecha: "22 Jun 10:45" },
    { id: 44, local: "Jordania", visita: "Argelia", fecha: "22 Jun 20:45" },
    { id: 45, local: "Portugal", visita: "Uzbekistán", fecha: "23 Jun 19:40" },
    { id: 46, local: "Inglaterra", visita: "Ghana", fecha: "23 Jun 10:45" },
    { id: 47, local: "Panamá", visita: "Croacia", fecha: "23 Jun 16:45" },
    { id: 48, local: "Colombia", visita: "RD Congo", fecha: "23 Jun 13:45" },
    { id: 49, local: "Suiza", visita: "Canadá", fecha: "24 Jun 18:30" },
    { id: 50, local: "Bosnia", visita: "Catar", fecha: "24 Jun 18:30" },
    { id: 51, local: "Escocia", visita: "Brasil", fecha: "24 Jun 12:45" },
    { id: 52, local: "Marruecos", visita: "Haití", fecha: "24 Jun 12:45" },
    { id: 53, local: "Rep. Checa", visita: "México", fecha: "24 Jun 15:45" },
    { id: 54, local: "Sudáfrica", visita: "Rep. De Corea", fecha: "24 Jun 15:45" },
    { id: 55, local: "Curazao", visita: "Costa de Marfil", fecha: "25 Jun 19:45" },
    { id: 56, local: "Ecuador", visita: "Alemania", fecha: "25 Jun 19:45" },
    { id: 57, local: "Japón", visita: "Suecia", fecha: "25 Jun 13:40" },
    { id: 58, local: "Túnez", visita: "Paises Bajos", fecha: "25 Jun 13:40" },
    { id: 59, local: "Turquía", visita: "USA", fecha: "25 Jun 16:45" },
    { id: 60, local: "Paraguay", visita: "Australia", fecha: "25 Jun 16:45" },
    { id: 61, local: "Noruega", visita: "Francia", fecha: "26 Jun 20:45" },
    { id: 62, local: "Senegal", visita: "Irak", fecha: "26 Jun 20:45" },
    { id: 63, local: "Cabo Verde", visita: "Arabia Saudí", fecha: "26 Jun 17:40" },
    { id: 64, local: "Uruguay", visita: "España", fecha: "26 Jun 17:40" },
    { id: 65, local: "Egipto", visita: "Irán", fecha: "26 Jun 12:45" },
    { id: 66, local: "Nueva Zelanda", visita: "Bélgica", fecha: "26 Jun 12:45" },
    { id: 67, local: "Panamá", visita: "Inglaterra", fecha: "27 Jun 19:45" },
    { id: 68, local: "Croacia", visita: "Ghana", fecha: "27 Jun 19:45" },
    { id: 69, local: "Colombia", visita: "Portugal", fecha: "27 Jun 17:10" },
    { id: 70, local: "RD Congo", visita: "Uzbekistán", fecha: "27 Jun 17:10" },
    { id: 71, local: "Argelia", visita: "Austria", fecha: "27 Jun 14:40" },
    { id: 72, local: "Jordania", visita: "Argentina", fecha: "27 Jun 14:40" }
  ];

  const banderas = {
    "México": "🇲🇽", "Sudáfrica": "🇿🇦", "Corea del Sur": "🇰🇷", "Rep. De Corea": "🇰🇷", "República Checa": "🇨🇿", "Rep. Checa": "🇨🇿",
    "Canadá": "🇨🇦", "Bosnia y Herzegovina": "🇧🇦", "Bosnia": "🇧🇦", "Estados Unidos": "🇺🇸", "USA": "🇺🇸", "Paraguay": "🇵🇾",
    "Catar": "🇶🇦", "Suiza": "🇨🇭", "Brasil": "🇧🇷", "Marruecos": "🇲🇦", "Haití": "🇭🇹", 
    "Escocia": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "Australia": "🇦🇺", "Australía": "🇦🇺", "Turquía": "🇹🇷", "Alemania": "🇩🇪", "Curazao": "🇨🇼",
    "Países Bajos": "🇳🇱", "Paises Bajos": "🇳🇱", "Japón": "🇯🇵", "Costa de Marfil": "🇨🇮", "Costa de marfil": "🇨🇮", "Ecuador": "🇪🇨", 
    "Suecia": "🇸🇪", "Túnez": "🇹🇳", "Bélgica": "🇧🇪", "Egipto": "🇪🇬", "Irán": "🇮🇷", "IR Iran": "🇮🇷", 
    "Nueva Zelanda": "🇳🇿", "Arabia Saudita": "🇸🇦", "Arabia Saudi": "🇸🇦", "Arabía Saudí": "🇸🇦", "Uruguay": "🇺🇾", "España": "🇪🇸", 
    "Cabo Verde": "🇨🇻", "Francia": "🇫🇷", "Senegal": "🇸🇳", "Irak": "🇮🇶", "Noruega": "🇳🇴",
    "Argentina": "🇦🇷", "Argelia": "🇩🇿", "Austria": "🇦🇹", "Jordania": "🇯🇴", "Uzbekistán": "🇺🇿",
    "Colombia": "🇨🇴", "Portugal": "🇵🇹", "RD Congo": "🇨🇩", "Ghana": "🇬🇭", "Panamá": "🇵🇦",
    "Inglaterra": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Croacia": "🇭🇷"
  };

  const participantes = [
    { id: 'betin', nombre: 'Betin' },
    { id: 'fernanda', nombre: 'Maria Fernanda' },
    { id: 'nayeli', nombre: 'Nayeli Simón' },
    { id: 'dolores', nombre: 'Dolores Ortiz' },
    { id: 'ulises', nombre: 'Ulises Ortíz' },
    { id: 'alberto_j', nombre: 'Alberto J. Becerra' },
    { id: 'adrian', nombre: 'Adrian' },
    { id: 'vicente', nombre: 'Vicente Ortiz' },
    { id: 'jose', nombre: 'José Cruz' },
    { id: 'mont', nombre: 'Mont' },
    { id: 'axel', nombre: 'Axel Rojo' },
    { id: 'estela', nombre: 'Estela Sánchez' },
    { id: 'chencho', nombre: 'Chencho' },
    { id: 'les', nombre: 'Les'},
    { id: 'javier', nombre: 'Javier' },
    { id: 'carmela', nombre: 'Carmela' },
    { id: 'tsuki', nombre: 'Tsuki' },
    { id: 'jessica', nombre: 'Jessica' }
  ];

  const diccionariosPronosticos = {
    alberto_j: { 1: "2 - 1", 2: "1 - 1", 3: "1 - 2", 4: "2 - 2", 5: "1 - 0", 6: "3 - 0", 7: "1 - 3", 8: "2 - 0", 9: "3 - 0", 10: "3 - 1", 11: "0 - 2", 12: "1 - 0", 13: "2 - 0", 14: "2 - 0", 15: "1 - 3", 16: "1 - 1", 17: "3 - 0", 18: "1 - 2", 19: "2 - 0", 20: "0 - 0", 21: "3 - 0", 22: "1 - 1", 23: "2 - 1", 24: "1 - 2", 25: "1 - 1", 26: "2 - 1", 27: "2 - 1", 28: "1 - 1", 29: "2 - 1", 30: "2 - 2", 31: "4 - 0", 32: "2 - 3", 33: "2 - 0", 34: "4 - 0", 35: "2 - 0", 36: "1 - 1", 37: "3 - 1", 38: "2 - 0", 39: "4 - 0", 40: "1 - 2", 41: "3 - 1", 42: "3 - 0", 43: "2 - 1", 44: "0 - 0", 45: "2 - 0", 46: "1 - 0", 47: "1 - 3", 48: "2 - 0", 49: "1 - 3", 50: "2 - 2", 51: "1 - 2", 52: "2 - 1", 53: "1 - 2", 54: "1 - 1", 55: "0 - 0", 56: "1 - 3", 57: "2 - 2", 58: "1 - 2", 59: "1 - 1", 60: "2 - 0", 61: "2 - 3", 62: "1 - 1", 63: "0 - 0", 64: "1 - 2", 65: "1 - 0", 66: "0 - 2", 67: "0 - 2", 68: "3 - 1", 69: "1 - 2", 70: "0 - 0", 71: "1 - 1", 72: "0 - 2" },
    dolores: { 1: "3 - 2", 2: "2 - 2", 3: "0 - 3", 4: "1 - 1", 5: "0 - 2", 6: "3 - 1", 7: "0 - 3", 8: "1 - 3", 9: "4 - 0", 10: "3 - 0", 11: "0 - 3", 12: "1 - 0", 13: "4 - 0", 14: "1 - 0", 15: "1 - 1", 16: "1 - 1", 17: "3 - 0", 18: "0 - 2", 19: "4 - 0", 20: "0 - 0", 21: "3 - 0", 22: "2 - 2", 23: "1 - 1", 24: "1 - 2", 25: "0 - 0", 26: "1 - 2", 27: "1 - 0", 28: "3 - 2", 29: "2 - 0", 30: "1 - 0", 31: "3 - 0", 32: "1 - 1", 33: "2 - 0", 34: "3 - 0", 35: "2 - 0", 36: "0 - 1", 37: "2 - 0", 38: "1 - 0", 39: "2 - 1", 40: "1 - 1", 41: "3 - 0", 42: "3 - 1", 43: "1 - 1", 44: "1 - 1", 45: "2 - 0", 46: "4 - 0", 47: "1 - 3", 48: "1 - 0", 49: "0 - 0", 50: "0 - 0", 51: "0 - 2", 52: "1 - 1", 53: "1 - 2", 54: "1 - 1", 55: "2 - 2", 56: "2 - 1", 57: "1 - 1", 58: "0 - 5", 59: "1 - 3", 60: "2 - 1", 61: "1 - 2", 62: "1 - 1", 63: "0 - 0", 64: "0 - 3", 65: "1 - 1", 66: "0 - 1", 67: "0 - 3", 68: "4 - 0", 69: "0 - 2", 70: "1 - 1", 71: "0 - 0", 72: "0 - 5" },
    les: { 1: "2 - 1", 2: "1 - 1", 3: "1 - 1", 4: "0 - 1", 5: "0 - 0", 6: "2 - 0", 7: "0 - 1", 8: "1 - 1", 9: "3 - 0", 10: "2 - 1", 11: "0 - 1", 12: "1 - 0", 13: "3 - 0", 14: "1 - 1", 15: "0 - 2", 16: "0 - 1", 17: "3 - 0", 18: "1 - 1", 19: "3 - 0", 20: "0 - 0", 21: "4 - 0", 22: "2 - 0", 23: "1 - 1", 24: "0 - 2", 25: "0 - 1", 26: "2 - 2", 27: "1 - 1", 28: "2 - 3", 29: "2 - 1", 30: "1 - 1", 31: "4 - 1", 32: "2 - 2", 33: "3 - 2", 34: "4 - 0", 35: "1 - 0", 36: "0 - 3", 37: "3 - 0", 38: "1 - 0", 39: "4 - 0", 40: "1 - 1", 41: "4 - 0", 42: "4 - 0", 43: "1 - 0", 44: "1 - 1", 45: "4 - 0", 46: "4 - 0", 47: "1 - 2", 48: "2 - 0", 49: "1 - 1", 50: "1 - 1", 51: "1 - 3", 52: "1 - 2", 53: "1 - 1", 54: "1 - 2", 55: "2 - 2", 56: "0 - 3", 57: "2 - 1", 58: "0 - 2", 59: "0 - 1", 60: "2 - 1", 61: "1 - 3", 62: "1 - 1", 63: "0 - 1", 64: "1 - 3", 65: "1 - 0", 66: "1 - 2", 67: "1 - 3", 68: "0 - 0", 69: "0 - 3", 70: "1 - 2", 71: "0 - 2", 72: "1 - 3" },
    javier: { 1: "2 - 0", 2: "1 - 1", 3: "1 - 0", 4: "2 - 1", 5: "2 - 2", 6: "4 - 0", 7: "0 - 2", 8: "1 - 1", 9: "3 - 0", 10: "2 - 0", 11: "1 - 1", 12: "1 - 0", 13: "5 - 0", 14: "2 - 1", 15: "0 - 1", 16: "1 - 1", 17: "3 - 0", 18: "0 - 2", 19: "4 - 0", 20: "1 - 0", 21: "4 - 0", 22: "3 - 1", 23: "0 - 0", 24: "0 - 2", 25: "1 - 0", 26: "1 - 0", 27: "2 - 2", 28: "2 - 1", 29: "2 - 1", 30: "1 - 0", 31: "5 - 0", 32: "0 - 1", 33: "2 - 1", 34: "4 - 0", 35: "1 - 0", 36: "0 - 1", 37: "5 - 1", 38: "2 - 0", 39: "2 - 0", 40: "0 - 1", 41: "3 - 1", 42: "3 - 0", 43: "2 - 1", 44: "1 - 1", 45: "5 - 0", 46: "3 - 0", 47: "1 - 2", 48: "2 - 0", 49: "2 - 2", 50: "0 - 1", 51: "0 - 4", 52: "0 - 0", 53: "1 - 1", 54: "1 - 2", 55: "2 - 2", 56: "0 - 3", 57: "2 - 1", 58: "0 - 2", 59: "0 - 3", 60: "2 - 1", 61: "2 - 3", 62: "1 - 1", 63: "0 - 1", 64: "2 - 4", 65: "1 - 0", 66: "1 - 2", 67: "0 - 2", 68: "3 - 0", 69: "2 - 3", 70: "0 - 0", 71: "0 - 1", 72: "0 - 4" },
    betin: { 1: "2 - 0", 2: "1 - 2", 3: "1 - 1", 4: "3 - 1", 5: "0 - 3", 6: "1 - 2", 7: "1 - 4", 8: "2 - 2", 9: "4 - 0", 10: "1 - 1", 11: "1 - 1", 12: "2 - 1", 13: "4 - 0", 14: "1 - 0", 15: "0 - 3", 16: "2 - 0", 17: "3 - 1", 18: "0 - 2", 19: "1 - 1", 20: "3 - 0", 21: "1 - 0", 22: "1 - 1", 23: "2 - 2", 24: "1 - 3", 25: "2 - 1", 26: "3 - 1", 27: "1 - 0", 28: "1 - 1", 29: "2 - 2", 30: "1 - 2", 31: "3 - 0", 32: "1 - 1", 33: "2 - 2", 34: "3 - 1", 35: "1 - 0", 36: "0 - 2", 37: "2 - 0", 38: "1 - 0", 39: "4 - 0", 40: "0 - 2", 41: "1 - 0", 42: "3 - 0", 43: "1 - 0", 44: "1 - 1", 45: "3 - 1", 46: "2 - 2", 47: "1 - 3", 48: "1 - 1", 49: "2 - 1", 50: "1 - 1", 51: "2 - 2", 52: "3 - 0", 53: "2 - 1", 54: "1 - 2", 55: "1 - 2", 56: "1 - 3", 57: "1 - 1", 58: "1 - 3", 59: "1 - 3", 60: "2 - 2", 61: "1 - 1", 62: "0 - 0", 63: "0 - 1", 64: "2 - 2", 65: "0 - 0", 66: "0 - 3", 67: "0 - 3", 68: "1 - 0", 69: "1 - 2", 70: "1 - 1", 71: "1 - 1", 72: "0 - 3" },
    fernanda: { 1: "3 - 1", 2: "2 - 1", 3: "1 - 1", 4: "1 - 0", 5: "0 - 2", 6: "2 - 1", 7: "1 - 3", 8: "1 - 2", 9: "4 - 0", 10: "2 - 3", 11: "1 - 1", 12: "2 - 0", 13: "3 - 0", 14: "1 - 1", 15: "0 - 3", 16: "1 - 1", 17: "2 - 0", 18: "0 - 2", 19: "3 - 1", 20: "1 - 0", 21: "2 - 1", 22: "2 - 0", 23: "1 - 1", 24: "0 - 3", 25: "2 - 1", 26: "2 - 0", 27: "3 - 1", 28: "2 - 1", 29: "1 - 0", 30: "0 - 2", 31: "4 - 0", 32: "1 - 1", 33: "2 - 0", 34: "2 - 0", 35: "2 - 0", 36: "0 - 2", 37: "3 - 0", 38: "2 - 0", 39: "2 - 0", 40: "1 - 2", 41: "2 - 1", 42: "4 - 0", 43: "1 - 3", 44: "1 - 2", 45: "3 - 0", 46: "3 - 0", 47: "0 - 1", 48: "2 - 1", 49: "1 - 1", 50: "1 - 1", 51: "0 - 3", 52: "2 - 0", 53: "1 - 2", 54: "1 - 2", 55: "0 - 2", 56: "1 - 2", 57: "1 - 1", 58: "0 - 2", 59: "2 - 2", 60: "1 - 0", 61: "1 - 2", 62: "1 - 0", 63: "1 - 1", 64: "2 - 1", 65: "0 - 1", 66: "0 - 3", 67: "0 - 3", 68: "2 - 0", 69: "2 - 2", 70: "1 - 1", 71: "1 - 2", 72: "0 - 3" },
    carmela: { 1: "3 - 0", 2: "1 - 0", 3: "2 - 1", 4: "2 - 1", 5: "3 - 1", 6: "2 - 0", 7: "1 - 1", 8: "1 - 1", 9: "4 - 0", 10: "1 - 3", 11: "0 - 2", 12: "1 - 1", 13: "5 - 0", 14: "1 - 4", 15: "2 - 3", 16: "1 - 2", 17: "3 - 1", 18: "2 - 2", 19: "4 - 1", 20: "1 - 0", 21: "3 - 1", 22: "3 - 0", 23: "0 - 1", 24: "2 - 3", 25: "1 - 1", 26: "3 - 2", 27: "2 - 1", 28: "2 - 1", 29: "3 - 1", 30: "3 - 1", 31: "5 - 2", 32: "3 - 1", 33: "2 - 2", 34: "5 - 0", 35: "3 - 0", 36: "0 - 5", 37: "4 - 1", 38: "3 - 2", 39: "3 - 0", 40: "1 - 3", 41: "5 - 1", 42: "4 - 1", 43: "3 - 0", 44: "2 - 1", 45: "3 - 0", 46: "4 - 0", 47: "0 - 1", 48: "3 - 0", 49: "0 - 3", 50: "1 - 3", 51: "3 - 5", 52: "3 - 1", 53: "1 - 2", 54: "2 - 1", 55: "1 - 1", 56: "2 - 5", 57: "5 - 1", 58: "1 - 1", 59: "1 - 3", 60: "2 - 0", 61: "1 - 2", 62: "0 - 3", 63: "0 - 2", 64: "4 - 4", 65: "3 - 1", 66: "2 - 2", 67: "0 - 3", 68: "1 - 1", 69: "2 - 2", 70: "1 - 0", 71: "0 - 1", 72: "0 - 3" },
    vicente: { 1: "2 - 1", 2: "0 - 0", 3: "1 - 0", 4: "3 - 1", 5: "0 - 1", 6: "4 - 1", 7: "1 - 2", 8: "2 - 3", 9: "3 - 0", 10: "1 - 0", 11: "1 - 1", 12: "1 - 0", 13: "5 - 0", 14: "3 - 0", 15: "1 - 3", 16: "2 - 1", 17: "2 - 1", 18: "0 - 1", 19: "3 - 0", 20: "2 - 0", 21: "4 - 0", 22: "1 - 0", 23: "2 - 1", 24: "1 - 3", 25: "2 - 1", 26: "2 - 1", 27: "1 - 0", 28: "2 - 1", 29: "3 - 1", 30: "2 - 2", 31: "3 - 0", 32: "2 - 1", 33: "3 - 2", 34: "3 - 0", 35: "2 - 0", 36: "1 - 2", 37: "2 - 0", 38: "1 - 0", 39: "3 - 0", 40: "0 - 1", 41: "6 - 0", 42: "4 - 0", 43: "2 - 2", 44: "1 - 2", 45: "4 - 0", 46: "4 - 0", 47: "1 - 5", 48: "3 - 0", 49: "1 - 2", 50: "0 - 0", 51: "0 - 4", 52: "2 - 1", 53: "1 - 3", 54: "1 - 2", 55: "0 - 1", 56: "1 - 2", 57: "1 - 0", 58: "0 - 1", 59: "1 - 1", 60: "2 - 1", 61: "0 - 2", 62: "1 - 0", 63: "1 - 1", 64: "1 - 1", 65: "1 - 1", 66: "1 - 2", 67: "0 - 3", 68: "3 - 0", 69: "1 - 2", 70: "2 - 1", 71: "1 - 1", 72: "0 - 2" },
    estela: { 1: "2 - 0", 2: "1 - 1", 3: "2 - 1", 4: "2 - 1", 5: "1 - 2", 6: "3 - 1", 7: "1 - 2", 8: "1 - 1", 9: "3 - 0", 10: "2 - 1", 11: "1 - 1", 12: "1 - 0", 13: "3 - 0", 14: "2 - 0", 15: "1 - 2", 16: "0 - 2", 17: "2 - 0", 18: "0 - 2", 19: "3 - 0", 20: "2 - 1", 21: "2 - 0", 22: "2 - 1", 23: "1 - 2", 24: "1 - 2", 25: "2 - 1", 26: "2 - 1", 27: "2 - 1", 28: "1 - 1", 29: "2 - 0", 30: "1 - 1", 31: "4 - 1", 32: "2 - 1", 33: "1 - 1", 34: "2 - 0", 35: "3 - 0", 36: "0 - 2", 37: "2 - 0", 38: "3 - 1", 39: "3 - 0", 40: "1 - 1", 41: "2 - 1", 42: "2 - 1", 43: "1 - 1", 44: "1 - 1", 45: "2 - 1", 46: "1 - 0", 47: "1 - 1", 48: "2 - 0", 49: "2 - 2", 50: "2 - 1", 51: "0 - 2", 52: "2 - 1", 53: "1 - 3", 54: "1 - 2", 55: "0 - 2", 56: "1 - 2", 57: "1 - 1", 58: "0 - 2", 59: "1 - 1", 60: "2 - 0", 61: "1 - 3", 62: "2 - 0", 63: "0 - 3", 64: "1 - 2", 65: "2 - 1", 66: "1 - 1", 67: "1 - 3", 68: "2 - 1", 69: "1 - 2", 70: "1 - 2", 71: "1 - 2", 72: "1 - 3" },
    ulises: { 1: "2 - 1", 2: "2 - 0", 3: "1 - 0", 4: "3 - 1", 5: "0 - 2", 6: "3 - 0", 7: "1 - 1", 8: "0 - 1", 9: "3 - 0", 10: "2 - 1", 11: "0 - 2", 12: "1 - 0", 13: "3 - 0", 14: "2 - 1", 15: "1 - 1", 16: "1 - 0", 17: "1 - 1", 18: "0 - 0", 19: "2 - 1", 20: "2 - 0", 21: "3 - 0", 22: "2 - 1", 23: "0 - 0", 24: "0 - 2", 25: "1 - 0", 26: "2 - 0", 27: "2 - 0", 28: "1 - 1", 29: "2 - 0", 30: "1 - 2", 31: "3 - 0", 32: "1 - 0", 33: "2 - 0", 34: "2 - 0", 35: "2 - 0", 36: "0 - 2", 37: "2 - 0", 38: "1 - 0", 39: "1 - 0", 40: "0 - 0", 41: "2 - 1", 42: "3 - 0", 43: "1 - 1", 44: "1 - 1", 45: "3 - 0", 46: "2 - 0", 47: "1 - 1", 48: "1 - 1", 49: "1 - 1", 50: "1 - 1", 51: "0 - 2", 52: "2 - 0", 53: "1 - 2", 54: "1 - 2", 55: "1 - 1", 56: "1 - 2", 57: "1 - 0", 58: "0 - 2", 59: "2 - 2", 60: "1 - 1", 61: "0 - 2", 62: "2 - 1", 63: "0 - 0", 64: "1 - 3", 65: "0 - 1", 66: "0 - 2", 67: "0 - 3", 68: "2 - 1", 69: "1 - 1", 70: "1 - 1", 71: "1 - 2", 72: "0 - 3" },
    nayeli: { 1: "2 - 1", 2: "2 - 0", 3: "1 - 0", 4: "2 - 1", 5: "0 - 1", 6: "2 - 1", 7: "0 - 2", 8: "1 - 1", 9: "2 - 0", 10: "2 - 2", 11: "1 - 1", 12: "1 - 0", 13: "2 - 1", 14: "1 - 1", 15: "0 - 2", 16: "0 - 1", 17: "2 - 0", 18: "0 - 0", 19: "3 - 0", 20: "2 - 1", 21: "2 - 0", 22: "2 - 2", 23: "1 - 1", 24: "0 - 1", 25: "1 - 1", 26: "1 - 0", 27: "1 - 1", 28: "2 - 1", 29: "2 - 0", 30: "2 - 1", 31: "2 - 0", 32: "1 - 2", 33: "2 - 2", 34: "3 - 0", 35: "1 - 1", 36: "0 - 1", 37: "3 - 1", 38: "1 - 1", 39: "3 - 0", 40: "1 - 0", 41: "3 - 1", 42: "3 - 0", 43: "2 - 2", 44: "1 - 1", 45: "2 - 0", 46: "3 - 0", 47: "1 - 2", 48: "2 - 0", 49: "2 - 1", 50: "0 - 0", 51: "2 - 1", 52: "1 - 0", 53: "0 - 2", 54: "1 - 1", 55: "0 - 1", 56: "0 - 2", 57: "2 - 1", 58: "0 - 1", 59: "0 - 2", 60: "1 - 1", 61: "1 - 2", 62: "0 - 0", 63: "1 - 1", 64: "3 - 2", 65: "1 - 1", 66: "0 - 0", 67: "1 - 3", 68: "2 - 0", 69: "1 - 2", 70: "1 - 1", 71: "0 - 1", 72: "0 - 2" },
    mont: { 1: "1 - 0", 2: "2 - 1", 3: "2 - 1", 4: "2 - 1", 5: "0 - 2", 6: "1 - 1", 7: "0 - 2", 8: "1 - 2", 9: "2 - 0", 10: "2 - 2", 11: "1 - 2", 12: "2 - 1", 13: "3 - 1", 14: "3 - 1", 15: "0 - 2", 16: "1 - 0", 17: "2 - 0", 18: "0 - 2", 19: "2 - 0", 20: "3 - 1", 21: "2 - 0", 22: "2 - 1", 23: "2 - 2", 24: "0 - 3", 25: "2 - 1", 26: "1 - 1", 27: "3 - 1", 28: "1 - 2", 29: "1 - 0", 30: "1 - 1", 31: "3 - 0", 32: "0 - 1", 33: "1 - 2", 34: "2 - 1", 35: "1 - 0", 36: "2 - 2", 37: "2 - 0", 38: "2 - 1", 39: "1 - 0", 40: "1 - 2", 41: "2 - 1", 42: "4 - 0", 43: "1 - 2", 44: "0 - 2", 45: "3 - 0", 46: "1 - 1", 47: "1 - 3", 48: "2 - 0", 49: "2 - 1", 50: "2 - 0", 51: "0 - 1", 52: "2 - 0", 53: "1 - 1", 54: "1 - 2", 55: "0 - 2", 56: "0 - 3", 57: "3 - 1", 58: "0 - 2", 59: "2 - 1", 60: "1 - 1", 61: "2 - 2", 62: "2 - 0", 63: "0 - 1", 64: "1 - 2", 65: "2 - 0", 66: "0 - 2", 67: "0 - 3", 68: "2 - 1", 69: "1 - 2", 70: "1 - 1", 71: "0 - 1", 72: "1 - 4" },
    axel: { 1: "2 - 0", 2: "1 - 0", 3: "2 - 0", 4: "2 - 0", 5: "0 - 3", 6: "2 - 2", 7: "0 - 3", 8: "1 - 1", 9: "3 - 1", 10: "0 - 1", 11: "1 - 1", 12: "2 - 1", 13: "3 - 0", 14: "2 - 1", 15: "0 - 1", 16: "0 - 0", 17: "3 - 1", 18: "0 - 4", 19: "2 - 1", 20: "2 - 0", 21: "3 - 0", 22: "1 - 0", 23: "1 - 1", 24: "0 - 2", 25: "1 - 0", 26: "0 - 1", 27: "2 - 0", 28: "3 - 1", 29: "2 - 1", 30: "0 - 2", 31: "4 - 0", 32: "0 - 0", 33: "2 - 1", 34: "2 - 0", 35: "2 - 1", 36: "0 - 2", 37: "3 - 0", 38: "3 - 1", 39: "1 - 1", 40: "0 - 2", 41: "2 - 1", 42: "3 - 0", 43: "2 - 1", 44: "0 - 1", 45: "2 - 0", 46: "1 - 0", 47: "1 - 2", 48: "1 - 0", 49: "2 - 2", 50: "1 - 0", 51: "0 - 2", 52: "3 - 0", 53: "1 - 2", 54: "1 - 3", 55: "1 - 0", 56: "1 - 2", 57: "2 - 0", 58: "1 - 1", 59: "2 - 2", 60: "1 - 0", 61: "1 - 2", 62: "2 - 1", 63: "1 - 0", 64: "0 - 2", 65: "1 - 0", 66: "0 - 3", 67: "1 - 2", 68: "1 - 2", 69: "0 - 2", 70: "0 - 0", 71: "2 - 0", 72: "1 - 3" },
    jose: { 1: "0 - 1", 2: "1 - 1", 3: "2 - 1", 4: "2 - 1", 5: "0 - 0", 6: "2 - 0", 7: "0 - 4", 8: "1 - 2", 9: "3 - 0", 10: "0 - 1", 11: "2 - 1", 12: "2 - 2", 13: "5 - 0", 14: "1 - 1", 15: "0 - 3", 16: "0 - 0", 17: "2 - 0", 18: "1 - 2", 19: "3 - 0", 20: "1 - 0", 21: "2 - 0", 22: "3 - 2", 23: "2 - 1", 24: "1 - 3", 25: "1 - 1", 26: "1 - 0", 27: "2 - 0", 28: "3 - 2", 29: "2 - 1", 30: "1 - 0", 31: "3 - 0", 32: "1 - 2", 33: "2 - 2", 34: "4 - 0", 35: "1 - 0", 36: "0 - 2", 37: "2 - 0", 38: "2 - 0", 39: "2 - 0", 40: "1 - 1", 41: "3 - 1", 42: "2 - 0", 43: "1 - 0", 44: "1 - 1", 45: "3 - 0", 46: "2 - 0", 47: "1 - 3", 48: "1 - 0", 49: "2 - 2", 50: "1 - 0", 51: "1 - 3", 52: "3 - 0", 53: "0 - 2", 54: "1 - 2", 55: "0 - 3", 56: "1 - 3", 57: "3 - 2", 58: "1 - 2", 59: "0 - 2", 60: "1 - 0", 61: "1 - 2", 62: "1 - 1", 63: "0 - 2", 64: "2 - 3", 65: "0 - 0", 66: "0 - 2", 67: "0 - 3", 68: "1 - 2", 69: "1 - 2", 70: "2 - 0", 71: "1 - 1", 72: "0 - 2" },
    adrian: { 1: "2 - 0", 2: "1 - 1", 3: "0 - 1", 4: "2 - 2", 5: "0 - 2", 6: "1 - 1", 7: "1 - 3", 8: "1 - 1", 9: "2 - 0", 10: "1 - 2", 11: "0 - 1", 12: "2 - 1", 13: "3 - 0", 14: "2 - 0", 15: "0 - 1", 16: "1 - 2", 17: "3 - 1", 18: "1 - 3", 19: "2 - 1", 20: "1 - 0", 21: "2 - 0", 22: "1 - 1", 23: "1 - 1", 24: "0 - 3", 25: "1 - 1", 26: "1 - 2", 27: "2 - 1", 28: "2 - 2", 29: "2 - 0", 30: "2 - 2", 31: "3 - 1", 32: "1 - 2", 33: "1 - 1", 34: "2 - 1", 35: "2 - 0", 36: "1 - 2", 37: "3 - 0", 38: "2 - 0", 39: "2 - 0", 40: "1 - 1", 41: "1 - 0", 42: "3 - 0", 43: "1 - 1", 44: "1 - 1", 45: "3 - 0", 46: "2 - 2", 47: "1 - 2", 48: "3 - 1", 49: "1 - 1", 50: "2 - 1", 51: "1 - 2", 52: "3 - 0", 53: "1 - 2", 54: "0 - 1", 55: "0 - 0", 56: "2 - 1", 57: "2 - 1", 58: "1 - 1", 59: "0 - 1", 60: "1 - 0", 61: "1 - 2", 62: "2 - 1", 63: "0 - 0", 64: "1 - 1", 65: "3 - 2", 66: "0 - 2", 67: "2 - 4", 68: "1 - 1", 69: "2 - 1", 70: "0 - 0", 71: "2 - 2", 72: "1 - 3" },
    chencho: { 1: "2 - 1", 2: "2 - 0", 3: "0 - 1", 4: "1 - 0", 5: "2 - 0", 6: "2 - 0", 7: "0 - 2", 8: "2 - 1", 9: "3 - 0", 10: "1 - 2", 11: "1 - 1", 12: "1 - 0", 13: "2 - 1", 14: "2 - 0", 15: "0 - 2", 16: "0 - 0", 17: "2 - 1", 18: "0 - 2", 19: "2 - 0", 20: "1 - 0", 21: "2 - 0", 22: "2 - 2", 23: "1 - 1", 24: "0 - 2", 25: "2 - 0", 26: "1 - 0", 27: "1 - 0", 28: "2 - 0", 29: "2 - 0", 30: "1 - 2", 31: "2 - 0", 32: "1 - 1", 33: "2 - 0", 34: "2 - 0", 35: "2 - 0", 36: "1 - 2", 37: "1 - 0", 38: "2 - 1", 39: "2 - 1", 40: "1 - 0", 41: "2 - 2", 42: "2 - 1", 43: "2 - 0", 44: "0 - 1", 45: "2 - 0", 46: "3 - 0", 47: "0 - 2", 48: "2 - 0", 49: "2 - 1", 50: "0 - 1", 51: "1 - 2", 52: "2 - 1", 53: "0 - 1", 54: "1 - 1", 55: "0 - 1", 56: "1 - 2", 57: "0 - 1", 58: "1 - 0", 59: "2 - 0", 60: "1 - 2", 61: "0 - 0", 62: "0 - 1", 63: "1 - 2", 64: "0 - 0", 65: "0 - 0", 66: "0 - 1", 67: "1 - 2", 68: "1 - 0", 69: "1 - 2", 70: "0 - 0", 71: "1 - 2", 72: "0 - 1" },
    tsuki: { 1: "2 - 0", 2: "2 - 1", 3: "1 - 1", 4: "2 - 0", 5: "0 - 2", 6: "2 - 1", 7: "0 - 2", 8: "1 - 2", 9: "4 - 0", 10: "3 - 0", 11: "2 - 1", 12: "0 - 2", 13: "3 - 0", 14: "3 - 1", 15: "1 - 2", 16: "1 - 0", 17: "2 - 0", 18: "0 - 3", 19: "3 - 0", 20: "2 - 1", 21: "3 - 0", 22: "2 - 1", 23: "2 - 0", 24: "0 - 3", 25: "1 - 2", 26: "2 - 0", 27: "2 - 1", 28: "1 - 2", 29: "2 - 0", 30: "1 - 1", 31: "3 - 0", 32: "3 - 1", 33: "1 - 1", 34: "2 - 1", 35: "5 - 0", 36: "0 - 2", 37: "2 - 1", 38: "3 - 1", 39: "3 - 0", 40: "0 - 2", 41: "2 - 0", 42: "3 - 0", 43: "2 - 1", 44: "0 - 2", 45: "2 - 1", 46: "2 - 1", 47: "0 - 3", 48: "2 - 0", 49: "1 - 0", 50: "3 - 1", 51: "0 - 1", 52: "1 - 4", 53: "0 - 0", 54: "2 - 0", 55: "3 - 0", 56: "3 - 0", 57: "1 - 2", 58: "0 - 0", 59: "3 - 1", 60: "1 - 0", 61: "2 - 1", 62: "1 - 0", 63: "0 - 2", 64: "1 - 1", 65: "1 - 1", 66: "0 - 2", 67: "2 - 0", 68: "3 - 1", 69: "1 - 1", 70: "2 - 0", 71: "2 - 1", 72: "0 - 4" },
    jessica: { 1: "2 - 0", 2: "1 - 1", 3: "2 - 1", 4: "2 - 0", 5: "0 - 2", 6: "2 - 1", 7: "0 - 2", 8: "1 - 2", 9: "4 - 0", 10: "2 - 1", 11: "1 - 1", 12: "2 - 0", 13: "3 - 0", 14: "2 - 0", 15: "0 - 2", 16: "2 - 0", 17: "1 - 1", 18: "1 - 2", 19: "3 - 0", 20: "2 - 0", 21: "3 - 0", 22: "2 - 1", 23: "1 - 1", 24: "1 - 2", 25: "2 - 0", 26: "2 - 0", 27: "2 - 0", 28: "2 - 1", 29: "2 - 0", 30: "1 - 2", 31: "4 - 0", 32: "2 - 1", 33: "2 - 1", 34: "2 - 0", 35: "1 - 2", 36: "1 - 2", 37: "3 - 0", 38: "2 - 0", 39: "2 - 0", 40: "1 - 2", 41: "2 - 0", 42: "3 - 0", 43: "1 - 1", 44: "0 - 2", 45: "2 - 0", 46: "2 - 1", 47: "0 - 2", 48: "2 - 0", 49: "1 - 1", 50: "2 - 0", 51: "1 - 3", 52: "2 - 0", 53: "1 - 3", 54: "1 - 1", 55: "0 - 2", 56: "1 - 2", 57: "1 - 1", 58: "1 - 3", 59: "1 - 1", 60: "2 - 0", 61: "1 - 2", 62: "2 - 0", 63: "1 - 1", 64: "1 - 1", 65: "1 - 1", 66: "0 - 3", 67: "0 - 2", 68: "2 - 1", 69: "1 - 1", 70: "1 - 1", 71: "1 - 1", 72: "0 - 3" }
  };

  const resultadosOficiales = {
    1: "2 - 0",
    2: "2 - 1",
    3: "1 - 1",
    4: "4 - 1",
    5: "1 - 1",
    6: "1 - 1",
    7: "0 - 1",
    8: "2 - 0",
    9: "7 - 1",
    10: "2 - 2",
    11: "1 - 0",
    12: "5 - 1",
    13: "0 - 0",
    14: "1 - 1",
    15: "1 - 1",
    16: "2 - 2",
    17: "3 - 1",
    18: "1 - 4",
    19: "3 - 0",
    20: "3 - 1",
    21: "4 - 2",
    22: "4 - 2",
    23: "1 - 0",
    24: "1 - 3",
    25: "1 - 0",
  };

  const calcularPuntos = (prono, real) => {
    if (!prono || !real) return 0;
    const [pL, pV] = prono.split(' - ').map(Number);
    const [rL, rV] = real.split(' - ').map(Number);
    if (pL === rL && pV === rV) return 2;
    const pronoTendencia = pL > pV ? 'Local' : pL < pV ? 'Visita' : 'Empate';
    const realTendencia = rL > rV ? 'Local' : rL < rV ? 'Visita' : 'Empate';
    return pronoTendencia === realTendencia ? 1 : 0;
  };

  const tablaRanking = participantes.map(participante => {
    let puntosTotales = 0;
    const pronosticosUsuario = diccionariosPronosticos[participante.id] || {};
    Object.keys(resultadosOficiales).forEach(matchId => {
      const prono = pronosticosUsuario[matchId];
      const real = resultadosOficiales[matchId];
      puntosTotales += calcularPuntos(prono, real);
    });
    return { nombre: participante.nombre, puntos: puntosTotales };
  }).sort((a, b) => b.puntos - a.puntos);

  return (
    <>
      {/* ESTILOS ORGÁNICOS E INNOVADORES:
        Aquí definimos la nueva paleta de colores (naranja dominante, azules y verdes).
        Usamos bordes muy curvos (borderRadius de 30px o 40px) para el efecto orgánico de la imagen.
      */}
      <style>{`
        :root {
          --orange-primary: #FF6B00;
          --orange-light: #FF8C00;
          --blue-sub: #00B4D8;
          --blue-dark: #0B1325;
          --blue-card: #151F32;
          --green-sub: #00E676;
          --text-light: #FFFFFF;
          --text-muted: #8E9BB0;
        }
        
        body {
          background-color: var(--blue-dark);
          color: var(--text-light);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 0;
        }

        .app-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }

        .header-organic {
          background: linear-gradient(135deg, var(--orange-primary) 0%, var(--orange-light) 100%);
          border-radius: 40px;
          padding: 30px 20px;
          text-align: center;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(255, 107, 0, 0.2);
          position: relative;
          overflow: hidden;
        }
        
        /* Ondas decorativas simuladas en el header */
        .header-organic::before {
          content: '';
          position: absolute;
          top: -50%; left: -10%;
          width: 300px; height: 300px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
        }
        .header-organic::after {
          content: '';
          position: absolute;
          bottom: -50%; right: -10%;
          width: 250px; height: 250px;
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
        }

        .header-title {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 800;
          letter-spacing: 2px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          position: relative;
          z-index: 2;
        }

        .hero-card {
          background: rgba(11, 19, 37, 0.5);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 30px;
          padding: 15px 30px;
          display: inline-block;
          margin-top: 15px;
          position: relative;
          z-index: 2;
          backdrop-filter: blur(10px);
        }

        .organic-card {
          background: var(--blue-card);
          border-radius: 30px;
          padding: 25px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(0, 180, 216, 0.15);
        }

        .tab-button {
          background: transparent;
          color: var(--text-muted);
          border: 2px solid transparent;
          border-radius: 30px;
          padding: 10px 20px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .tab-button:hover {
          color: var(--blue-sub);
        }
        .tab-button.active {
          background: var(--blue-sub);
          color: var(--blue-dark);
          box-shadow: 0 4px 15px rgba(0, 180, 216, 0.4);
        }

        .participant-btn {
          padding: 8px 18px;
          font-size: 0.9rem;
          border-radius: 25px;
          cursor: pointer;
          font-weight: bold;
          white-space: nowrap;
          transition: all 0.3s ease;
          background: rgba(255,255,255,0.05);
          color: var(--text-muted);
          border: 1px solid transparent;
        }
        .participant-btn:hover {
          background: rgba(255, 107, 0, 0.1);
          color: var(--orange-primary);
        }
        .participant-btn.active {
          background: linear-gradient(90deg, var(--orange-primary), var(--orange-light));
          color: #fff;
          box-shadow: 0 4px 12px rgba(255, 107, 0, 0.4);
        }

        .match-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 15px;
          padding: 18px 10px;
          border-bottom: 1px dashed rgba(255,255,255,0.1);
          transition: background 0.3s;
          border-radius: 15px;
        }
        .match-row:hover {
          background: rgba(255,255,255,0.03);
        }

        /* Colores dinámicos para los pronósticos */
        .score-box {
          padding: 8px 16px;
          border-radius: 20px; /* Bordes redondeados en los marcadores */
          font-weight: 800;
          font-size: 1.1rem;
          text-align: center;
          transition: all 0.3s ease;
          background: var(--blue-dark);
        }
        .score-pending { border: 2px solid var(--blue-sub); color: var(--blue-sub); }
        .score-exact { border: 2px solid var(--green-sub); color: var(--green-sub); background: rgba(0, 230, 118, 0.1); }
        .score-tendency { border: 2px solid var(--blue-sub); color: var(--blue-sub); background: rgba(0, 180, 216, 0.1); }
        .score-fail { border: 2px solid #FF3333; color: #FF3333; background: rgba(255, 51, 51, 0.1); }
        .score-empty { border: 2px solid #444; color: #888; }
        
      `}</style>

      <div className="app-container">
        
        {/* ENCABEZADO ORGÁNICO Y NARANJA */}
        <header className="header-organic">
          <h1 className="header-title">QUINIELA 2026</h1>
          <div className="hero-card">
            <p style={{ margin: '0 0 5px 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
              {marcadorMundial.partido}
            </p>
            <h2 style={{ margin: 0, color: '#fff', fontSize: '1.8rem' }}>
              {marcadorMundial.resultado}
            </h2>
          </div>
        </header>

        {/* NAVEGACIÓN */}
        <nav style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '15px' }}>
          <button className={`tab-button ${activeTab === 'pronosticar' ? 'active' : ''}`} onClick={() => setActiveTab('pronosticar')}>⚽ Pronósticos</button>
          <button className={`tab-button ${activeTab === 'anteriores' ? 'active' : ''}`} onClick={() => setActiveTab('anteriores')}>📅 Resultados</button>
          <button className={`tab-button ${activeTab === 'tabla' ? 'active' : ''}`} onClick={() => setActiveTab('tabla')}>🏆 Ranking</button>
          <button className={`tab-button ${activeTab === 'comparativa' ? 'active' : ''}`} onClick={() => setActiveTab('comparativa')}>📊 Comparativa</button>
        </nav>

        {/* PESTAÑA: PRONÓSTICOS */}
        {activeTab === 'pronosticar' && (
          <div className="organic-card">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
              {participantes.map(participante => (
                <button 
                  key={participante.id}
                  onClick={() => setPronosticadorActivo(participante.id)} 
                  className={`participant-btn ${pronosticadorActivo === participante.id ? 'active' : ''}`}>
                  {participante.nombre}
                </button>
              ))}
            </div>

            <h3 style={{textAlign: 'center', marginBottom: '20px', color: 'var(--orange-primary)'}}>
              Pronósticos de {participantes.find(p => p.id === pronosticadorActivo)?.nombre}
            </h3>

            {partidos.map(p => {
              const prono = diccionariosPronosticos[pronosticadorActivo]?.[p.id] || "-";
              const resultadoOficial = resultadosOficiales[p.id];
              
              let scoreClass = 'score-pending';
              if (resultadoOficial && prono !== "-") {
                const puntos = calcularPuntos(prono, resultadoOficial);
                if (puntos === 2) scoreClass = 'score-exact'; // Verde
                else if (puntos === 1) scoreClass = 'score-tendency'; // Azul
                else scoreClass = 'score-fail'; // Rojo
              } else if (!resultadoOficial && prono === "-") {
                 scoreClass = 'score-empty'; // Gris
              }

              return (
                <div key={p.id} className="match-row">
                  <span style={{ textAlign: 'right', fontSize: '1rem' }}>
                    {banderas[p.local]} <b>{p.local}</b>
                  </span>

                  <div className={`score-box ${scoreClass}`}>
                    {prono}
                  </div>

                  <span style={{ textAlign: 'left', fontSize: '1rem' }}>
                    <b>{p.visita}</b> {banderas[p.visita]}
                  </span>
                  
                  <span style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '5px' }}>
                    {p.fecha}
                    {resultadoOficial && (
                      <span style={{ marginLeft: '10px', fontWeight: 'bold', color: scoreClass === 'score-exact' ? 'var(--green-sub)' : scoreClass === 'score-tendency' ? 'var(--blue-sub)' : '#FF3333' }}>
                        (Real: {resultadoOficial})
                      </span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* PESTAÑA: RESULTADOS */}
        {activeTab === 'anteriores' && (
          <div className="organic-card">
             <h3 style={{textAlign: 'center', marginBottom: '20px', color: 'var(--orange-primary)'}}>Resultados Oficiales</h3>
             {partidos.map(p => {
               const resultadoOficial = resultadosOficiales[p.id];
               return (
                <div key={p.id} className="match-row">
                  <span style={{ textAlign: 'right', fontSize: '1rem' }}>
                    {banderas[p.local]} <b>{p.local}</b>
                  </span>

                  <div style={{ textAlign: 'center' }}>
                    <div className={`score-box ${resultadoOficial ? 'score-exact' : 'score-empty'}`} style={{ border: resultadoOficial ? '2px solid var(--orange-primary)' : '', color: resultadoOficial ? 'var(--orange-primary)' : '', background: resultadoOficial ? 'rgba(255, 107, 0, 0.1)' : '' }}>
                      {resultadoOficial ? resultadoOficial : "0 - 0"}
                    </div>
                    <span style={{fontSize: '0.7rem', fontWeight: 'bold', color: resultadoOficial ? 'var(--orange-primary)' : 'var(--text-muted)', display: 'block', marginTop: '6px', letterSpacing: '1px'}}>
                       {resultadoOficial ? "FINALIZADO" : "POR DEFINIR"}
                    </span>
                  </div>

                  <span style={{ textAlign: 'left', fontSize: '1rem' }}>
                    <b>{p.visita}</b> {banderas[p.visita]}
                  </span>
                  
                  <span style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '5px' }}>
                    {p.fecha}
                  </span>
                </div>
               );
             })}
          </div>
        )}

        {/* PESTAÑA: RANKING */}
        {activeTab === 'tabla' && (
          <div className="organic-card">
            <h3 style={{textAlign: 'center', marginBottom: '20px', color: 'var(--orange-primary)'}}>Tabla General de Puntos</h3>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
              <thead>
                <tr style={{borderBottom: '2px solid var(--blue-sub)', textAlign: 'left'}}>
                  <th style={{padding: '15px', color: 'var(--blue-sub)'}}>Pos.</th>
                  <th style={{padding: '15px', color: 'var(--blue-sub)'}}>Participante</th>
                  <th style={{padding: '15px', textAlign: 'right', color: 'var(--blue-sub)'}}>Puntos</th>
                </tr>
              </thead>
              <tbody>
                {tablaRanking.map((participante, i) => (
                  <tr key={i} style={{borderBottom: '1px dashed rgba(255,255,255,0.1)'}}>
                    <td style={{padding: '15px', fontWeight: 'bold', color: i < 3 ? 'var(--orange-primary)' : 'var(--text-muted)'}}>{i + 1}</td>
                    <td style={{padding: '15px', fontSize: '1.1rem'}}>{participante.nombre}</td>
                    <td style={{padding: '15px', textAlign: 'right', fontWeight: 'bold', color: 'var(--green-sub)', fontSize: '1.3rem'}}>
                      {participante.puntos}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* PESTAÑA: COMPARATIVA */}
        {activeTab === 'comparativa' && (
          <div className="organic-card">
            <h3 style={{textAlign: 'center', marginBottom: '20px', color: 'var(--orange-primary)'}}>Comparativa General</h3>
            
            <div style={{ width: '100%', overflowX: 'auto', paddingBottom: '15px' }}>
              <table style={{width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: '900px'}}>
                <thead>
                  <tr>
                    <th style={{
                      padding: '15px', textAlign: 'left', position: 'sticky', left: 0, 
                      backgroundColor: 'var(--blue-card)', zIndex: 10, 
                      borderBottom: '2px solid var(--blue-sub)', borderRight: '1px solid rgba(255,255,255,0.1)', color: 'var(--blue-sub)'
                    }}>
                      Partido
                    </th>
                    {participantes.map(participante => (
                      <th key={participante.id} style={{
                        padding: '15px', whiteSpace: 'nowrap', fontSize: '0.9rem',
                        borderBottom: '2px solid var(--blue-sub)', textAlign: 'center', color: 'var(--blue-sub)'
                      }}>
                        {participante.nombre}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {partidos.map(p => {
                    const resultadoOficial = resultadosOficiales[p.id];
                    return (
                      <tr key={p.id}>
                        <td style={{
                          padding: '15px', textAlign: 'left', whiteSpace: 'nowrap', position: 'sticky', left: 0, 
                          backgroundColor: 'var(--blue-card)', borderRight: '1px solid rgba(255,255,255,0.1)',
                          borderBottom: '1px dashed rgba(255,255,255,0.1)', zIndex: 5
                        }}>
                          <span style={{fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block'}}>{p.fecha}</span>
                          {banderas[p.local]} <span style={{fontSize: '0.9rem'}}><b>{p.local}</b> vs <b>{p.visita}</b></span> {banderas[p.visita]}
                          {resultadoOficial && (
                            <span style={{display: 'block', fontSize: '0.8rem', color: 'var(--orange-primary)', marginTop: '4px'}}>
                              Real: {resultadoOficial}
                            </span>
                          )}
                        </td>
                        
                        {participantes.map(participante => {
                          const prono = diccionariosPronosticos[participante.id]?.[p.id] || "-";
                          let colorProno = 'var(--text-light)'; 
                          if (resultadoOficial && prono !== "-") {
                            const puntos = calcularPuntos(prono, resultadoOficial);
                            if (puntos === 2) colorProno = 'var(--green-sub)'; 
                            else if (puntos === 1) colorProno = 'var(--blue-sub)'; 
                            else colorProno = '#FF3333'; 
                          } else if (!resultadoOficial && prono === "-") {
                            colorProno = 'var(--text-muted)'; 
                          }

                          return (
                            <td key={participante.id} style={{
                              padding: '15px', fontWeight: 'bold', color: colorProno, whiteSpace: 'nowrap',
                              borderBottom: '1px dashed rgba(255,255,255,0.1)', textAlign: 'center'
                            }}>
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