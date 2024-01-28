import 'styles/main.css';

export default function Body() {
  return (
    <div>
      <main className="flex-1 w-full flex flex-col justify-center items-center">
        <h2 className="text-center font-bold text-5xl mb-4 signika-title pt-10 pb-10">
          Cognitive Calendar
        </h2>

        <p className="text-1.5xl !leading-tight mx-auto max-w-xl text-center">
          The Cognitive Calendar is designed to organize your tasks and
          activities based on your cognitive abilities, enhancing your
          efficiency and productivity.
        </p>
        <p className="text-1.5xl !leading-tight mx-auto max-w-xl text-center pt-10 ">
          Here are the cognitive abilities we'll be working with and more
          information about them, though do know that we are not saying these
          are all of the cognitive abilities, but just that these are the ones
          we'll be working with in this app:
        </p>
        <div className="flex pl-20 pr-20 pt-20 flex-columns justify-center items-center">
          {/* Column 1: Cognitive Functions */}
          <div className="bg-blue-500 rounded-md rounded-bl-md p-4 flex flex-col items-center">
            <h3 className="text-white text-lg font-bold mb-2 h-20">
              Cognitive Abilities
            </h3>
            <ul className="list-disc pl-3 text-white text-lg">
              <li className="list-item">Analytical</li>
              <li className="list-item">Perceptual</li>
              <li className="list-item">Creative</li>
              <li className="list-item">Conceptual</li>
              <li className="list-item">Strategic</li>
              <li className="list-item">Administrative</li>
              <li className="list-item">Technical</li>
              <li className="list-item">Collaborative</li>
            </ul>
          </div>

          {/* Column 2: Definitions */}
          <div className="bg-green-500 rounded-md rounded-bl-md p-4 flex flex-col items-center">
            <h3 className="text-white text-lg font-bold mb-2 h-20">
              Definitions
            </h3>
            <ul className="list-disc pl-3 text-white text-lg">
              <li className="list-item">
                More than one piece may fit into the puzzle, but not all bring
                the same value.
              </li>
              <li className="list-item">
                Viewing the puzzles from different angles instead of from above
                the coffee table.
              </li>
              <li className="list-item">
                Generating ideas and solutions in an unstructured and
                free-flowing manner.
              </li>
              <li className="list-item">
                Creating concepts and forming innovative connections between
                ideas.
              </li>
              <li className="list-item">
                Using your resources to the best of their ability, even if they
                aren't designed for that purpose.
              </li>
              <li className="list-item">
                Organizing and managing tasks, resources, and people
                efficiently.
              </li>
              <li className="list-item">
                Applying specialized knowledge and skills to solve practical
                problems.
              </li>
              <li className="list-item">
                Working cooperatively with others to achieve shared objectives.
              </li>
            </ul>
          </div>

          {/* Column 3: Examples */}
          <div className="bg-orange-500 rounded-md rounded-bl-md p-4 flex flex-col items-center">
            <h3 className="text-white text-lg font-bold mb-2 h-20">Examples</h3>
            <ul className="list-disc pl-3 text-white text-lg">
              <li className="list-item">
                Some people complete a puzzle best by starting with the edges,
                others by the colors, and others just start.
              </li>
              <li className="list-item">
                The kids' new clothing as a chore, but it could be viewed as a
                chance to help them define their style.
              </li>
              <li className="list-item">
                Approaching a problem by generating as many ideas as possible
                without worrying about structure or feasibility.
              </li>
              <li className="list-item">
                Making connections between seemingly unrelated concepts to
                create innovative solutions.
              </li>
              <li className="list-item">
                Developing a step-by-step plan with milestones and deadlines to
                achieve a long-term objective.
              </li>
              <li className="list-item">
                Efficiently organizing tasks, resources, and team members to
                achieve project goals.
              </li>
              <li className="list-item">
                Applying technical expertise to solve practical problems and
                challenges.
              </li>
              <li className="list-item">
                Collaborating with team members, leveraging each other's
                strengths, to achieve common goals.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
