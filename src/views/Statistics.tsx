import {Layout} from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: #FFFFFF;
  border: 5px solid #f5f5f5;
  border-radius: 10px;
  line-height: 30px;
  font-size: 16px;
  padding: 15px;

  > .note {
    margin-right: auto;
    font-size: 14px;
    margin-left: 16px;
  }
  
  > .time {
    margin-left: auto;
    font-size: 14px;
    margin-right: 16px;
    color: #999;
  }
`;

const Header = styled.h3`
  font-size: 14px;
  line-height: 20px;
  padding: 0 15px;
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [K: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(r => r.category === category);

  selectedRecords.map(r => {
    const key = day(r.createdAt).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  return (
    <Layout>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>

      {array.map(([date, records]) => <div>
        <Header>
          {date}
        </Header>
        <div>
          {records.map(r => {
            return <Item>
              <div className="tags oneLine">
                {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}
              </div>
              {r.note && <div className="note">
                {r.note}
              </div>}
              <div className="time">
                {day(r.createdAt).format('HH:mm:ss')}
              </div>
              <div className="amount">
                {r.amount}
              </div>


            </Item>;
          })}
        </div>
      </div>)}
    </Layout>
  );
}

export {Statistics};