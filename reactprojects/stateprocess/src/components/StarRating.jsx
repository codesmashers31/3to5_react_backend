import { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  //alert(rating)

  return (
    <div>
      <h2>Star Rating</h2>

      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: star <= rating ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}

      <br />
      <button onClick={() => setRating(0)}>Reset</button>
    </div>
  );
}

export default StarRating;