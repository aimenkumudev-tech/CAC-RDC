// Configuration Souveraine de Supabase (Identifiants officiels de votre projet)
const SUPABASE_URL = "https://cctihlkkqwkcnckcsoqx.supabase.co";
const SUPABASE_ANON_KEY = "EyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjdGlobGtrcXdrY25ja2Nzb3F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwMzY4MzMsImV4cCI6MjA5NzYxMjgzM30.6oRqi6BThyL_J3_DvPnx22Dcs_ddSwvZD10kYaJzQQU";

// Initialisation du client de communication officiel Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Ciblage des éléments de notre contenant HTML vide
const btnActivate = document.getElementById("btn-benefit-activate");
const messageAlignement = document.getElementById("message-alignement");
const statutLiaison = document.getElementById("statut-liaison");
const fluxContenu = document.getElementById("flux-contenu");

/**
 * ARTICLES 7 & 8 — Protocole de la Boussole Sacrée (GPS)
 * Récupère les coordonnées géographiques réelles de l'appareil de l'utilisateur.
 * Si le signal est validé, le bouton central "BENEFIT ACTIVATE" est déverrouillé.
 */
function verifierAlignementGeospirituel() {
    if (!navigator.geolocation) {
        messageAlignement.textContent = "Erreur fatale : Géolocalisation non supportée par cet appareil.";
        statutLiaison.textContent = "Sécurité Compromise";
        statutLiaison.style.borderColor = "#ef4444";
        statutLiaison.style.color = "#ef4444";
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            // Mise à jour visuelle : Alignement validé
            messageAlignement.textContent = `Alignement géospirituel validé (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`;
            statutLiaison.textContent = "Liaison Sécurisée - Alignement OK";
            statutLiaison.style.borderColor = "#10b981";
            statutLiaison.style.color = "#10b981";
            
            // Déverrouillage physique du bouton central conforme à la charte
            btnActivate.disabled = false;
        },
        (error) => {
            messageAlignement.textContent = "Accès Refusé : Signal GPS obligatoire pour l'alignement des flux.";
            statutLiaison.textContent = "Liaison Interrompue";
            statutLiaison.style.borderColor = "#ef4444";
            statutLiaison.style.color = "#ef4444";
        }
    );
}

/**
 * ARTICLES 2 & 3 — Chargement et Injection du Flux Pédagogique Universel
 * Appelé lors du clic sur le bouton activé. Télécharge dynamiquement le contenu
 * depuis Supabase et l'affiche sous la structure stricte de l'Article 3.
 */
async function chargerModulesSouverains() {
    statutLiaison.textContent = "Téléchargement du flux distant...";
    fluxContenu.innerHTML = "<p>Déchiffrement des modules en cours...</p>";
    
    try {
        // Connexion à la table distante (ici nommée 'modules' selon vos directives)
        const { data: modules, error } = await supabaseClient
            .from("modules")
            .select("*");

        if (error) throw error;

        // Si la table est vide ou protégée par un verrou RLS non configuré
        if (!modules || modules.length === 0) {
            fluxContenu.innerHTML = "<p>Aucun module détecté ou accès restreint par le verrou RLS.</p>";
            statutLiaison.textContent = "Flux Vide / RLS Actif";
            return;
        }

        let htmlInjecte = "";

        // Construction dynamique du code HTML sans texte écrit en dur
        modules.forEach((module) => {
            htmlInjecte += `
                <div class="carte">
                    <h3>${module.titre || "Module CAC-LINK"}</h3>
                    <p><strong>📖 Définition :</strong> ${module.definition || "En attente d'injection..."}</p>
                    <p><strong>💡 Exemple :</strong> ${module.exemple || "En attente d'injection..."}</p>
                    <p><strong>📝 Exercice :</strong> ${module.exercice || "En attente d'injection..."}</p>
                    <p><strong>✅ Correction :</strong> ${module.correction || "En attente d'injection..."}</p>
                </div>
            `;
        });

        // Injection immédiate dans le site
        fluxContenu.innerHTML = htmlInjecte;
        statutLiaison.textContent = "Vitesse d'intelligence : Milliseconde OK";

    } catch (error) {
        console.error("Erreur de transit :", error.message);
        fluxContenu.innerHTML = `<p style="color: #ef4444;">Erreur de sécurité réseau : ${error.message}</p>`;
        statutLiaison.textContent = "Échec Transit / Verrou";
    }
}

// Déclencheur d'action sur le bouton souverain
btnActivate.addEventListener("click", chargerModulesSouverains);

// Lancement automatique de la boussole sacrée dès l'ouverture de l'application
window.addEventListener("DOMContentLoaded", verifierAlignementGeospirituel);
