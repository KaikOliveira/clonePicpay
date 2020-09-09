import styled from './node_modules/styled-components/native';
import { LinearGradient } from './node_modules/expo-linear-gradient';

export const Button= styled(LinearGradient)`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;

export const Label = styled.Text`
    font-size: 12px;
    color: #fff;
`;