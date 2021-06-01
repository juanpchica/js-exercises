function cuandoVacunarse(edad, ocup, personasCasa) {
  if (edad > 80 || ocup === "Empleado" || personasCasa >= 12) {
    return "Puede Vacunarse Enseguida";
  } else if (
    (edad > 65 && edad <= 80) ||
    ocup === "Contratista" ||
    (personasCasa >= 3 && personasCasa <= 7)
  ) {
    return "Se agendara para Julio";
  } else if (
    (edad > 40 && edad <= 65) ||
    ocup === "Pensionado" ||
    (personasCasa >= 8 && personasCasa <= 11)
  ) {
    return "Se agendara para Septiembre";
  } else if (
    (edad < 40 && edad >= 1) ||
    ocup === "Desempleado" ||
    personasCasa === 1 ||
    personasCasa === 2
  ) {
    return "Se agendara para diciembre";
  }
}

cuandoVacunarse(58, "Contratista", 2); //=
cuandoVacunarse(81, "Empleado", 5); //=
cuandoVacunarse(60, "Pensionado", 8); //=
cuandoVacunarse(25, "Desempleado", 1); //=
