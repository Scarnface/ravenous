const apiKey = 'hQUZNhif-5saEPt5woYRjQ1QP3FBTiGsja9t6vvqJiMUVJH1nml5Byg23ieBZ8I50M--wl-pbpLRCEAXqCHZJudUPLqYI52wGzAEzrs0DMB0rYL2TdoaZzVTs5a1XnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;