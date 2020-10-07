import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '@narative/gatsby-theme-novela/src/components/Layout';
import Section from '@narative/gatsby-theme-novela/src/components/Section';
import SEO from '@narative/gatsby-theme-novela/src/components/SEO';
import Headings from '@narative/gatsby-theme-novela/src/components/Headings';
import * as Navigation from '@narative/gatsby-theme-novela/src/components/Navigation';

//import Header from './header';

export default ({ data }) => {
  return (
    <Layout>
      {/* <Header /> */}
      <SEO />
      <Section>
        <div style={{ marginTop: '100px' }}>
          {/* <Navigation>Narative Header</Navigation> */}

          <Headings.h1>Hello Gatsby!</Headings.h1>
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      </Section>
    </Layout>
  );
};

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "desk.jpg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `;
export const query = graphql`
  query {
    file(relativePath: { eq: "desk.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
