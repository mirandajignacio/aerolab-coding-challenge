import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import Page from '../components/Page';
import withReduxStore from '../lib/with-redux-store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
