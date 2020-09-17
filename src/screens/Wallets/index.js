import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, Text, View, Switch } from 'react-native';

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
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTile,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UseTicketButton,
    UseTicketLabel,
    UseTicketConteiner,
} from './styles';

import creditCard from '../../images/credit-card.png';

//import { Actions, Action, ActionLabel,} from './styles';

export default function Wallet(){

const [isVisible, setIsVisble] = useState(true);
const [useBalance, setUseBalance] = useState(true);

    function handleToggleVisibility(){
        setIsVisble((prevState) => !prevState);
    }
    function handleToggleUseBalance(){
        setUseBalance((prevState) => !prevState);
    }

    return(
        
        <Wrapper>
            <Header 
            colors={
                useBalance
                ? ['#52e78c', '#1ab563']
                : ['#D3D3D3', '#868686']
            }>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>

                    <BalanceContainer>
                        <Value>
                          R$ <Bold>{isVisible ? '16.658,00' : '------' } </Bold>
                        </Value>

                        <EyeButton onPress={handleToggleVisibility}>
                            <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>
                    <Info>
                        Seu saldo esta rendendo 100% do cdi
                    </Info>

                    <Actions>
                        <Action>
                        <FontAwesome name="money" size={24} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>

                        <Action>
                        <FontAwesome name="bank" size={20} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>

                    </Actions>
                </HeaderContainer>
            </Header>

            <UseBalance>
                <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

                <Switch 
                    value={useBalance}
                    onValueChange={handleToggleUseBalance}
                />
            </UseBalance>
            
            <PaymentMethods>
                <PaymentMethodsTile>Formas de pagamento</PaymentMethodsTile>

                <Card>
                    <CardBody>
                    <CardDetails>
                        <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                        <CardInfo>
                            Cadastre seu cartão de crétido para proder fazer pagamento quanto nao tiver saldo no seu Picpay.
                        </CardInfo>
                    </CardDetails>

                    <Img source={creditCard} resizeMode="contain" />
                    </CardBody>

                    <AddButton>
                        <AntDesign name="pluscircleo" size={30} color="#0db060" />
                        <AddLabel>Adicionar cartão de credito</AddLabel>
                    </AddButton>
                </Card>

                <UseTicketConteiner>
                <UseTicketButton>
                    <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
                    <UseTicketLabel>Usar código promocional</UseTicketLabel>
                </UseTicketButton>
                </UseTicketConteiner>
            </PaymentMethods> 
        </Wrapper>
    );
}