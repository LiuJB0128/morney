import {Layout} from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {useRecords} from '../hooks/useRecords';
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
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  return (
    <Layout>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>

      <div>
        {records.map(r => {
          return <Item>
            <div className="tags">
              {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
            </div>
            {r.note && <div className="note">
              {r.note}
            </div>}
            <div className="amount">
              {r.amount}
            </div>

            {/*{day(r.createdAt).format('YYYY年MM月DD日')}*/}
          </Item>;
        })}
      </div>
    </Layout>
  );
}

export {Statistics};