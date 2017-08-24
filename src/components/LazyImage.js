import React, { Component } from 'react';
import LazyLoad from "react-lazyload";

class LazyImage extends Component{
  constructor(props){
    super(props);

    this.props = props;
  }

  render(){
    return(
      <LazyLoad
          once={true}
          debounce={false}
          offset={[200, 0]}
          height={200}
          placeholder={
              <div className="image-placeholder"></div>
          }
      >
        <div className="image-wrapper" style={{height: '200px'}}>
          <img alt="result" src={`https://farm${this.props.item.farm}.staticflickr.com/${this.props.item.server}/${this.props.item.id}_${this.props.item.secret}_n.jpg`}/>
        </div>
      </LazyLoad>
    )
  }
}

export default LazyImage;