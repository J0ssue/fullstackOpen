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

const Content = ({
  exercises,
}: {
  exercises: { name: string; exercises: number }[];
}) => {
  return (
    <>
      <Part name={exercises[0].name} exercises={exercises[0].exercises} />
      <Part name={exercises[1].name} exercises={exercises[1].exercises} />
      <Part name={exercises[2].name} exercises={exercises[2].exercises} />
    </>
  );
};

const Total = ({ total }: { total: number }) => {
  return <p>Number of exercises {total}</p>;
};

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <div>
        <Header name={course.name} />
        <Content exercises={[...course.parts]} />

        <Total
          total={
            course.parts[0].exercises +
            course.parts[1].exercises +
            course.parts[2].exercises
          }
        />
      </div>
    </>
  );
}

export default App;
