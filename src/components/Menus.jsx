import React from "react";
const menus = [{
  title:"LOREM IPSUM DOLOR",
  subtitle:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do`,
  img:"./img/menu_1.png"
},
{
  title:"LOREM IPSUM DOLOR",
  subtitle:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do`,
  img:"./img/menu_2.png"
},
{
  title:"LOREM IPSUM DOLOR",
  subtitle:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do`,
  img:"./img/menu_3.png"
}

]
const Menus = () => {
  return (
    <section className="section section-padding" id="menu">
      <div className="section-header text-center">
        <h5 className="section-label label">Always Tasty Burger</h5>
        <h2 className="section-title">Choose &amp; Enjoy</h2>
        <p className="section-subtitle text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis.
        </p>
      </div>

      <div id="menu" className="menu ">
        <div  style={{ padding: " 0px 50px" }}>
          <div className="row">
           {menus.map((item)=>{
           return <>
            <div
              className="menu-item pb-5"
              style={{ width: "473px" }}
            >
              <div className="menu-item-image">
                <img
                  src={item.img}
                  alt=""
                  className="menu-item-burger"
                  style={{height:'300px'}}
                />
              </div>
              <div className="menu-item-desc">
                <h4 className="menu-item-title">{item.title}</h4>
                <p className="menu-item-subtitle">
                 {item.subtitle}
                </p>
                <a href="#" className="page-scroll button" tabIndex="-1">
                  Order Now
                </a>
              </div>
            </div>
           </>
           })}
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menus;
