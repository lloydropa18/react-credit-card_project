const CreditCard = ({ formData, side }) => {
  const getCardType = () => {
    if (
      formData.number.slice(0, 2) === "37" ||
      formData.number.slice(0, 2) === "34"
    ) {
      return "amex";
    }
    if (formData.number.slice(0, 1) === "4") return "visa";

    if (
      formData.number.slice(0, 2) === "510" ||
      formData.number.slice(0, 2) === "555"
    ) {
      return "mastercard";
    }

    return "mastercard";
  };
  const startState = [
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
  ];
  return (
    <div className="credit-card">
      {side === "front" && (
        <div className={`${getCardType()}-front-side card`}>
          <div className="card-details-container">
            <div className="detail-container">
              <p>Expiry: </p>
              <h2>{formData.date}</h2>
            </div>

            <div className="detail-container">
              <p>Cardholder: </p>
              <h2>{formData.name}</h2>
            </div>
          </div>
          <div className="number-display">
            {/* <h3>{formData.number}</h3> */}
            {startState.map((item, index) => {
              return <h3 key={index}>{formData.number[index] || item}</h3>;
            })}
          </div>
        </div>
      )}

      {side === "back" && (
        <div className={`${getCardType()}-back-side card`}>
          <div id="cvv-display">
            <p>{formData.cvv}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditCard;
