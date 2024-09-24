import PageIntro from "../components/PageIntro";
import ProjectItem from "../components/ProjectItem";

const projectsInfoObj = [
	{
		name: "WorldWise",
		description:
			"is an interactive map app where users can mark countries or places they've visited. For each location, users can add personal notes, such as travel experiences, important details, or memories.",
		link: "https://quiel-worldwise.netlify.app",
		img: "./assets-for-portfolio/projects-img/worldwise.png",
		tech: ["ReactJS", "CSS Modules", "Context API", "React-router"],
	},

	{
		name: "usePopcorn",
		description:
			"is a movie app where users can search for movies, rate them, and add them to a personalized watchlist. The app allows users to track their favorite films, organize ratings, and easily find movies they've enjoyed or want to watch in the future. It's a fun and simple way to manage your movie preferences.",
		link: "https://quiel-usepopcorn.netlify.app",
		img: "./assets-for-portfolio/projects-img/usePopcorn.png",
		tech: ["ReactJS", "CSS Modules", "Context API", "OMDB API"],
	},
	{
		name: "Forkify",
		description:
			"is a recipe app where users can search for a variety of recipes, bookmark their favorites, and even add their own custom recipes. Users can also adjust the serving size of any recipe, automatically updating the ingredients to fit their needs. It’s a personalized and convenient way to discover, save, and customize recipes.",
		link: "https://forkify-good-food-recipes.netlify.app",
		img: "./assets-for-portfolio/projects-img/forkify.png",
		tech: ["Forkify API", "HTML", "JavaScript", "Sass", "NPM"],
	},
	{
		name: "Dice Game",
		description:
			"a simple JavaScript application that simulates rolling two dice. It displays random dice images and declares a winner based on the dice roll results. It's a fun project for beginners learning JavaScript.",
		link: "https://quielloveslasagna.github.io/Dice-Game/",
		img: "./assets-for-portfolio/projects-img/dice-game.png",
		tech: ["HTML", "CSS", "JavaScript"],
	},
];

function Projects({ projectsRef }) {
	return (
		<section className="projects" ref={projectsRef}>
			<PageIntro num="05." title="Projects" />
			<div className="projects_container">
				<ProjectItem type="right" info={projectsInfoObj[0]} />
				<ProjectItem type="left" info={projectsInfoObj[1]} />
				<ProjectItem type="right" info={projectsInfoObj[2]} />
				<ProjectItem type="left" info={projectsInfoObj[3]} />
			</div>
		</section>
	);
}

export default Projects;
