class Base {
  int valore = 10;
  void stampa() {
    System.out.println("Metodo stampa() della classe Base, valore: " + valore);
  }
}

class Derivata extends Base {
  int valore = 20; // Nasconde 'valore' della superclasse
  void stampa() {
    super.stampa(); // Chiama il metodo stampa() della superclasse
    System.out.println("Metodo stampa() della classe Derivata, valore: " + valore);
    System.out.println("Valore della superclasse: " + super.valore);
  }
}

Derivata d = new Derivata();
d.stampa();
