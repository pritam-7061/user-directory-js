let userContainer = document.querySelector(".userContainer");
let searchInput = document.getElementById("searchInput");

const users = [
  {
    profile:
      "https://imgs.search.brave.com/ffntRHtKE37SorSpzVc_Eg9A5qzuCCrlly2RJfBzkNQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIy/NDY1OTQ3NC9waG90/by9oZWFkc2hvdC1w/b3J0cmFpdC1vZi1h/dHRyYWN0aXZlLXlv/dW5nLXdvbWFuLXdp/dGgtbWFrZS11cC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/NWMtYk5FOTlvUE5I/VkFuYjkzcVFEQVl3/eFczWHo3Y1UyUTZE/RlE2WGtUYz0",
    name: "Otilia",
    email: "otilia879@gmail.com",
  },
  {
    profile:
      "https://imgs.search.brave.com/-jiS22URaVMVpj4Y0OtgCLO8Dd2JnbfmkeYuUpRq0hk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudm9ndWUuY29t/L3Bob3Rvcy81ODc3/Mjk2NjdlMThhODZl/N2JmN2Y0ODYvbWFz/dGVyL3dfMTAyNCxj/X2xpbWl0LzItYW1l/cmljYW4tbW9kZWxz/LmpwZw",
    name: "Gigi Hadid",
    email: "gigihadid44@gmail.com",
  },
  {
    profile:
      "https://imgs.search.brave.com/CiSxe61XzZ_cBs9oIsGMLP5t95xvlzib8zkUc-Srwt4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z25nbW9kZWxzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wOS8xUEIxMTg5/LWEtYS5qcGc",
    name: "John Doe",
    email: "johndoe@example.com",
  },
  {
    profile:
      "https://imgs.search.brave.com/ViD6veKiA9XDQKlhxv9_qXqAUiEft70d04o0vT743vc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z25nbW9kZWxzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wNC9zdW5ueS1s/ZW9uZS1waG90b3No/b290LXdpdGgtcHJh/dmVlbi1iaGF0LTQu/anBn",
    name: "Sarah Connor",
    email: "connosarah96@gmail.com",
  },
];

function renderUsers(arr) {

    userContainer.innerHTML = '';
  arr.map(function (obj) {
    let { profile, name, email } = obj;

    let element = document.createElement("div");
    element.className = "userItem";
    element.innerHTML = `
    
          <img class
            src="${profile}"
            alt="model1"
          />
          <div class="userInformation">
            <h3>${name}</h3>
            <p>${email}</p>
          </div>
        `;

    userContainer.appendChild(element);
  });
}

renderUsers(users);

function handleSearch(e) {
  let searchValue = e.target.value;

  let filteredUsers = users.filter((obj) => {
    return (
      obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      obj.email.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
  renderUsers(filteredUsers);
}

searchInput.addEventListener("input", handleSearch);
