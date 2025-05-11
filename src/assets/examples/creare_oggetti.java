public class Zoo {
  public static void main(String[] args) {
    Animale animaleGenerico = new Animale("Creatura", 5);
    animaleGenerico.mangia(); // Output: Creatura sta mangiando.
    animaleGenerico.emettiSuono(); // Output: L'animale emette un suono generico.

    Cane fido = new Cane("Fido", 3, "Labrador");
    fido.mangia(); // Metodo ereditato: Fido sta mangiando.
    fido.emettiSuono(); // Metodo ereditato (non sovrascritto qui): L'animale emette un suono generico.
    fido.abbaia(); // Metodo specifico: Fido (razza Labrador) fa: Bau bau!
  }
}
