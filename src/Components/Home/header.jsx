import React, { Component } from 'react';
import style from "./header.module.css"


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="bx--grid" style={{padding:"0px"}}>
<div class="bx--row">
  <div class="bx--col-lg-12 bx--col-md-12" className={style['home__header']}> <div> IBM</div>
    <div>USERNAME </div></div>
</div>
<div class="bx--row">
  <div class="bx--col-lg-12 bx--col-md-12" className={style['home__subheader']}> HEADER HERE </div>
</div>
</div>
         );
    }
}
 
export default Header;