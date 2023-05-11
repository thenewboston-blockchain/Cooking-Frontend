import Recipe from 'components/Recipe';
import {Recipe as TRecipe, SFC} from 'types';
import * as S from './Styles';

const recipes: TRecipe[] = [
  {
    description: 'A classic spaghetti with meatballs recipe',
    id: '1',
    imageUrl:
      'https://images.pexels.com/photos/12720645/pexels-photo-12720645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Spaghetti and Meatballs',
  },
  {
    description: 'A quick and easy chicken stir-fry recipe',
    id: '2',
    imageUrl:
      'https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Chicken Stir-Fry',
  },
  {
    description: 'A hearty beef stew recipe perfect for cold nights',
    id: '3',
    imageUrl:
      'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Beef Stew',
  },
  {
    description: 'A refreshing salad recipe with mixed greens and strawberries',
    id: '4',
    imageUrl:
      'https://images.pexels.com/photos/1684376/pexels-photo-1684376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Strawberry Salad',
  },
];

const Right: SFC = ({className}) => {
  const renderRecipeList = () => {
    const items = recipes.map(({id, description, imageUrl, name}) => (
      <Recipe description={description} imageUrl={imageUrl} key={id} name={name} />
    ));

    return <S.RecipeList>{items}</S.RecipeList>;
  };

  return <S.Container className={className}>{renderRecipeList()}</S.Container>;
};

export default Right;
