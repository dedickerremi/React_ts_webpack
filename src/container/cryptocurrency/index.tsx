import React, { FC } from 'react';
import { ACTIONS, useCryptoDispatch, useCryptoState } from '../../context/CryptoCurrenciesContext';
import styled from 'styled-components';
import CryptoTable from '../../components/CryptoTable';
import { Button, Container } from '../../style/generic';

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home: FC = () => {
    const {cryptoCurrencies, totalVolumeUsd} = useCryptoState()
    const dispatch = useCryptoDispatch()
    
    const handleClick = () => {
        dispatch({ type: ACTIONS.RESET_FAVORITE });
    }
    const cryptoCurrenciesAsFavorite = cryptoCurrencies && cryptoCurrencies.filter(e => e.isFavorite)

    return (
        <Main>
            <Container>
                <p>Total VolumeUsd during last 24h:  { totalVolumeUsd.toFixed(2) }$</p>
                <br />
                <CryptoTable cryptoCurrencies={cryptoCurrencies} />
            </Container>
            {
                cryptoCurrenciesAsFavorite && cryptoCurrenciesAsFavorite.length > 0 &&
                <Container>
                        <Button onClick={handleClick} css={`float: right; margin: 10px 0`} disabled={cryptoCurrenciesAsFavorite?.length === 0}>Delete them All</Button>
                        <CryptoTable cryptoCurrencies={cryptoCurrenciesAsFavorite} isFavoriteTable={true} />
                </Container>
            }
        </Main>
    )
}

export default Home