class Veicolo {
  protected String marca;
  public Veicolo(String marca) { this.marca = marca; }
  public void start() { System.out.println(marca + " si avvia."); }
}

class Automobile extends Veicolo {
  private int porte;
  public Automobile(String marca, int porte) { super(marca); this.porte = porte; }
  @Override
  public void start() { System.out.println("L'automobile " + marca + " con " + porte + " porte accende il motore."); }
}

class Bicicletta extends Veicolo {
  public Bicicletta(String marca) { super(marca); }
  @Override
  public void start() { System.out.println("La bicicletta " + marca + " inizia a pedalare."); }
}
