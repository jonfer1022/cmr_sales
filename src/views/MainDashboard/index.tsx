import React from 'react';
import { Container } from './style';
import { Bar, Line } from 'recharts';
import PieChartSample from '../../components/basic/PieChartSample';
import BarChartSample from '../../components/basic/BarChartSample';
import LineChartSample from '../../components/basic/LineChartSample';
import PieChartProgress from '../../components/basic/PieChartProgress';
import BarChartStacked from '../../components/basic/BarChartStacked';
import CardSample from '../../components/basic/CardSample';
import { HeadingTwo, Text } from '../../components/basic/Text';
import { dataBar, dataBarStack, dataLine, dataPie } from './fakeData';
import {
  FcBullish,
  FcCurrencyExchange,
  FcMoneyTransfer,
  FcNews,
} from 'react-icons/fc';

interface IData {
  name: string;
  value: number;
}

const MainDashboard: React.FC = () => {
  return (
    <Container>
      <div className="header">
        <div>
          <HeadingTwo text={'Dashboard'} />
        </div>
        <div>
          <CardSample className="card-header">
            <div>
              <Text text={'Daily Profit'} classname="label" />
            </div>
            <div>
              <HeadingTwo text={'$100'} />
              <FcCurrencyExchange size={80} />
            </div>
          </CardSample>
          <CardSample className="card-header">
            <div>
              <Text text={'Total Transaction'} classname="label" />
            </div>
            <div>
              <HeadingTwo text={'$100'} />
              <FcMoneyTransfer size={80} />
            </div>
          </CardSample>
          <CardSample className="card-header">
            <div>
              <Text text={'Total sales'} classname="label" />
            </div>
            <div>
              <HeadingTwo text={'$100'} />
              <FcBullish size={80} />
            </div>
          </CardSample>
          <CardSample className="card-header">
            <div>
              <Text text={'Reports in the month'} classname="label" />
            </div>
            <div>
              <HeadingTwo text={'$100'} />
              <FcNews size={80} />
            </div>
          </CardSample>
        </div>
      </div>
      <div className="content">
        <div>
          <CardSample className="card-chart">
            <div>
              <Text text={'Store status [%]'} classname="label" />
            </div>
            <PieChartProgress className="percentage-chart" percentage={80} />
          </CardSample>
          <CardSample className="card-chart">
            <div>
              <Text text={'Products most sold'} classname="label" />
            </div>
            <PieChartSample<IData>
              size={300}
              data={dataPie}
              label={(entry) => `Prod1: ${entry.value}`}
              subtractFromOuterRadius={40}
              className="percentage-chart"
            />
          </CardSample>
        </div>
        <div>
          <CardSample className="card-chart">
            <div>
              <Text
                text={'Amount of sales between store and online'}
                classname="label"
              />
            </div>
            <BarChartSample
              data={dataBar}
              height={300}
              width={520}
              barElement={
                <>
                  <Bar dataKey="store" fill="#FF5F5E" />
                  <Bar dataKey="online" fill="#B3CDAD" />
                </>
              }
            />
          </CardSample>
          <CardSample className="card-chart">
            <div>
              <Text
                text={'Track of total sales in the last months'}
                classname="label"
              />
            </div>
            <LineChartSample
              height={300}
              width={520}
              data={dataLine}
              dataKey="month"
              lineElements={
                <>
                  <Line type="monotone" dataKey="amount" stroke="#FF5F5E">
                    {/* <LabelList content={<CustomizedLabel />} /> */}
                  </Line>
                </>
              }
            />
          </CardSample>
          <CardSample className="card-chart">
            <div>
              <Text
                text={'Products delivered and cancelled in the week'}
                classname="label"
              />
            </div>
            <BarChartStacked
              data={dataBarStack}
              dataKeyAbove="canceled"
              dataKeyBelow="delivered"
              dataKeyXaxis="day"
              height={300}
              width={520}
            />
          </CardSample>
          <CardSample className="card-chart">
            <div>
              <Text
                text={'Products delivered and cancelled in the week'}
                classname="label"
              />
            </div>
            <BarChartStacked
              data={dataBarStack}
              dataKeyAbove="canceled"
              dataKeyBelow="delivered"
              dataKeyXaxis="day"
              height={300}
              width={500}
            />
          </CardSample>
        </div>
      </div>
    </Container>
  );
};

export default MainDashboard;
