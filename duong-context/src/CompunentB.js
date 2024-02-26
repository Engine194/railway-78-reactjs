import CompunentC from "./CompunentC";

const CompunentB = (props) => {
  return (
    <div>
      <CompunentC {...props} />;
    </div>
  );
};

export default CompunentB;
