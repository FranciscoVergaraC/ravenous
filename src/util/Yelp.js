const apiKey = "ftNcCv-0Yf-M_g8FasiAgrC7b4oVJsSxiLBKvcgTqGvELKgFRLyvTGih1XFak4KbLxy3MsgYr2hRgsuNhJtriD1nOKfhU-cglssVxy53BEv2ZDwHA1Qtf2eQKkxXYHYx";
const yelp = {
    searchYelp(term,location,sortBy){
        console.log(`Se hace un llamado a la API de Yelp con ${term}, ${location} y ${sortBy}`);
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return { 
                        id: business.id,
                        imageSrc: business.image_url, 
                        name: business.alias,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.alias,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                })};
            }
        )
    }
};

export default yelp; 
