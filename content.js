/* ============================================================
   ✏️  EVERYTHING WRITTEN ON THE SITE LIVES IN THIS FILE.

   Text can be either:
     "Same text in both languages"
     { en: "English text", fr: "Texte français" }

   To add a project: copy one block in `projects`, give it a new `slug`,
   edit it, save, then push to GitHub — Vercel redeploys automatically.
   Set `hidden: true` to keep a project in the file without showing it.
   ============================================================ */

window.SITE = {
  name: "Marius Rang",
  shortName: "Marius",
  photo: "assets/photo.jpg",
  footerLine: { en: "Where tech meets business.", fr: "À la croisée de la tech et du business." },

  links: {
    github: "https://github.com/mariusrang",
    linkedin: "https://www.linkedin.com/in/marius-rang-561804326/",
    email: "marius.rang@essec.edu",
    cv: "assets/cv.pdf",
  },

  /* ================= HOME (PROJECTS PAGE) ================= */
  projectsPage: {
    kicker: "Marius Rang · CentraleSupélec × ESSEC",
    title: { en: "I build AI that does real work.", fr: "Je construis des IA qui font vraiment le travail." },
    intro: {
      en: "Engineering & business student. I connect language models to real tools, measure how reliable they are, and train models that win competitions.",
      fr: "Étudiant ingénieur et business. Je connecte des modèles de langage à de vrais outils, je mesure leur fiabilité et j'entraîne des modèles qui gagnent des compétitions.",
    },
  },

  // The "Now" line under the intro. Update it each semester.
  now: [
    { en: "3rd year · CentraleSupélec × ESSEC", fr: "3e année · CentraleSupélec × ESSEC" },
    { en: "Jan – May 2027 · Exchange semester at Iowa State University (USA)", fr: "Janv. – mai 2027 · Semestre d'échange à Iowa State University (USA)" },
    { en: "Interested in applied AI & LLM systems", fr: "Intéressé par l'IA appliquée et les systèmes à base de LLM" },
  ],

  // Key results shown as tiles on the home page.
  highlights: [
    { value: { en: "2× 1st", fr: "2× 1re" }, label: { en: "place in class ML competitions (Kaggle)", fr: "place en compétitions de ML du cours (Kaggle)" } },
    { value: "MCP", label: { en: "server built from scratch, presented to Alteryx", fr: "serveur construit de zéro, présenté à Alteryx" } },
    { value: "66.7 → 100 %", label: { en: "prompt reliability with Prompt Bench", fr: "de fiabilité d'un prompt avec Prompt Bench" } },
    { value: "99.83 %", label: { en: "accuracy on 7-class emoji classification", fr: "d'accuracy en classification d'emojis (7 classes)" } },
  ],

  /* ================= PROJECTS =================
     Card fields:   slug, category, context, title, summary, metric, tags, links, image
     Detail fields: video, problem, built (list), results (list), chart, role, learned, note       */
  projects: [
    {
      slug: "mcp-alteryx",
      featured: true,
      category: "Agentic AI · MCP",
      context: { en: "Internship · Prime Analytics · 2026", fr: "Stage · Prime Analytics · 2026" },
      title: { en: "Talking to Alteryx.", fr: "Parler à Alteryx." },
      summary: {
        en: "An MCP server, built from scratch in Python, that lets a language model run Alteryx workflows from a plain-language request — and return auditable results.",
        fr: "Un serveur MCP, construit de zéro en Python, qui permet à un modèle de langage de lancer des workflows Alteryx à partir d'une simple demande — et de renvoyer des résultats vérifiables.",
      },
      metric: { en: "Presented to Alteryx", fr: "Présenté à Alteryx" },
      tags: ["Python", "MCP", "Alteryx Server", "REST API", "Supabase"],
      links: [],
      image: "assets/projects/mcp-alteryx.jpg",
      video: { src: "assets/video/mcp-demo.mp4", poster: "assets/video/mcp-demo-poster.jpg" },
      problem: {
        en: "Alteryx Server runs a company's data workflows, but using it means opening the Gallery, finding the right workflow, launching it, waiting, then digging through the outputs. No MCP server existed to let an AI assistant do it.",
        fr: "Alteryx Server fait tourner les workflows de données d'une entreprise, mais l'utiliser demande d'ouvrir la Gallery, trouver le bon workflow, le lancer, attendre, puis fouiller les sorties. Aucun serveur MCP ne permettait à un assistant IA de le faire.",
      },
      built: [
        { en: "A Model Context Protocol server in Python that exposes the Alteryx Server API as tools: list workflows, run one, track the job, fetch outputs, download generated files.", fr: "Un serveur Model Context Protocol en Python qui expose l'API d'Alteryx Server sous forme d'outils : lister les workflows, en lancer un, suivre le job, récupérer les sorties, télécharger les fichiers générés." },
        { en: "A plain-language request becomes a workflow run: the model picks the workflow, launches it, polls its status and answers with structured results.", fr: "Une demande en langage naturel devient l'exécution d'un workflow : le modèle choisit le workflow, le lance, suit son statut et répond avec des résultats structurés." },
        { en: "All calculations stay in Alteryx, so every number in the answer traces back to a job ID — no black box. Works with any MCP-compatible model (demo: Claude).", fr: "Tous les calculs restent dans Alteryx : chaque chiffre de la réponse renvoie à un ID de job — pas de boîte noire. Compatible avec tout modèle compatible MCP (démo : Claude)." },
        { en: "The workflows it drives: a Data Quality pipeline that writes anomalies to Supabase, AMF regulatory threshold detection for banking & insurance, and a multi-document text extractor that cuts LLM token costs.", fr: "Les workflows pilotés : un pipeline Data Quality qui écrit les anomalies dans Supabase, la détection de seuils réglementaires AMF pour la banque et l'assurance, et un extracteur de texte multi-documents qui réduit les coûts en tokens." },
      ],
      results: [
        { en: "In the demo: one request → a workflow run on 50,000 positions → 327 securities checked, 41 threshold crossings → an interactive dashboard and the official PDF report.", fr: "Dans la démo : une demande → un workflow sur 50 000 positions → 327 valeurs contrôlées, 41 franchissements de seuil → un dashboard interactif et le rapport PDF officiel." },
        { en: "Presented to the Alteryx team on 29 July 2026.", fr: "Présenté à l'équipe d'Alteryx le 29 juillet 2026." },
      ],
      role: { en: "Solo, from scratch, during my internship as an AI Engineer at Prime Analytics (Apr – Aug 2026).", fr: "Seul, de zéro, pendant mon stage d'AI Engineer chez Prime Analytics (avr. – août 2026)." },
      learned: {
        en: "How to design an MCP server end to end: tool design, authentication, asynchronous job tracking and file outputs. The protocol is generic — the same approach plugs any API into any MCP-compatible model.",
        fr: "Concevoir un serveur MCP de bout en bout : design des outils, authentification, suivi de jobs asynchrones et fichiers de sortie. Le protocole est générique — la même approche branche n'importe quelle API sur n'importe quel modèle compatible MCP.",
      },
      note: { en: "Demo video (2 min 51, subtitled). The code itself is private — it belongs to the company.", fr: "Vidéo de démo (2 min 51, sous-titrée). Le code est privé : il appartient à l'entreprise." },
    },
    {
      slug: "prompt-bench",
      category: { en: "LLM evaluation", fr: "Évaluation de LLM" },
      context: { en: "Personal project · 2026", fr: "Projet personnel · 2026" },
      title: { en: "Measuring a prompt.", fr: "Mesurer un prompt." },
      summary: {
        en: "A test bench that measures how reliable and how expensive a prompt is — then rewrites it to fix its failures.",
        fr: "Un banc d'essai qui mesure la fiabilité et le coût d'un prompt — puis le réécrit pour corriger ses échecs.",
      },
      metric: "66.7 % → 100 %",
      tags: ["LLM-as-a-judge", "n8n", "Gemini", "JavaScript"],
      links: [
        { label: { en: "Live app", fr: "App en ligne" }, url: "https://mariusrang.github.io/banc-essai-prompts/" },
        { label: "GitHub", url: "https://github.com/mariusrang/banc-essai-prompts" },
      ],
      image: "assets/projects/prompt-bench.jpg",
      problem: {
        en: "A prompt that works once can fail the next time. Most prompts are tested by hand on a few examples, with no idea of their variance or of what they will cost in production.",
        fr: "Un prompt qui marche une fois peut échouer la suivante. La plupart des prompts sont testés à la main sur quelques exemples, sans idée de leur variabilité ni de leur coût en production.",
      },
      built: [
        { en: "Runs a prompt on a test set and repeats each input several times to measure variability, not just accuracy.", fr: "Exécute un prompt sur un jeu de tests et répète chaque entrée plusieurs fois pour mesurer la variabilité, pas seulement la précision." },
        { en: "A second model grades every answer (LLM-as-a-judge); a third reads the failures, explains them and rewrites the prompt.", fr: "Un 2e modèle note chaque réponse (LLM-as-a-judge) ; un 3e lit les échecs, les explique et réécrit le prompt." },
        { en: "Every run shows its cost in tokens and dollars, and projects the monthly cost in production.", fr: "Chaque run affiche son coût en tokens et en dollars, et projette le coût mensuel en production." },
        { en: "Two n8n workflows as the engine, a Google Sheet as storage, a single HTML page as the interface.", fr: "Deux workflows n8n comme moteur, un Google Sheet comme stockage, une seule page HTML comme interface." },
      ],
      chart: { title: { en: "Ticket-triage case study — success rate", fr: "Cas d'étude tri de tickets — taux de réussite" }, unit: "%", min: 0, bars: [
        { label: { en: "Original prompt", fr: "Prompt d'origine" }, value: 66.7 },
        { label: { en: "Rewritten prompt", fr: "Prompt réécrit" }, value: 100, best: true },
      ] },
      results: [
        { en: "Ticket-triage case study: success rate from 66.7 % to 100 %.", fr: "Cas d'étude sur le tri de tickets : taux de réussite de 66,7 % à 100 %." },
        { en: "Projected production cost divided by almost 3 (from about $203 to $72 per month).", fr: "Coût de production projeté divisé par près de 3 (d'environ 203 $ à 72 $ par mois)." },
      ],
      role: { en: "Solo — design, workflows, interface and documentation.", fr: "Seul — conception, workflows, interface et documentation." },
      learned: {
        en: "Variance matters as much as accuracy, an LLM judge needs its own checks, and cost is a design constraint from day one.",
        fr: "La variabilité compte autant que la précision, un juge LLM a lui-même besoin de contrôles, et le coût est une contrainte de conception dès le premier jour.",
      },
    },
    {
      slug: "emoji-classification",
      category: "Computer vision",
      context: { en: "Kaggle class competition · Team of 2 · 2026", fr: "Compétition Kaggle (cours) · Binôme · 2026" },
      title: { en: "Who drew this emoji?", fr: "Qui a dessiné cet emoji ?" },
      summary: {
        en: "Tell which of 7 vendors — Apple, Google, WhatsApp, Samsung… — drew an emoji. 1st place, from 88 % to 99.83 % accuracy in four iterations.",
        fr: "Retrouver lequel de 7 fournisseurs — Apple, Google, WhatsApp, Samsung… — a dessiné un emoji. 1re place, de 88 % à 99,83 % d'accuracy en quatre versions.",
      },
      metric: { en: "1st place", fr: "1re place" },
      tags: ["PyTorch", "EfficientNet", "LightGBM", "scikit-learn"],
      links: [],
      image: "assets/projects/emoji-classification.jpg",
      problem: {
        en: "9,879 training images, 7 vendors. The task is not to recognise which emoji it is — the same smiley exists everywhere — but who drew it: shading, gradients, outlines, export format.",
        fr: "9 879 images d'entraînement, 7 fournisseurs. Il ne s'agit pas de reconnaître l'emoji — le même smiley existe partout — mais de savoir qui l'a dessiné : ombrages, dégradés, contours, format d'export.",
      },
      built: [
        { en: "v1 — ResNet18 trained from scratch: 89.1 % validation (88.1 % on Kaggle).", fr: "v1 — ResNet18 entraîné depuis zéro : 89,1 % en validation (88,1 % sur Kaggle)." },
        { en: "v2 — Transfer learning with EfficientNet-B0, combined with LightGBM on file features: 96.7 %.", fr: "v2 — Transfer learning avec EfficientNet-B0, combiné à un LightGBM sur des caractéristiques des fichiers : 96,7 %." },
        { en: "v3 — Error analysis showed most mistakes came from one image format, so we added the alpha channel and \"forensic\" export clues: 97.8 %.", fr: "v3 — L'analyse d'erreurs montrait que la plupart venaient d'un seul format d'image : ajout du canal alpha et d'indices « forensiques » d'export : 97,8 %." },
        { en: "v4 — 67,371 public emojis as external references, nearest-neighbour distances + LightGBM: 99.83 % in 5-fold cross-validation (17 errors out of 9,879).", fr: "v4 — 67 371 emojis publics comme références externes, distances au plus proche voisin + LightGBM : 99,83 % en validation croisée à 5 plis (17 erreurs sur 9 879)." },
      ],
      chart: { title: { en: "Validation accuracy by version", fr: "Accuracy de validation par version" }, unit: "%", min: 60, bars: [
        { label: "v1", value: 89.1 }, { label: "v2", value: 96.7 }, { label: "v3", value: 97.8 }, { label: "v4", value: 99.83, best: true },
      ] },
      results: [
        { en: "1st place in the class Kaggle competition.", fr: "1re place de la compétition Kaggle du cours." },
        { en: "We also showed the dataset contains shortcuts (file format alone predicts the vendor 65.6 % of the time) and discussed what that means for the final score.", fr: "Nous avons aussi montré que le dataset contient des raccourcis (le format seul prédit le fournisseur dans 65,6 % des cas) et discuté ce que cela implique pour le score final." },
      ],
      role: { en: "Team of 2 with Ylias Guetari — modelling, error analysis and the written report.", fr: "Binôme avec Ylias Guetari — modélisation, analyse d'erreurs et rapport écrit." },
      learned: {
        en: "Error analysis beats random model search: every version came from studying exactly where the previous one failed.",
        fr: "L'analyse d'erreurs bat la recherche de modèles au hasard : chaque version est née de l'étude précise des échecs de la précédente.",
      },
    },
    {
      slug: "mnist",
      category: "Computer vision",
      context: { en: "Kaggle class competition · Solo · 2026", fr: "Compétition Kaggle (cours) · Seul · 2026" },
      title: { en: "Winning with 1,000 images.", fr: "Gagner avec 1 000 images." },
      summary: {
        en: "Handwritten digit recognition with only 1,000 labelled images. 1st place with an ensemble of three CNNs and leak-free external data.",
        fr: "Reconnaissance de chiffres manuscrits avec seulement 1 000 images étiquetées. 1re place avec un ensemble de trois CNN et des données externes sans fuite.",
      },
      metric: { en: "1st place", fr: "1re place" },
      tags: ["PyTorch", "CNN", "scikit-learn", "HOG + SVM"],
      links: [],
      image: "assets/projects/mnist.jpg",
      problem: {
        en: "Classify 400 handwritten digits with only 1,000 labelled training images — a small-data version of MNIST.",
        fr: "Classer 400 chiffres manuscrits avec seulement 1 000 images d'entraînement étiquetées — une version « petites données » de MNIST.",
      },
      built: [
        { en: "Baseline: an SVM on HOG features (edge orientations), with shifted copies of each image as augmentation — 97.0 % validation.", fr: "Baseline : un SVM sur des caractéristiques HOG (orientation des contours), avec des copies décalées de chaque image en augmentation — 97,0 % en validation." },
        { en: "Added the 60,000 original MNIST training images (allowed by the rules) after removing every exact or near-duplicate of a challenge image (pixel RMSE ≤ 0.03), so the validation score stays honest.", fr: "Ajout des 60 000 images d'entraînement MNIST d'origine (autorisées par le règlement), après suppression de tout doublon exact ou quasi-doublon d'une image du challenge (RMSE ≤ 0,03), pour que le score de validation reste honnête." },
        { en: "Small CNN trained with 3 different seeds, early stopping on a separate set, probabilities averaged, then refit on all labelled data.", fr: "Petit CNN entraîné avec 3 graines différentes, early stopping sur un jeu séparé, probabilités moyennées, puis réentraînement sur toutes les données étiquetées." },
      ],
      chart: { title: { en: "Validation accuracy", fr: "Accuracy de validation" }, unit: "%", min: 90, bars: [
        { label: "HOG + SVM", value: 97.0 }, { label: { en: "3-CNN ensemble", fr: "Ensemble 3 CNN" }, value: 98.5, best: true },
      ] },
      results: [
        { en: "1st place in the class competition.", fr: "1re place de la compétition du cours." },
      ],
      role: { en: "Solo.", fr: "Seul." },
      learned: {
        en: "With little data, validation hygiene matters more than architecture: deduplicating external data is what makes a score trustworthy.",
        fr: "Avec peu de données, l'hygiène de validation compte plus que l'architecture : dédupliquer les données externes est ce qui rend un score fiable.",
      },
    },
    {
      slug: "steel-prediction",
      category: "Machine learning",
      context: { en: "Course · AIDAMS Lab 2 · Team of 4 · 2026", fr: "Cours · AIDAMS Lab 2 · Groupe de 4 · 2026" },
      title: { en: "Predicting steel output.", fr: "Prédire la production d'acier." },
      summary: {
        en: "Predict each steel plant's 2023 production from its characteristics — a full ML pipeline from schema checks to MLflow tracking. CV R² of 0.82.",
        fr: "Prédire la production 2023 de chaque aciérie à partir de ses caractéristiques — un pipeline ML complet, de la validation de schéma au suivi MLflow. R² de 0,82 en validation croisée.",
      },
      metric: "R² 0.82",
      tags: ["scikit-learn", "Optuna", "MLflow", "Pandera"],
      links: [{ label: "GitHub", url: "https://github.com/mariusrang/Predicting-plant-production" }],
      image: "assets/projects/steel-prediction.jpg",
      problem: {
        en: "Using Global Energy Monitor's plant-level data, predict each plant's 2023 crude steel production (thousand tonnes per year).",
        fr: "À partir des données usine par usine de Global Energy Monitor, prédire la production d'acier brut 2023 de chaque usine (milliers de tonnes par an).",
      },
      built: [
        { en: "Pandera schema validation, cleaning and feature engineering.", fr: "Validation de schéma avec Pandera, nettoyage et feature engineering." },
        { en: "Baselines, then linear, Ridge and Random Forest models compared with 5-fold cross-validation.", fr: "Baselines, puis modèles linéaire, Ridge et Random Forest comparés en validation croisée à 5 plis." },
        { en: "Tuning with GridSearchCV and Optuna, every run tracked in MLflow, plus a TabFM (tabular foundation model) bonus.", fr: "Tuning avec GridSearchCV et Optuna, chaque run suivi dans MLflow, plus un bonus TabFM (modèle de fondation tabulaire)." },
      ],
      results: [
        { en: "Selected model: linear regression on key variables — CV RMSE 957, R² 0.82 — ahead of the tuned Random Forest.", fr: "Modèle retenu : régression linéaire sur les variables clés — RMSE 957, R² 0,82 en validation croisée — devant le Random Forest optimisé." },
      ],
      role: { en: "Team of 4 (AIDAMS Lab 2).", fr: "Groupe de 4 (AIDAMS Lab 2)." },
      learned: {
        en: "A simpler model can win when it is validated properly — and tracking every experiment makes that choice easy to defend.",
        fr: "Un modèle plus simple peut gagner quand il est bien validé — et suivre chaque expérience rend ce choix facile à défendre.",
      },
    },
    {
      slug: "steel-dashboard",
      category: { en: "Geospatial · Data viz", fr: "Géospatial · Data viz" },
      context: { en: "Course · AIDAMS Lab 1 · Team of 4 · 2026", fr: "Cours · AIDAMS Lab 1 · Groupe de 4 · 2026" },
      title: { en: "Mapping the world's steel.", fr: "Cartographier l'acier mondial." },
      summary: {
        en: "A deployed Streamlit app mapping 970+ steel plants: owners, capacities and surrounding economic exposure.",
        fr: "Une app Streamlit déployée qui cartographie plus de 970 aciéries : propriétaires, capacités et exposition économique alentour.",
      },
      metric: { en: "Live app", fr: "App en ligne" },
      tags: ["Streamlit", "Plotly", "pandas", "LitPop"],
      links: [
        { label: { en: "Live app", fr: "App en ligne" }, url: "https://aidams-lab1-gusching-rang-henz-guetari-citthygx7ko6rixwsgvrob.streamlit.app/" },
        { label: "GitHub", url: "https://github.com/mariusrang/steel-industry-geospatial-analysis" },
      ],
      image: "assets/projects/steel-map.jpg",
      problem: {
        en: "Make Global Energy Monitor's steel plant data explorable: where plants are, who owns them, how much they produce, and what economic value surrounds them.",
        fr: "Rendre explorables les données d'aciéries de Global Energy Monitor : où sont les usines, à qui elles appartiennent, combien elles produisent, et quelle valeur économique les entoure.",
      },
      built: [
        { en: "Interactive maps by region, capacity and density, plus LitPop asset exposure for China, India and Japan.", fr: "Cartes interactives par région, capacité et densité, plus l'exposition économique LitPop pour la Chine, l'Inde et le Japon." },
        { en: "Exploration charts, company-level analysis, filters and CSV export.", fr: "Graphiques d'exploration, analyse par entreprise, filtres et export CSV." },
      ],
      results: [
        { en: "Deployed on Streamlit Community Cloud.", fr: "Déployée sur Streamlit Community Cloud." },
      ],
      role: { en: "Team of 4 (AIDAMS Lab 1).", fr: "Groupe de 4 (AIDAMS Lab 1)." },
      note: { en: "Hosted on a free tier: if the app is asleep, click “wake up” and give it about 30 seconds.", fr: "Hébergée gratuitement : si l'app est en veille, cliquez sur « wake up » et patientez environ 30 secondes." },
    },
    {
      slug: "space-invaders",
      hidden: true,
      category: { en: "Game · Python", fr: "Jeu · Python" },
      context: { en: "Course · Team project", fr: "Cours · Projet de groupe" },
      title: { en: "Space Invaders, no libraries.", fr: "Space Invaders, sans bibliothèque." },
      summary: { en: "The 1978 arcade classic, rebuilt with Python's standard library only.", fr: "Le classique d'arcade de 1978, recodé avec la seule bibliothèque standard de Python." },
      tags: ["Python", "turtle"],
      links: [{ label: "GitHub", url: "https://github.com/Isabelle333/Space-Invaders_Group-10" }],
      cover: "invader",
    },
  ],

  /* ================= BACKGROUND PAGE ================= */
  backgroundPage: {
    kicker: { en: "Education & experience", fr: "Formation & expériences" },
    title: { en: "Connecting disciplines.", fr: "Relier les disciplines." },
    intro: {
      en: "An engineering school, a business school, and a focus on artificial intelligence and data.",
      fr: "Une école d'ingénieurs, une école de commerce, et une spécialisation en intelligence artificielle et en data.",
    },
  },

  education: [
    {
      label: "2024 — 2028",
      logos: ["centralesupelec", "essec"],
      title: "CentraleSupélec × ESSEC",
      lines: [
        { en: "Bachelor in Artificial Intelligence, Data Analysis & Management Sciences — currently in 3rd year", fr: "Bachelor en intelligence artificielle, analyse de données et sciences du management — actuellement en 3e année" },
        { en: "Coursework: advanced linear algebra, probability, Python, data analysis, machine learning, computer vision, microeconomics.", fr: "Cours : algèbre linéaire avancée, probabilités, Python, analyse de données, machine learning, computer vision, microéconomie." },
      ],
      tags: ["Machine learning", "Computer vision", { en: "Mathematics", fr: "Mathématiques" }, "Management"],
    },
    {
      label: { en: "Jan — May 2027", fr: "Janv. — mai 2027" },
      title: "Iowa State University (USA)",
      lines: [{ en: "Exchange semester.", fr: "Semestre d'échange." }],
    },
    {
      label: "2021 — 2024",
      title: "Lycée Notre-Dame Les Oiseaux",
      lines: [
        { en: "Baccalauréat in Mathematics & Computer Science — Expert Mathematics option, high honours.", fr: "Baccalauréat spécialités Mathématiques & Informatique — option Maths expertes, mention très bien." },
      ],
    },
  ],

  experience: [
    {
      label: { en: "Apr — Aug 2026", fr: "Avr. — août 2026" },
      logos: ["prime-analytics"],
      title: { en: "AI Engineer Intern — Prime Analytics", fr: "Stagiaire AI Engineer — Prime Analytics" },
      lines: ["Paris"],
      points: [
        { en: "Built from scratch an MCP server in Python that lets a language model run Alteryx Server workflows (see the project).", fr: "Construction de zéro d'un serveur MCP en Python qui permet à un modèle de langage de piloter Alteryx Server (voir le projet)." },
        { en: "Data Quality pipeline: anomalies detected by Alteryx, stored in Supabase, queryable in real time.", fr: "Pipeline Data Quality : anomalies détectées par Alteryx, stockées dans Supabase, interrogeables en temps réel." },
        { en: "Compliance workflows for banking & insurance: AMF threshold detection on 50,000 positions, automated PDF reports.", fr: "Workflows de conformité banque & assurance : détection de seuils AMF sur 50 000 positions, rapports PDF automatiques." },
        { en: "Rebuilt the AI Prompting macro in Python and a multi-document text extractor to reduce LLM token costs.", fr: "Refonte en Python de la macro AI Prompting et d'un extracteur de texte multi-documents pour réduire les coûts en tokens." },
        { en: "Presented the MCP solution to Alteryx on 29 July 2026.", fr: "Présentation de la solution MCP à Alteryx le 29 juillet 2026." },
      ],
      tags: ["Python", "MCP", "Alteryx", "Supabase", "SQL"],
    },
    {
      label: { en: "2024 — today", fr: "2024 — aujourd'hui" },
      title: { en: "Member — AUTOMATANTS, CentraleSupélec AI association", fr: "Membre — AUTOMATANTS, association d'IA de CentraleSupélec" },
      lines: [{ en: "Neural network projects, project management and AI education for other students.", fr: "Projets de réseaux de neurones, gestion de projet et pédagogie IA auprès des autres étudiants." }],
    },
    {
      label: { en: "2025 — today", fr: "2025 — aujourd'hui" },
      title: { en: "Event Host — Trinity Agency", fr: "Hôte événementiel — Trinity Agency" },
      lines: [{ en: "Welcoming guests at high-end corporate events and gala evenings in Paris.", fr: "Accueil des invités lors d'événements d'entreprise haut de gamme et de soirées de gala à Paris." }],
    },
  ],

  skills: [
    { label: { en: "Languages", fr: "Langues" }, tags: [{ en: "French — native", fr: "Français — natif" }, { en: "English — fluent", fr: "Anglais — courant" }, { en: "Spanish — intermediate", fr: "Espagnol — intermédiaire" }] },
    { label: "Machine learning", tags: ["PyTorch", "scikit-learn", "LightGBM", "Optuna", "MLflow", "pandas", "NumPy"] },
    { label: "LLM & agents", tags: ["MCP", "Claude / OpenAI / Gemini APIs", "LLM-as-a-judge", "n8n"] },
    { label: { en: "Data & tools", fr: "Data & outils" }, tags: ["SQL", "Alteryx", "Supabase", "Streamlit", "Git", "LaTeX"] },
  ],

  interests: [
    {
      label: { en: "Artificial intelligence", fr: "Intelligence artificielle" },
      title: { en: "AI that does real work.", fr: "Une IA qui travaille vraiment." },
      desc: {
        en: "Agentic systems, MCP and LLM evaluation — and how to make AI answers auditable, affordable and useful to a business.",
        fr: "Systèmes agentiques, MCP et évaluation de LLM — et comment rendre les réponses d'une IA vérifiables, abordables et utiles à une entreprise.",
      },
    },
    {
      label: "Sport",
      title: { en: "Endurance.", fr: "L'endurance." },
      desc: { en: "Triathlon (5 sessions a week), Paris Marathon 2025 finisher, and tennis.", fr: "Triathlon (5 entraînements par semaine), finisher du Marathon de Paris 2025, et tennis." },
    },
    {
      label: { en: "Music", fr: "Musique" },
      title: "Piano.",
      desc: { en: "A different kind of practice.", fr: "Une autre forme d'entraînement." },
    },
  ],

  /* ================= LINKS PAGE ================= */
  linksPage: {
    kicker: { en: "Code · Background · Contact", fr: "Code · Parcours · Contact" },
    title: { en: "Let's stay in touch.", fr: "Gardons le lien." },
    intro: {
      en: "My projects on GitHub, my background on LinkedIn, and my CV. Everything you need to get to know me.",
      fr: "Mes projets sur GitHub, mon parcours sur LinkedIn et mon CV. Tout ce qui permet de mieux me connaître.",
    },
  },

  usefulLinks: [
    { title: "Prompt Bench", desc: { en: "Test any prompt for reliability and cost — live.", fr: "Testez la fiabilité et le coût d'un prompt — en ligne." }, url: "https://mariusrang.github.io/banc-essai-prompts/" },
    { title: { en: "Global steel plants dashboard", fr: "Dashboard mondial des aciéries" }, desc: { en: "Explore the map of the world's steel industry.", fr: "Explorez la carte de l'industrie sidérurgique mondiale." }, url: "https://aidams-lab1-gusching-rang-henz-guetari-citthygx7ko6rixwsgvrob.streamlit.app/" },
    { title: "Model Context Protocol", desc: { en: "The open standard behind my Alteryx server.", fr: "Le standard ouvert derrière mon serveur Alteryx." }, url: "https://modelcontextprotocol.io/" },
  ],
};
