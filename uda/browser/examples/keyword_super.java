class Genitore {
  String messaggio;
  public Genitore(String msg) {
    this.messaggio = msg;
    System.out.println("Costruttore Genitore: " + msg);
  }
}

class Figlio extends Genitore {
  public Figlio(String msgFiglio, String msgGenitore) {
    super(msgGenitore); // Chiama il costruttore di Genitore
    System.out.println("Costruttore Figlio: " + msgFiglio);
  }
}

// Utilizzo
Figlio f = new Figlio("Ciao da Figlio", "Ciao da Genitore");
