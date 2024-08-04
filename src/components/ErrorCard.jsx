import "./css/ErrorCard.css";

const ErrorCard = ({ error }) => {
  return (
    <div data-testid="error-card-id" className="error-card">
      <h2 className="title-text">Error</h2>
      <p className="text">{error}</p>
    </div>
  );
};

export default ErrorCard;
