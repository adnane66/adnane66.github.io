// Composant 1 : La carte de projet (ProjectCard) 
const ProjectCard = ({ title, module, description, technologies, link }) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p style={{fontSize: '0.9rem', color: '#64748b', marginBottom: '10px'}}><strong>Module :</strong> {module}</p>
            <p>{description}</p>
            <div className="tech-tags">
                {technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                ))}
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                Lien GitHub <i className="fab fa-github"></i>
            </a>
        </div>
    );
};

//  Composant 2 : La liste des projets (ProjectList)
const ProjectList = () => {
    // Données de vos projets en S3
    const projectsData = [
        {
            id: 1,
            title: "Mini-Jeu Rock-Paper-Scissors",
            module: "Programmation Web 1 (S3)",
            description: "Création du célèbre jeu interactif Pierre-Papier-Ciseaux jouable directement dans le navigateur. Application des concepts de base du DOM et de la logique conditionnelle.",
            technologies: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/adnane66" // Modifiez si vous avez un lien direct vers le repo
        },
        {
            id: 2,
            title: "Projet Assembleur",
            module: "Architecture des ordinateurs (S3)",
            description: "Développement d'un projet bas niveau permettant de mieux comprendre le fonctionnement du processeur et la gestion de la mémoire système.",
            technologies: ["Langage Assembleur", "Architecture système"],
            link: "https://github.com/adnane66"
        }
    ];

    return (
        <div className="projects-grid">
            {projectsData.map(project => (
                <ProjectCard 
                    key={project.id}
                    title={project.title}
                    module={project.module}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                />
            ))}
        </div>
    );
};

//  Composant 3 : Le formulaire de contact (ContactForm) 
const ContactForm = () => {
    return (
        <form id="contact-form" className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input type="text" id="name" name="name" placeholder="Ex: Elouali Adnane" />
                <span className="error-msg" id="error-name">Le nom est requis.</span>
            </div>
            
            <div className="form-group">
                <label htmlFor="email">Adresse Email</label>
                <input type="email" id="email" name="email" placeholder="votre.email@example.com" />
                <span className="error-msg" id="error-email">Veuillez entrer une adresse email valide.</span>
            </div>
            
            <div className="form-group">
                <label htmlFor="message">Votre Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Bonjour, je vous contacte pour..."></textarea>
                <span className="error-msg" id="error-message">Le message ne peut pas être vide.</span>
            </div>
            
            <button type="submit" className="btn-submit">
                Envoyer le message <i className="fas fa-paper-plane"></i>
            </button>
        </form>
    );
};

// Rendu dans le DOM 
const projectsRoot = ReactDOM.createRoot(document.getElementById('react-projects-root'));
projectsRoot.render(<ProjectList />);

const contactRoot = ReactDOM.createRoot(document.getElementById('react-contact-root'));
contactRoot.render(<ContactForm />);