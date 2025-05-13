// Definizione della Superclasse
class Veicolo {
  String marca;
  void muovi() {
    System.out.println("Il veicolo si muove.");
  }
}

// Definizione della Sottoclasse che eredita da Veicolo
class Automobile extends Veicolo {
  // Automobile eredita 'marca' e 'muovi()'
  // Può aggiungere attributi e metodi specifici
  int numeroPorte;
  void apriBagagliaio() {
    System.out.println("Bagagliaio aperto.");
  }
}
