

export default function FavoriteButton({ userId, placeId, setFavorites }) {

  async function handleClick() {
    try {
      // const response = await fetch('http://localhost:8080/api/favorite-places', {
      const response = await fetch('https://thefieldtrip-backend.onrender.com/api/favorite-places', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({userId, placeId}),
      });
      const result = await response.json();
      setFavorites(result);
      

    } catch (error) {
    };
};

return (
  <div className="favoriteButton">
    <button onClick={() => {
    handleClick();
    alert("This place has been added to your favorites.")
    }}>Add to Favorites</button>
  </div>
);
};