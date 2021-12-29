import React, { Component } from 'react';

class TableData extends Component {
  permissionShow = () => {
    if(this.props.permission == 1 ){
      return "admin";
    }
    if(this.props.permission == 2){
      return "Người quản lý";
    }
    else{
      return "User";
    }
  }
  editClick =  () => {
    this.props.editFunClick();
    this.props.changeEditUserStatus();
  }
  deleteButtonClick =  (idUser) => {
    this.props.deleteButtonClick(idUser);
    // console.log('id của phần ử ' + idUser);
  }
    render() {
        return (
            <tr>
            <td >{this.props.stt+1}</td>
            <td>{this.props.userName}</td>
            <td>{this.props.dt}</td>
            <td>{this.permissionShow()}</td>
            <td>
              <div className="btn-group">
                <div  onClick = { (idUser) => this.editClick(idUser)} className="btn btn-warning sua"><i className="fas fa-edit    "> </i>Sửa</div>
                <div className="btn btn-danger xoa" onClick ={()=> {this.deleteButtonClick(this.props.id)}}><i className="fas fa-cut    " />Xóa</div>
              </div>
            </td>
          </tr>
        );
    }
}

export default TableData;