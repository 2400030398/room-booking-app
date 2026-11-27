const rooms = [
  { name: "Standard Room", capacity: 2, price: 1800, description: "A comfortable room for short stays." },
  { name: "Deluxe Room", capacity: 3, price: 2800, description: "Extra space with a city view." },
  { name: "Family Suite", capacity: 5, price: 4200, description: "A spacious suite for families." }
];
const form = document.querySelector("#search-form");
const output = document.querySelector("#rooms");
const message = document.querySelector("#message");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const guests = Number(document.querySelector("#guests").value);
  const matches = rooms.filter((room) => room.capacity >= guests);
  output.innerHTML = matches.map((room) => `<article class="room"><h2>${room.name}</h2><p>${room.description}</p><p>Up to ${room.capacity} guests</p><p class="price">₹${room.price} / night</p></article>`).join("");
  message.textContent = matches.length ? `${matches.length} room type(s) found.` : "No rooms match that guest count.";
});