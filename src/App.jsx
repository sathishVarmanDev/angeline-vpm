import { Button, Layout, Table } from 'antd'
import { Header } from 'antd/es/layout/layout'

export default function App() {
  const columns = [
    { title: 'Column 1', dataIndex: 'col1' },
    { title: 'Column 2', dataIndex: 'col2' },
    { title: 'Column 3', dataIndex: 'col3' },
    { title: 'Column 4', dataIndex: 'col4' },
    { title: 'Column 5', dataIndex: 'col5' },
    { title: 'Column 6', dataIndex: 'col6' },
    { title: 'Column 7', dataIndex: 'col7' },
    { title: 'Column 8', dataIndex: 'col8' },
  ];

  const data = [
    { key: '1', col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7', col8: 'Data 8' },
    { key: '2', col1: 'Data 9', col2: 'Data 10', col3: 'Data 11', col4: 'Data 12', col5: 'Data 13', col6: 'Data 14', col7: 'Data 15', col8: 'Data 16' },
    { key: '3', col1: 'Data 9', col2: 'Data 10', col3: 'Data 11', col4: 'Data 12', col5: 'Data 13', col6: 'Data 14', col7: 'Data 15', col8: 'Data 16' },
    { key: '4', col1: 'Data 9', col2: 'Data 10', col3: 'Data 11', col4: 'Data 12', col5: 'Data 13', col6: 'Data 14', col7: 'Data 15', col8: 'Data 16' },
    { key: '5', col1: 'Data 9', col2: 'Data 10', col3: 'Data 11', col4: 'Data 12', col5: 'Data 13', col6: 'Data 14', col7: 'Data 15', col8: 'Data 16' }
  ];

  return (
    <div>
      <Layout className="layout">
        {/* Navbar */}
        <Header className="navbar">
          <h1 className='navbar__header'>Vehicle Management</h1>
        </Header>

        {/* Button */}
        <div className='button-container'>
          <Button type="primary" className='button-container__add-vehicle'>+ New Vehicle</Button>
        </div>
        
        {/* Table */}
        <div className='table'>
          <Table columns={columns} dataSource={data} pagination={false} rowClassName={(record, index) => index === 0 ? 'first-row' : 'other-rows'} />
        </div>
    </Layout>
    </div >
  )
}
