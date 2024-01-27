import './styles.css';

export default function Body() {
  return (
    <div>
      <main className="flex-1 w-full flex flex-col gap-20 justify-center items-center">
        <h2 className="text-center font-bold text-4xl mb-4">
          Cognitive Calendar
        </h2>
        <p className="text-1.5xl !leading-tight mx-auto max-w-xl text-center">
          The Cognitive Calendar is an app designed to organize your tasks and
          activities based on various cognitive functions, enhancing your
          efficiency and productivity.
        </p>
        <p className="text-1.5xl !leading-tight mx-auto max-w-xl text-center">
          Here are the cognitive abilities we'll be working with and more
          information about them, though do know that we are not saying these
          are all of the cognitive abilities, but just that these are the ones
          we'll be working with in this app:
        </p>
        <div className="flex pl-20 pr-20">
          {/* Column 1: Cognitive Functions */}
          <div
            className={`bg-blue-500 rounded-tl-md rounded-bl-md p-4 flex flex-col items-center`}
          >
            <h3 className="text-white text-lg font-bold mb-2 h-20">
              Cognitive Abilities
            </h3>
            <ul className="list-disc pl-3 text-white text-lg">
              <li className={styles.row}>Analytical</li>
              <li className={styles.row}>Perceptual</li>
              <li className={styles.row}>Creative</li>
              <li className={styles.row}>Conceptual</li>
              <li className={styles.row}>Strategic</li>
              <li className={styles.row}>Administrative</li>
              <li className={styles.row}>Technical</li>
              <li className={styles.row}>Collaborative</li>
            </ul>
          </div>

          <div
            className={`bg-green-500 rounded-tl-md rounded-bl-md p-4 flex flex-col items-center`}
          >
            <h3 className="text-white text-lg font-bold mb-2 h-20">
              Definitions
            </h3>
            <ul className="list-disc pl-3 text-white text-lg">
              <li className={styles.row}>
                More than one piece may fit into the puzzle, but not all bring
                the same value.
              </li>
              <li className={styles.row}>
                Viewing the puzzles from different angles instead of from above
                the coffee table.
              </li>
              <li className={styles.row}>
                Generating ideas and solutions in an unstructured and
                free-flowing manner.
              </li>
              <li className={styles.row}>
                Creating concepts and forming innovative connections between
                ideas.
              </li>
              <li className={styles.row}>
                Using your resources to the best of their ability, even if they
                aren't designed for that purpose.
              </li>
              <li className={styles.row}>
                Organizing and managing tasks, resources, and people
                efficiently.
              </li>
              <li className={styles.row}>
                Applying specialized knowledge and skills to solve practical
                problems.
              </li>
              <li className={styles.row}>
                Working cooperatively with others to achieve shared objectives.
              </li>
            </ul>
          </div>

          {/* Column 3: Examples */}
          <div
            className={`bg-orange-500 rounded-tl-md rounded-bl-md p-4 flex flex-col items-center`}
          >
            <h3 className="text-white text-lg font-bold mb-2 h-20">Examples</h3>
            <ul className="list-disc pl-3 text-white text-lg">
              <li className={styles.row}>
                Some people complete a puzzle best by starting with the edges,
                others by the colors, and others just start.
              </li>
              <li className={styles.row}>
                The kids' new clothing as a chore, but it could be viewed as a
                chance to help them define their style.
              </li>
              <li className={styles.row}>
                Approaching a problem by generating as many ideas as possible
                without worrying about structure or feasibility.
              </li>
              <li className={styles.row}>
                Making connections between seemingly unrelated concepts to
                create innovative solutions.
              </li>
              <li className={styles.row}>
                Developing a step-by-step plan with milestones and deadlines to
                achieve a long-term objective.
              </li>
              <li className={styles.row}>
                Efficiently organizing tasks, resources, and team members to
                achieve project goals.
              </li>
              <li className={styles.row}>
                Applying technical expertise to solve practical problems and
                challenges.
              </li>
              <li className={styles.row}>
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
