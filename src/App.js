import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const monthsmap = {
    Jan: 5, Feb: 2, Mar: 5, "Apr": 4, "May": 5, "Jun": 4, "Jul": 5, "Aug": 5, "Sept": 4, "Oct": 5, "Nov": 4, "Dec": 5
  }
  const [months, setmonths] = useState("none");

  return (
    <div className="global">
      <div className="wrapper">
        <div className="wrapper2">
          {/* grid1 */}


          {/* grid2 */}
          <div className="grid2">
            {[15, 16, 17, 18, 19, 20, -1,
              13, 14, 0, 0, 0, 0, 21,
              11, 12, 0, 0, 0, 0, 22,
              9, 10, 0, 0, 0, 0, 23,
              7, 8, 0, 0, 0, 0, 24,
              5, 6, 0, 0, 0, 0, 25,
              3, 4, 0, 0, 0, 0, 26,
              1, 2, 31, 30, 29, 28, 27,
            ].map(e => {
              if (e == 0)
                return (
                  <div className="white">
                    <p className="para"></p>
                  </div>
                )
              else if (e == -1)
                return (
                  <div className="deadblock">
                    <p className="para"></p>
                  </div>
                )
              else if (e > 27)
                return (
                  <div className="darkblock">
                    <p className="para">{e}</p>
                  </div>
                )
              else if (e == 27)
                return (
                  <div className="block27">
                    <p className="para">{e}</p>
                  </div>
                )
              else if (e > 28) {
                if (months == "Feb")
                  <div className="darkblock">
                    <p className="para"></p>
                  </div>
              }
              else
                return (
                  <div className="block1">
                    <p className="para">{e}</p>
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

export default App;
