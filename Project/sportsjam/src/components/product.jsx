//import products from "../products";
import React from "react";
import styles from "./product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { description_data, sorted_data } from "../redux/action";
import { useNavigate } from "react-router-dom";

const Product = ()=>{
  const store = useSelector((state) => state);
  const data = store.products;
   const [state,setState] = useState(false)
   const navigate = useNavigate()
   const dispatch = useDispatch();
   const sortedData = store.sortedData
   
   const handleclick =(payload)=>{
     dispatch(description_data(payload))
     localStorage.setItem("productdetails", JSON.stringify(payload))
     navigate("/description");
   }
      const handleSort = (e) => {
        if(e.target.value==="asc"){
         const Sdata =   data.sort((a,b)=>{
            return Number(a.mrp)-Number(b.mrp)
          })
          
          dispatch(sorted_data(Sdata))
          setState(true)
      
          
        }else if(e.target.value==="desc"){
          const Sdata =   data.sort((a,b)=>{
            return Number(b.mrp)-Number(a.mrp)
          })
          dispatch(sorted_data(Sdata))
          setState(true)
        }
      }
      
    return (
        <div style={{display:"flex",gap:"100px",justifyContent:"space-between"}}>
            <div className={styles.menu}>
                 <div className={styles.P}>CATEGORY MENU</div>
                 <div className={styles.catagary}>
                
                      <h3>BADMINTON</h3>
                      <p>Rackets</p>
                      <p>Shoes</p>
                      <p>Shuttlecock</p>
                      <p>Grips</p>
                      <p>Strings</p>
                      <p>Kit Bags</p>
                      <p>Clothing</p>
                      <p>Accessories</p>
                      <p>Basketballs</p>
                      <p>Shoes</p>
                      <p>Equipments</p>

                 </div>
                 <div className={styles.P}>REFINE SEARCH</div>
                 <Navigation 
                    activeItemId="/management/members"
                    onSelect={({itemId}) => {
                    }}
                  items={[
                  {
                  itemId: '/dashboard',
            
                   },
                   {
                  title: <h4 >BRAND</h4>,
                   itemId: '/1',
              // elemBefore: () => <Icon name="users" />,
                   subNav: [
            
                  {
                    title: <>
                      <input type="checkbox"/>
                      <lable>ADIDAS</lable>
                     </>,
                    itemId: '/11',
                  },
                  {
                  title:<>
                     <input type="checkbox"/>
                     <lable>ASICS</lable>
                   </>,
                 itemId: '/12',
                 },
                 {
                 title:<>
                    <input type="checkbox"/>
                    <lable>Babolat</lable>
                   </>,
                 itemId: '/13',
                 },
                 {
                title:<>
                   <input type="checkbox"/>
                   <lable>Carlton</lable>
                 </>,
                  itemId: '/14',
                 },
                 {
                title: <>
                   <input type="checkbox"/>
                   <lable>Carlton</lable>
                  </>,
                itemId: '/15',
                },
                {
                title:<>
                    <input type="checkbox"/>
                    <lable>DSC</lable>
                 </> ,
                itemId: '/16',
                 },
                 {
                 title: <>
                    <input type="checkbox"/>
                    <lable>Head</lable>
                   </>,
                   itemId: '/17',
                 },
                 {
                    title: <>
                       <input type="checkbox"/>
                       <lable>Karakal</lable>
                      </>,
                      itemId: '/18',
                 },
                 {
                    title: <>
                       <input type="checkbox"/>
                       <lable>Li-ning</lable>
                      </>,
                      itemId: '/19',
                    },
                    {
                        title: <>
                           <input type="checkbox"/>
                           <lable>RSL</lable>
                          </>,
                          itemId: '/110',
                    },
                    {
                        title: <>
                           <input type="checkbox"/>
                           <lable>Victor</lable>
                          </>,
                          itemId: '/111',
                    },

                 ],
               },
               {
                  title: <h4>CATEGORY</h4>,
                  itemId: '/2',
                  subNav: [
                 {
                   title: <>
                   <input type="checkbox"/>
                   <lable>Badmintion Accessories</lable>
                 </>,
                   itemId: '/21',
                 },
                 {
                   title: <>
                   <input type="checkbox"/>
                   <lable>Badmintion Grips</lable>
                 </>,
                  itemId: '/22',
                 },
                  {
                   title: <>
                   <input type="checkbox"/>
                   <lable>Badmintion Rackets</lable>
                    </>,
                    itemId: '/23',
                  },
                  {
                    title: <>
                     <input type="checkbox"/>
                     <lable>Badmintion Shoes</lable>
                    </>,
                    itemId: '/24',
                  },
                  {
                    title: <>
                     <input type="checkbox"/>
                     <lable>Badmintion Accessories</lable>
                   </>,
                    itemId: '/25',
                  },
                  {
                   title:<>
                     <input type="checkbox"/>
                     <lable>Badmintion Shuttlecock</lable>
                   </>,
                   itemId: '/26',
                  },
                  {
                   title: <>
                   <input type="checkbox"/>
                   <lable>Badmintion Strings</lable>
                   </>,
                  itemId: '/27',
                  },
              
                ],
              },


                  {
                  title: <h4>PRICE</h4>,
           
                },
             ]}
             />

            </div>
            <div style={{width: '90%', margin:"auto"}}>
            <div onClick ={handleSort} style={{display:"flex",justifyContent:"space-between",alignItems: "center",width:"100%"}}>
                <h3>Found  {data.length}  product(s)</h3>
                <select  style={{width:"150px",height:"40px",margin:"30px"}}>
                    <option value ="">SORT BY</option>
                    <option value="asc">Price low to high</option>
                    <option value="desc">Price high to low</option>
                    <option value="">Discount</option>
                    <option value="">Popularty</option>
                    <option value="">Relevance</option>
                </select>
            </div>
            <div className={styles.grid}>
            { state ? (
              sortedData.map(elem => {
               return (
                 <>
                   <div
                     onClick={() => {
                       handleclick(elem);
                     }}
                     className={styles.viewsshow}
                     style={{ textAlign: "center" }}
                   >
                     <img style={{ width: "100%" }} src={elem.img} alt="" />
                     <h3>{elem.title}</h3>
                     <div
                       style={{
                         display: "flex",
                         flexDirection: "row",
                         gap: "10px",
                         justifyContent: "center",
                       }}
                     >
                       <s>{elem.price}</s>
                       <h3>RS.{elem.mrp}</h3>
                       <p>{elem.discount}</p>
                     </div>
                   </div>
                 </>
               );
               })
             ):    
             data.map(elem => {

                return (
                  <>
                    <div
                      onClick={() => {
                        handleclick(elem);
                      }}
                      className={styles.viewsshow}
                      style={{textAlign: 'center'}}
                    >
                      <img style={{ width: "100%" }} src={elem.img} alt="" />
                      <h3>{elem.title}</h3>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                          justifyContent: "center",
                        }}
                      >
                        <s>Price:{elem.price}</s>
                        <h3>MRP:{elem.mrp}</h3>
                        <p>{elem.discount}</p>
                      </div>
                    </div>
                  </>
                );
              })
            }
         </div>
        </div>
            
      </div>
        
    )
}
export default Product