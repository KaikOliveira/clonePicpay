import React from 'react';
import { Feather, MateiralCommunityIcons, FontAwesome } from '@expo/vector-icons';

import { 
    Wrapper,
    Header,
    HeaderContainer, 
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton, 
    Info,
    Actions,
    Action,
    ActionLabel,
} from './styles';

export default function Wallet(){
    return(
        
        <Wrapper>
            <Header colors={['#52e78c', '#1ab563']}>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>

                    <BalanceContainer>
                        <Value>
                            R$ <Bold>0,00</Bold>
                        </Value>

                        <EyeButton>
                            <Feather name="eye" size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>
                    <Info>
                        Seu saldo esta rendendo 100% do cdi
                    </Info>

                    <Actions>
                        <Action>
                            <MateiralCommunityIcons name="cash" size={28} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>

                        <Action>
                            <FontAwesome name="bank" size={20} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>
        </Wrapper>
    );
}