import React, { useState } from 'react';

export default function QuinielaManual() {
  const [activeTab, setActiveTab] = useState('pronosticar');
  const [pronosticadorActivo, setPronosticadorActivo] = useState('betin');

  const marcadorMundial = {
    partido: "🇲🇽 MÉXICO VS SUDAFRICA 🇿🇦",
    resultado: "0 - 0"
  };

  const partidos = [
    { id: 1, local: "México", visita: "Sudáfrica", fecha: "11 Jun 12:30" },
    { id: 2, local: "Corea del Sur", visita: "República Checa", fecha: "11 Jun 19:45" },
    { id: 3, local: "Canadá", visita: "Bosnia y Herzegovina", fecha: "12 Jun 12:45" },
    { id: 4, local: "Estados Unidos", visita: "Paraguay", fecha: "12 Jun 18:40" },
    { id: 5, local: "Catar", visita: "Suiza", fecha: "13 Jun 12:45" },
    { id: 6, local: "Brasil", visita: "Marruecos", fecha: "13 Jun 15:40" },
    { id: 7, local: "Haití", visita: "Escocia", fecha: "13 Jun 18:45" },
    { id: 8, local: "Australia", visita: "Turquía", fecha: "13 Jun 21:45" },
    { id: 9, local: "Alemania", visita: "Curazao", fecha: "14 Jun 10:45" },
    { id: 10, local: "Costa de Marfil", visita: "Ecuador", fecha: "14 Jun 16:45" },
    { id: 11, local: "Países Bajos", visita: "Japón", fecha: "14 Jun 13:40" },
    { id: 12, local: "Suecia", visita: "Túnez", fecha: "14 Jun 19:45" },
    { id: 13, local: "Bélgica", visita: "Egipto", fecha: "15 Jun 12:45" },
    { id: 14, local: "Irán", visita: "Nueva Zelanda", fecha: "15 Jun 18:45" },
    { id: 15, local: "Arabia Saudita", visita: "Uruguay", fecha: "15 Jun 15:45" },
    { id: 16, local: "España", visita: "Cabo Verde", fecha: "15 Jun 09:45" },
    { id: 17, local: "Francia", visita: "Senegal", fecha: "16 Jun 12:45" },
    { id: 18, local: "Irak", visita: "Noruega", fecha: "16 Jun 15:45" },
    { id: 19, local: "Argentina", visita: "Argelia", fecha: "16 Jun 18:40" },
    { id: 20, local: "Austria", visita: "Jordania", fecha: "16 Jun 21:45" },
    { id: 21, local: "Uzbekistán", visita: "Colombia", fecha: "17 Jun 19:45" },
    { id: 22, local: "Portugal", visita: "RD Congo", fecha: "17 Jun 10:45" },
    { id: 23, local: "Ghana", visita: "Panamá", fecha: "17 Jun 16:45" },
    { id: 24, local: "Inglaterra", visita: "Croacia", fecha: "17 Jun 13:40" },
    { id: 25, local: "República Checa", visita: "Sudáfrica", fecha: "18 Jun 09:45" },
    { id: 26, local: "México", visita: "Corea del Sur", fecha: "18 Jun 18:30" },
    { id: 27, local: "Suiza", visita: "Bosnia y Herzegovina", fecha: "18 Jun 12:45" },
    { id: 28, local: "Canadá", visita: "Catar", fecha: "18 Jun 15:45" },
    { id: 29, local: "Brasil", visita: "Haití", fecha: "19 Jun 18:10" },
    { id: 30, local: "Escocia", visita: "Marruecos", fecha: "19 Jun 15:45" },
    { id: 31, local: "Turquía", visita: "Paraguay", fecha: "19 Jun 20:45" },
    { id: 32, local: "Estados Unidos", visita: "Australia", fecha: "19 Jun 12:45" },
    { id: 33, local: "Alemania", visita: "Costa de Marfil", fecha: "20 Jun 13:45" },
    { id: 34, local: "Ecuador", visita: "Curazao", fecha: "20 Jun 17:45" },
    { id: 35, local: "Países Bajos", visita: "Suecia", fecha: "20 Jun 10:40" },
    { id: 36, local: "Túnez", visita: "Japón", fecha: "20 Jun 21:45" },
    { id: 37, local: "Nueva Zelanda", visita: "Egipto", fecha: "21 Jun 18:45" },
    { id: 38, local: "Bélgica", visita: "Irán", fecha: "21 Jun 12:45" },
    { id: 39, local: "Uruguay", visita: "Cabo Verde", fecha: "21 Jun 15:45" },
    { id: 40, local: "España", visita: "Arabia Saudita", fecha: "21 Jun 09:40" },
    { id: 41, local: "Noruega", visita: "Senegal", fecha: "22 Jun 17:40" },
    { id: 42, local: "Francia", visita: "Irak", fecha: "22 Jun 14:45" },
    { id: 43, local: "Argentina", visita: "Austria", fecha: "22 Jun 10:45" },
    { id: 44, local: "Jordania", visita: "Argelia", fecha: "22 Jun 20:45" },
    { id: 45, local: "Colombia", visita: "RD Congo", fecha: "23 Jun 19:40" },
    { id: 46, local: "Portugal", visita: "Uzbekistán", fecha: "23 Jun 10:45" },
    { id: 47, local: "Panamá", visita: "Croacia", fecha: "23 Jun 16:45" },
    { id: 48, local: "Inglaterra", visita: "Ghana", fecha: "23 Jun 13:45" },
    { id: 49, local: "República Checa", visita: "México", fecha: "24 Jun 18:30" },
    { id: 50, local: "Sudáfrica", visita: "Corea del Sur", fecha: "24 Jun 18:30" },
    { id: 51, local: "Suiza", visita: "Canadá", fecha: "24 Jun 12:45" },
    { id: 52, local: "Bosnia y Herzegovina", visita: "Catar", fecha: "24 Jun 12:45" },
    { id: 53, local: "Escocia", visita: "Brasil", fecha: "24 Jun 15:45" },
    { id: 54, local: "Marruecos", visita: "Haití", fecha: "24 Jun 15:45" },
    { id: 55, local: "Turquía", visita: "Estados Unidos", fecha: "25 Jun 19:45" },
    { id: 56, local: "Paraguay", visita: "Australia", fecha: "25 Jun 19:45" },
    { id: 57, local: "Curazao", visita: "Costa de Marfil", fecha: "25 Jun 13:40" },
    { id: 58, local: "Ecuador", visita: "Alemania", fecha: "25 Jun 13:40" },
    { id: 59, local: "Japón", visita: "Suecia", fecha: "25 Jun 16:45" },
    { id: 60, local: "Túnez", visita: "Países Bajos", fecha: "25 Jun 16:45" },
    { id: 61, local: "Egipto", visita: "Irán", fecha: "26 Jun 20:45" },
    { id: 62, local: "Nueva Zelanda", visita: "Bélgica", fecha: "26 Jun 20:45" },
    { id: 63, local: "Cabo Verde", visita: "Arabia Saudita", fecha: "26 Jun 17:40" },
    { id: 64, local: "Uruguay", visita: "España", fecha: "26 Jun 17:40" },
    { id: 65, local: "Senegal", visita: "Irak", fecha: "26 Jun 12:45" },
    { id: 66, local: "Noruega", visita: "Francia", fecha: "26 Jun 12:45" },
    { id: 67, local: "Argelia", visita: "Austria", fecha: "27 Jun 19:45" },
    { id: 68, local: "Jordania", visita: "Argentina", fecha: "27 Jun 19:45" },
    { id: 69, local: "Colombia", visita: "Portugal", fecha: "27 Jun 17:10" },
    { id: 70, local: "RD Congo", visita: "Uzbekistán", fecha: "27 Jun 17:10" },
    { id: 71, local: "Panamá", visita: "Inglaterra", fecha: "27 Jun 14:40" },
    { id: 72, local: "Croacia", visita: "Ghana", fecha: "27 Jun 14:40" }
  ];

  const banderas = {
    "México": "🇲🇽", "Sudáfrica": "🇿🇦", "Corea del Sur": "🇰🇷", "República Checa": "🇨🇿",
    "Canadá": "🇨🇦", "Bosnia y Herzegovina": "🇧🇦", "Estados Unidos": "🇺🇸", "Paraguay": "🇵🇾",
    "Catar": "🇶🇦", "Suiza": "🇨🇭", "Brasil": "🇧🇷", "Marruecos": "🇲🇦", "Haití": "🇭🇹", 
    "Escocia": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "Australia": "🇦🇺", "Turquía": "🇹🇷", "Alemania": "🇩🇪", "Curazao": "🇨🇼",
    "Países Bajos": "🇳🇱", "Japón": "🇯🇵", "Costa de Marfil": "🇨🇮", "Ecuador": "🇪🇨", 
    "Suecia": "🇸🇪", "Túnez": "🇹🇳", "Bélgica": "🇧🇪", "Egipto": "🇪🇬", "Irán": "🇮🇷", 
    "Nueva Zelanda": "🇳🇿", "Arabia Saudita": "🇸🇦", "Uruguay": "🇺🇾", "España": "🇪🇸", 
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
    { id: 'tsuki', nombre: 'Tsuki' }
  ];

  const diccionariosPronosticos = {
    alberto_j: { 1: "2 - 1", 2: "1 - 1", 3: "1 - 2", 4: "2 - 2", 5: "1 - 0", 6: "3 - 0", 7: "1 - 3", 8: "2 - 0", 9: "3 - 0", 10: "3 - 1", 11: "0 - 2", 12: "1 - 0", 13: "2 - 0", 14: "2 - 0", 15: "1 - 3", 16: "1 - 1", 17: "3 - 0", 18: "1 - 2", 19: "2 - 0", 20: "0 - 0", 21: "3 - 0", 22: "1 - 1", 23: "2 - 1", 24: "1 - 2", 25: "1 - 1", 26: "2 - 1", 27: "2 - 1", 28: "1 - 1", 29: "2 - 1", 30: "2 - 2", 31: "4 - 0", 32: "2 - 3", 33: "2 - 0", 34: "4 - 0", 35: "2 - 0", 36: "1 - 1", 37: "3 - 1", 38: "2 - 0", 39: "4 - 0", 40: "1 - 2", 41: "3 - 1", 42: "3 - 0", 43: "2 - 1", 44: "0 - 0", 45: "2 - 0", 46: "1 - 0", 47: "1 - 3", 48: "2 - 0", 49: "1 - 3", 50: "2 - 2", 51: "1 - 2", 52: "2 - 1", 53: "1 - 2", 54: "1 - 1", 55: "0 - 0", 56: "1 - 3", 57: "2 - 2", 58: "1 - 2", 59: "1 - 1", 60: "2 - 0", 61: "2 - 3", 62: "1 - 1", 63: "0 - 0", 64: "1 - 2", 65: "1 - 0", 66: "0 - 2", 67: "0 - 2", 68: "3 - 1", 69: "1 - 2", 70: "0 - 0", 71: "1 - 1", 72: "0 - 2" },
    dolores: { 1: "3 - 2", 2: "2 - 2", 3: "0 - 3", 4: "1 - 1", 5: "0 - 2", 6: "3 - 1", 7: "0 - 3", 8: "1 - 3", 9: "4 - 0", 10: "3 - 0", 11: "0 - 3", 12: "1 - 0", 13: "4 - 0", 14: "1 - 0", 15: "1 - 1", 16: "1 - 1", 17: "3 - 0", 18: "0 - 2", 19: "4 - 0", 20: "0 - 0", 21: "3 - 0", 22: "2 - 2", 23: "1 - 1", 24: "1 - 2", 25: "0 - 0", 26: "1 - 2", 27: "1 - 0", 28: "3 - 2", 29: "2 - 0", 30: "1 - 0", 31: "3 - 0", 32: "1 - 1", 33: "2 - 0", 34: "3 - 0", 35: "2 - 0", 36: "0 - 1", 37: "2 - 0", 38: "1 - 0", 39: "2 - 1", 40: "1 - 1", 41: "3 - 0", 42: "3 - 1", 43: "1 - 1", 44: "1 - 1", 45: "2 - 0", 46: "4 - 0", 47: "1 - 3", 48: "1 - 0", 49: "0 - 0", 50: "0 - 0", 51: "0 - 2", 52: "1 - 1", 53: "1 - 2", 54: "1 - 1", 55: "2 - 2", 56: "2 - 1", 57: "1 - 1", 58: "0 - 5", 59: "1 - 3", 60: "2 - 1", 61: "1 - 2", 62: "1 - 1", 63: "0 - 0", 64: "0 - 3", 65: "1 - 1", 66: "0 - 1", 67: "0 - 3", 68: "4 - 0", 69: "0 - 2", 70: "1 - 1", 71: "0 - 0", 72: "0 - 5" },
    leslie: { 1: "2 - 1", 2: "1 - 1", 3: "1 - 1", 4: "0 - 1", 5: "0 - 0", 6: "2 - 0", 7: "0 - 1", 8: "1 - 1", 9: "3 - 0", 10: "2 - 1", 11: "0 - 1", 12: "1 - 0", 13: "3 - 0", 14: "1 - 1", 15: "0 - 2", 16: "0 - 1", 17: "3 - 0", 18: "1 - 1", 19: "3 - 0", 20: "0 - 0", 21: "4 - 0", 22: "2 - 0", 23: "1 - 1", 24: "0 - 2", 25: "0 - 1", 26: "2 - 2", 27: "1 - 1", 28: "2 - 3", 29: "2 - 1", 30: "1 - 1", 31: "4 - 1", 32: "2 - 2", 33: "3 - 2", 34: "4 - 0", 35: "1 - 0", 36: "0 - 3", 37: "3 - 0", 38: "1 - 0", 39: "4 - 0", 40: "1 - 1", 41: "4 - 0", 42: "4 - 0", 43: "1 - 0", 44: "1 - 1", 45: "4 - 0", 46: "4 - 0", 47: "1 - 2", 48: "2 - 0", 49: "1 - 1", 50: "1 - 1", 51: "1 - 3", 52: "1 - 2", 53: "1 - 1", 54: "1 - 2", 55: "2 - 2", 56: "0 - 3", 57: "2 - 1", 58: "0 - 2", 59: "0 - 1", 60: "2 - 1", 61: "1 - 3", 62: "1 - 1", 63: "0 - 1", 64: "1 - 3", 65: "1 - 0", 66: "1 - 2", 67: "1 - 3", 68: "0 - 0", 69: "0 - 3", 70: "1 - 2", 71: "0 - 2", 72: "1 - 3" },
    javier: { 1: "2 - 0", 2: "1 - 1", 3: "1 - 0", 4: "2 - 1", 5: "2 - 2", 6: "4 - 0", 7: "0 - 2", 8: "1 - 1", 9: "3 - 0", 10: "2 - 0", 11: "1 - 1", 12: "1 - 0", 13: "5 - 0", 14: "2 - 1", 15: "0 - 1", 16: "1 - 1", 17: "3 - 0", 18: "0 - 2", 19: "4 - 0", 20: "1 - 0", 21: "4 - 0", 22: "3 - 1", 23: "0 - 0", 24: "0 - 2", 25: "1 - 0", 26: "1 - 0", 27: "2 - 2", 28: "2 - 1", 29: "2 - 1", 30: "1 - 0", 31: "5 - 0", 32: "0 - 1", 33: "2 - 1", 34: "4 - 0", 35: "1 - 0", 36: "0 - 1", 37: "5 - 1", 38: "2 - 0", 39: "2 - 0", 40: "1 - 0", 41: "3 - 1", 42: "3 - 0", 43: "2 - 1", 44: "1 - 1", 45: "5 - 0", 46: "3 - 0", 47: "1 - 2", 48: "2 - 0", 49: "2 - 2", 50: "0 - 1", 51: "0 - 4", 52: "0 - 0", 53: "1 - 1", 54: "1 - 2", 55: "2 - 2", 56: "0 - 3", 57: "2 - 1", 58: "0 - 1", 59: "0 - 3", 60: "2 - 1", 61: "2 - 3", 62: "1 - 1", 63: "0 - 1", 64: "2 - 4", 65: "1 - 0", 66: "1 - 2", 67: "0 - 2", 68: "3 - 0", 69: "2 - 3", 70: "0 - 0", 71: "0 - 1", 72: "0 - 4" },
    betin: { 1: "2 - 0", 2: "1 - 2", 3: "1 - 1", 4: "3 - 1", 5: "0 - 3", 6: "1 - 2", 7: "1 - 4", 8: "2 - 2", 9: "4 - 0", 10: "1 - 4", 11: "1 - 1", 12: "2 - 1", 13: "4 - 0", 14: "1 - 0", 15: "0 - 3", 16: "2 - 0", 17: "3 - 1", 18: "0 - 2", 19: "1 - 1", 20: "3 - 0", 21: "1 - 0", 22: "1 - 1", 23: "2 - 2", 24: "1 - 3", 25: "2 - 1", 26: "3 - 1", 27: "1 - 0", 28: "1 - 1", 29: "2 - 2", 30: "1 - 2", 31: "3 - 0", 32: "1 - 1", 33: "2 - 0", 34: "3 - 1", 35: "1 - 0", 36: "0 - 2", 37: "2 - 0", 38: "1 - 0", 39: "4 - 0", 40: "0 - 2", 41: "1 - 0", 42: "3 - 0", 43: "1 - 0", 44: "1 - 1", 45: "3 - 1", 46: "2 - 2", 47: "1 - 3", 48: "1 - 1", 49: "2 - 1", 50: "1 - 1", 51: "2 - 2", 52: "3 - 2", 53: "2 - 1", 54: "1 - 2", 55: "1 - 2", 56: "1 - 3", 57: "1 - 1", 58: "1 - 3", 59: "1 - 3", 60: "2 - 2", 61: "1 - 1", 62: "0 - 0", 63: "0 - 1", 64: "2 - 2", 65: "0 - 0", 66: "0 - 3", 67: "0 - 3", 68: "1 - 0", 69: "1 - 2", 70: "1 - 1", 71: "1 - 1", 72: "0 - 3" },
    fernanda: { 1: "3 - 1", 2: "2 - 1", 3: "1 - 1", 4: "1 - 0", 5: "0 - 2", 6: "2 - 1", 7: "1 - 3", 8: "1 - 2", 9: "4 - 0", 10: "2 - 3", 11: "1 - 1", 12: "2 - 0", 13: "3 - 0", 14: "1 - 1", 15: "0 - 3", 16: "1 - 1", 17: "2 - 0", 18: "0 - 2", 19: "3 - 1", 20: "1 - 0", 21: "2 - 1", 22: "2 - 0", 23: "1 - 1", 24: "0 - 3", 25: "2 - 1", 26: "2 - 0", 27: "3 - 1", 28: "2 - 1", 29: "1 - 0", 30: "0 - 2", 31: "4 - 0", 32: "1 - 1", 33: "2 - 0", 34: "2 - 0", 35: "2 - 0", 36: "0 - 2", 37: "3 - 0", 38: "2 - 0", 39: "2 - 0", 40: "1 - 2", 41: "2 - 1", 42: "4 - 0", 43: "1 - 3", 44: "1 - 2", 45: "3 - 0", 46: "3 - 0", 47: "0 - 1", 48: "2 - 1", 49: "1 - 1", 50: "1 - 1", 51: "0 - 3", 52: "2 - 0", 53: "1 - 2", 54: "1 - 2", 55: "0 - 2", 56: "1 - 2", 57: "1 - 1", 58: "0 - 2", 59: "2 - 2", 60: "1 - 0", 61: "1 - 2", 62: "1 - 0", 63: "1 - 1", 64: "2 - 1", 65: "0 - 1", 66: "0 - 3", 67: "0 - 3", 68: "2 - 0", 69: "2 - 2", 70: "1 - 1", 71: "1 - 2", 72: "0 - 3" },
    carmela: { 1: "3 - 0", 2: "1 - 0", 3: "2 - 1", 4: "2 - 1", 5: "3 - 1", 6: "2 - 0", 7: "1 - 1", 8: "1 - 1", 9: "4 - 0", 10: "1 - 3", 11: "0 - 2", 12: "1 - 1", 13: "5 - 0", 14: "1 - 4", 15: "2 - 3", 16: "1 - 2", 17: "3 - 1", 18: "2 - 2", 19: "4 - 1", 20: "1 - 0", 21: "3 - 1", 22: "3 - 0", 23: "0 - 1", 24: "2 - 3", 25: "1 - 1", 26: "3 - 2", 27: "2 - 1", 28: "2 - 1", 29: "3 - 1", 30: "3 - 1", 31: "5 - 2", 32: "3 - 1", 33: "2 - 2", 34: "5 - 0", 35: "3 - 0", 36: "0 - 5", 37: "4 - 1", 38: "3 - 2", 39: "3 - 0", 40: "1 - 3", 41: "5 - 1", 42: "4 - 1", 43: "3 - 0", 44: "2 - 1", 45: "3 - 0", 46: "4 - 0", 47: "0 - 1", 48: "3 - 0", 49: "0 - 3", 50: "1 - 3", 51: "3 - 5", 52: "3 - 1", 53: "1 - 2", 54: "2 - 1", 55: "1 - 1", 56: "2 - 5", 57: "5 - 1", 58: "1 - 1", 59: "1 - 3", 60: "2 - 0", 61: "1 - 2", 62: "0 - 3", 63: "0 - 2", 64: "4 - 4", 65: "3 - 1", 66: "2 - 2", 67: "0 - 3", 68: "1 - 1", 69: "2 - 2", 70: "1 - 0", 71: "0 - 1", 72: "0 - 3" },
    vicente: { 1: "2 - 1", 2: "0 - 0", 3: "1 - 0", 4: "3 - 1", 5: "0 - 1", 6: "4 - 1", 7: "1 - 2", 8: "2 - 3", 9: "3 - 0", 10: "1 - 0", 11: "1 - 1", 12: "1 - 0", 13: "5 - 0", 14: "3 - 0", 15: "1 - 3", 16: "2 - 1", 17: "2 - 1", 18: "0 - 1", 19: "3 - 0", 20: "2 - 0", 21: "4 - 0", 22: "1 - 0", 23: "2 - 1", 24: "0 - 3", 25: "2 - 1", 26: "2 - 1", 27: "1 - 0", 28: "2 - 1", 29: "3 - 1", 30: "2 - 2", 31: "3 - 0", 32: "2 - 1", 33: "3 - 2", 34: "3 - 0", 35: "2 - 0", 36: "1 - 2", 37: "2 - 0", 38: "1 - 0", 39: "3 - 0", 40: "1 - 0", 41: "6 - 0", 42: "4 - 0", 43: "2 - 2", 44: "1 - 2", 45: "4 - 0", 46: "4 - 0", 47: "1 - 5", 48: "3 - 0", 49: "1 - 2", 50: "0 - 0", 51: "0 - 4", 52: "0 - 1", 53: "1 - 3", 54: "1 - 2", 55: "0 - 1", 56: "1 - 2", 57: "1 - 0", 58: "0 - 1", 59: "1 - 1", 60: "2 - 1", 61: "0 - 2", 62: "1 - 0", 63: "1 - 1", 64: "1 - 1", 65: "1 - 1", 66: "1 - 2", 67: "0 - 3", 68: "3 - 0", 69: "1 - 2", 70: "2 - 1", 71: "1 - 1", 72: "0 - 2" },
    estela: { 1: "2 - 0", 2: "1 - 1", 3: "2 - 1", 4: "2 - 1", 5: "1 - 2", 6: "3 - 1", 7: "1 - 2", 8: "1 - 1", 9: "3 - 0", 10: "2 - 1", 11: "1 - 1", 12: "1 - 0", 13: "3 - 0", 14: "2 - 0", 15: "1 - 2", 16: "0 - 2", 17: "2 - 0", 18: "0 - 2", 19: "3 - 0", 20: "2 - 1", 21: "2 - 0", 22: "2 - 1", 23: "1 - 2", 24: "1 - 2", 25: "2 - 1", 26: "2 - 1", 27: "2 - 1", 28: "1 - 1", 29: "2 - 0", 30: "1 - 1", 31: "4 - 1", 32: "2 - 1", 33: "1 - 1", 34: "2 - 0", 35: "3 - 0", 36: "0 - 2", 37: "2 - 0", 38: "3 - 1", 39: "3 - 0", 40: "1 - 1", 41: "2 - 1", 42: "2 - 1", 43: "1 - 1", 44: "1 - 1", 45: "2 - 1", 46: "1 - 0", 47: "1 - 1", 48: "2 - 0", 49: "2 - 2", 50: "2 - 1", 51: "0 - 2", 52: "2 - 1", 53: "1 - 3", 54: "1 - 2", 55: "0 - 2", 56: "1 - 2", 57: "1 - 1", 58: "0 - 2", 59: "1 - 1", 60: "2 - 0", 61: "1 - 3", 62: "2 - 0", 63: "0 - 3", 64: "1 - 2", 65: "2 - 1", 66: "1 - 1", 67: "1 - 3", 68: "2 - 1", 69: "1 - 2", 70: "1 - 2", 71: "1 - 2", 72: "1 - 3" },
    ulises: { 1: "2 - 1", 2: "2 - 0", 3: "1 - 0", 4: "3 - 1", 5: "0 - 2", 6: "3 - 0", 7: "1 - 1", 8: "0 - 1", 9: "3 - 0", 10: "2 - 1", 11: "0 - 2", 12: "1 - 0", 13: "3 - 0", 14: "2 - 1", 15: "1 - 1", 16: "1 - 0", 17: "1 - 1", 18: "0 - 0", 19: "2 - 1", 20: "2 - 0", 21: "3 - 0", 22: "2 - 1", 23: "0 - 0", 24: "0 - 2", 25: "1 - 0", 26: "2 - 0", 27: "2 - 0", 28: "1 - 1", 29: "2 - 0", 30: "1 - 2", 31: "3 - 0", 32: "1 - 0", 33: "2 - 0", 34: "2 - 0", 35: "2 - 0", 36: "0 - 2", 37: "2 - 0", 38: "1 - 0", 39: "1 - 1", 40: "0 - 0", 41: "2 - 1", 42: "3 - 0", 43: "1 - 1", 44: "1 - 1", 45: "3 - 0", 46: "2 - 0", 47: "1 - 1", 48: "1 - 1", 49: "1 - 1", 50: "1 - 1", 51: "0 - 2", 52: "2 - 0", 53: "1 - 2", 54: "1 - 2", 55: "1 - 1", 56: "1 - 2", 57: "1 - 0", 58: "0 - 2", 59: "2 - 2", 60: "1 - 1", 61: "0 - 2", 62: "2 - 1", 63: "0 - 0", 64: "1 - 3", 65: "0 - 1", 66: "0 - 2", 67: "0 - 3", 68: "2 - 1", 69: "1 - 1", 70: "1 - 1", 71: "1 - 2", 72: "0 - 3" },
    nayeli: { 1: "2 - 1", 2: "2 - 0", 3: "1 - 0", 4: "2 - 1", 5: "0 - 1", 6: "2 - 1", 7: "0 - 2", 8: "1 - 1", 9: "2 - 0", 10: "2 - 2", 11: "1 - 1", 12: "1 - 0", 13: "2 - 1", 14: "1 - 1", 15: "0 - 2", 16: "0 - 1", 17: "2 - 0", 18: "0 - 0", 19: "3 - 0", 20: "2 - 1", 21: "2 - 0", 22: "2 - 2", 23: "1 - 1", 24: "0 - 1", 25: "1 - 1", 26: "1 - 0", 27: "1 - 1", 28: "2 - 1", 29: "2 - 0", 30: "2 - 1", 31: "2 - 0", 32: "1 - 2", 33: "2 - 2", 34: "3 - 0", 35: "1 - 1", 36: "0 - 1", 37: "3 - 1", 38: "1 - 1", 39: "3 - 0", 40: "1 - 0", 41: "3 - 1", 42: "3 - 0", 43: "2 - 2", 44: "1 - 1", 45: "2 - 0", 46: "3 - 0", 47: "1 - 2", 48: "2 - 0", 49: "2 - 1", 50: "0 - 1", 51: "2 - 1", 52: "0 - 0", 53: "2 - 1", 54: "1 - 0", 55: "1 - 0", 56: "2 - 2", 57: "1 - 0", 58: "1 - 0", 59: "2 - 1", 60: "1 - 1", 61: "1 - 2", 62: "0 - 0", 63: "1 - 1", 64: "3 - 2", 65: "1 - 1", 66: "0 - 0", 67: "1 - 3", 68: "2 - 0", 69: "1 - 2", 70: "1 - 1", 71: "0 - 1", 72: "0 - 2" },
    mont: { 1: "1 - 0", 2: "2 - 1", 3: "2 - 1", 4: "2 - 1", 5: "0 - 2", 6: "1 - 1", 7: "0 - 2", 8: "1 - 2", 9: "2 - 0", 10: "2 - 2", 11: "1 - 2", 12: "2 - 1", 13: "3 - 1", 14: "3 - 1", 15: "0 - 2", 16: "1 - 0", 17: "2 - 0", 18: "0 - 2", 19: "2 - 0", 20: "3 - 1", 21: "2 - 0", 22: "2 - 1", 23: "2 - 2", 24: "0 - 3", 25: "2 - 1", 26: "1 - 1", 27: "3 - 1", 28: "1 - 2", 29: "1 - 0", 30: "1 - 1", 31: "3 - 0", 32: "0 - 1", 33: "1 - 2", 34: "2 - 1", 35: "1 - 0", 36: "2 - 2", 37: "2 - 0", 38: "2 - 1", 39: "1 - 0", 40: "1 - 2", 41: "2 - 1", 42: "4 - 0", 43: "1 - 2", 44: "0 - 2", 45: "3 - 0", 46: "1 - 1", 47: "1 - 3", 48: "2 - 0", 49: "2 - 1", 50: "2 - 0", 51: "0 - 1", 52: "2 - 0", 53: "1 - 1", 54: "1 - 2", 55: "0 - 2", 56: "0 - 3", 57: "3 - 1", 58: "0 - 2", 59: "2 - 1", 60: "1 - 1", 61: "2 - 2", 62: "2 - 0", 63: "0 - 1", 64: "1 - 2", 65: "2 - 0", 66: "0 - 2", 67: "0 - 3", 68: "2 - 1", 69: "1 - 2", 70: "1 - 1", 71: "0 - 1", 72: "1 - 4" },
    axel: { 1: "2 - 0", 2: "1 - 0", 3: "2 - 0", 4: "2 - 0", 5: "0 - 3", 6: "2 - 2", 7: "0 - 3", 8: "1 - 1", 9: "3 - 1", 10: "0 - 1", 11: "1 - 1", 12: "2 - 1", 13: "3 - 0", 14: "2 - 1", 15: "0 - 1", 16: "0 - 0", 17: "3 - 1", 18: "0 - 4", 19: "2 - 1", 20: "2 - 0", 21: "3 - 0", 22: "1 - 0", 23: "1 - 1", 24: "0 - 2", 25: "1 - 0", 26: "0 - 1", 27: "2 - 0", 28: "3 - 1", 29: "2 - 1", 30: "0 - 2", 31: "4 - 0", 32: "0 - 0", 33: "2 - 1", 34: "2 - 0", 35: "2 - 1", 36: "0 - 2", 37: "3 - 0", 38: "3 - 1", 39: "1 - 1", 40: "0 - 2", 41: "2 - 1", 42: "3 - 0", 43: "2 - 1", 44: "0 - 1", 45: "2 - 0", 46: "1 - 0", 47: "1 - 2", 48: "1 - 0", 49: "2 - 2", 50: "1 - 0", 51: "0 - 2", 52: "3 - 0", 53: "1 - 2", 54: "1 - 3", 55: "1 - 0", 56: "1 - 2", 57: "2 - 0", 58: "1 - 1", 59: "2 - 2", 60: "1 - 0", 61: "1 - 2", 62: "2 - 1", 63: "1 - 0", 64: "0 - 2", 65: "1 - 0", 66: "0 - 3", 67: "1 - 2", 68: "1 - 2", 69: "0 - 2", 70: "0 - 0", 71: "2 - 0", 72: "1 - 3" },
    jose: { 1: "0 - 1", 2: "1 - 1", 3: "2 - 1", 4: "2 - 1", 5: "0 - 0", 6: "2 - 0", 7: "0 - 4", 8: "1 - 2", 9: "3 - 0", 10: "0 - 1", 11: "2 - 1", 12: "2 - 2", 13: "5 - 0", 14: "1 - 1", 15: "0 - 3", 16: "0 - 0", 17: "2 - 0", 18: "1 - 2", 19: "3 - 0", 20: "1 - 0", 21: "2 - 0", 22: "3 - 2", 23: "2 - 1", 24: "1 - 3", 25: "1 - 1", 26: "1 - 0", 27: "2 - 0", 28: "3 - 2", 29: "2 - 1", 30: "1 - 0", 31: "3 - 0", 32: "1 - 2", 33: "2 - 2", 34: "4 - 0", 35: "1 - 0", 36: "0 - 2", 37: "2 - 0", 38: "2 - 0", 39: "2 - 0", 40: "1 - 1", 41: "3 - 1", 42: "2 - 0", 43: "1 - 0", 44: "1 - 1", 45: "3 - 0", 46: "2 - 0", 47: "1 - 3", 48: "1 - 0", 49: "2 - 2", 50: "1 - 0", 51: "1 - 3", 52: "3 - 0", 53: "0 - 2", 54: "1 - 2", 55: "0 - 3", 56: "1 - 3", 57: "3 - 2", 58: "1 - 2", 59: "0 - 2", 60: "1 - 0", 61: "1 - 2", 62: "1 - 1", 63: "0 - 2", 64: "2 - 3", 65: "0 - 0", 66: "0 - 2", 67: "0 - 3", 68: "1 - 2", 69: "1 - 2", 70: "2 - 0", 71: "1 - 1", 72: "0 - 2" },
    adrian: { 1: "2 - 0", 2: "1 - 1", 3: "0 - 1", 4: "2 - 2", 5: "0 - 2", 6: "1 - 1", 7: "1 - 3", 8: "1 - 1", 9: "2 - 0", 10: "1 - 2", 11: "0 - 1", 12: "2 - 1", 13: "3 - 0", 14: "2 - 0", 15: "0 - 1", 16: "1 - 2", 17: "3 - 1", 18: "1 - 3", 19: "2 - 1", 20: "1 - 0", 21: "2 - 0", 22: "1 - 1", 23: "1 - 1", 24: "0 - 3", 25: "1 - 1", 26: "1 - 2", 27: "2 - 1", 28: "2 - 2", 29: "2 - 0", 30: "2 - 2", 31: "3 - 1", 32: "1 - 2", 33: "1 - 1", 34: "2 - 1", 35: "2 - 0", 36: "1 - 2", 37: "3 - 0", 38: "2 - 0", 39: "2 - 0", 40: "1 - 1", 41: "1 - 0", 42: "3 - 0", 43: "1 - 1", 44: "1 - 1", 45: "3 - 0", 46: "2 - 2", 47: "1 - 2", 48: "3 - 1", 49: "1 - 1", 50: "2 - 1", 51: "1 - 2", 52: "3 - 0", 53: "1 - 2", 54: "0 - 1", 55: "0 - 0", 56: "2 - 1", 57: "2 - 1", 58: "1 - 1", 59: "0 - 1", 60: "1 - 0", 61: "1 - 2", 62: "2 - 1", 63: "0 - 0", 64: "1 - 1", 65: "3 - 2", 66: "0 - 2", 67: "2 - 4", 68: "1 - 1", 69: "2 - 1", 70: "0 - 0", 71: "2 - 2", 72: "1 - 3" },
    chencho: { 1: "2 - 1", 2: "2 - 0", 3: "0 - 1", 4: "1 - 0", 5: "2 - 0", 6: "2 - 0", 7: "0 - 2", 8: "2 - 1", 9: "3 - 0", 10: "1 - 2", 11: "1 - 1", 12: "1 - 0", 13: "2 - 1", 14: "2 - 0", 15: "0 - 2", 16: "0 - 0", 17: "2 - 1", 18: "0 - 2", 19: "2 - 0", 20: "1 - 0", 21: "2 - 0", 22: "2 - 2", 23: "1 - 1", 24: "0 - 2", 25: "2 - 0", 26: "1 - 0", 27: "1 - 0", 28: "2 - 0", 29: "2 - 0", 30: "1 - 2", 31: "2 - 0", 32: "1 - 1", 33: "2 - 0", 34: "2 - 0", 35: "2 - 0", 36: "1 - 2", 37: "1 - 0", 38: "2 - 1", 39: "2 - 1", 40: "1 - 0", 41: "2 - 2", 42: "2 - 1", 43: "2 - 0", 44: "0 - 1", 45: "2 - 0", 46: "3 - 0", 47: "0 - 2", 48: "2 - 0", 49: "2 - 1", 50: "0 - 1", 51: "1 - 2", 52: "2 - 1", 53: "0 - 1", 54: "1 - 1", 55: "0 - 1", 56: "1 - 2", 57: "0 - 1", 58: "1 - 0", 59: "2 - 0", 60: "1 - 2", 61: "0 - 0", 62: "0 - 1", 63: "1 - 2", 64: "0 - 0", 65: "0 - 0", 66: "0 - 1", 67: "1 - 2", 68: "1 - 0", 69: "1 - 2", 70: "0 - 0", 71: "1 - 2", 72: "0 - 1" },
    tsuki: { 1: "2 - 0", 2: "2 - 1", 3: "1 - 1", 4: "2 - 0", 5: "0 - 2", 6: "2 - 1", 7: "0 - 2", 8: "1 - 2", 9: "4 - 0", 10: "3 - 0", 11: "2 - 1", 12: "0 - 2", 13: "3 - 0", 14: "3 - 1", 15: "1 - 2", 16: "1 - 0", 17: "2 - 0", 18: "0 - 3", 19: "3 - 0", 20: "2 - 1", 21: "3 - 0", 22: "2 - 1", 23: "2 - 0", 24: "0 - 3", 25: "1 - 2", 26: "2 - 0", 27: "2 - 1", 28: "1 - 2", 29: "2 - 0", 30: "1 - 1", 31: "3 - 0", 32: "3 - 1", 33: "1 - 1", 34: "2 - 1", 35: "5 - 0", 36: "0 - 2", 37: "2 - 1", 38: "3 - 1", 39: "3 - 0", 40: "0 - 2", 41: "2 - 0", 42: "3 - 0", 43: "2 - 1", 44: "0 - 2", 45: "2 - 1", 46: "2 - 1", 47: "0 - 3", 48: "2 - 0", 49: "1 - 0", 50: "3 - 1", 51: "0 - 1", 52: "1 - 4", 53: "0 - 0", 54: "2 - 0", 55: "3 - 0", 56: "3 - 0", 57: "1 - 2", 58: "0 - 0", 59: "3 - 1", 60: "1 - 0", 61: "2 - 1", 62: "1 - 0", 63: "0 - 2", 64: "1 - 1", 65: "1 - 1", 66: "0 - 2", 67: "2 - 0", 68: "3 - 1", 69: "1 - 1", 70: "2 - 0", 71: "2 - 1", 72: "0 - 4" }
  };

  const resultadosOficiales = {};

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
    <div className="container">
      <header className="header-vino" style={{textAlign: 'center', padding: '20px'}}>
        <h1>QUINIELA 2026</h1>
        <div className="card">
          <p>{marcadorMundial.partido}</p>
          <h2 style={{color: 'var(--accent)'}}>{marcadorMundial.resultado}</h2>
        </div>
      </header>

      <nav className="tabs" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <button className={activeTab === 'pronosticar' ? 'active' : ''} onClick={() => setActiveTab('pronosticar')}>⚽ Pronósticos</button>
        <button className={activeTab === 'anteriores' ? 'active' : ''} onClick={() => setActiveTab('anteriores')}>📅 Resultados</button>
        <button className={activeTab === 'tabla' ? 'active' : ''} onClick={() => setActiveTab('tabla')}>🏆 Ranking</button>
      </nav>

      {/* PESTAÑA: PRONÓSTICOS */}
      {activeTab === 'pronosticar' && (
        <div className="card">
          {/* Carrusel de botones de participantes */}
         {/* Contenedor mejorado de participantes */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', /* IMPORTANTE: Permite que bajen de renglón */
            justifyContent: 'center', /* Centra los botones en el espacio disponible */
            gap: '8px', 
            marginBottom: '25px',
            padding: '0 10px'
          }}>
            
            {participantes.map(participante => (
              <button 
                key={participante.id}
                onClick={() => setPronosticadorActivo(participante.id)} 
                style={{ 
                  padding: '8px 16px', 
                  fontSize: '0.9rem', /* Un poco más compacto */
                  background: pronosticadorActivo === participante.id ? 'var(--accent)' : '#2a2a2a', 
                  color: pronosticadorActivo === participante.id ? '#000' : '#fff', 
                  border: pronosticadorActivo === participante.id ? '2px solid transparent' : '2px solid #444', 
                  borderRadius: '20px', 
                  cursor: 'pointer', 
                  fontWeight: 'bold', 
                  whiteSpace: 'nowrap', 
                  transition: 'all 0.3s ease',
                  boxShadow: pronosticadorActivo === participante.id ? '0 4px 10px rgba(0, 255, 136, 0.3)' : 'none'
                }}>
                {participante.nombre}
              </button>
            ))}
          </div>

          <h3 style={{textAlign: 'center', marginBottom: '20px', color: 'var(--accent)'}}>
            Pronósticos
          </h3>

          {/* Lista de Partidos con Banderas */}
          {partidos.map(p => {
            const marcadorMostrado = diccionariosPronosticos[pronosticadorActivo]?.[p.id] || "-";
            return (
              <div key={p.id} className="fila-partido" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 10px', borderBottom: '1px solid #333'}}>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#888' }}>{p.fecha}</span>
                  <span style={{ fontSize: '1rem' }}>
                    {banderas[p.local] || '🏳️'} <b>{p.local}</b> vs <b>{p.visita}</b> {banderas[p.visita] || '🏳️'}
                  </span>
                </span>
                <div style={{textAlign: 'right'}}>
                  <span style={{display: 'block', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--accent)'}}>{marcadorMostrado}</span>
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
             const resultadoOficial = resultadosOficiales[p.id];
             return (
               <div key={p.id} className="fila-partido" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 10px', borderBottom: '1px solid #333'}}>
                 <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                   <span style={{ fontSize: '0.8rem', color: '#888' }}>{p.fecha}</span>
                   <span style={{ fontSize: '1rem' }}>
                     {banderas[p.local] || '🏳️'} <b>{p.local}</b> vs <b>{p.visita}</b> {banderas[p.visita] || '🏳️'}
                   </span>
                 </span>
                 <div style={{textAlign: 'center'}}>
                   <span style={{display: 'block', fontWeight: 'bold', fontSize: '1.2rem'}}>
                     {resultadoOficial ? resultadoOficial : "0 - 0"}
                   </span>
                   <span style={{fontSize: '10px', fontWeight: 'bold', color: resultadoOficial ? '#28a745' : 'var(--text-muted)'}}>
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