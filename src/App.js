import './App.css';
import {Bar, Pie, Doughnut, Line} from 'react-chartjs-2'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function App() {
  const percentage = 66;
  const piechart =  (<Pie
                    data={{
                      labels:['Jan','Feb','Mar','Apr','May','Jun'],
                      datasets:[{
                          data:[100,200,300,400,500,600],
                          backgroundColor:['red','green','orange','purple','cyan','blue'],
                        },
                      {
                        data:[20,44,300,33,500,600],
                        backgroundColor:['red','green','orange','purple','cyan','blue'],
                      },
                      {
                        data:[22,200,444,400,500,30],
                        backgroundColor:['red','green','orange','purple','cyan','blue'],
                      }]
                    }
                    }/>)


  const bar= (<Bar
    data={{
      labels:['Jan','Feb','Mar','Apr','May','Jun'],
      datasets:[{
        label:'Store 1',
        data:[100,200,300,400,500,600],
        backgroundColor:'red',
        barThickness:12
      },
      {
        label:'Store 2',
        data:[321,212,344,332,223,566],
        backgroundColor:'green',
        barThickness:12
      }
      ]
    }}
    options={{
      tooltips:{
        mode:'index',
        callbacks:{
          label:function(toolTipItem){
            return ("Revenue: $"+toolTipItem.value)
          }
        }

      },
      scales:{
        xAxes:[
          {
            gridLines:{
            color:'cyan'
          },
            scaleLabel:{
              labelString:'Months',
              display:true,
              fontColor:'blue',
              fontSize:20
            },
            ticks:{
              fontColor:'green'
            }
          }
        ],
        yAxes:[
        {
          gridLines:{
            color:'cyan'
          },
          scaleLabel:{
              labelString:'Revenue',
              display:true,
              fontColor:'blue',
              fontSize:20,
            },
          ticks:{
            beginAtZero:true,
            fontColor:'green',
            
          }
        }
        ]
      }
    }}
    >

    </Bar>)

  const line = (<Line data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                  datasets: [
                  {
                      label: "First dataset",
                      data: [33, 53, 85, 41, 44, 65],
                      fill: false,
                      borderColor: "rgba(75,192,192,1)"
                  },
                  
                  {
                      label: "Second dataset",
                      data: [33, 25, 35, 51, 54, 76],
                      fill: false,
                      borderColor: "#742774"
                  }
                  ]
                }}
                />
            )


const line2 = (<Line data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [
              {
                  label: "First dataset",
                  data: [33, 53, 85, 41, 44, 65, 69],
                  fill: true,
                  borderColor: "rgba(75,192,192,1)",
                  backgroundColor:"rgba(75,192,192,0.3)"
              },
              
              {
                  label: "Second dataset",
                  data: [33, 25, 35, 51, 54, 76, 80],
                  fill: true,
                  borderColor: "#742774",
                  backgroundColor:"#742774"
              }
              ]
            }}
            />
        )

const pie=(
  <Pie
      data={{
        labels:['Jan','Feb','Mar','Apr','May','Jun'],
        datasets:[{
          data:[100,200,300,400,500,600],
          backgroundColor:['red','green','orange','purple','cyan','blue'],
        },
        {
          data:[20,44,300,33,500,600],
          backgroundColor:['red','green','orange','purple','cyan','blue'],
        },
        {
          data:[22,200,444,400,500,30],
          backgroundColor:['red','green','orange','purple','cyan','blue'],
        }]
      }
      }
      ></Pie>
)

const donut=(
  <Doughnut data={{
    datasets: [
      {
        data: [120, 245],
        backgroundColor: ["goldenrod", "#ccc"],
        hoverBackgroundColor: ["gold", "#059"],
        labels: ["Time elapsed", "Time remaining"],
        labelSuffix: " days"
      },
    ]
  }} height={400} width={400} />    
)

  return (
    <div className="App">
      <div className="app_body">
        <div className="section1">
            <div className="subsection1">
              <div className="subsubsection">
                <div className="subsubsubsection">
                  <div className="bar">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                    <div className="data">
                      <h1 style={{color:"white"}}>Bar</h1>
                      <p style={{color:"white"}}>Your Attendance</p>
                    </div>
                  </div>
                  <div className="bar">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                    <div className="data">
                      <h1 style={{color:"white"}}>Bar</h1>
                      <p style={{color:"white"}}>Your marks</p>
                    </div>
                  </div>
                </div>
                <div className="subsubsubsection">
                <div className="bar">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                    <div className="data">
                      <h1 style={{color:"white"}}>Bar</h1>
                      <p style={{color:"white"}}>Your Internal</p>
                    </div>
                  </div>
                  <div className="bar">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                    <div className="data">
                      <h1 style={{color:"white"}}>Bar</h1>
                      <p style={{color:"white"}}>Your mid sem</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="subsection2">
            <div className="subsubsection2">
                  ${bar}            
              </div>
            </div>
            <div className="subsection3">
              <div className="subsubsection3">
                  ${pie}
              </div>
            </div>
            
        </div>
        
        <div className="section2">
            <div className="subsection1">
              ${line2}
            </div>
            <div className="subsection2">
              ${line}
            </div>
            <div className="subsection3">
            <div className="subsubsection3">
                  ${donut}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
