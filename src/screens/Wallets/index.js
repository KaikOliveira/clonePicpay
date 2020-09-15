import React from 'react';

import { 
    Wrapper,
    Header,
    HeaderContainer, 
    Title,
    BalanceContainer,
    Value,
    Bold, 
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
                    </BalanceContainer>
                </HeaderContainer>
            </Header>
        </Wrapper>
    );
}