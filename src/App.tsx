type TExercise = { id: number; name: string; exercises: number };
const Header = (props: { name: string }) => {
  return <h1>{props.name}</h1>;
};

const Part = ({ name, exercises }: { name: string; exercises: number }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ exercises }: { exercises: TExercise[] }) => {
  return exercises.map((ex) => (
    <Part key={ex.id} name={ex.name} exercises={ex.exercises} />
  ));
};

const Total = ({ total }: { total: number }) => {
  return (
    <p>
      <b>Number of exercises {total}</b>
    </p>
  );
};

function App() {
  const courses: { id: number; name: string; parts: TExercise[] }[] = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return courses.map(
    (course: { id: number; name: string; parts: TExercise[] }) => {
      const total = course.parts.reduce((acc, part) => acc + part.exercises, 0);
      return (
        <div key={course.id}>
          <Header name={course.name} />
          <Content exercises={[...course.parts]} />

          <Total total={total} />
        </div>
      );
    }
  );
}

export default App;
