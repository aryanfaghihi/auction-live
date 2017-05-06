import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ModalBox from'./modald';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: 'images/airplane.png',
    title: 'F-18',
    author: 'jill111',
  },
  {
    img: 'images/baboon.png',
    title: 'Baboon',
    author: 'pashminu',
  },
  {
    img: 'images/cat.png',
    title: 'Mon chat',
    author: 'Danson67',
  },
  {
    img: 'images/pool.png',
    title: 'Pool Stuff',
    author: 'fancycrave1',
  },
  {
    img: 'images/fruits.png',
    title: 'Fruits',
    author: 'Hans',
  },
  {
    img: 'images/peppers.png',
    title: 'Peppers',
    author: 'fancycravel',
  },
  {
    img: 'images/tulips.png',
    title: 'Flowers',
    author: 'jill111',
  },
];

const imgStyle = {
  textAlign: 'centre'
}
/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const Example = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={8.10}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(192, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 70%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 10%)"
        >
          <div>          
          <ModalBox />
          <img src={tile.img} style={imgStyle} alt="None"/>
          </div>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Example;