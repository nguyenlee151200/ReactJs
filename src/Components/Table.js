import React, { Component } from 'react';
import TableData from './TableData';

class Table extends Component {
  deleteButtonClick =  (idUser) => {
    // console.log(idUser);
    this.props.deleteUser(idUser)
  }
  mappingDataUser = () => 
    this.props.dataUserProps.map((value,key)=> (
      <TableData 
      deleteButtonClick = { (idUser) => this.deleteButtonClick(idUser)}
      changeEditUserStatus = { () => this.props.changeEditUserStatus()}  editFunClick ={ (user) => this.props.editFun(value)} userName={value.name} key = {key} stt = {key} dt ={value.tel} permission = {value.permission}
      id = {value.id}/>
    ))
  
    render() {
      // console.log(this.props.dataUserProps);
        return (
            <div className="col">
            <table className="table table-striped table-hover">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Điện thoại</th>
                  <th>Quyền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
               
                 {this.mappingDataUser()}
              </tbody>
            </table>
          </div>
          
        );
    }
}

export default Table;
