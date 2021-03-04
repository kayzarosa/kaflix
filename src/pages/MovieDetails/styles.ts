import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  padding: 40px 24px 20px;
  background: #0e0a0a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 40,
  },
})`
  margin-top: -40px;
`;

export const MoviesContainer = styled.View`
  padding: 0 24px;
`;

export const Food = styled.View`
  display: flex;
  flex-direction: column;
  background: #f0f0f5;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const MovieImageContainer = styled.View`
  background: #ffb84d;
  overflow: hidden;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const MovieContent = styled.View`
  padding: 24px;
`;

export const MovieTitle = styled.Text`
  font-family: 'ShipporiMincho-Regular';
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #3d3d4d;
`;

export const MovieDescription = styled.Text`
  font-family: 'ShipporiMincho-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  margin-top: 8px;
  color: #3d3d4d;
`;

export const MovieInfos = styled.Text`
  font-family: 'ShipporiMincho-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 28px;
  color: #6c6c80;
  margin-top: 8px;
  font-weight: 600;
`;

export const Title = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #3d3d4d;
`;
