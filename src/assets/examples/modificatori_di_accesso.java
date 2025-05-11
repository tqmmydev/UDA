class SuperClasse {
  public String attributoPubblico = "Pubblico";
  protected String attributoProtetto = "Protetto";
  String attributoDefault = "Default"; // package-private
  private String attributoPrivato = "Privato";

  public void mostraPrivato() { System.out.println(attributoPrivato); }
}

class SottoClasse extends SuperClasse {
  public void testAccesso() {
    System.out.println(attributoPubblico);  // OK
    System.out.println(attributoProtetto); // OK
    System.out.println(attributoDefault); // OK se SottoClasse è nello stesso package
    // System.out.println(attributoPrivato); // ERRORE: non accessibile
    mostraPrivato(); // OK, si accede tramite metodo pubblico della superclasse
  }
}
