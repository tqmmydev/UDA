class Uccello {
  public void vola() {
    System.out.println("L'uccello vola.");
  }
}

class Pinguino extends Uccello {
  // @Override // Se scrivessi "volare()" invece di "vola()",
              // l'annotazione @Override genererebbe un errore di compilazione.
  public void vola() { // Corretto override
    System.out.println("Il pinguino non vola, nuota!");
  }
  /*
  @Override // ERRORE DI COMPILAZIONE!
  public void volareConErrore() { // Nome diverso, non è override
    System.out.println("Non sovrascrive nulla!");
  }
  */
}
