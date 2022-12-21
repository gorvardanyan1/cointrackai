
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import AccountData from './AccountData';
import '../../style/balance.style.scss'
import { balanceData } from '../../fakeData';
import DataTime from '../DataTime'
function App() {

    return (
        <div className="balance">
            <AccountData />
            <ResponsiveContainer className='chart' width="100%" height="100%">
                <BarChart width={150} height={10} data={balanceData} >

                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
            <DataTime />
        </div>
    );
}

export default App;
