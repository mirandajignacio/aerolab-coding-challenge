import { Fragment, Component } from 'react';
import Menu from '../components/Menu';
import Products from '../components/Products';
import Header from '../components/Header';
import sort from '../lib/sort';
import api from '../services/api';

class Index extends Component {
  state = {
    sort: 'most',
    products: [
      {
        _id: '5a0b35c1734d1d08bf7084c3',
        name: 'iPhone 8',
        cost: 800,
        category: 'Phones',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/iPhone8-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/iPhone8-x2.png',
        },
      },
      {
        _id: '5a0b35d7734d1d08bf7084c9',
        name: 'Nintendo Switch 32GB',
        cost: 300,
        category: 'Gaming',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/Switch-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/Switch-x2.png',
        },
      },
      {
        _id: '5a0b35df734d1d08bf7084cb',
        name: 'Macbook Pro',
        cost: 1300,
        category: 'Laptops',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/MacbookPro-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/MacbookPro-x2.png',
        },
      },
      {
        _id: '5a0b36ac734d1d08bf70856c',
        name: 'Acer Aspire E1-522',
        cost: 600,
        category: 'Laptops',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/AcerAspire-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/AcerAspire-x2.png',
        },
      },
      {
        _id: '5a0b36b3734d1d08bf70856f',
        name: 'Alienware 13',
        cost: 1500,
        category: 'Laptops',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/Alienware13-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/Alienware13-x2.png',
        },
      },
      {
        _id: '5a0b36bb734d1d08bf70857e',
        name: 'Samsung Tab S2',
        cost: 230,
        category: 'Tablets & E-readers',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/SamsungTabS2-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/SamsungTabS2-x2.png',
        },
      },
      {
        _id: '5a0b36c3734d1d08bf70857f',
        name: 'Kobo Aura',
        cost: 150,
        category: 'Tablets & E-readers',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/KoboAura-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/KoboAura-x2.png',
        },
      },
      {
        _id: '5a0b35e8734d1d08bf7084cf',
        name: 'Instax Mini 8',
        cost: 80,
        category: 'Cameras',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/InstaxMini-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/InstaxMini-x2.png',
        },
      },
      {
        _id: '5a0b35f0734d1d08bf7084df',
        name: 'Marshall Major ll',
        cost: 300,
        category: 'Audio',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/MarshallMajorll-x1.png',
          hdUrl:
            'https://aerolab-challenge.now.sh/images/MarshallMajorll-x2.png',
        },
      },
      {
        _id: '5a0b35f8734d1d08bf7084e3',
        name: 'Razer Blade Pro',
        cost: 2500,
        category: 'Laptops',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/RazerBladePro-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/RazerBladePro-x2.png',
        },
      },
      {
        _id: '5a0b3600734d1d08bf7084e5',
        name: 'Canon EOS 5D',
        cost: 2200,
        category: 'Cameras',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/CanonEOS5D-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/CanonEOS5D-x2.png',
        },
      },
      {
        _id: '5a0b3609734d1d08bf7084e6',
        name: 'Dell UP3218k',
        cost: 900,
        category: 'Monitors & TV',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/Dell-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/Dell-x2.png',
        },
      },
      {
        _id: '5a0b3611734d1d08bf7084eb',
        name: 'Phantom 2',
        cost: 500,
        category: 'Drones',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/Phantom2-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/Phantom2-x2.png',
        },
      },
      {
        _id: '5a0b3618734d1d08bf7084ec',
        name: 'Android Wear',
        cost: 210,
        category: 'Phone Accessories',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/AndroidWear-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/AndroidWear-x2.png',
        },
      },
      {
        _id: '5a0b3620734d1d08bf7084f0',
        name: 'Amazon Echo Dot',
        cost: 50,
        category: 'Smart Home',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/AmazonEchoDot-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/AmazonEchoDot-x2.png',
        },
      },
      {
        _id: '5a0b3628734d1d08bf7084f3',
        name: 'Sony PS4',
        cost: 200,
        category: 'Gaming',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/SonyPS4-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/SonyPS4-x2.png',
        },
      },
      {
        _id: '5a0b362f734d1d08bf7084fa',
        name: 'Sony SRS-X11',
        cost: 330,
        category: 'Audio',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/SonySRSX11-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/SonySRSX11-x2.png',
        },
      },
      {
        _id: '5a0b3637734d1d08bf7084fb',
        name: 'Samsung S8',
        cost: 510,
        category: 'Phones',
        img: {
          url: 'https://aerolab-challenge.now.sh/images/SamsungS8-x1.png',
          hdUrl: 'https://aerolab-challenge.now.sh/images/SamsungS8-x2.png',
        },
      },
    ],
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //   async function fetchData() {
    //     const result = await api.products();
    //     console.log(JSON.stringify(result));
    //     setProducts(result);
    //   }
    //   fetchData();
    // }, []);
  };

  async componentWillMount() {
    // const { setUser: setUserDispatch } = this.props;
    const result = await api.products();
    console.log(result);
    // setUserDispatch({ user: result });
  }

  handleSort = type => {
    console.log(type);
    const { products } = this.state;
    this.setState({ products: sort(products, type) });
    this.setState({ sort: type });
  };

  render() {
    const { products, sort: sortType } = this.state;
    return (
      <Fragment>
        <Header />
        <Menu handleSort={this.handleSort} sort={sortType} />
        {products.length > 0 && <Products products={products.slice(0, 16)} />}
        <Menu bottom />
      </Fragment>
    );
  }
}

export default Index;
