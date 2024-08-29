document.addEventListener('DOMContentLoaded', function() {
    const featuredArtists = [
        {
            name: "George Enescu",
            image: "https://placekitten.com/300/200", // Placeholder image
            description: "Renowned composer, violinist, and conductor, considered one of Romania's most important musicians."
        },
        {
            name: "Maria Tanase",
            image: "./poze/titibotez.jpg", // Placeholder image
            description: "Celebrated folk singer, often referred to as 'the Romanian Edith Piaf'."
        },
        {
            name: "Elly Roman",
            image: "https://placekitten.com/202/200", // Placeholder image
            description: "Prolific composer who wrote over 400 songs, contributing significantly to Romanian popular music."
        }
    ];

    const featuredArtistsContainer = document.querySelector('.featured-artists');

    for (let i = 0; i < featuredArtists.length; i++) {
        const artist = featuredArtists[i];
        const artistCard = document.createElement('div');
        artistCard.className = 'artist-card';

        let img_ = document.createElement('img');
        img_.src = artist.image;
        img_.alt = artist.name;
        img_.height = "100px";
        artistCard.appendChild(img_);


        let div_ = document.createElement('div');
        div_.className = 'artist-info';
        
        let h3_ = document.createElement('h3');
        h3_.textContent = artist.name;
        div_.appendChild(h3_);
        
        let p_ = document.createElement('p');
        p_.textContent = artist.description;
        div_.appendChild(p_);
        artistCard.appendChild(div_);

        let a_ = document.createElement('a');
        a_.textContent = 'Mai multe:' ;
        a_.addEventListener('click',function(){
            trimite_userul_la_fisierul_selectat(artist.name);
        });
        //the link ain't linking, this is the next best thing
        div_.appendChild(a_);
        
        featuredArtistsContainer.appendChild(artistCard);
    }
});


function trimite_userul_la_fisierul_selectat(valoare_input){
    valoare_input = valoare_input.toLowerCase();
    window.location.href = "./artisti/"+valoare_input+".html";
}



