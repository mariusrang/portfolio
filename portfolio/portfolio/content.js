/* ============================================================
   ✏️  EVERYTHING WRITTEN ON THE SITE LIVES IN THIS FILE.

   Text can be either:
     "Same text in both languages"
     { en: "English text", fr: "Texte français" }

   To add a project: copy one block in `projects`, edit it, save,
   then push to GitHub — Vercel redeploys automatically.
   ============================================================ */

window.SITE = {
  name: "Marius Rang",
  shortName: "Marius",
  footerLine: { en: "Where tech meets business.", fr: "À la croisée de la tech et du business." },

  // Leave a link empty ("") and its button shows "Soon" instead.
  links: {
    github: "https://github.com/mariusrang",
    linkedin: "https://www.linkedin.com/in/marius-rang-561804326/",
    email: "marius.rang@essec.edu",
    cv: "assets/cv.pdf",
  },

  /* ================= PROJECTS PAGE ================= */
  projectsPage: {
    kicker: { en: "Experiment · Understand · Build", fr: "Expérimenter · Comprendre · Construire" },
    title: { en: "From idea to model.", fr: "De l’idée au modèle." },
    intro: {
      en: "Agentic AI, data pipelines and machine learning — built during my internship, my courses and on my own time.",
      fr: "IA agentique, pipelines de données et machine learning — construits en stage, en cours et sur mon temps libre.",
    },
  },

  /*  cover: "network" | "blocks" | "orbit" | "grid" | "bars" | "map" | "waves" | "invader"
      or image: "assets/projects/my-image.jpg"
      featured: true  → shows a "Flagship" badge                                         */
  projects: [
    {
      featured: true,
      category: "Agentic AI · MCP",
      context: { en: "Internship · Prime Analytics", fr: "Stage · Prime Analytics" },
      title: { en: "Talking to Alteryx.", fr: "Parler à Alteryx." },
      desc: {
        en: "A Model Context Protocol server, built from scratch in Python, that plugs Alteryx Server into Claude. Ask a question in plain language: Claude picks the right workflow, runs it, tracks its execution and returns structured results. Presented to Alteryx, the software editor, on 29 July 2026.",
        fr: "Un serveur Model Context Protocol, construit de zéro en Python, qui branche Alteryx Server sur Claude. On pose une question en langage naturel : Claude choisit le bon workflow, le lance, suit son exécution et renvoie des résultats structurés. Présenté à l'éditeur Alteryx le 29 juillet 2026.",
      },
      tags: ["Python", "MCP", "Claude", "Alteryx Server"],
      links: [],
      cover: "network",
    },
    {
      category: { en: "LLM evaluation", fr: "Évaluation de LLM" },
      context: { en: "Personal project", fr: "Projet personnel" },
      title: { en: "Measuring a prompt.", fr: "Mesurer un prompt." },
      desc: {
        en: "A test bench that runs a prompt on a test set and repeats each input to measure variability. A second model grades the answers, a third diagnoses the failures and rewrites the prompt — with the token and dollar cost of every run. Case study on ticket triage: from 66.7 % to 100 % success, with production cost divided by almost 3.",
        fr: "Un banc d'essai qui exécute un prompt sur un jeu de tests et répète chaque entrée pour mesurer la variabilité. Un 2e modèle note les réponses, un 3e analyse les échecs et réécrit le prompt — avec le coût en tokens et en dollars de chaque run. Cas d'étude sur le tri de tickets : de 66,7 % à 100 % de réussite, et un coût de production divisé par près de 3.",
      },
      tags: ["n8n", "Gemini", "Google Sheets", "HTML / JS"],
      links: [
        { label: { en: "Live app", fr: "App en ligne" }, url: "https://mariusrang.github.io/banc-essai-prompts/" },
        { label: "GitHub", url: "https://github.com/mariusrang/banc-essai-prompts" },
      ],
      image: "assets/projects/prompt-bench.jpg",
    },
    {
      category: "Data quality · MCP",
      context: { en: "Internship · Prime Analytics", fr: "Stage · Prime Analytics" },
      title: { en: "Anomalies, on demand.", fr: "Les anomalies, à la demande." },
      desc: {
        en: "Alteryx workflows that detect anomalies in the data and write them to a Supabase database, which Claude can query in real time through MCP tools — “how is my data quality today?” gets a precise, sourced answer.",
        fr: "Des workflows Alteryx qui détectent les anomalies dans les données et les écrivent dans une base Supabase, que Claude interroge en temps réel via des outils MCP — « où en est ma data quality ? » obtient une réponse précise et sourcée.",
      },
      tags: ["Alteryx", "Supabase", "SQL", "MCP"],
      links: [],
      cover: "grid",
    },
    {
      category: { en: "Compliance · Finance", fr: "Conformité · Finance" },
      context: { en: "Internship · Prime Analytics", fr: "Stage · Prime Analytics" },
      title: { en: "50,000 positions, one report.", fr: "50 000 positions, un rapport." },
      desc: {
        en: "Compliance workflows for banking and insurance that detect AMF regulatory threshold crossings across 50,000 positions and generate the PDF report automatically. On the demo portfolio: 327 securities checked, 41 crossings flagged.",
        fr: "Des workflows de conformité pour la banque et l'assurance qui détectent les franchissements de seuils réglementaires AMF sur 50 000 positions et génèrent automatiquement le rapport PDF. Sur le portefeuille de démo : 327 valeurs contrôlées, 41 franchissements détectés.",
      },
      tags: ["Alteryx", { en: "Regulatory", fr: "Réglementaire" }, { en: "PDF reporting", fr: "Reporting PDF" }],
      links: [],
      cover: "bars",
    },
    {
      category: "Machine learning",
      context: { en: "Course · AIDAMS Lab 2 · Team of 4", fr: "Cours · AIDAMS Lab 2 · Groupe de 4" },
      title: { en: "Predicting steel output.", fr: "Prédire la production d'acier." },
      desc: {
        en: "Predicts every plant's 2023 crude steel production from its characteristics (Global Energy Monitor data). End to end: Pandera schema checks, cleaning, feature engineering, linear / Ridge / Random Forest models, cross-validation, GridSearchCV + Optuna tuning, MLflow tracking and a TabFM bonus. Best model: CV R² of 0.82.",
        fr: "Prédit la production d'acier brut 2023 de chaque usine à partir de ses caractéristiques (données Global Energy Monitor). De bout en bout : validation de schéma Pandera, nettoyage, feature engineering, modèles linéaire / Ridge / Random Forest, validation croisée, tuning GridSearchCV + Optuna, suivi MLflow et un bonus TabFM. Meilleur modèle : R² de 0,82 en validation croisée.",
      },
      tags: ["Python", "scikit-learn", "Optuna", "MLflow", "Pandera"],
      links: [{ label: "GitHub", url: "https://github.com/mariusrang/Predicting-plant-production" }],
      cover: "blocks",
    },
    {
      category: { en: "Geospatial · Data viz", fr: "Géospatial · Data viz" },
      context: { en: "Course · AIDAMS Lab 1 · Team of 4", fr: "Cours · AIDAMS Lab 1 · Groupe de 4" },
      title: { en: "Mapping the world's steel.", fr: "Cartographier l'acier mondial." },
      desc: {
        en: "A deployed Streamlit app mapping the world's steel plants: locations, owners, capacities and surrounding economic exposure (LitPop) in China, India and Japan. Filters, Plotly charts, company-level analysis and CSV export.",
        fr: "Une application Streamlit déployée qui cartographie les aciéries du monde : localisation, propriétaires, capacités et exposition économique (LitPop) en Chine, en Inde et au Japon. Filtres, graphiques Plotly, analyse par entreprise et export CSV.",
      },
      tags: ["Streamlit", "Plotly", "pandas", "LitPop"],
      links: [
        { label: { en: "Live app", fr: "App en ligne" }, url: "https://aidams-lab1-gusching-rang-henz-guetari-citthygx7ko6rixwsgvrob.streamlit.app/" },
        { label: "GitHub", url: "https://github.com/mariusrang/steel-industry-geospatial-analysis" },
      ],
      cover: "map",
    },
    {
      category: { en: "GenAI tooling", fr: "Outils GenAI" },
      context: { en: "Internship · Prime Analytics", fr: "Stage · Prime Analytics" },
      title: { en: "Fewer tokens, same answers.", fr: "Moins de tokens, mêmes réponses." },
      desc: {
        en: "Rebuilt the AI Prompting macro for Alteryx in Python, and created a tool that extracts the text from PDFs, contracts and presentations before it reaches the LLM — to cut token costs.",
        fr: "Refonte en Python de la macro AI Prompting pour Alteryx, et création d'un outil qui extrait le texte des PDF, contrats et présentations avant qu'il n'atteigne le LLM — pour réduire les coûts en tokens.",
      },
      tags: ["Python", { en: "Alteryx macros", fr: "Macros Alteryx" }, "LLM APIs"],
      links: [],
      cover: "waves",
    },
    {
      category: { en: "Game · Python", fr: "Jeu · Python" },
      context: { en: "Course · Team project", fr: "Cours · Projet de groupe" },
      title: { en: "Space Invaders, no libraries.", fr: "Space Invaders, sans bibliothèque." },
      desc: {
        en: "The 1978 arcade classic, rebuilt with nothing but Python's standard library (turtle): a moving ship, alien waves that speed up as they thin out, shots both ways, score, and win / lose conditions.",
        fr: "Le classique d'arcade de 1978, recodé uniquement avec la bibliothèque standard de Python (turtle) : vaisseau mobile, vagues d'aliens qui accélèrent, tirs dans les deux sens, score et conditions de victoire / défaite.",
      },
      tags: ["Python", "turtle"],
      links: [{ label: "GitHub", url: "https://github.com/Isabelle333/Space-Invaders_Group-10" }],
      cover: "invader",
    },
    {
      category: "Deep learning",
      context: { en: "Association · AUTOMATANTS", fr: "Association · AUTOMATANTS" },
      title: { en: "Learning by building.", fr: "Apprendre en construisant." },
      desc: {
        en: "Projects with CentraleSupélec's AI association: designing and training neural networks, plus project management and AI education for other students.",
        fr: "Projets avec l'association d'IA de CentraleSupélec : création et entraînement de réseaux de neurones, gestion de projet et pédagogie IA auprès des autres étudiants.",
      },
      tags: ["Neural networks", "PyTorch", { en: "Teaching", fr: "Pédagogie" }],
      links: [],
      cover: "orbit",
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

  // logos: names of files in assets/logos (without .png)
  education: [
    {
      label: "2024 — 2028",
      logos: ["centralesupelec", "essec"],
      title: "CentraleSupélec × ESSEC",
      lines: [
        { en: "Double degree — Bachelor in Artificial Intelligence, Data Analysis & Management Sciences", fr: "Double diplôme — Bachelor en intelligence artificielle, analyse de données et sciences du management" },
        { en: "Coursework: advanced linear algebra, probability, Python, data analysis, machine learning, cost analysis, microeconomics.", fr: "Cours : algèbre linéaire avancée, probabilités, Python, analyse de données, machine learning, analyse des coûts, microéconomie." },
      ],
      tags: ["Machine learning", { en: "Mathematics", fr: "Mathématiques" }, "Data science", "Management"],
    },
    {
      label: "2021 — 2024",
      title: "Lycée Notre-Dame Les Oiseaux",
      lines: [
        { en: "Baccalauréat in Mathematics & Computer Science — Expert Mathematics option", fr: "Baccalauréat spécialités Mathématiques & Informatique — option Maths expertes" },
        { en: "High honours.", fr: "Mention très bien." },
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
        { en: "Built from scratch an MCP server in Python that integrates Alteryx Server into an agentic AI infrastructure, with Claude as the orchestration layer.", fr: "Construction de zéro d'un serveur MCP en Python qui intègre Alteryx Server dans une infrastructure d'IA agentique, avec Claude comme couche d'orchestration." },
        { en: "Developed a full Data Quality pipeline: anomalies detected by Alteryx, stored in Supabase, queryable by Claude in real time.", fr: "Développement d'un pipeline Data Quality complet : anomalies détectées par Alteryx, stockées dans Supabase, interrogeables par Claude en temps réel." },
        { en: "Designed compliance workflows for banking & insurance (AMF threshold detection on 50,000 positions, automated PDF reports).", fr: "Conception de workflows de conformité banque & assurance (détection de seuils AMF sur 50 000 positions, rapports PDF automatiques)." },
        { en: "Rebuilt the AI Prompting macro and a multi-document text extraction tool to reduce LLM token costs.", fr: "Refonte de la macro AI Prompting et d'un outil d'extraction multi-documents pour réduire les coûts en tokens." },
        { en: "Presented the full MCP solution to Alteryx on 29 July 2026.", fr: "Présentation de la solution MCP complète à Alteryx le 29 juillet 2026." },
      ],
      tags: ["Python", "MCP", "Claude", "Alteryx", "Supabase"],
    },
    {
      label: { en: "2024 — today", fr: "2024 — aujourd'hui" },
      title: { en: "Member — AUTOMATANTS, CentraleSupélec AI association", fr: "Membre — AUTOMATANTS, association d'IA de CentraleSupélec" },
      lines: [{ en: "Neural network projects, project management and AI education initiatives.", fr: "Projets de réseaux de neurones, gestion de projet et initiatives de pédagogie IA." }],
    },
    {
      label: { en: "2025 — today", fr: "2025 — aujourd'hui" },
      title: { en: "Event Host — Trinity Agency", fr: "Hôte événementiel — Trinity Agency" },
      lines: [{ en: "Welcoming guests at high-end corporate events and gala evenings in Paris.", fr: "Accueil des invités lors d'événements d'entreprise haut de gamme et de soirées de gala à Paris." }],
    },
  ],

  skills: [
    { label: { en: "Languages", fr: "Langues" }, tags: [{ en: "French — native", fr: "Français — natif" }, { en: "English — fluent", fr: "Anglais — courant" }, { en: "Spanish — intermediate", fr: "Espagnol — intermédiaire" }] },
    { label: { en: "Programming", fr: "Programmation" }, tags: ["Python", "pandas", "NumPy", "scikit-learn", "TensorFlow", "PyTorch", "SQL", "HTML", "LaTeX"] },
    { label: "AI & data", tags: ["Claude / Anthropic API", "OpenAI API", "MCP", "Alteryx", "Supabase", "Streamlit", "n8n", "MLflow"] },
    { label: { en: "Tools", fr: "Outils" }, tags: ["Git / GitLab", "VS Code", "Jupyter", "MS Office"] },
  ],

  interests: [
    {
      label: { en: "Artificial intelligence", fr: "Intelligence artificielle" },
      title: { en: "AI that does real work.", fr: "Une IA qui travaille vraiment." },
      desc: {
        en: "Agentic AI, MCP and LLM evaluation — and how to make AI answers auditable, affordable and useful to a business.",
        fr: "IA agentique, MCP et évaluation de LLM — et comment rendre les réponses d'une IA vérifiables, abordables et utiles à une entreprise.",
      },
    },
    {
      label: "Sport",
      title: { en: "Endurance.", fr: "L'endurance." },
      desc: {
        en: "Triathlon (5 sessions a week), Paris Marathon 2025 finisher, and tennis.",
        fr: "Triathlon (5 entraînements par semaine), finisher du Marathon de Paris 2025, et tennis.",
      },
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

  // Extra useful links, shown under the main ones.
  usefulLinks: [
    { title: "Prompt Bench", desc: { en: "Test any prompt for reliability and cost — live.", fr: "Testez la fiabilité et le coût d'un prompt — en ligne." }, url: "https://mariusrang.github.io/banc-essai-prompts/" },
    { title: { en: "Global steel plants dashboard", fr: "Dashboard mondial des aciéries" }, desc: { en: "Explore the map of the world's steel industry.", fr: "Explorez la carte de l'industrie sidérurgique mondiale." }, url: "https://aidams-lab1-gusching-rang-henz-guetari-citthygx7ko6rixwsgvrob.streamlit.app/" },
    { title: "Model Context Protocol", desc: { en: "The open standard behind my Alteryx × Claude server.", fr: "Le standard ouvert derrière mon serveur Alteryx × Claude." }, url: "https://modelcontextprotocol.io/" },
  ],
};
