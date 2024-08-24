const virtualPet = {
    name: "Donald",
    type: "Duck",
    age: 1,
    happiness: 50,
    hunger: 50,
    evolve: function() {
        if (this.happiness > 80 && this.hunger < 20) {
            this.type = "Teen Duck";
            this.name = "Donald";
        } else if (this.happiness < 10 && this.hunger > 1000) {
            this.type = "Adult Duck";
            this.name = "Donald";
        }
        this.updateImage();
    },
    feed: function(amount) {
        this.hunger -= amount;
        this.happiness += amount / 2;
        this.updateStatus();
    },
    play: function(time) {
        this.happiness += time;
        this.hunger += time / 2;
        this.updateStatus();
    },
    passTime: function() {
        this.age += 1;
        this.happiness -= 10;
        this.hunger += 10;
        this.evolve();
        this.updateStatus();
    },
    updateStatus: function() {
        document.getElementById('petStatus').innerHTML = `
            <p><strong>Name:</strong> ${this.name}</p>
            <p><strong>Type:</strong> ${this.type}</p>
            <p><strong>Age:</strong> ${this.age}</p>
            <p><strong>Happiness:</strong> ${this.happiness}</p>
            <p><strong>Hunger:</strong> ${this.hunger}</p>
        `;
    },
    updateImage: function() {
        let imageUrl = '';
        if (this.type === "Teen Duck") {
            imageUrl = 'images/teen.png';  // Replace with the actual image URL
        } else if (this.type === "Adult Duck") {
            imageUrl = 'images/adult.png';  // Replace with the actual image URL
        } else {
            imageUrl = 'images/baby.png';  // Replace with the default duck image URL
        }
        document.getElementById('petImage').innerHTML = `<img src="${imageUrl}" alt="${this.type}">`;
    }
};

function feedPet() {
    virtualPet.feed(20);
}

function playWithPet() {
    virtualPet.play(30);
}

function passTime() {
    virtualPet.passTime();
}

// Initial display of the pet's status and image
virtualPet.updateStatus();
virtualPet.updateImage();
