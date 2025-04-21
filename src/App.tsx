const Header = (props: { title: string }) => {
  return <h1>{props.title}</h1>;
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
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <>
      <div>
        <Header title={course} />
        <Content
          exercises={[
            { name: part1, exercises: exercises1 },
            { name: part2, exercises: exercises2 },
            { name: part3, exercises: exercises3 },
          ]}
        />

        <Total total={exercises1 + exercises2 + exercises3} />
      </div>
    </>
  );
}

export default App;
