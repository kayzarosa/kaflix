import styled, { css } from 'styled-components/native';

interface CategoryItemProps {
  isSelected?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  padding: 60px 24px 60px;
  background: #0e0a0a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AplicationTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: 'ShipporiMincho-ExtraBold';
  font-weight: 700;
`;

export const AplicationSubTitle = styled.Text`
  color: #fff;
  font-size: 12px;
  font-family: 'ShipporiMincho-SimiBold';
  font-weight: 500;
`;

export const FilterContainer = styled.View`
  padding: 0 24px;
  margin-top: -28px;
`;

export const Title = styled.Text`
  font-family: 'ShipporiMincho-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #3d3d4d;
  padding: 0 20px;
`;

export const CategoryContainer = styled.View`
  margin-top: 40px;
`;

export const CategorySlider = styled.ScrollView`
  margin-top: 16px;
`;

export const CategoryItem = styled.TouchableOpacity<CategoryItemProps>`
  background-color: #f0f0f5;
  border: 2px;
  border-color: #f0f0f5;
  height: 120px;
  width: 120px;
  border-radius: 8px;
  padding-top: 20px;
  padding-bottom: 16px;
  margin-right: 8px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  ${props =>
    props.isSelected &&
    css`
      border-color: #c72828;
      background-color: #ffebeb;
    `}
`;

export const CategoryItemTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  color: #6c6c80;
`;

export const MoviesContainer = styled.View`
  margin-top: 40px;
`;

export const MovieList = styled.View`
  flex: 1;
  padding: 0 20px;
  margin-top: 16px;
`;

export const Movie = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #f0f0f5;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const MovieImageContainer = styled.View`
  background: #0e0a0a;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 16px;
  height: 100%;
`;

export const MovieContent = styled.View`
  flex: 1;
  padding: 16px;
`;

export const MovieTitle = styled.Text`
  font-family: 'ShipporiMincho-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #3d3d4d;
`;
export const MovieDescription = styled.Text`
  font-family: 'ShipporiMincho-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;
  margin-top: 6px;
  color: #3d3d4d;
`;

export const MovieDetalhes = styled.Text`
  font-family: 'ShipporiMincho-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 21px;
  margin-top: 8px;
  font-weight: 600;
  color: #39b100;
`;
