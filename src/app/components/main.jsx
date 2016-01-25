/** In this file, we create a React component which incorporates components provided by material-ui */

import React from 'react';
import {Header, GoTop, AvgGrid, Grid, Col, Image} from 'amazeui-react';

const Main = React.createClass({

  render() {
    const favList = window.gFavList;
    console.log(favList);

    const cardStyle = {
        margin: 50,
        width: 200,
    };

    const myFavList = favList.map((item, key) => (
    <li key={key} style={ {cardStyle} }>
      <h2 className="am-text-truncate">{item.title}</h2>
      <a href={item.href}>
        <Image className="am-img-responsive"src={item.thumb} responsive amStyle="max-width:100%;" />
      </a>
      <p>{item.brief}</p>
     </li>
      )
    );

    //link: (this.props.baseUrl || "http://blog.xiaoheqingting.com/tools/fav" ) + "/admin.html",
    const navData = {
      title: 'For A Better World',
      data : {
        right: [
          {
          link: "./admin.html",
          icon: 'plus',
          },
        ],
      },
    };

    return (
    <div>
      <Header {...navData} />
      <GoTop theme="fixed" autoHide icon="arrow-up" />
      <Grid className="doc-g">
      <Col sm={12} md={10} lg={9} smCentered mdCentered lgCentered>
        <AvgGrid sm={1} md={3} lg={4}  className="am-thumbnails">
            {myFavList}
        </AvgGrid>
      </Col>
      </Grid>
    </div>
    );
  },
});

export default Main;
