import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CardAdvert from '../../components/CardAdvert/CardAdvert';
import { getAllFavouritesThunk } from '../../redux/thunks/getAllFavouritesThunk';
import './Favourites.sass';

const Favourites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFavouritesThunk());
  }, []);
  let cards= useSelector((state) => state.getAllFavourites);

  return (
    <section className="container advertisement cards-pet">
      <div className="cards-pet__cards">
        <div className="cards-pet__row">
          {cards?.map((card) => {
            return (
              <CardAdvert
                id={card.id}
                key={`card-${card.id}`}
                name={card.title}
                description={card.animalDescription}
                price={card.price}
                images={card.images}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favourites;
