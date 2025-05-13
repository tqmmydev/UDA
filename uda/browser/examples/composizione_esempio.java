// Ereditarietà: SBAGLIATO se Persona non è un tipo di Lavoro
// class Persona extends Lavoro { ... }

// Composizione: CORRETTO, Persona HA UN Lavoro
class Motore { /* ... */ }
class Automobile {
    private Motore motore; // Automobile HA UN Motore
    public Automobile() {
        this.motore = new Motore();
    }
}
