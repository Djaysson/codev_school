import React from 'react';

import { Container } from './styles';

function Pricing() {
  return (
    <Container>
      <img src="" alt="" />
      <titlePage>Pricing</titlePage>
      <paragraphPage>
        You can start with a completely free fundamentais
        course on sublime to create your firdt beautiful program.
    </paragraphPage>
      <CardSection>
        <Card>
          <img src="" alt="" />
          <CardCon>
            <titleCard>Primium Space</titleCard>
            <button>Save $40</button>
          </CardCon>
          <CardContent>
            <CardList>
              Unlimited,on-demand access to 5,000
          </CardList>
            <CardList>
              Branded dashboard & custom URL
          </CardList>
            <CardList>
              Io and Android app for offline viewing
          </CardList>
            <CardList>
              Create and host custom content
          </CardList>
            <CardList>
              Create and share customized learning paths
          </CardList>
            <CardList>
              Create and share customized learning paths
          </CardList>
          </CardContent>
          <CardCon>
            <titleCard>$99/month</titleCard>
            <button>Try 1 Month</button>
          </CardCon>
        </Card>
      </CardSection>
    </Container>
  );
}

export default Pricing;