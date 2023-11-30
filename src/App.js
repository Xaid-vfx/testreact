import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const monthsmap = {
    Jan: 5, Feb: 2, Mar: 5, "Apr": 4, "May": 5, "Jun": 4, "Jul": 5, "Aug": 5, "Sept": 4, "Oct": 5, "Nov": 4, "Dec": 5
  }
  const [months, setmonths] = useState("Jan");

  return (
    <div className="global">
      <div className="wrapper">
        <div className="wrapper2">
          {/* grid1 */}
          <div className="grid1">
            {[1, 2, 3, 4, 5, 6].map(e => {
              return (
                <div className="block1">
                  <p className="para">{e}</p>
                </div>
              )
            })}
          </div>

          {/* grid2 */}
          <div className="grid2">
            {[7, 8, 9, 10, 11, 12, 13, 14, 15, 16, , 50, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map(e => {
              if (e == 50)
                return (
                  <div className="deadblock">
                    <p className="para"></p>
                  </div>
                )
              else
                return (
                  <div className="block1">
                    <p className="para">{e}</p>
                  </div>
                )
            })}
          </div>


          {/* third grid */}
          <div className="grid1">
            {[27, 28, 29, 30, 31, 32].map(e => {
              let days = "";
              for (const [key, value] of Object.entries(monthsmap)) {
                if (months == key) {
                  days = value;
                }
              }
              if (e - 27 < days)
                return (
                  <div className="block3">
                    <p className="para">{e}</p>
                  </div>
                )
              else
                return (
                  <div className="deadblock">
                    <p className="para"></p>
                  </div>
                )


            })}
          </div>
        </div>

      </div>

      {/* months */}
      <div className="months">
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"].map(e => {
          return (
            <button className="block1" onClick={() => {
              setmonths(e)
            }}>
              <p className="para">{e}</p>
            </button>
          )
        })}
      </div>
    </div>
  );
}
export default App