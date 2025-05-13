class Forma {
  public void disegna() {
    System.out.println("Disegno una forma generica.");
  }
}

class Cerchio extends Forma {
  @Override // Annotazione opzionale ma raccomandata
  public void disegna() {
    System.out.println("Disegno un cerchio.");
  }
}

Forma c = new Cerchio();
c.disegna(); // Chiama il metodo della classe Cerchio
