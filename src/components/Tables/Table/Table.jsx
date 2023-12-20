import './Table.css';

// eslint-disable-next-line react/prop-types
const Table = ({ title }) => {
  return (
      <div className="card container">
        <div className="card-header">
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
  );
};

export default Table;