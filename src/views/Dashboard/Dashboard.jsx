import React from "react";
import './Dashboard.css';

function Dashboard() {
    return (
      <div>
          <div className="Welcome_section">
              <h2>
                    Hola Israel
              </h2>


              <h1>
                  Preguntas UNAM

              </h1>


          </div> 




          <div className="Status_section">

              <div>
                  <h4>
                      Total de preguntas agregadas por materia:
                  </h4>

                  <div className="Subject_list">

                  <ul>
                        <li>Español:</li>
                        <li>Matemáticas:</li>
                        <li>Geografía:</li>
                        <li>Física:</li>
                        <li>Química:</li>
                        <li>Literatura:</li>

                    </ul>

                    <ul>
                        <li>Historia Mx:</li>
                        <li> Historia U:</li>
                        <li>Biología:</li>
                        

                    </ul>


                  </div>

                



              </div>

              <div>
                <h3>
                      Preguntas en Banco:
                  </h3>


              </div>


 





          </div>





          <div className="Materias_container1">

                <div > 
                        <div className="Todas">

                         </div>

                         <p>
                             Todas
                         </p>

                            

                </div>


                 <div>
                      <div>

                         </div>

                         <p>
                             Español
                         </p>



    
                </div>


                <div>
                      <div>

                         </div>

                         <p>
                             Mate
                         </p>



    
                </div>


                <div>
                      <div>

                         </div>

                         <p>
                             Física
                         </p>



    
                </div>

                <div>
                      <div>

                         </div>

                         <p>
                             Química
                         </p>



    
                </div>




            </div>  

            <div className="Materias_container1">

                <div > 
                        <div>

                         </div>

                         <p>
                             Literatura
                         </p>

                            

                </div>


                 <div>
                      <div>

                         </div>

                         <p>
                            Geografía
                         </p>



    
                </div>


                <div>
                      <div>

                         </div>

                         <p>
                             Biología
                         </p>



    
                </div>


                <div>
                      <div>

                         </div>

                         <p>
                             Historia U.
                         </p>



    
                </div>

                <div>
                      <div>

                         </div>

                         <p>
                             Historia MX
                         </p>



    
                </div>




            </div>  


     







      
    
     
      
      
     



      </div>
    );
  }
  
  export default Dashboard;
  